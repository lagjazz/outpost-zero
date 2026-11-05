// Weapon viewmodels, firing state machine, recoil and reload animation.
import * as THREE from 'three';
import { WEAPONS } from './config';
import { effectiveWeapon, type PlayerState, type WeaponId, type WeaponRuntime } from './state';
import type { AudioWorld } from './audio';

const gunMetal = (c = 0x3d4552, m = 0.25) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.45, metalness: m });
const polymer = (c = 0x333a45) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, metalness: 0.1 });
const wood = () => new THREE.MeshStandardMaterial({ color: 0x5d4630, roughness: 0.8 });

function part(geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Group): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

function buildPistol(): THREE.Group {
  const g = new THREE.Group();
  part(new THREE.BoxGeometry(0.04, 0.055, 0.24), gunMetal(0x3a4250), 0, -0.02, -0.14, g); // slide
  part(new THREE.BoxGeometry(0.036, 0.13, 0.05), polymer(), 0, -0.09, -0.03, g).rotation.x = 0.25; // grip
  part(new THREE.BoxGeometry(0.03, 0.02, 0.03), gunMetal(0x151a22), 0, -0.005, -0.27, g); // muzzle crown
  part(new THREE.BoxGeometry(0.008, 0.014, 0.008), gunMetal(0x9aa5b5), 0, 0.015, -0.25, g); // front sight
  part(new THREE.BoxGeometry(0.02, 0.018, 0.012), gunMetal(0x9aa5b5), 0, 0.015, -0.03, g); // rear sight
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.02, -0.3);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildRifle(): THREE.Group {
  const g = new THREE.Group();
  part(new THREE.BoxGeometry(0.055, 0.08, 0.46), gunMetal(0x343b47), 0, -0.04, -0.28, g); // receiver
  part(new THREE.CylinderGeometry(0.016, 0.016, 0.42, 8), gunMetal(0x2a303a), 0, -0.025, -0.68, g).rotation.x = Math.PI / 2; // barrel
  part(new THREE.BoxGeometry(0.03, 0.16, 0.07), polymer(), 0, -0.15, -0.2, g); // magazine
  part(new THREE.BoxGeometry(0.035, 0.06, 0.22), polymer(), 0, -0.05, 0.08, g); // stock
  part(new THREE.BoxGeometry(0.028, 0.11, 0.04), polymer(), 0, -0.11, -0.06, g).rotation.x = 0.3; // grip
  part(new THREE.BoxGeometry(0.016, 0.014, 0.3), gunMetal(0x4a5565), 0, 0.005, -0.3, g); // rail
  part(new THREE.BoxGeometry(0.012, 0.02, 0.02), gunMetal(0x11151c), 0, 0.02, -0.42, g); // front post
  part(new THREE.TorusGeometry(0.014, 0.003, 6, 12), gunMetal(0x11151c), 0, 0.02, -0.16, g); // rear ring sight
  part(new THREE.CylinderGeometry(0.018, 0.018, 0.09, 8), gunMetal(0x1a1f28), 0.035, -0.075, -0.45, g).rotation.x = Math.PI / 2; // tac light
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.025, -0.9);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildShotgun(): THREE.Group {
  const g = new THREE.Group();
  part(new THREE.BoxGeometry(0.055, 0.085, 0.34), gunMetal(0x383f4b), 0, -0.04, -0.18, g); // receiver
  part(new THREE.CylinderGeometry(0.021, 0.021, 0.62, 8), gunMetal(0x262c36), 0, -0.005, -0.66, g).rotation.x = Math.PI / 2; // barrel
  part(new THREE.CylinderGeometry(0.026, 0.026, 0.2, 8), gunMetal(0x2a303a), 0, -0.05, -0.55, g).rotation.x = Math.PI / 2; // pump
  part(new THREE.BoxGeometry(0.04, 0.07, 0.26), wood(), 0, -0.06, 0.12, g); // stock
  part(new THREE.BoxGeometry(0.03, 0.1, 0.04), wood(), 0, -0.11, -0.02, g).rotation.x = 0.35; // grip
  part(new THREE.CylinderGeometry(0.024, 0.024, 0.03, 8), gunMetal(0x59647a), 0, -0.005, -0.97, g).rotation.x = Math.PI / 2; // muzzle ring
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.005, -0.98);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildLauncher(): THREE.Group {
  // shoulder-fired SAM tube: oversized launch can with sight block and grips
  const g = new THREE.Group();
  const tube = part(new THREE.CylinderGeometry(0.055, 0.06, 0.78, 10), gunMetal(0x3a424e), 0, -0.04, -0.32, g);
  tube.rotation.x = Math.PI / 2;
  const flare = part(new THREE.CylinderGeometry(0.07, 0.055, 0.16, 10), gunMetal(0x2a303a), 0, -0.04, 0.12, g);
  flare.rotation.x = Math.PI / 2;
  part(new THREE.BoxGeometry(0.05, 0.03, 0.3), polymer(0x2b323e), 0, 0.02, -0.5, g); // sight rail
  part(new THREE.BoxGeometry(0.018, 0.045, 0.018), gunMetal(0x9aa5b5), 0, 0.05, -0.62, g); // front post
  part(new THREE.BoxGeometry(0.014, 0.06, 0.03), polymer(), 0, -0.12, -0.24, g).rotation.x = 0.3; // front grip
  part(new THREE.BoxGeometry(0.016, 0.07, 0.035), polymer(), 0, -0.13, -0.02, g).rotation.x = 0.25; // trigger grip
  part(new THREE.TorusGeometry(0.03, 0.006, 6, 12), gunMetal(0x59647a), 0, 0.03, -0.15, g); // shoulder loop
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.04, -0.74);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

