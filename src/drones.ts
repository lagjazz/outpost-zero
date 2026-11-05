// Enemy drones: five procedural multi-part types, AI behaviors, projectiles.
import * as THREE from 'three';
import { DRONES } from './config';
import type { Collider, DroneKind } from './state';

export interface Drone {
  kind: DroneKind;
  group: THREE.Group;
  hp: number;
  shield: number;
  maxShield: number;
  radius: number;
  phase: number;
  strafe: number;
  fireTimer: number;
  burstLeft: number;
  burstTimer: number;
  spotted: boolean;
  dying: boolean;
  deathTimer: number;
  targetTower: boolean;
  beepTimer: number;
  charge: number; // warden: >0 while aiming a sniper shot
  chargeTick: number;
  hitN: THREE.Vector3 | null; // accumulated wall-push normal from the previous frame
  rotors: THREE.Object3D[];
  bodyHit: THREE.Mesh;
  shieldHit: THREE.Mesh | null;
  weakHit: THREE.Mesh | null;
  shieldMat: THREE.MeshBasicMaterial | null;
  vel: THREE.Vector3;
}

export interface DroneCallbacks {
  onPlayerHit(dmg: number, from: THREE.Vector3): void;
  onExplosion(pos: THREE.Vector3, kind: DroneKind, killedByPlayer: boolean): void;
  onLaser(from: THREE.Vector3, to: THREE.Vector3): void;
  onBeep(pitch: number): void;
}

const armor = (c: number) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.5, metalness: 0.65 });
const hitMat = new THREE.MeshBasicMaterial({ visible: false });

// Memoized geometry factories: every drone of a kind reuses the same buffer
// geometry (materials stay per-drone so hit-flash/shield state is independent).
// Warm-hostiles builds one of each kind at boot, which uploads these buffers
// once; later spawns allocate no GPU data at all.
const geoCache = new Map<string, THREE.BufferGeometry>();
function geo(key: string, make: () => THREE.BufferGeometry): THREE.BufferGeometry {
  let g = geoCache.get(key);
  if (!g) {
    g = make();
    geoCache.set(key, g);
  }
  return g;
}
const gBox = (w: number, h: number, d: number): THREE.BufferGeometry => geo(`box:${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
const gCyl = (rt: number, rb: number, h: number, s: number): THREE.BufferGeometry => geo(`cyl:${rt},${rb},${h},${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s));
const gSph = (r: number, ws: number, hs: number): THREE.BufferGeometry => geo(`sph:${r},${ws},${hs}`, () => new THREE.SphereGeometry(r, ws, hs));
const gSphArc = (r: number, ws: number, hs: number, ps: number, pl: number): THREE.BufferGeometry => geo(`sphA:${r},${ws},${hs},${ps},${pl}`, () => new THREE.SphereGeometry(r, ws, hs, 0, Math.PI * 2, ps, pl));
const gTorus = (r: number, t: number, rs: number, ts: number): THREE.BufferGeometry => geo(`tor:${r},${t},${rs},${ts}`, () => new THREE.TorusGeometry(r, t, rs, ts));
const gCap = (r: number, l: number, cs: number, rs: number): THREE.BufferGeometry => geo(`cap:${r},${l},${cs},${rs}`, () => new THREE.CapsuleGeometry(r, l, cs, rs));

function rotor(parent: THREE.Group, x: number, y: number, z: number, r: number, blades: THREE.Material): THREE.Object3D {
  const arm = new THREE.Group();
  arm.position.set(x, y, z);
  const duct = new THREE.Mesh(gTorus(r, 0.045, 6, 14), armor(0x2c3340));
  duct.rotation.x = Math.PI / 2;
  arm.add(duct);
  const bladesG = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const b = new THREE.Mesh(gBox(r * 1.9, 0.015, 0.08), blades);
    b.rotation.y = (i * Math.PI) / 2;
    bladesG.add(b);
  }
  arm.add(bladesG);
  parent.add(arm);
  parent.userData.blades = parent.userData.blades || [];
  parent.userData.blades.push(bladesG);
  return arm;
}

function buildScout(): THREE.Group {
  const g = new THREE.Group();
  const bodyMat = armor(0x465064);
  const hull = new THREE.Mesh(gCap(0.24, 0.42, 4, 10), bodyMat);
  hull.rotation.x = Math.PI / 2;
  g.add(hull);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x331100, emissive: new THREE.Color('#ff5a1f'), emissiveIntensity: 2.4 });
  const eye = new THREE.Mesh(gSph(0.09, 10, 10), eyeMat);
  eye.position.set(0, 0, -0.42);
  g.add(eye);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    const ax = Math.cos(a) * 0.42;
    const az = Math.sin(a) * 0.42;
    const arm = new THREE.Mesh(gBox(0.35, 0.04, 0.06), bodyMat);
    arm.position.set(ax * 0.6, 0.12, az * 0.6);
    arm.lookAt(0, 0.12, 0);
    g.add(arm);
    rotor(g, ax, 0.18, az, 0.2, armor(0x6b7686));
  }
  g.userData.blades = g.userData.blades as THREE.Object3D[];
  return g;
}

