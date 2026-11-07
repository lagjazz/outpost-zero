// Pooled visual effects: tracers, sparks, explosions, shockwave rings, debris, EMP ring.
// Zero per-frame allocations: all pools and scratch vectors are pre-allocated at boot.
import * as THREE from 'three';

const TRACER_POOL = 80;
const SPRITE_POOL = 340;
const SMOKE_POOL = 56;
const DEBRIS_POOL = 96;
const RING_POOL = 24;

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
interface RingSlot {
  mesh: THREE.Mesh;
  mat: THREE.MeshBasicMaterial;
  life: number;
  max: number;
  maxScale: number;
}

function circleTexture(hex: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, hex);
  g.addColorStop(0.5, hex);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const tracerGeo = new THREE.CylinderGeometry(0.022, 0.008, 1, 6);
tracerGeo.translate(0, 0.5, 0);
tracerGeo.rotateX(Math.PI / 2);

const debrisGeo = new THREE.DodecahedronGeometry(0.65, 0);
const debrisMat = new THREE.MeshStandardMaterial({
  color: 0x2b313c,
  emissive: new THREE.Color('#ff7a30'),
  emissiveIntensity: 0.9,
  roughness: 0.5,
  metalness: 0.5,
});

const ringGeo = new THREE.RingGeometry(0.65, 1.0, 28);
ringGeo.rotateX(-Math.PI / 2);