export interface FireShot {
  dirs: THREE.Vector3[];
  muzzleWorld: THREE.Vector3;
  damage: number;
  range: number;
}

export class WeaponSystem {
  current: WeaponId = 'pistol';
  autoLevel = 1; // rank-driven weapon tier (set by Game on level-up)
  private groups: Record<WeaponId, THREE.Group>;
  private muzzleFlash: THREE.PointLight;
  private flashTimer = 0;
  cooldown = 0;
  reloadTimer = 0;
  reloadTotal = 1;
  switchTimer = 0;
  private kick = 0;
  private pump = 0;

  /** Weapons not yet earned on the campaign ladder — cannot be selected. */
  locked: Set<WeaponId> = new Set<WeaponId>(['launcher']);

  constructor(
    private camera: THREE.PerspectiveCamera,
    private runtimes: Record<WeaponId, WeaponRuntime>,
    private audio: AudioWorld,
  ) {
    this.groups = { pistol: buildPistol(), rifle: buildRifle(), shotgun: buildShotgun(), launcher: buildLauncher() };
    for (const id of Object.keys(this.groups) as WeaponId[]) {
      this.groups[id].visible = id === this.current;
      this.groups[id].scale.setScalar(0.52);
      camera.add(this.groups[id]);
    }
    this.muzzleFlash = new THREE.PointLight(new THREE.Color('#ffb347'), 0, 8, 2);
    this.muzzleFlash.position.set(0.3, -0.25, -0.9);
    camera.add(this.muzzleFlash);
    // gentle key light so the viewmodel reads against the night
    const key = new THREE.PointLight(new THREE.Color('#9fb8e8'), 1.1, 2.2, 1.6);
    key.position.set(0.2, 0.25, 0);
    camera.add(key);
  }

  get busy(): boolean {
    return this.reloadTimer > 0 || this.switchTimer > 0;
  }

  unlock(id: WeaponId): void {
    this.locked.delete(id);
  }

  switchTo(id: WeaponId): void {
    if (id === this.current || this.busy || this.locked.has(id)) return;
    this.groups[this.current].visible = false;
    this.current = id;
    this.groups[id].visible = true;
    this.switchTimer = 0.65;
    this.reloadTimer = 0;
    this.cooldown = 0.3;
    this.audio.uiClick();
  }

  cycle(dir: number): void {
    const order = (['pistol', 'rifle', 'shotgun', 'launcher'] as WeaponId[]).filter((id) => !this.locked.has(id));
    const i = order.indexOf(this.current);
    this.switchTo(order[(i + dir + order.length) % order.length]);
  }

  startReload(): boolean {
    const rt = this.runtimes[this.current];
    const eff = effectiveWeapon(this.current, rt.levels, this.autoLevel);
    if (this.busy || rt.mag >= eff.magSize || rt.reserve <= 0) return false;
    this.reloadTotal = eff.reloadTime;
    this.reloadTimer = eff.reloadTime;
    this.audio.reload();
    return true;
  }

