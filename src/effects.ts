// Pooled visual effects: tracers, sparks, explosions, debris, EMP ring.
import * as THREE from 'three';

interface Tracer {
  mesh: THREE.Mesh;
  life: number;
  max: number;
}
interface Particle {
  point: THREE.Sprite;
  vel: THREE.Vector3;
  life: number;
  max: number;
  grav: number;
  size0: number;
}
interface Debris {
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

export class Effects {
  private tracers: Tracer[] = [];
  private particles: Particle[] = [];
  private debris: Debris[] = [];
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
  }

  tracer(from: THREE.Vector3, to: THREE.Vector3, color: string, life = 0.07): void {
    if (this.tracers.length > 60) {
      const old = this.tracers.shift()!;
      this.scene.remove(old.mesh);
    }
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    const mesh = new THREE.Mesh(tracerGeo, mat);
    const len = from.distanceTo(to);
    mesh.scale.set(1, 1, Math.max(0.1, len));
    mesh.position.copy(from);
    mesh.lookAt(to);
    this.scene.add(mesh);
    this.tracers.push({ mesh, life, max: life });
  }

  sparks(pos: THREE.Vector3, color: 'amber' | 'cyan' | 'red', count = 8): void {
    const tex = color === 'cyan' ? this.cyanTex : color === 'red' ? this.fireTex : this.sparkTex;
    const base = color === 'cyan' ? new THREE.Color('#22d3ee') : color === 'red' ? new THREE.Color('#ff5a3c') : new THREE.Color('#ffb45e');
    for (let i = 0; i < count; i++) {
      if (this.particles.length > 260) break;
      const mat = new THREE.SpriteMaterial({ map: tex, color: base, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const point = new THREE.Sprite(mat);
      const size = 0.08 + Math.random() * 0.12;
      point.scale.set(size, size, 1);
      point.position.copy(pos);
      this.scene.add(point);
      this.particles.push({
        point,
        vel: new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.3) * 5, (Math.random() - 0.5) * 5),
        life: 0.3 + Math.random() * 0.4,
        max: 0.7,
        grav: 6,
        size0: size,
      });
    }
  }

  explosion(pos: THREE.Vector3, scale = 1): void {
    // fireball sprites
    for (let i = 0; i < 10; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.fireTex, color: i < 5 ? new THREE.Color('#ffd27f') : new THREE.Color('#ff5a2c'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const point = new THREE.Sprite(mat);
      const size = (0.6 + Math.random() * 1.2) * scale;
      point.scale.set(size, size, 1);
      point.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * scale, (Math.random() - 0.5) * scale, (Math.random() - 0.5) * scale));
      this.scene.add(point);
      this.particles.push({
        point,
        vel: new THREE.Vector3((Math.random() - 0.5) * 6 * scale, Math.random() * 4 * scale, (Math.random() - 0.5) * 6 * scale),
        life: 0.4 + Math.random() * 0.5,
        max: 0.9,
        grav: 1,
        size0: size,
      });
    }
    this.flash(pos, '#ffa040', 160 * scale, 26 * scale, 0.35);
    // debris cubes
    for (let i = 0; i < 6; i++) {
      if (this.debris.length > 80) break;
      const s = 0.08 + Math.random() * 0.16;
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(s, s, s),
        new THREE.MeshStandardMaterial({ color: 0x2b313c, emissive: new THREE.Color('#ff7a30'), emissiveIntensity: 0.8, roughness: 0.6 }),
      );
      mesh.position.copy(pos);
      this.scene.add(mesh);
      this.debris.push({
        mesh,
        vel: new THREE.Vector3((Math.random() - 0.5) * 9, 2 + Math.random() * 6, (Math.random() - 0.5) * 9),
        spin: new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10),
        life: 1.6,
      });
    }
  }

  shieldRipple(pos: THREE.Vector3): void {
    const mat = new THREE.SpriteMaterial({ map: this.cyanTex, color: new THREE.Color('#38e2ff'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    const point = new THREE.Sprite(mat);
    point.scale.set(0.9, 0.9, 1);
    point.position.copy(pos);
    this.scene.add(point);
    this.particles.push({ point, vel: new THREE.Vector3(0, 0, 0), life: 0.25, max: 0.25, grav: 0, size0: 0.9 });
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
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      (t.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, t.life / t.max);
      if (t.life <= 0) {
        this.scene.remove(t.mesh);
        (t.mesh.material as THREE.Material).dispose();
        this.tracers.splice(i, 1);
      }
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      p.vel.y -= p.grav * dt;
      p.point.position.addScaledVector(p.vel, dt);
      const k = Math.max(0, p.life / p.max);
      p.point.scale.setScalar(p.size0 * (0.4 + 0.6 * k + (1 - k) * 0.6));
      (p.point.material as THREE.SpriteMaterial).opacity = k;
      if (p.life <= 0) {
        this.scene.remove(p.point);
        (p.point.material as THREE.Material).dispose();
        this.particles.splice(i, 1);
      }
    }
    for (let i = this.debris.length - 1; i >= 0; i--) {
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
        this.scene.remove(d.mesh);
        (d.mesh.material as THREE.Material).dispose();
        this.debris.splice(i, 1);
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
    const mat = new THREE.SpriteMaterial({ map: this.fireTex, color: new THREE.Color('#ff9a3c'), transparent: true, opacity: 0.6, depthWrite: false, fog: true });
    const point = new THREE.Sprite(mat);
    const size = 0.5 + Math.random() * 0.5;
    point.scale.set(size, size, 1);
    point.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.3));
    this.scene.add(point);
    this.particles.push({ point, vel: new THREE.Vector3(0, 1.6, 0), life: 1.6, max: 1.6, grav: -0.6, size0: size });
  }
}