const _amberCol = new THREE.Color('#ffb45e');
const _cyanCol = new THREE.Color('#22d3ee');
const _redCol = new THREE.Color('#ff5a3c');
const _violetCol = new THREE.Color('#c084fc');
const _mid = new THREE.Vector3();

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
  private rings: RingSlot[] = [];
  private ringActive: number[] = [];
  private ringFree: number[] = [];

  private poolSize = 10;
  private pool: { light: THREE.PointLight; life: number; life0: number; peak: number }[] = [];
  private empRing: THREE.Mesh;
  private empTime = -1;
  private sparkTex = circleTexture('rgba(255,210,130,0.95)');
  private cyanTex = circleTexture('rgba(80,230,255,0.95)');
  private fireTex = circleTexture('rgba(255,120,40,0.95)');
  private violetTex = circleTexture('rgba(192,132,252,0.95)');

  constructor(private scene: THREE.Scene) {
    for (let i = 0; i < this.poolSize; i++) {
      const light = new THREE.PointLight(0xffffff, 0, 1, 1.6);
      light.visible = true;
      scene.add(light);
      this.pool.push({ light, life: 0, life0: 1, peak: 0 });
    }
    this.empRing = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.25, 8, 44),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#67e8f9'),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      }),
    );
    this.empRing.rotation.x = Math.PI / 2;
    this.empRing.visible = false;
    scene.add(this.empRing);

    for (let i = 0; i < TRACER_POOL; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      });
      const mesh = new THREE.Mesh(tracerGeo, mat);
      mesh.visible = false;
      scene.add(mesh);
      this.tracers.push({ mesh, mat, life: 0, max: 1 });
      this.tracerFree.push(i);
    }

    const seed = [this.fireTex, this.sparkTex, this.cyanTex, this.violetTex];
    for (let i = 0; i < SPRITE_POOL; i++) {
      const mat = new THREE.SpriteMaterial({
        map: seed[i % seed.length],
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.visible = false;
      scene.add(sprite);
      this.sprites.push({ sprite, mat, vel: new THREE.Vector3(), life: 0, max: 1, grav: 0, size0: 1 });
      this.spriteFree.push(i);
    }

    for (let i = 0; i < SMOKE_POOL; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.fireTex,
        color: new THREE.Color('#ff9a3c'),
        transparent: true,
        opacity: 0,
        depthWrite: false,
        fog: true,
      });
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

    for (let i = 0; i < RING_POOL; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffa040,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
        fog: false,
      });
      const mesh = new THREE.Mesh(ringGeo, mat);
      mesh.visible = false;
      scene.add(mesh);
      this.rings.push({ mesh, mat, life: 0, max: 0.45, maxScale: 6 });
      this.ringFree.push(i);
    }
  }

  private static take(active: number[], free: number[]): number {
    let i = free.pop();
    if (i === undefined) {
      i = active.shift()!;
    }
    active.push(i);
    return i;
  }

  private static retire(active: number[], free: number[], i: number): void {
    free.push(i);
    const k = active.indexOf(i);
    if (k >= 0) active.splice(k, 1);
  }

  tracer(from: THREE.Vector3, to: THREE.Vector3, color: string, life = 0.075, widthScale = 1): void {
    const i = Effects.take(this.tracerActive, this.tracerFree);
    const t = this.tracers[i];
    t.mat.color.set(color);
    t.mat.opacity = 0.95;
    const len = from.distanceTo(to);
    t.mesh.scale.set(widthScale, widthScale, Math.max(0.1, len));
    t.mesh.position.copy(from);
    t.mesh.lookAt(to);
    t.mesh.visible = true;
    t.life = life;
    t.max = life;
  }

  /** Jagged two-segment plasma / lightning arc between two points. */
  arcBeam(from: THREE.Vector3, to: THREE.Vector3, color = '#38e2ff'): void {
    _mid.lerpVectors(from, to, 0.5);
    _mid.x += (Math.random() - 0.5) * 1.1;
    _mid.y += (Math.random() - 0.5) * 0.9;
    _mid.z += (Math.random() - 0.5) * 1.1;
    this.tracer(from, _mid, color, 0.14, 1.8);
    this.tracer(_mid, to, color, 0.14, 1.8);
    this.sparks(to, 'cyan', 5);
  }

  shockwave(pos: THREE.Vector3, color = '#ffa040', maxScale = 5.5, life = 0.42): void {
    const i = Effects.take(this.ringActive, this.ringFree);
    const r = this.rings[i];
    r.mat.color.set(color);
    r.mat.opacity = 0.85;
    r.mesh.position.set(pos.x, Math.max(0.12, pos.y), pos.z);
    r.mesh.scale.setScalar(0.3);
    r.mesh.visible = true;
    r.life = life;
    r.max = life;
    r.maxScale = maxScale;
  }

  sparks(pos: THREE.Vector3, color: 'amber' | 'cyan' | 'red' | 'violet', count = 8): void {
    const tex =
      color === 'cyan' ? this.cyanTex : color === 'red' ? this.fireTex : color === 'violet' ? this.violetTex : this.sparkTex;
    const base =
      color === 'cyan' ? _cyanCol : color === 'red' ? _redCol : color === 'violet' ? _violetCol : _amberCol;
    for (let n = 0; n < count; n++) {
      const i = Effects.take(this.spriteActive, this.spriteFree);
      const p = this.sprites[i];
      p.mat.map = tex;
      p.mat.color.copy(base);
      p.mat.opacity = 1;
      const size = 0.1 + Math.random() * 0.14;
      p.sprite.scale.set(size, size, 1);
      p.sprite.position.copy(pos);
      p.sprite.visible = true;
      p.vel.set((Math.random() - 0.5) * 5.8, (Math.random() - 0.25) * 5.5, (Math.random() - 0.5) * 5.8);
      p.life = 0.28 + Math.random() * 0.36;
      p.max = 0.65;
      p.grav = 6.5;
      p.size0 = size;
    }
  }

  explosion(pos: THREE.Vector3, scale = 1, tint: 'fire' | 'cyan' | 'violet' = 'fire'): void {
    const c1 = tint === 'cyan' ? '#67e8f9' : tint === 'violet' ? '#e879f9' : '#ffd27f';
    const c2 = tint === 'cyan' ? '#06b6d4' : tint === 'violet' ? '#9333ea' : '#ff5a2c';
    for (let n = 0; n < 12; n++) {
      const i = Effects.take(this.spriteActive, this.spriteFree);
      const p = this.sprites[i];
      p.mat.map = tint === 'cyan' ? this.cyanTex : tint === 'violet' ? this.violetTex : this.fireTex;
      p.mat.color.set(n < 6 ? c1 : c2);
      p.mat.opacity = 1;
      const size = (0.65 + Math.random() * 1.35) * scale;
      p.sprite.scale.set(size, size, 1);
      p.sprite.position.set(
        pos.x + (Math.random() - 0.5) * scale,
        pos.y + (Math.random() - 0.5) * scale,
        pos.z + (Math.random() - 0.5) * scale,
      );
      p.sprite.visible = true;
      p.vel.set((Math.random() - 0.5) * 6.5 * scale, Math.random() * 4.5 * scale, (Math.random() - 0.5) * 6.5 * scale);
      p.life = 0.4 + Math.random() * 0.5;
      p.max = 0.9;
      p.grav = 1;
      p.size0 = size;
    }
    this.shockwave(pos, c1, 4.8 * scale, 0.45);
    this.flash(pos, c1, 170 * scale, 28 * scale, 0.38);
    for (let n = 0; n < 7; n++) {
      const i = Effects.take(this.debrisActive, this.debrisFree);
      const d = this.debris[i];
      const s = 0.09 + Math.random() * 0.18;
      d.mesh.scale.set(s, s, s);
      d.mesh.position.copy(pos);
      d.mesh.rotation.set(0, 0, 0);
      d.mesh.visible = true;
      d.vel.set((Math.random() - 0.5) * 10, 2.5 + Math.random() * 6.5, (Math.random() - 0.5) * 10);
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
    p.sprite.scale.set(1.05, 1.05, 1);
    p.sprite.position.copy(pos);
    p.sprite.visible = true;
    p.vel.set(0, 0, 0);
    p.life = 0.25;
    p.max = 0.25;
    p.grav = 0;
    p.size0 = 1.05;
  }

  triggerEmp(center: THREE.Vector3): void {
    this.empRing.position.copy(center).setY(1.2);
    this.empRing.visible = true;
    this.empTime = 0;
    this.shockwave(center, '#67e8f9', 36, 1.1);
    this.flash(new THREE.Vector3(center.x, 6, center.z), '#67e8f9', 900, 90, 1.2);
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
    for (let k = this.ringActive.length - 1; k >= 0; k--) {
      const i = this.ringActive[k];
      const r = this.rings[i];
      r.life -= dt;
      const prog = 1 - Math.max(0, r.life / r.max);
      r.mesh.scale.setScalar(0.3 + prog * r.maxScale);
      r.mat.opacity = (1 - prog) * 0.85;
      if (r.life <= 0) {
        r.mesh.visible = false;
        Effects.retire(this.ringActive, this.ringFree, i);
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

  smokePlume(pos: THREE.Vector3, dt: number, hexColor?: number): void {
    if (Math.random() > dt * 15) return;
    const i = Effects.take(this.smokeActive, this.smokeFree);
    const p = this.smokes[i];
    if (hexColor !== undefined) p.mat.color.setHex(hexColor);
    else p.mat.color.set('#ff9a3c');
    p.mat.opacity = 0.65;
    const size = 0.5 + Math.random() * 0.55;
    p.sprite.scale.set(size, size, 1);
    p.sprite.position.set(
      pos.x + (Math.random() - 0.5) * 0.3,
      pos.y,
      pos.z + (Math.random() - 0.5) * 0.3,
    );
    p.sprite.visible = true;
    p.vel.set(0, 1.6, 0);
    p.life = 1.6;
    p.max = 1.6;
    p.grav = -0.6;
    p.size0 = size;
  }
}