  tryFire(player: PlayerState, moving: boolean): FireShot | null {
    if (this.busy || this.cooldown > 0) return null;
    const rt = this.runtimes[this.current];
    const eff = effectiveWeapon(this.current, rt.levels, this.autoLevel);
    if (rt.mag <= 0) {
      this.audio.dryFire();
      this.startReload();
      return null;
    }
    rt.mag -= 1;
    this.cooldown = eff.fireInterval;
    this.kick = 1;
    if (this.current === 'shotgun') this.pump = 1;
    this.flashTimer = 0.05;
    this.audio.gunshot(this.current);

    const base = this.camera.getWorldDirection(new THREE.Vector3());
    const spreadBase = THREE.MathUtils.degToRad(WEAPONS[this.current].spreadDeg * (1 - player.ads) + WEAPONS[this.current].adsSpreadDeg * player.ads);
    const spread = spreadBase * (1 + (moving ? 0.9 : 0));
    const dirs: THREE.Vector3[] = [];
    for (let i = 0; i < eff.pellets; i++) {
      const d = base.clone();
      if (spread > 0) {
        const a = Math.random() * Math.PI * 2;
        const r = (i === 0 ? 0 : Math.sqrt(Math.random())) * spread;
        const up = new THREE.Vector3(0, 1, 0);
        const right = new THREE.Vector3().crossVectors(up, base).normalize();
        const camUp = new THREE.Vector3().crossVectors(base, right).normalize();
        d.addScaledVector(right, Math.cos(a) * r).addScaledVector(camUp, Math.sin(a) * r).normalize();
      }
      dirs.push(d);
    }
    const muzzleWorld = this.groups[this.current].userData.muzzle.getWorldPosition(new THREE.Vector3());
    return { dirs, muzzleWorld, damage: eff.damage, range: WEAPONS[this.current].range };
  }

  finishReload(): void {
    const rt = this.runtimes[this.current];
    const eff = effectiveWeapon(this.current, rt.levels, this.autoLevel);
    const need = eff.magSize - rt.mag;
    const take = Math.min(need, rt.reserve);
    rt.mag += take;
    rt.reserve -= take;
  }

  update(dt: number): void {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.reloadTimer > 0) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        this.reloadTimer = 0;
        this.finishReload();
      }
    }
    if (this.switchTimer > 0) this.switchTimer = Math.max(0, this.switchTimer - dt);
    this.kick = Math.max(0, this.kick - dt * 6);
    this.pump = Math.max(0, this.pump - dt * 3);
    this.flashTimer = Math.max(0, this.flashTimer - dt);
    this.muzzleFlash.intensity = this.flashTimer > 0 ? 25 * (this.flashTimer / 0.05) : 0;

    const g = this.groups[this.current];
    const ads = g.userData.adsEase ?? 0;
    const group = g;
    const adsT = this.camera.userData.adsEase ?? 0;
    group.userData.adsEase = THREE.MathUtils.damp(ads, adsT, 12, dt);
    const a = group.userData.adsEase as number;
    const swayX = Math.sin(performance.now() * 0.0016) * 0.004;
    const swayY = Math.cos(performance.now() * 0.0013) * 0.004;
    const switchDip = Math.sin(Math.min(1, this.switchTimer / 0.65) * Math.PI) * -0.25;
    const reloadDip = this.reloadTimer > 0 ? Math.sin((1 - this.reloadTimer / this.reloadTotal) * Math.PI) * -0.18 : 0;
    group.position.set(
      THREE.MathUtils.lerp(0.16, 0, a) + swayX,
      THREE.MathUtils.lerp(-0.12, -0.008, a) + swayY + switchDip + reloadDip - this.kick * WEAPONS[this.current].kickback,
      THREE.MathUtils.lerp(-0.5, -0.34, a) + this.kick * 0.06,
    );
    group.rotation.set(this.kick * 0.12 + (this.reloadTimer > 0 ? 0.35 : 0), this.kick * 0.02, -this.kick * 0.05);
    if (this.current === 'shotgun') {
      const pumpMesh = group.children[2];
      if (pumpMesh) pumpMesh.position.z = -0.55 + this.pump * 0.12;
    }
  }
}
