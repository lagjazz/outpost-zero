// Weapon viewmodels (6 multi-part procedural weapons), firing state machine, recoil and reload animation.
import * as THREE from 'three';
import { WEAPONS } from './config';
import { effectiveWeapon, type PlayerState, type WeaponId, type WeaponRuntime } from './state';
import type { AudioWorld } from './audio';

const gunMetal = (c = 0x3d4552, m = 0.78, r = 0.32) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const polymer = (c = 0x262c36, r = 0.78) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0.12 });
const wood = () => new THREE.MeshStandardMaterial({ color: 0x63472d, roughness: 0.72, metalness: 0.05 });
const glowMat = (hex: string, intensity = 2.4) =>
  new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color(hex), emissiveIntensity: intensity, roughness: 0.2 });

function part(geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Group): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

function buildPistol(): THREE.Group {
  const g = new THREE.Group();
  // Lower frame + rail
  part(new THREE.BoxGeometry(0.036, 0.032, 0.21), gunMetal(0x28303d, 0.65, 0.45), 0, -0.035, -0.13, g);
  // Slide (animated on kick)
  const slide = part(new THREE.BoxGeometry(0.042, 0.048, 0.24), gunMetal(0x465162, 0.85, 0.25), 0, -0.01, -0.14, g);
  g.userData.slide = slide;
  // Barrel + compensator crown
  const barrel = part(new THREE.CylinderGeometry(0.011, 0.011, 0.26, 10), gunMetal(0x181d26, 0.9, 0.2), 0, -0.012, -0.17, g);
  barrel.rotation.x = Math.PI / 2;
  part(new THREE.BoxGeometry(0.038, 0.042, 0.035), gunMetal(0x1f2631, 0.8, 0.3), 0, -0.012, -0.275, g);
  // Ergonomic grip + mag baseplate
  part(new THREE.BoxGeometry(0.035, 0.13, 0.052), polymer(0x1e232b), 0, -0.095, -0.03, g).rotation.x = 0.26;
  part(new THREE.BoxGeometry(0.038, 0.016, 0.058), gunMetal(0x3a4352), 0, -0.16, -0.012, g);
  // Underbarrel tactical laser module
  part(new THREE.BoxGeometry(0.026, 0.024, 0.075), polymer(0x2d3542), 0, -0.052, -0.21, g);
  part(new THREE.SphereGeometry(0.005, 6, 6), glowMat('#10b981', 3), 0, -0.052, -0.25, g);
  // Tritium night sights
  part(new THREE.BoxGeometry(0.007, 0.014, 0.008), glowMat('#10b981', 2.8), 0, 0.02, -0.25, g);
  part(new THREE.BoxGeometry(0.024, 0.016, 0.012), gunMetal(0x8894a6), 0, 0.02, -0.03, g);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.012, -0.31);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildRifle(): THREE.Group {
  const g = new THREE.Group();
  // Upper & lower receiver
  part(new THREE.BoxGeometry(0.056, 0.082, 0.44), gunMetal(0x343d4b, 0.75, 0.35), 0, -0.038, -0.26, g);
  // Ventilated handguard shroud
  part(new THREE.BoxGeometry(0.048, 0.068, 0.28), polymer(0x252c37, 0.7), 0, -0.032, -0.56, g);
  // Fluted barrel + flash suppressor
  const brl = part(new THREE.CylinderGeometry(0.015, 0.016, 0.46, 10), gunMetal(0x1f252e, 0.9, 0.22), 0, -0.025, -0.7, g);
  brl.rotation.x = Math.PI / 2;
  const brake = part(new THREE.CylinderGeometry(0.02, 0.018, 0.06, 8), gunMetal(0x4b5668, 0.85, 0.28), 0, -0.025, -0.92, g);
  brake.rotation.x = Math.PI / 2;
  // Curved magazine + magwell
  const mag = part(new THREE.BoxGeometry(0.03, 0.17, 0.068), polymer(0x1c2129), 0, -0.15, -0.22, g);
  mag.rotation.x = -0.14;
  // Adjustable stock + cheek rest
  part(new THREE.BoxGeometry(0.038, 0.068, 0.24), polymer(0x28303c), 0, -0.048, 0.08, g);
  part(new THREE.BoxGeometry(0.042, 0.095, 0.028), polymer(0x161a21), 0, -0.055, 0.2, g);
  // Pistol grip & angled foregrip
  part(new THREE.BoxGeometry(0.028, 0.11, 0.042), polymer(), 0, -0.11, -0.06, g).rotation.x = 0.3;
  part(new THREE.BoxGeometry(0.024, 0.065, 0.04), polymer(0x323b4a), 0, -0.085, -0.52, g).rotation.x = -0.25;
  // Picatinny rail + Holographic reflex optic
  part(new THREE.BoxGeometry(0.022, 0.014, 0.36), gunMetal(0x4a5565), 0, 0.01, -0.32, g);
  part(new THREE.BoxGeometry(0.038, 0.042, 0.08), gunMetal(0x222834, 0.8, 0.3), 0, 0.035, -0.22, g);
  part(new THREE.SphereGeometry(0.005, 6, 6), glowMat('#06b6d4', 3.2), 0, 0.038, -0.22, g);
  // Side tactical illuminator
  const light = part(new THREE.CylinderGeometry(0.016, 0.016, 0.1, 8), gunMetal(0x1a1f28), 0.034, -0.03, -0.58, g);
  light.rotation.x = Math.PI / 2;
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.025, -0.95);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildShotgun(): THREE.Group {
  const g = new THREE.Group();
  // Receiver
  part(new THREE.BoxGeometry(0.058, 0.088, 0.35), gunMetal(0x3b4352, 0.8, 0.32), 0, -0.04, -0.18, g);
  // Main barrel + perforated heatshield
  const brl = part(new THREE.CylinderGeometry(0.021, 0.022, 0.66, 10), gunMetal(0x232933, 0.88, 0.25), 0, -0.004, -0.68, g);
  brl.rotation.x = Math.PI / 2;
  // Under-barrel tube magazine
  const tube = part(new THREE.CylinderGeometry(0.018, 0.018, 0.58, 10), gunMetal(0x333b48, 0.75, 0.38), 0, -0.042, -0.64, g);
  tube.rotation.x = Math.PI / 2;
  // Ribbed pump forend (index 3 — animated via userData.pumpMesh)
  const pump = part(new THREE.CylinderGeometry(0.028, 0.028, 0.22, 10), wood(), 0, -0.045, -0.55, g);
  pump.rotation.x = Math.PI / 2;
  g.userData.pumpMesh = pump;
  // Wood stock & grip
  part(new THREE.BoxGeometry(0.042, 0.075, 0.27), wood(), 0, -0.06, 0.12, g);
  part(new THREE.BoxGeometry(0.032, 0.1, 0.044), wood(), 0, -0.11, -0.02, g).rotation.x = 0.35;
  // Breacher muzzle crown
  const crown = part(new THREE.CylinderGeometry(0.026, 0.024, 0.045, 8), gunMetal(0x5d687d, 0.85, 0.25), 0, -0.004, -1.01, g);
  crown.rotation.x = Math.PI / 2;
  // Side shell saddle with 4 red 12-gauge shells
  const shellMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.4, metalness: 0.2 });
  for (let i = 0; i < 4; i++) {
    part(new THREE.CylinderGeometry(0.008, 0.008, 0.052, 6), shellMat, 0.033, -0.035, -0.1 - i * 0.045, g);
  }
  part(new THREE.BoxGeometry(0.008, 0.016, 0.008), glowMat('#f59e0b', 2.5), 0, 0.022, -0.96, g);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.004, -1.03);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildPlasma(): THREE.Group {
  const g = new THREE.Group();
  // Sci-fi angular receiver housing
  part(new THREE.BoxGeometry(0.062, 0.09, 0.48), gunMetal(0x283344, 0.82, 0.28), 0, -0.035, -0.28, g);
  // Glowing cyan plasma containment core chamber
  const core = part(new THREE.CylinderGeometry(0.024, 0.024, 0.34, 12), glowMat('#06b6d4', 2.8), 0, -0.02, -0.52, g);
  core.rotation.x = Math.PI / 2;
  g.userData.glowCore = core;
  // Twin magnetic emitter prongs
  part(new THREE.BoxGeometry(0.014, 0.022, 0.36), gunMetal(0x4b5b72, 0.9, 0.2), -0.024, -0.02, -0.68, g);
  part(new THREE.BoxGeometry(0.014, 0.022, 0.36), gunMetal(0x4b5b72, 0.9, 0.2), 0.024, -0.02, -0.68, g);
  // Cooling ribs along chamber
  for (let i = 0; i < 4; i++) {
    const rib = part(new THREE.TorusGeometry(0.03, 0.004, 6, 12), glowMat('#38bdf8', 2.2), 0, -0.02, -0.44 - i * 0.07, g);
    rib.rotation.y = 0;
  }
  // Underslung battery cell pack
  part(new THREE.BoxGeometry(0.044, 0.12, 0.11), polymer(0x192330), 0, -0.12, -0.28, g);
  part(new THREE.BoxGeometry(0.046, 0.02, 0.09), glowMat('#22d3ee', 2.2), 0, -0.15, -0.28, g);
  // Thumbhole stock & grip
  part(new THREE.BoxGeometry(0.04, 0.075, 0.22), polymer(0x1f2836), 0, -0.05, 0.06, g);
  part(new THREE.BoxGeometry(0.028, 0.11, 0.04), polymer(0x18202c), 0, -0.11, -0.06, g).rotation.x = 0.28;
  // Holographic cyan bridge sight
  part(new THREE.BoxGeometry(0.042, 0.04, 0.12), gunMetal(0x1e293b, 0.85, 0.25), 0, 0.032, -0.25, g);
  part(new THREE.BoxGeometry(0.028, 0.022, 0.004), glowMat('#38e2ff', 2.8), 0, 0.032, -0.25, g);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.02, -0.88);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildLauncher(): THREE.Group {
  const g = new THREE.Group();
  const tube = part(new THREE.CylinderGeometry(0.058, 0.062, 0.82, 12), gunMetal(0x3a453b, 0.65, 0.45), 0, -0.04, -0.34, g);
  tube.rotation.x = Math.PI / 2;
  const flare = part(new THREE.CylinderGeometry(0.074, 0.058, 0.16, 12), gunMetal(0x252c28, 0.75, 0.35), 0, -0.04, 0.12, g);
  flare.rotation.x = Math.PI / 2;
  const frontRing = part(new THREE.CylinderGeometry(0.066, 0.066, 0.05, 12), gunMetal(0x252c28, 0.8, 0.3), 0, -0.04, -0.74, g);
  frontRing.rotation.x = Math.PI / 2;
  // Side IFF target-lock acquisition box + amber lens
  part(new THREE.BoxGeometry(0.045, 0.065, 0.24), polymer(0x262e38), -0.07, -0.02, -0.42, g);
  const lens = part(new THREE.CylinderGeometry(0.018, 0.018, 0.02, 10), glowMat('#f59e0b', 2.8), -0.07, -0.02, -0.54, g);
  lens.rotation.x = Math.PI / 2;
  part(new THREE.BoxGeometry(0.05, 0.03, 0.32), polymer(0x2b323e), 0, 0.025, -0.5, g);
  part(new THREE.BoxGeometry(0.018, 0.045, 0.018), gunMetal(0x9aa5b5), 0, 0.055, -0.62, g);
  part(new THREE.BoxGeometry(0.016, 0.065, 0.032), polymer(), 0, -0.12, -0.24, g).rotation.x = 0.3;
  part(new THREE.BoxGeometry(0.018, 0.075, 0.036), polymer(), 0, -0.13, -0.02, g).rotation.x = 0.25;
  part(new THREE.TorusGeometry(0.032, 0.006, 6, 12), gunMetal(0x59647a), 0, 0.035, -0.15, g);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.04, -0.78);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  return g;
}

