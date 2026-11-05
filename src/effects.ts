// Pooled visual effects: tracers, sparks, explosions, debris, EMP ring.
//
// Every pool object is built in the constructor and sits in the scene hidden,
// so the boot warm-up (main.ts warmHostiles: compile + render with everything
// visible) pre-compiles every program and uploads every geometry/texture here.
// Firing and kills only flip slots visible and move them — no allocations, no
// material dispose churn, no mid-fight shader compiles or texture uploads.
import * as THREE from 'three';

const TRACER_POOL = 64;
const SPRITE_POOL = 320; // sparks, fireballs, shield ripples (fog off)
const SMOKE_POOL = 48; // airdrop plumes use a fog-lit variant → separate program key
const DEBRIS_POOL = 96;

interface TracerSlot {
  mesh: THREE.Mesh;
  mat: THREE.MeshBasicMaterial;
  life: number;
  max: number;
}
interface SpriteSlot {
  sprite: THREE.Sprite;
  mat: THREE.SpriteMaterial;
  vel: THREE.Vector3;
  life: number;
  max: number;
  grav: number;
  size0: number;
}
interface DebrisSlot {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  spin: THREE.Vector3;
  life: number;
}

function circleTexture(hex: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, hex);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const tracerGeo = new THREE.CylinderGeometry(0.018, 0.006, 1, 5);
tracerGeo.translate(0, 0.5, 0);
tracerGeo.rotateX(Math.PI / 2);

const debrisGeo = new THREE.BoxGeometry(1, 1, 1); // unit cube; size via mesh.scale
const debrisMat = new THREE.MeshStandardMaterial({
  color: 0x2b313c,
  emissive: new THREE.Color('#ff7a30'),
  emissiveIntensity: 0.8,
  roughness: 0.6,
});

export class Effects {
  private tracers: TracerSlot[] = [];
  private tracerActive: number[] = [];
  private tracerFree: number[] = [];
  private sprites: SpriteSlot[] = [];
  private spriteActive: number[] = [];
  private spriteFree: number[] = [];
  private smokes: SpriteSlot[] = [];
  private smokeActive: number[] = [];
  private smokeFree: number[] = [];
  private debris: DebrisSlot[] = [];
  private debrisActive: number[] = [];
  private debrisFree: number[] = [];
  // fixed light pool — adding/removing lights from the scene would trigger
  // shader recompiles; we keep a constant count and just animate intensity.
  private poolSize = 10;
  private pool: { light: THREE.PointLight; life: number; life0: number; peak: number }[] = [];
  private empRing: THREE.Mesh;
  private empTime = -1;
  private sparkTex = circleTexture('rgba(255,200,120,0.9)');
  private cyanTex = circleTexture('rgba(80,220,255,0.9)');
  private fireTex = circleTexture('rgba(255,120,40,0.9)');