function buildHeavy(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(1.3, 0.75, 1.0), armor(0x3a4454));
  hull.castShadow = true;
  g.add(hull);
  const shoulder = new THREE.Mesh(gBox(1.7, 0.22, 0.5), armor(0x2e3746));
  shoulder.position.set(0, 0.42, 0);
  g.add(shoulder);
  rotor(g, -0.75, 0.55, 0, 0.42, armor(0x59647a));
  rotor(g, 0.75, 0.55, 0, 0.42, armor(0x59647a));
  const coreMat = new THREE.MeshStandardMaterial({ color: 0x032a33, emissive: new THREE.Color('#22d3ee'), emissiveIntensity: 2 });
  const core = new THREE.Mesh(gCyl(0.18, 0.18, 0.3, 10), coreMat);
  core.position.set(0, 0, 0.55);
  g.add(core);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x330d0d, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 2.2 });
  for (const sx of [-0.3, 0.3]) {
    const eye = new THREE.Mesh(gSph(0.07, 8, 8), eyeMat);
    eye.position.set(sx, 0.05, -0.52);
    g.add(eye);
  }
  const shieldMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#06b6d4'),
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const shield = new THREE.Mesh(gSphArc(1.25, 16, 12, Math.PI * 0.7, Math.PI * 1.6), shieldMat);
  shield.rotation.y = Math.PI / 2;
  g.add(shield);
  g.userData.shieldMesh = shield;
  return g;
}

function buildKamikaze(): THREE.Group {
  const g = new THREE.Group();
  const coreMat = new THREE.MeshStandardMaterial({ color: 0x3a0d0d, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 2.4 });
  const core = new THREE.Mesh(gSph(0.34, 12, 12), coreMat);
  g.add(core);
  const frame = new THREE.Mesh(gBox(1.0, 0.08, 1.0), armor(0x4a4034));
  frame.rotation.y = Math.PI / 4;
  frame.position.y = 0.18;
  g.add(frame);
  for (const [ax, az] of [[0.42, 0.42], [-0.42, 0.42], [0.42, -0.42], [-0.42, -0.42]] as const) {
    rotor(g, ax, 0.26, az, 0.22, armor(0x6b7686));
  }
  const fin = new THREE.Mesh(gBox(0.05, 0.3, 0.2), armor(0x333c49));
  fin.position.set(0, 0.35, 0.3);
  g.add(fin);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x330d0d, emissive: new THREE.Color('#ff7847'), emissiveIntensity: 2.6 });
  const eye = new THREE.Mesh(gSph(0.08, 8, 8), eyeMat);
  eye.position.set(0, -0.2, -0.3);
  g.add(eye);
  g.userData.blades = g.userData.blades as THREE.Object3D[];
  return g;
}

function buildWarden(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gCyl(0.3, 0.42, 0.95, 6), armor(0x4e473a));
  hull.castShadow = true;
  g.add(hull);
  const collar = new THREE.Mesh(gCyl(0.46, 0.46, 0.12, 6), armor(0x33302a));
  collar.position.y = 0.4;
  g.add(collar);
  rotor(g, -0.62, 0.62, 0, 0.3, armor(0x77705f));
  rotor(g, 0.62, 0.62, 0, 0.3, armor(0x77705f));
  const barrel = new THREE.Mesh(gCyl(0.05, 0.06, 0.95, 6), armor(0x2a2d35));
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, -0.05, -0.72);
  g.add(barrel);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x332200, emissive: new THREE.Color('#ffb020'), emissiveIntensity: 2.6 });
  const eye = new THREE.Mesh(gSph(0.1, 10, 10), eyeMat);
  eye.position.set(0, 0.05, -0.4);
  g.add(eye);
  const scope = new THREE.Mesh(gBox(0.16, 0.1, 0.24), armor(0x1f2430));
  scope.position.set(0, 0.28, -0.3);
  g.add(scope);
  const fin = new THREE.Mesh(gBox(0.05, 0.34, 0.26), armor(0x333c49));
  fin.position.set(0, 0.28, 0.36);
  g.add(fin);
  g.userData.blades = g.userData.blades as THREE.Object3D[];
  return g;
}

function buildBomber(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(1.15, 0.42, 1.15), armor(0x504636));
  hull.castShadow = true;
  g.add(hull);
  const deck = new THREE.Mesh(gBox(1.5, 0.12, 1.5), armor(0x38322a));
  deck.position.y = 0.26;
  g.add(deck);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    rotor(g, Math.cos(a) * 0.88, 0.36, Math.sin(a) * 0.88, 0.26, armor(0x6f6858));
  }
  const podMat = new THREE.MeshStandardMaterial({ color: 0x241f1a, roughness: 0.6, metalness: 0.4, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 1.1 });
  const pod = new THREE.Mesh(gSph(0.3, 12, 10), podMat);
  pod.position.y = -0.42;
  g.add(pod);
  const stripMat = new THREE.MeshStandardMaterial({ color: 0x111, emissive: new THREE.Color('#f59e0b'), emissiveIntensity: 1.6 });
  const strip = new THREE.Mesh(gBox(1.2, 0.06, 0.06), stripMat);
  strip.position.set(0, 0.34, 0.62);
  g.add(strip);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x330d0d, emissive: new THREE.Color('#ff7847'), emissiveIntensity: 2.2 });
  for (const sx of [-0.4, 0.4]) {
    const eye = new THREE.Mesh(gSph(0.06, 8, 8), eyeMat);
    eye.position.set(sx, 0.1, -0.6);
    g.add(eye);
  }
  g.userData.blades = g.userData.blades as THREE.Object3D[];
  return g;
}