function buildRailgun(): THREE.Group {
  const g = new THREE.Group();
  // Heavy electromagnetic receiver block
  part(new THREE.BoxGeometry(0.068, 0.095, 0.52), gunMetal(0x2c3242, 0.85, 0.28), 0, -0.04, -0.26, g);
  // Twin parallel magnetic accelerator rails
  part(new THREE.BoxGeometry(0.016, 0.028, 0.68), gunMetal(0x64748b, 0.92, 0.18), -0.022, -0.015, -0.78, g);
  part(new THREE.BoxGeometry(0.016, 0.028, 0.68), gunMetal(0x64748b, 0.92, 0.18), 0.022, -0.015, -0.78, g);
  // Central glowing violet-cyan plasma induction core
  const core = part(new THREE.BoxGeometry(0.018, 0.014, 0.64), glowMat('#c084fc', 3.2), 0, -0.015, -0.76, g);
  g.userData.glowCore = core;
  // Induction coil rings along the rails
  for (let i = 0; i < 5; i++) {
    part(new THREE.BoxGeometry(0.066, 0.044, 0.022), gunMetal(0x1e2532, 0.8, 0.3), 0, -0.015, -0.54 - i * 0.11, g);
  }
  // Long-range digital sniper scope
  const scope = part(new THREE.CylinderGeometry(0.022, 0.02, 0.28, 12), gunMetal(0x181e29, 0.88, 0.22), 0, 0.045, -0.24, g);
  scope.rotation.x = Math.PI / 2;
  part(new THREE.CylinderGeometry(0.018, 0.018, 0.01, 10), glowMat('#a855f7', 2.6), 0, 0.045, -0.1, g).rotation.x = Math.PI / 2;
  // Rear capacitor stock & grip
  part(new THREE.BoxGeometry(0.052, 0.085, 0.26), polymer(0x1e1b2e), 0, -0.05, 0.1, g);
  part(new THREE.BoxGeometry(0.03, 0.11, 0.042), polymer(0x171522), 0, -0.11, -0.04, g).rotation.x = 0.28;
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, -0.015, -1.12);
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