  constructor(private scene: THREE.Scene) {
    for (let i = 0; i < this.poolSize; i++) {
      const light = new THREE.PointLight(0xffffff, 0, 1, 1.6);
      light.visible = true;
      scene.add(light);
      this.pool.push({ light, life: 0, life0: 1, peak: 0 });
    }
    this.empRing = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.25, 8, 40),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('#67e8f9'), transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }),
    );
    this.empRing.rotation.x = Math.PI / 2;
    this.empRing.visible = false;
    scene.add(this.empRing);

    // --- pools (hidden until used; boot warm-up paints them once) ---
    for (let i = 0; i < TRACER_POOL; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const mesh = new THREE.Mesh(tracerGeo, mat);
      mesh.visible = false;
      scene.add(mesh);
      this.tracers.push({ mesh, mat, life: 0, max: 1 });
      this.tracerFree.push(i);
    }
    // seed the first slots with every circle texture so the boot warm-up
    // paints (uploads) all three, not just the one they happen to start on
    const seed = [this.fireTex, this.sparkTex, this.cyanTex];
    for (let i = 0; i < SPRITE_POOL; i++) {
      const mat = new THREE.SpriteMaterial({ map: seed[i % seed.length], color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      scene.add(sprite);
      this.sprites.push({ sprite, mat, vel: new THREE.Vector3(), life: 0, max: 1, grav: 0, size0: 1 });
      this.spriteFree.push(i);
    }
    for (let i = 0; i < SMOKE_POOL; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.fireTex, color: new THREE.Color('#ff9a3c'), transparent: true, opacity: 0, depthWrite: false, fog: true });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      scene.add(sprite);
      this.smokes.push({ sprite, mat, vel: new THREE.Vector3(), life: 0, max: 1, grav: 0, size0: 1 });
      this.smokeFree.push(i);
    }
    for (let i = 0; i < DEBRIS_POOL; i++) {
      const mesh = new THREE.Mesh(debrisGeo, debrisMat);
      mesh.visible = false;
      scene.add(mesh);
      this.debris.push({ mesh, vel: new THREE.Vector3(), spin: new THREE.Vector3(), life: 0 });
      this.debrisFree.push(i);
    }
  }

  /** Grab a free slot; if the pool is saturated, recycle the oldest active one.
   *  Returns the index and leaves it registered in `active`. */
  private static take(active: number[], free: number[]): number {
    let i = free.pop();
    if (i === undefined) {
      i = active.shift()!; // steal oldest — visual saturation guard, never allocates
    }
    active.push(i);
    return i;
  }

  private static retire(active: number[], free: number[], i: number): void {
    free.push(i);
    const k = active.indexOf(i);
    if (k >= 0) active.splice(k, 1);
  }

  tracer(from: THREE.Vector3, to: THREE.Vector3, color: string, life = 0.07): void {
    const i = Effects.take(this.tracerActive, this.tracerFree);
    const t = this.tracers[i];
    t.mat.color.set(color);
    t.mat.opacity = 0.95;
    const len = from.distanceTo(to);
    t.mesh.scale.set(1, 1, Math.max(0.1, len));
    t.mesh.position.copy(from);
    t.mesh.lookAt(to);
    t.mesh.visible = true;
    t.life = life;
    t.max = life;
  }

  sparks(pos: THREE.Vector3, color: 'amber' | 'cyan' | 'red', count = 8): void {
    const tex = color === 'cyan' ? this.cyanTex : color === 'red' ? this.fireTex : this.sparkTex;
    const base = color === 'cyan' ? new THREE.Color('#22d3ee') : color === 'red' ? new THREE.Color('#ff5a3c') : new THREE.Color('#ffb45e');
    for (let n = 0; n < count; n++) {
      const i = Effects.take(this.spriteActive, this.spriteFree);
      const p = this.sprites[i];
      p.mat.map = tex;
      p.mat.color.copy(base);
      p.mat.opacity = 1;
      const size = 0.08 + Math.random() * 0.12;
      p.sprite.scale.set(size, size, 1);
      p.sprite.position.copy(pos);
      p.sprite.visible = true;
      p.vel.set((Math.random() - 0.5) * 5, (Math.random() - 0.3) * 5, (Math.random() - 0.5) * 5);
      p.life = 0.3 + Math.random() * 0.4;
      p.max = 0.7;
      p.grav = 6;
      p.size0 = size;
    }
  }

  explosion(pos: THREE.Vector3, scale = 1): void {
    // fireball sprites
    for (let n = 0; n < 10; n++) {
      const i = Effects.take(this.spriteActive, this.spriteFree);
      const p = this.sprites[i];
      p.mat.map = this.fireTex;
      p.mat.color.set(n < 5 ? '#ffd27f' : '#ff5a2c');
      p.mat.opacity = 1;
      const size = (0.6 + Math.random() * 1.2) * scale;
      p.sprite.scale.set(size, size, 1);
      p.sprite.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * scale, (Math.random() - 0.5) * scale, (Math.random() - 0.5) * scale));
      p.sprite.visible = true;
      p.vel.set((Math.random() - 0.5) * 6 * scale, Math.random() * 4 * scale, (Math.random() - 0.5) * 6 * scale);
      p.life = 0.4 + Math.random() * 0.5;
      p.max = 0.9;
      p.grav = 1;
      p.size0 = size;
    }
    this.flash(pos, '#ffa040', 160 * scale, 26 * scale, 0.35);
    // debris cubes (shared unit geometry + material; size via scale)
    for (let n = 0; n < 6; n++) {
      const i = Effects.take(this.debrisActive, this.debrisFree);
      const d = this.debris[i];
      const s = 0.08 + Math.random() * 0.16;
      d.mesh.scale.set(s, s, s);
      d.mesh.position.copy(pos);
      d.mesh.rotation.set(0, 0, 0);
      d.mesh.visible = true;
      d.vel.set((Math.random() - 0.5) * 9, 2 + Math.random() * 6, (Math.random() - 0.5) * 9);
      d.spin.set(Math.random() * 10, Math.random() * 10, Math.random() * 10);
      d.life = 1.6;
    }
  }

  shieldRipple(pos: THREE.Vector3): void {
    const i = Effects.take(this.spriteActive, this.spriteFree);
    const p = this.sprites[i];
    p.mat.map = this.cyanTex;
    p.mat.color.set('#38e2ff');
    p.mat.opacity = 1;
    p.sprite.scale.set(0.9, 0.9, 1);
    p.sprite.position.copy(pos);
    p.sprite.visible = true;
    p.vel.set(0, 0, 0);
    p.life = 0.25;
    p.max = 0.25;
    p.grav = 0;
    p.size0 = 0.9;
  }

  triggerEmp(center: THREE.Vector3): void {
    this.empRing.position.copy(center).setY(1.2);
    this.empRing.visible = true;
    this.empTime = 0;
    this.flash(center.clone().setY(6), '#67e8f9', 900, 90, 1.2);
  }

  flash(pos: THREE.Vector3, color: string, peak: number, dist: number, life: number): void {
    let slot = this.pool.find((p) => p.life <= 0);
    if (!slot) slot = this.pool.reduce((a, b) => (a.life < b.life ? a : b));
    slot.light.color.set(color);
    slot.light.distance = dist;
    slot.light.position.copy(pos);
    slot.light.intensity = peak;
    slot.peak = peak;
    slot.life = life;
    slot.life0 = life;
  }

  update(dt: number): void {
    for (let k = this.tracerActive.length - 1; k >= 0; k--) {
      const i = this.tracerActive[k];
      const t = this.tracers[i];
      t.life -= dt;
      t.mat.opacity = Math.max(0, t.life / t.max);
      if (t.life <= 0) {
        t.mesh.visible = false;
        Effects.retire(this.tracerActive, this.tracerFree, i);
      }
    }
    for (const pool of [this.sprites, this.smokes]) {
      const active = pool === this.sprites ? this.spriteActive : this.smokeActive;
      const free = pool === this.sprites ? this.spriteFree : this.smokeFree;
      for (let k = active.length - 1; k >= 0; k--) {
        const i = active[k];
        const p = pool[i];
        p.life -= dt;
        p.vel.y -= p.grav * dt;
        p.sprite.position.addScaledVector(p.vel, dt);
        const x = Math.max(0, p.life / p.max);
        p.sprite.scale.setScalar(p.size0 * (0.4 + 0.6 * x + (1 - x) * 0.6));
        p.mat.opacity = x;
        if (p.life <= 0) {
          p.sprite.visible = false;
          Effects.retire(active, free, i);
        }
      }
    }
    for (let k = this.debrisActive.length - 1; k >= 0; k--) {
      const i = this.debrisActive[k];
      const d = this.debris[i];
      d.life -= dt;
      d.vel.y -= 14 * dt;
      d.mesh.position.addScaledVector(d.vel, dt);
      d.mesh.rotation.x += d.spin.x * dt;
      d.mesh.rotation.y += d.spin.y * dt;
      if (d.mesh.position.y < 0.04) {
        d.mesh.position.y = 0.04;
        d.vel.set(d.vel.x * 0.6, 0, d.vel.z * 0.6);
        d.spin.multiplyScalar(0.5);
      }
      if (d.life <= 0) {
        d.mesh.visible = false;
        Effects.retire(this.debrisActive, this.debrisFree, i);
      }
    }
    for (const f of this.pool) {
      if (f.life > 0) {
        f.life -= dt;
        f.light.intensity = f.life > 0 ? f.peak * (f.life / f.life0) : 0;
      }
    }
    if (this.empTime >= 0) {
      this.empTime += dt;
      const k = this.empTime / 1.6;
      this.empRing.scale.setScalar(1 + k * 42);
      (this.empRing.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 * (1 - k));
      if (k >= 1) {
        this.empRing.visible = false;
        this.empTime = -1;
      }
    }
  }

  smokePlume(pos: THREE.Vector3, dt: number): void {
    if (Math.random() > dt * 14) return;
    const i = Effects.take(this.smokeActive, this.smokeFree);
    const p = this.smokes[i];
    p.mat.opacity = 0.6;
    const size = 0.5 + Math.random() * 0.5;
    p.sprite.scale.set(size, size, 1);
    p.sprite.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.3));
    p.sprite.visible = true;
    p.vel.set(0, 1.6, 0);
    p.life = 1.6;
    p.max = 1.6;
    p.grav = -0.6;
    p.size0 = size;
  }
}