function buildCrawler(): THREE.Group {
  // Six-legged ground sweeper: low armored chassis, forward sensor mast,
  // rear pusher duct. Legs are animated via userData.legs.
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gCyl(0.5, 0.36, 1.1, 6), armor(0x4a4436));
  hull.rotation.x = Math.PI / 2;
  hull.position.y = 0.62;
  hull.castShadow = true;
  g.add(hull);
  const plate = new THREE.Mesh(gBox(0.9, 0.14, 0.7), armor(0x35302a));
  plate.position.y = 1.0;
  g.add(plate);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x330d0d, emissive: new THREE.Color('#ff5a1f'), emissiveIntensity: 2.4 });
  const eye = new THREE.Mesh(gSph(0.09, 8, 8), eyeMat);
  eye.position.set(0, 0.75, -0.58);
  g.add(eye);
  const jawMat = new THREE.MeshStandardMaterial({ color: 0x1c1a16, roughness: 0.6, metalness: 0.5, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 0.8 });
  const jaw = new THREE.Mesh(gBox(0.34, 0.2, 0.3), jawMat);
  jaw.position.set(0, 0.45, -0.68);
  g.add(jaw);
  const legGeo = gBox(0.09, 0.62, 0.09);
  const legMat = armor(0x2c3038);
  const legs: THREE.Object3D[] = [];
  for (const [side, phase] of [[-1, 0], [1, Math.PI]] as const) {
    for (let i = 0; i < 3; i++) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.42, 0.66, -0.36 + i * 0.36);
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.y = -0.3;
      hip.add(leg);
      hip.rotation.z = side * 0.5;
      hip.userData.phase = phase + i * 1.3;
      g.add(hip);
      legs.push(hip);
    }
  }
  g.userData.legs = legs;
  rotor(g, 0, 1.08, 0.42, 0.26, armor(0x6f6858));
  return g;
}

function buildColossus(): THREE.Group {
  // Armored flying fortress: slab hull, four big rotors, front shield dome, gun pod.
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(2.5, 1.3, 1.9), armor(0x39414f));
  hull.castShadow = true;
  g.add(hull);
  const bridge = new THREE.Mesh(gBox(1.5, 0.5, 1.2), armor(0x2b3340));
  bridge.position.y = 0.85;
  g.add(bridge);
  for (const [sx, sz] of [[-1.35, -0.9], [1.35, -0.9], [-1.35, 0.9], [1.35, 0.9]] as const) {
    rotor(g, sx, 1.15, sz, 0.68, armor(0x57627a));
  }
  const coreMat = new THREE.MeshStandardMaterial({ color: 0x032a33, emissive: new THREE.Color('#22d3ee'), emissiveIntensity: 1.8 });
  const core = new THREE.Mesh(gCyl(0.3, 0.3, 0.5, 12), coreMat);
  core.position.set(0, 0, 0.98);
  g.add(core);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x330d0d, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 2.2 });
  for (const sx of [-0.55, 0, 0.55]) {
    const eye = new THREE.Mesh(gSph(0.09, 8, 8), eyeMat);
    eye.position.set(sx, 0.15, -0.98);
    g.add(eye);
  }
  const pod = new THREE.Mesh(gBox(0.8, 0.4, 1.2), armor(0x232a35));
  pod.position.set(0, -0.8, -0.5);
  g.add(pod);
  for (const sx of [-0.25, 0.25]) {
    const barrel = new THREE.Mesh(gCyl(0.06, 0.07, 0.9, 6), armor(0x1a1f28));
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(sx, -0.85, -1.2);
    g.add(barrel);
  }
  const shieldMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#06b6d4'),
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const shield = new THREE.Mesh(gSphArc(2.05, 18, 12, Math.PI * 0.7, Math.PI * 1.6), shieldMat);
  shield.rotation.y = Math.PI / 2;
  g.add(shield);
  g.userData.shieldMesh = shield;
  return g;
}

function bodyTop(p: THREE.Vector3): THREE.Vector3 {
  return new THREE.Vector3(p.x, p.y + 1.8, p.z);
}