const _baseDir = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _right = new THREE.Vector3();
const _camUp = new THREE.Vector3();

const WEAPON_ORDER: WeaponId[] = ['pistol', 'rifle', 'shotgun', 'plasma', 'launcher', 'railgun'];

export class WeaponSystem {
  current: WeaponId = 'pistol';
  autoLevel = 1;
  private groups: Record<WeaponId, THREE.Group>;
  private muzzleFlash: THREE.PointLight;
  private flashTimer = 0;
  cooldown = 0;
  reloadTimer = 0;
  reloadTotal = 1;
  switchTimer = 0;
  private kick = 0;
  private pump = 0;

  /** Weapons not yet earned on the campaign ladder — unlocked via levels, airdrops, or workbench. */
  locked: Set<WeaponId> = new Set<WeaponId>(['plasma', 'launcher', 'railgun']);

  constructor(
    private camera: THREE.PerspectiveCamera,
    private runtimes: Record<WeaponId, WeaponRuntime>,
    private audio: AudioWorld,
  ) {
    this.groups = {
      pistol: buildPistol(),
      rifle: buildRifle(),
      shotgun: buildShotgun(),
      plasma: buildPlasma(),
      launcher: buildLauncher(),
      railgun: buildRailgun(),
    };
    for (const id of WEAPON_ORDER) {
      this.groups[id].visible = id === this.current;
      this.groups[id].scale.setScalar(0.52);
      camera.add(this.groups[id]);
    }
    this.muzzleFlash = new THREE.PointLight(new THREE.Color('#ffb347'), 0, 8, 2);
    this.muzzleFlash.position.set(0.3, -0.25, -0.9);
    camera.add(this.muzzleFlash);

    const key = new THREE.PointLight(new THREE.Color('#9fb8e8'), 1.15, 2.4, 1.6);
    key.position.set(0.2, 0.25, 0);
    camera.add(key);
  }