/** Minimum distance between segments p→q and r→s (clamped endpoints). */
function segSegDist(p: THREE.Vector3, q: THREE.Vector3, r: THREE.Vector3, s: THREE.Vector3): number {
  const d1 = q.clone().sub(p);
  const d2 = s.clone().sub(r);
  const rp = p.clone().sub(r);
  const a = d1.lengthSq();
  const e = d2.lengthSq();
  const f = d2.dot(rp);
  let t = 0;
  let u = 0;
  let b = 0;
  let c = 0;
  if (a <= 1e-9 && e <= 1e-9) return p.distanceTo(r);
  if (a <= 1e-9) {
    u = f / e;
  } else {
    c = d1.dot(rp);
    if (e <= 1e-9) {
      t = -c / a;
    } else {
      b = d1.dot(d2);
      const denom = a * e - b * b;
      t = denom !== 0 ? (b * f - c * e) / denom : 0;
      u = (b * t + f) / e;
    }
    t = THREE.MathUtils.clamp(t, 0, 1);
    u = THREE.MathUtils.clamp(u, 0, 1);
    t = THREE.MathUtils.clamp((b * u - c) / a, 0, 1);
  }
  u = THREE.MathUtils.clamp(u, 0, 1);
  return p.clone().addScaledVector(d1, t).distanceTo(r.clone().addScaledVector(d2, u));
}

const BUILDERS: Record<DroneKind, () => THREE.Group> = {
  scout: buildScout,
  heavy: buildHeavy,
  kamikaze: buildKamikaze,
  warden: buildWarden,
  bomber: buildBomber,
  crawler: buildCrawler,
  colossus: buildColossus,
};

interface BoltSlot {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  dmg: number;
}

const PROJ_POOL = 96;
const BOMB_POOL = 24;

export class DroneManager {
  drones: Drone[] = [];
  private scene: THREE.Scene;
  // Projectile/bomb pools: pre-built hidden meshes (shared geo+material) so the
  // first shot of a fight compiles nothing and uploads nothing — the boot
  // warm-up already painted these. Only visibility/position change at runtime.
  private projectiles: BoltSlot[] = [];
  private projFree: number[] = [];
  private bombs: BoltSlot[] = [];
  private bombFree: number[] = [];
  private projGeo = gSph(0.09, 6, 6);
  private projMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff6b4a'), blending: THREE.AdditiveBlending, transparent: true, fog: false });
  private bombGeo = gSph(0.16, 8, 8);
  private bombMat = new THREE.MeshStandardMaterial({ color: 0x14100c, roughness: 0.7, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 1.2 });
  private colliders: Collider[] = [];
  private hpMul = 1;
  private dmgMul = 1;

  constructor(scene: THREE.Scene, private cb: DroneCallbacks) {
    this.scene = scene;
    for (let i = 0; i < PROJ_POOL; i++) {
      const mesh = new THREE.Mesh(this.projGeo, this.projMat);
      mesh.visible = false;
      scene.add(mesh);
      this.projectiles.push({ mesh, vel: new THREE.Vector3(), life: 0, dmg: 0 });
      this.projFree.push(i);
    }
    for (let i = 0; i < BOMB_POOL; i++) {
      const mesh = new THREE.Mesh(this.bombGeo, this.bombMat);
      mesh.visible = false;
      scene.add(mesh);
      this.bombs.push({ mesh, vel: new THREE.Vector3(), life: 0, dmg: 0 });
      this.bombFree.push(i);
    }
  }

  /** Grab a bolt slot (steal the oldest when saturated) and arm it. */
  private fireBolt(pool: BoltSlot[], free: number[], from: THREE.Vector3, vel: THREE.Vector3, life: number, dmg: number, scale = 1): void {
    let i = free.pop();
    if (i === undefined) {
      // oldest active bolt: hide it and reuse its slot
      const old = pool.find((p) => p.life > 0);
      if (old) {
        old.mesh.visible = false;
        i = pool.indexOf(old);
      }
    }
    if (i === undefined) return;
    const b = pool[i];
    b.mesh.scale.setScalar(scale);
    b.mesh.position.copy(from);
    b.mesh.visible = true;
    b.vel.copy(vel);
    b.life = life;
    b.dmg = dmg;
  }

  private static release(pool: BoltSlot[], free: number[], i: number): void {
    pool[i].mesh.visible = false;
    pool[i].life = 0;
    free.push(i);
  }

  /** Buildings/terrain the drones must fly around (same set the player collides with). */
  setColliders(list: Collider[]): void {
    this.colliders = list;
  }

  /** Per-level difficulty scaling: HP/shield at spawn, damage at shot time. */
  setMods(hpMul: number, dmgMul: number): void {
    this.hpMul = hpMul;
    this.dmgMul = dmgMul;
  }