  get busy(): boolean {
    return this.reloadTimer > 0 || this.switchTimer > 0;
  }

  unlock(id: WeaponId): void {
    this.locked.delete(id);
  }

  unlockAll(): void {
    this.locked.clear();
  }

  switchTo(id: WeaponId): void {
    if (id === this.current || this.busy || this.locked.has(id)) return;
    this.groups[this.current].visible = false;
    this.current = id;
    this.groups[id].visible = true;
    this.switchTimer = 0.55;
    this.reloadTimer = 0;
    this.cooldown = 0.25;
    this.audio.uiClick();
  }

  cycle(dir: number): void {
    const order = WEAPON_ORDER.filter((id) => !this.locked.has(id));
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

  tryFire(player: PlayerState, moving: boolean, gameTime = 0): FireShot | null {
    if (this.busy || this.cooldown > 0) return null;
    const rt = this.runtimes[this.current];
    const eff = effectiveWeapon(this.current, rt.levels, this.autoLevel);
    const overcharged = player.overchargeUntil > gameTime;
    if (rt.mag <= 0) {
      this.audio.dryFire();
      this.startReload();
      return null;
    }
    if (!overcharged) {
      rt.mag -= 1;
    }
    this.cooldown = overcharged ? eff.fireInterval * 0.72 : eff.fireInterval;
    this.kick = 1;
    if (this.current === 'shotgun') this.pump = 1;
    this.flashTimer = 0.05;
    this.muzzleFlash.color.set(WEAPONS[this.current].tracerColor);
    this.audio.gunshot(this.current);

    this.camera.getWorldDirection(_baseDir);
    const spreadBase = THREE.MathUtils.degToRad(
      WEAPONS[this.current].spreadDeg * (1 - player.ads) + WEAPONS[this.current].adsSpreadDeg * player.ads,
    );
    const spread = spreadBase * (1 + (moving ? 0.85 : 0));
    const dirs: THREE.Vector3[] = [];
    _right.crossVectors(_up, _baseDir).normalize();
    _camUp.crossVectors(_baseDir, _right).normalize();
    for (let i = 0; i < eff.pellets; i++) {
      const d = _baseDir.clone();
      if (spread > 0) {
        const a = Math.random() * Math.PI * 2;
        const r = (i === 0 && eff.pellets === 1 ? Math.random() * 0.35 : Math.sqrt(Math.random())) * spread;
        d.addScaledVector(_right, Math.cos(a) * r).addScaledVector(_camUp, Math.sin(a) * r).normalize();
      }
      dirs.push(d);
    }
    const muzzleWorld = (this.groups[this.current].userData.muzzle as THREE.Object3D).getWorldPosition(new THREE.Vector3());
    return {
      dirs,
      muzzleWorld,
      damage: overcharged ? eff.damage * 1.2 : eff.damage,
      range: WEAPONS[this.current].range,
    };
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
    this.kick = Math.max(0, this.kick - dt * 6.5);
    this.pump = Math.max(0, this.pump - dt * 3.2);
    this.flashTimer = Math.max(0, this.flashTimer - dt);
    this.muzzleFlash.intensity = this.flashTimer > 0 ? 26 * (this.flashTimer / 0.05) : 0;

    const now = performance.now();
    const g = this.groups[this.current];
    const ads = (g.userData.adsEase as number) ?? 0;
    const adsT = (this.camera.userData.adsEase as number) ?? 0;
    g.userData.adsEase = THREE.MathUtils.damp(ads, adsT, 12, dt);
    const a = g.userData.adsEase as number;
    const swayX = Math.sin(now * 0.0016) * 0.0038;
    const swayY = Math.cos(now * 0.0013) * 0.0038;
    const switchDip = Math.sin(Math.min(1, this.switchTimer / 0.55) * Math.PI) * -0.24;
    const reloadDip = this.reloadTimer > 0 ? Math.sin((1 - this.reloadTimer / this.reloadTotal) * Math.PI) * -0.18 : 0;
    g.position.set(
      THREE.MathUtils.lerp(0.16, 0, a) + swayX,
      THREE.MathUtils.lerp(-0.12, -0.01, a) + swayY + switchDip + reloadDip - this.kick * WEAPONS[this.current].kickback,
      THREE.MathUtils.lerp(-0.5, -0.34, a) + this.kick * 0.06,
    );
    g.rotation.set(this.kick * 0.12 + (this.reloadTimer > 0 ? 0.35 : 0), this.kick * 0.02, -this.kick * 0.05);

    if (this.current === 'pistol' && g.userData.slide) {
      (g.userData.slide as THREE.Mesh).position.z = -0.14 + this.kick * 0.035;
    } else if (this.current === 'shotgun' && g.userData.pumpMesh) {
      (g.userData.pumpMesh as THREE.Mesh).position.z = -0.55 + this.pump * 0.12;
    }
  }
}