  spawn(kind: DroneKind, pos: THREE.Vector3): void {
    const base = DRONES[kind];
    const group = BUILDERS[kind]();
    group.position.copy(pos);

    const bodyHit = new THREE.Mesh(gSph(base.radius + 0.12, 8, 8), hitMat);
    group.add(bodyHit);
    let shieldHit: THREE.Mesh | null = null;
    let weakHit: THREE.Mesh | null = null;
    if (kind === 'heavy' || kind === 'colossus') {
      const big = kind === 'colossus';
      shieldHit = new THREE.Mesh(gSph(big ? 2.15 : 1.3, 10, 8), hitMat);
      shieldHit.position.set(0, 0, big ? -0.9 : -0.45);
      group.add(shieldHit);
      weakHit = new THREE.Mesh(gSph(big ? 0.75 : 0.5, 6, 6), hitMat);
      weakHit.position.set(0, big ? 1.05 : 0.62, 0);
      group.add(weakHit);
    }

    const drone: Drone = {
      kind,
      group,
      hp: Math.round(base.hp * this.hpMul),
      shield: Math.round(base.shield * this.hpMul),
      maxShield: Math.round(base.shield * this.hpMul),
      radius: base.radius,
      phase: Math.random() * Math.PI * 2,
      strafe: Math.random() > 0.5 ? 1 : -1,
      fireTimer: 1 + Math.random() * 2,
      burstLeft: 0,
      burstTimer: 0,
      spotted: false,
      dying: false,
      deathTimer: 0,
      targetTower: kind === 'kamikaze' && Math.random() < 0.35,
      beepTimer: 0,
      charge: 0,
      chargeTick: 0,
      hitN: null,
      rotors: (group.userData.blades as THREE.Object3D[]) ?? [],
      bodyHit,
      shieldHit,
      weakHit,
      shieldMat: kind === 'heavy' ? ((group.userData.shieldMesh as THREE.Mesh).material as THREE.MeshBasicMaterial) : null,
      vel: new THREE.Vector3(),
    };
    bodyHit.userData = { drone, part: 'body' };
    if (shieldHit) shieldHit.userData = { drone, part: 'shield' };
    if (weakHit) weakHit.userData = { drone, part: 'weak' };
    this.drones.push(drone);
    this.scene.add(group);
  }

  hitMeshes(): THREE.Object3D[] {
    const out: THREE.Object3D[] = [];
    for (const d of this.drones) {
      if (d.dying) continue;
      out.push(d.bodyHit);
      if (d.shieldHit && d.shield > 0) out.push(d.shieldHit);
      if (d.weakHit) out.push(d.weakHit);
    }
    return out;
  }

  /** Apply weapon damage to a drone via one of its hit proxies.
   *  'shield' = frontal energy shield, 'weak' = top rotor / back core (x2 shield break),
   *  'body' = hull (shield does not protect from behind). */
  applyDamage(drone: Drone, part: string, dmg: number): { killed: boolean; shieldHit: boolean } {
    if (drone.dying) return { killed: false, shieldHit: false };
    let d = dmg;
    let shieldHit = false;
    if (part === 'weak') {
      d *= 2;
      if (drone.shield > 0) {
        const absorbed = Math.min(drone.shield, d);
        drone.shield -= absorbed;
        d -= absorbed;
        shieldHit = true;
      }
    } else if (part === 'shield' && drone.shield > 0) {
      const absorbed = Math.min(drone.shield, d);
      drone.shield -= absorbed;
      d -= absorbed;
      shieldHit = true;
    }
    if (drone.shield <= 0 && drone.shieldMat) {
      drone.shieldMat.opacity = 0;
      const sm = drone.group.userData.shieldMesh as THREE.Mesh | undefined;
      if (sm) sm.visible = false;
    }
    drone.hp -= d;
    if (drone.shieldMat && drone.shield <= 0) {
      drone.shieldMat.opacity = 0;
      const sm = drone.group.userData.shieldMesh as THREE.Mesh | undefined;
      if (sm) sm.visible = false;
    }
    if (drone.hp <= 0) {
      if (drone.kind === 'kamikaze') {
        this.cb.onExplosion(drone.group.position.clone(), 'kamikaze', true);
      }
      drone.dying = true;
      drone.deathTimer = 1.4;
      if (drone.kind !== 'kamikaze') this.cb.onExplosion(drone.group.position.clone(), drone.kind, true);
      return { killed: true, shieldHit };
    }
    return { killed: false, shieldHit };
  }

  killAll(): void {
    for (const d of this.drones) {
      if (!d.dying) {
        d.dying = true;
        d.deathTimer = 0.9;
        this.cb.onExplosion(d.group.position.clone(), d.kind, true);
      }
    }
  }

  activeCount(): number {
    return this.drones.filter((d) => !d.dying).length;
  }

  /** Remove every hostile, projectile and bomb (campaign level switch). */
  clearHostiles(): void {
    for (const d of this.drones) this.scene.remove(d.group);
    this.drones.length = 0;
    this.projectiles.forEach((p, i) => {
      if (p.life > 0) DroneManager.release(this.projectiles, this.projFree, i);
    });
    this.bombs.forEach((b, i) => {
      if (b.life > 0) DroneManager.release(this.bombs, this.bombFree, i);
    });
  }

  update(
    dt: number,
    time: number,
    playerPos: THREE.Vector3,
    towerPos: THREE.Vector3,
    alive: boolean,
  ): void {
    const tmp = new THREE.Vector3();

    for (let i = this.drones.length - 1; i >= 0; i--) {
      const d = this.drones[i];
      // rotor spin always
      for (const b of d.rotors) b.rotation.y += dt * 40;

      if (d.dying) {
        d.deathTimer -= dt;
        d.group.rotation.z += dt * 6;
        d.group.rotation.x += dt * 2;
        d.group.position.y -= dt * 9;
        d.group.traverse((o) => {
          const mesh = o as THREE.Mesh;
          if (mesh.isMesh && mesh.material instanceof THREE.MeshStandardMaterial) {
            let mat = mesh.material;
            if (!mesh.userData.dyingInit) {
              mesh.userData.dyingInit = true;
              mat = mat.clone();
              mesh.material = mat;
            }
            mat.emissive = new THREE.Color('#ff6a00');
            mat.emissiveIntensity = Math.max(0, mat.emissiveIntensity * (1 - dt * 2));
          }
        });
        if (d.deathTimer <= 0) {
          this.scene.remove(d.group);
          this.drones.splice(i, 1);
        }
        continue;
      }

      if (!alive) continue;

      const base = DRONES[d.kind];
      const target = d.kind === 'kamikaze' && d.targetTower ? towerPos : playerPos;
      const toTarget = tmp.copy(target).sub(d.group.position);
      const dist = toTarget.length();
      toTarget.normalize();

      // separation from neighbours
      const sep = new THREE.Vector3();
      for (const o of this.drones) {
        if (o === d || o.dying) continue;
        const dd = o.group.position.distanceTo(d.group.position);
        if (dd < 2.2 && dd > 0.001) sep.addScaledVector(d.group.position.clone().sub(o.group.position), (2.2 - dd) / dd);
      }

      const speed = base.speed;

      if (d.kind === 'scout') {
        const ring = 11 + Math.sin(time * 0.6 + d.phase) * 3;
        const tangential = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(d.strafe);
        const weave = new THREE.Vector3(Math.sin(time * 3.1 + d.phase), Math.sin(time * 2.3 + d.phase * 2) * 0.5, Math.cos(time * 2.7 + d.phase)).multiplyScalar(d.spotted ? 0.8 : 2.6);
        // close in until the orbit ring, then hold station (was inverted: fled outward)
        const desired = toTarget.multiplyScalar(dist > ring ? speed : -speed * 0.6).add(tangential.multiplyScalar(speed * 0.5)).add(weave).add(sep.multiplyScalar(1.4));
        desired.y += (3.2 + Math.sin(time + d.phase) * 1.2 - d.group.position.y) * 1.5;
        this.steer(d, desired, dt, speed * 1.6);
      } else if (d.kind === 'heavy') {
        const ring = 17;
        const tangential = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(d.strafe * (d.spotted ? 0 : speed * 0.55));
        const desired = toTarget.multiplyScalar(dist > ring ? speed : -speed * 0.4).add(tangential).add(sep.multiplyScalar(2));
        desired.y += (4.2 - d.group.position.y) * 1.2;
        this.steer(d, desired, dt, speed * 1.2);
        d.group.lookAt(playerPos.x, d.group.position.y, playerPos.z);
      } else if (d.kind === 'colossus') {
        // slow siege unit: wide low orbit, face the player, volley its gun pods
        const ring = 20;
        const tangential = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(d.strafe * (d.spotted ? 0 : speed * 0.5));
        const desired = toTarget.clone().multiplyScalar(dist > ring ? speed : -speed * 0.35).add(tangential).add(sep.multiplyScalar(2.4));
        desired.y += (5.0 - d.group.position.y) * 1.1;
        this.steer(d, desired, dt, speed * 1.2);
        d.group.lookAt(playerPos.x, d.group.position.y, playerPos.z);
      } else if (d.kind === 'crawler') {
        // ground sweeper: drives at the player, blocked by every low obstacle
        const desired = toTarget.clone().multiplyScalar(speed).add(sep.multiplyScalar(1.6));
        desired.y += (0.75 - d.group.position.y) * 3;
        this.steer(d, desired, dt, speed * 1.4);
        d.group.lookAt(target.x, d.group.position.y, target.z);
        const legs = d.group.userData.legs as THREE.Object3D[] | undefined;
        if (legs) for (let li = 0; li < legs.length; li++) legs[li].rotation.x = Math.sin(time * 16 + (legs[li].userData.phase as number)) * 0.42;
        if (dist < 2.4 && alive) {
          d.fireTimer -= dt;
          if (d.fireTimer <= 0) {
            d.fireTimer = base.fireInterval * (0.85 + Math.random() * 0.4);
            const from = d.group.position.clone().add(new THREE.Vector3(0, 0.6, 0));
            const to = playerPos.clone().add(new THREE.Vector3(0, 1.0, 0));
            this.cb.onLaser(from, to); // short bite flash
            this.cb.onPlayerHit(Math.round(base.fireDamage * this.dmgMul), from);
            this.cb.onBeep(240);
          }
        }
      } else if (d.kind === 'warden') {
        // long-range designator: holds a wide orbit, charges, then snaps one shot
        const ring = 30;
        const tangential = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(d.strafe * speed * 0.75);
        const radial = dist > ring + 3 ? speed : dist < ring - 4 ? -speed : 0;
        const desired = toTarget.clone().multiplyScalar(radial).add(tangential).add(sep.multiplyScalar(1.5));
        desired.y += (6.2 + Math.sin(time * 0.7 + d.phase) * 0.8 - d.group.position.y) * 1.2;
        this.steer(d, desired, dt, speed * 1.3);
        d.group.lookAt(target.x, d.group.position.y, target.z);
      } else if (d.kind === 'bomber') {
        // hovers high over the yard and lobs gravity bombs at the player
        const ring = 20;
        const tangential = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(d.strafe * speed * 0.6);
        const desired = toTarget.clone().multiplyScalar(dist > ring ? speed : -speed * 0.4).add(tangential).add(sep.multiplyScalar(2));
        desired.y += (7.6 - d.group.position.y) * 1.2;
        this.steer(d, desired, dt, speed * 1.3);
        d.group.lookAt(target.x, d.group.position.y, target.z);
        d.fireTimer -= dt;
        if (d.fireTimer <= 0) {
          d.fireTimer = base.fireInterval * (0.8 + Math.random() * 0.5);
          const from = d.group.position.clone().add(new THREE.Vector3(0, -0.6, 0));
          const lead = new THREE.Vector3(playerPos.x - d.group.position.x, 0, playerPos.z - d.group.position.z).clampLength(0, 3);
          this.fireBolt(this.bombs, this.bombFree, from, new THREE.Vector3(lead.x, -1, lead.z), 8, 0);
          this.cb.onBeep(320);
        }
      } else {
        // kamikaze dive
        const desired = toTarget.clone().multiplyScalar(speed).add(sep.multiplyScalar(1.8));
        desired.y += (Math.max(target.y + 1.2, 1.6) - d.group.position.y) * 0.8;
        this.steer(d, desired, dt, speed * 1.5);
        d.group.lookAt(target.x, target.y + 1, target.z);
        const fuseRange = d.targetTower ? 3.6 : 2.4;
        if (dist < fuseRange) {
          this.cb.onExplosion(d.group.position.clone(), 'kamikaze', false);
          d.dying = true;
          d.deathTimer = 0.01;
          continue;
        }
        d.beepTimer -= dt;
        if (d.beepTimer <= 0) {
          const closeness = THREE.MathUtils.clamp(1 - dist / 40, 0, 1);
          this.cb.onBeep(500 + closeness * 1400);
          d.beepTimer = 0.9 - closeness * 0.75;
        }
      }

      // warden charge-up & sniper shot
      if (d.kind === 'warden') {
        if (d.charge > 0) {
          d.charge -= dt;
          d.chargeTick -= dt;
          if (d.chargeTick <= 0) {
            d.chargeTick = 0.28;
            const from = d.group.position.clone();
            const to = playerPos.clone().add(new THREE.Vector3(0, 1.1, 0));
            this.cb.onLaser(from, to); // red aim-line telegraph
            this.cb.onBeep(1150);
          }
          if (d.charge <= 0) {
            const from = d.group.position.clone();
            const to = playerPos.clone().add(new THREE.Vector3(0, 1.0, 0));
            const jitter = new THREE.Vector3((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.5).multiplyScalar(d.spotted ? 0.3 : 1);
            to.add(jitter);
            this.cb.onLaser(from, to);
            this.fireBolt(this.projectiles, this.projFree, from, to.sub(from).normalize().multiplyScalar(34), 4, Math.round(base.fireDamage * this.dmgMul), 1.4);
          }
        } else {
          d.fireTimer -= dt;
          if (d.fireTimer <= 0 && dist < base.attackRange) {
            d.charge = 1.4;
            d.chargeTick = 0;
            d.fireTimer = base.fireInterval * (0.85 + Math.random() * 0.4);
          }
        }
      }

      // fire laser bursts (scout, heavy & colossus)
      if (d.kind === 'scout' || d.kind === 'heavy' || d.kind === 'colossus') {
        d.fireTimer -= dt;
        if (d.burstLeft > 0) {
          d.burstTimer -= dt;
          if (d.burstTimer <= 0) {
            d.burstLeft -= 1;
            d.burstTimer = 0.12;
            const from = d.group.position.clone();
            const jitter = new THREE.Vector3((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.0, (Math.random() - 0.5) * 1.4).multiplyScalar(d.spotted ? 0.4 : 1);
            const to = playerPos.clone().add(new THREE.Vector3(0, 1.1, 0)).add(jitter);
            this.cb.onLaser(from, to);
            const dir = to.sub(from).normalize().multiplyScalar(19);
            this.fireBolt(this.projectiles, this.projFree, from, dir, 3, Math.round(base.fireDamage * this.dmgMul));
          }
        } else if (d.fireTimer <= 0 && dist < base.attackRange) {
          d.burstLeft = base.burst;
          d.burstTimer = 0;
          d.fireTimer = base.fireInterval * (0.7 + Math.random() * 0.6);
        }
      }

      // shield ripple
      if (d.shieldMat && d.shield > 0) {
        d.shieldMat.opacity = 0.16 + 0.08 * Math.sin(time * 5 + d.phase);
      }
    }

    // projectiles (laser bolts are blocked by buildings; fast bolts sweep-tested)
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (p.life <= 0) continue;
      const prev = p.mesh.position.clone();
      p.mesh.position.addScaledVector(p.vel, dt);
      p.life -= dt;
      const pp = p.mesh.position;
      let hit = false;
      // swept test against the player's body capsule (feet → head)
      if (alive && segSegDist(prev, pp, playerPos, bodyTop(playerPos)) < 0.45) {
        this.cb.onPlayerHit(p.dmg, pp);
        hit = true;
      }
      if (this.solidAt(pp)) hit = true;
      if (p.life <= 0 || pp.y < 0.1) hit = true;
      if (hit) DroneManager.release(this.projectiles, this.projFree, i);
    }

    // bomber drop-shots: gravity fall, detonate on ground or building
    for (let i = 0; i < this.bombs.length; i++) {
      const b = this.bombs[i];
      if (b.life <= 0) continue;
      b.vel.y -= 15 * dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      b.mesh.rotation.x += dt * 6;
      b.life -= dt;
      const bp = b.mesh.position;
      if (bp.y <= 0.3 || this.solidAt(bp) || b.life <= 0) {
        this.cb.onExplosion(bp.clone(), 'bomber', false);
        DroneManager.release(this.bombs, this.bombFree, i);
      }
    }
  }

  /** True when a world point sits inside a collider volume below its top face. */
  private solidAt(p: THREE.Vector3): boolean {
    for (const c of this.colliders) {
      if (p.y >= c.top) continue;
      if (c.kind === 'cyl') {
        if (Math.hypot(p.x - c.x, p.z - c.z) < c.r) return true;
      } else if (Math.abs(p.x - c.x) < c.hx && Math.abs(p.z - c.z) < c.hz) return true;
    }
    return false;
  }

  /** Wall-following: when last frame's collision pushed us out, strip the
   *  into-wall steering component and add a tangential one so drones slide
   *  along the obstacle to a way around instead of grinding into it. */
  private applyWallSlide(d: Drone, desired: THREE.Vector3, speed: number): void {
    const n = d.hitN;
    if (!n) return;
    const len = n.length();
    if (len < 1e-4) return;
    n.divideScalar(len);
    const into = desired.dot(n);
    if (into > 0) desired.addScaledVector(n, -into);
    const tangent = new THREE.Vector3(-n.z, 0, n.x).multiplyScalar(d.strafe);
    desired.addScaledVector(tangent, speed * 0.85);
  }

  private steer(d: Drone, desired: THREE.Vector3, dt: number, maxSpeed: number): void {
    this.applyWallSlide(d, desired, maxSpeed);
    if (desired.length() > maxSpeed) desired.setLength(maxSpeed);
    d.vel.lerp(desired, Math.min(1, dt * 2.2));
    d.group.position.addScaledVector(d.vel, dt);
    const minY = d.kind === 'crawler' ? 0.75 : 1.2;
    if (d.group.position.y < minY) d.group.position.y = minY;
    if (d.group.position.y > 9) d.group.position.y = 9;
    const r = Math.hypot(d.group.position.x, d.group.position.z);
    if (r > 50) {
      d.group.position.x *= 50 / r;
      d.group.position.z *= 50 / r;
    }
    this.resolveCollision(d);
  }

  /** Push drones out of buildings/terrain so they can never clip through walls.
   *  Only blocks when the drone belly is below the collider top, so high drones
   *  can legally overfly low structures (shack roof, blast walls, containers). */
  private resolveCollision(d: Drone): void {
    const p = d.group.position;
    const pad = d.radius + 0.35;
    d.hitN = null;
    for (const c of this.colliders) {
      if (p.y - 0.4 >= c.top) continue;
      if (c.kind === 'cyl') {
        const dx = p.x - c.x;
        const dz = p.z - c.z;
        const dist = Math.hypot(dx, dz);
        const min = c.r + pad;
        if (dist < min) {
          const nx = dist > 1e-4 ? dx / dist : 1;
          const nz = dist > 1e-4 ? dz / dist : 0;
          p.x += nx * (min - dist);
          p.z += nz * (min - dist);
          const into = -(d.vel.x * nx + d.vel.z * nz);
          if (into > 0) {
            d.vel.x += nx * into;
            d.vel.z += nz * into;
          }
          if (d.hitN) d.hitN.add(new THREE.Vector3(nx, 0, nz));
          else d.hitN = new THREE.Vector3(nx, 0, nz);
        }
      } else {
        const dx = p.x - c.x;
        const dz = p.z - c.z;
        const ox = c.hx + pad - Math.abs(dx);
        const oz = c.hz + pad - Math.abs(dz);
        if (ox > 0 && oz > 0) {
          let nx = 0;
          let nz = 0;
          if (ox < oz) {
            nx = dx >= 0 ? 1 : -1;
            p.x += nx * ox;
            if ((dx >= 0 ? d.vel.x : -d.vel.x) < 0) d.vel.x = 0;
          } else {
            nz = dz >= 0 ? 1 : -1;
            p.z += nz * oz;
            if ((dz >= 0 ? d.vel.z : -d.vel.z) < 0) d.vel.z = 0;
          }
          if (d.hitN) d.hitN.add(new THREE.Vector3(nx, 0, nz));
          else d.hitN = new THREE.Vector3(nx, 0, nz);
        }
      }
    }
  }
}
