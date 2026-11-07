// Enemy drones: 10 procedural multi-part classes, AI behaviors, projectiles, zero per-frame GC allocations.
import * as THREE from 'three';
import { DRONES } from './config';
import type { Collider, DroneKind } from './state';

export interface Drone {
  kind: DroneKind;
  group: THREE.Group;
  hp: number;
  maxHp: number;
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
  charge: number;
  chargeTick: number;
  stunTimer: number;
  isHvt?: boolean;
  hitN: THREE.Vector3 | null;
  rotors: THREE.Object3D[];
  bodyHit: THREE.Mesh;
  shieldHit: THREE.Mesh | null;
  weakHit: THREE.Mesh | null;
  shieldMat: THREE.MeshBasicMaterial | null;
  cloakMat?: THREE.MeshStandardMaterial;
  vel: THREE.Vector3;
}

export interface DroneCallbacks {
  onPlayerHit(dmg: number, from: THREE.Vector3): void;
  onExplosion(pos: THREE.Vector3, kind: DroneKind, killedByPlayer: boolean): void;
  onLaser(from: THREE.Vector3, to: THREE.Vector3, color?: string): void;
  onBeep(pitch: number): void;
}

const armor = (c: number, r = 0.45, m = 0.7) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const hitMat = new THREE.MeshBasicMaterial({ visible: false });

// Memoized geometry cache so spawning drones never allocates GPU buffers
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
const gSphArc = (r: number, ws: number, hs: number, ps: number, pl: number): THREE.BufferGeometry =>
  geo(`sphA:${r},${ws},${hs},${ps},${pl}`, () => new THREE.SphereGeometry(r, ws, hs, 0, Math.PI * 2, ps, pl));
const gTorus = (r: number, t: number, rs: number, ts: number): THREE.BufferGeometry => geo(`tor:${r},${t},${rs},${ts}`, () => new THREE.TorusGeometry(r, t, rs, ts));
const gCap = (r: number, l: number, cs: number, rs: number): THREE.BufferGeometry => geo(`cap:${r},${l},${cs},${rs}`, () => new THREE.CapsuleGeometry(r, l, cs, rs));
const gOct = (r: number): THREE.BufferGeometry => geo(`oct:${r}`, () => new THREE.OctahedronGeometry(r, 0));

// Shared static materials for drone parts (except per-instance shieldMat / cloakMat)
const matCache = new Map<string, THREE.MeshStandardMaterial>();
function sharedArmor(c: number, r = 0.45, m = 0.7): THREE.MeshStandardMaterial {
  const k = `a:${c}:${r}:${m}`;
  let mat = matCache.get(k);
  if (!mat) {
    mat = armor(c, r, m);
    matCache.set(k, mat);
  }
  return mat;
}
function sharedEmissive(c: number, emHex: string, int: number): THREE.MeshStandardMaterial {
  const k = `e:${c}:${emHex}:${int}`;
  let mat = matCache.get(k);
  if (!mat) {
    mat = new THREE.MeshStandardMaterial({ color: c, emissive: new THREE.Color(emHex), emissiveIntensity: int, roughness: 0.3, metalness: 0.5 });
    matCache.set(k, mat);
  }
  return mat;
}

function rotor(parent: THREE.Group, x: number, y: number, z: number, r: number, bladesMat: THREE.Material): THREE.Object3D {
  const arm = new THREE.Group();
  arm.position.set(x, y, z);
  const duct = new THREE.Mesh(gTorus(r, 0.045, 6, 14), sharedArmor(0x28313e, 0.5, 0.75));
  duct.rotation.x = Math.PI / 2;
  arm.add(duct);
  const bladesG = new THREE.Group();
  for (let i = 0; i < 2; i++) {
    const b = new THREE.Mesh(gBox(r * 1.9, 0.015, 0.08), bladesMat);
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
  const bodyMat = sharedArmor(0x465268, 0.4, 0.75);
  const trimMat = sharedArmor(0x252d3a, 0.65, 0.4);
  const hull = new THREE.Mesh(gCap(0.24, 0.44, 4, 10), bodyMat);
  hull.rotation.x = Math.PI / 2;
  g.add(hull);
  const canopy = new THREE.Mesh(gBox(0.32, 0.14, 0.42), trimMat);
  canopy.position.set(0, 0.14, -0.05);
  g.add(canopy);
  const eye = new THREE.Mesh(gSph(0.095, 10, 10), sharedEmissive(0x331100, '#ff5a1f', 2.5));
  eye.position.set(0, 0, -0.44);
  g.add(eye);
  const gun = new THREE.Mesh(gCyl(0.025, 0.025, 0.35, 6), trimMat);
  gun.rotation.x = Math.PI / 2;
  gun.position.set(0, -0.14, -0.32);
  g.add(gun);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    const ax = Math.cos(a) * 0.44;
    const az = Math.sin(a) * 0.44;
    const arm = new THREE.Mesh(gBox(0.36, 0.04, 0.06), bodyMat);
    arm.position.set(ax * 0.6, 0.12, az * 0.6);
    arm.lookAt(0, 0.12, 0);
    g.add(arm);
    rotor(g, ax, 0.18, az, 0.2, sharedArmor(0x6b7686));
  }
  return g;
}

function buildHeavy(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(1.32, 0.76, 1.04), sharedArmor(0x3a4454, 0.4, 0.75));
  hull.castShadow = true;
  g.add(hull);
  const shoulder = new THREE.Mesh(gBox(1.75, 0.24, 0.54), sharedArmor(0x293240, 0.65, 0.5));
  shoulder.position.set(0, 0.44, 0);
  g.add(shoulder);
  rotor(g, -0.78, 0.56, 0, 0.42, sharedArmor(0x59647a));
  rotor(g, 0.78, 0.56, 0, 0.42, sharedArmor(0x59647a));
  const core = new THREE.Mesh(gCyl(0.2, 0.2, 0.34, 10), sharedEmissive(0x032a33, '#22d3ee', 2.2));
  core.position.set(0, 0.58, 0.1);
  g.add(core);
  for (const sx of [-0.32, 0.32]) {
    const eye = new THREE.Mesh(gSph(0.075, 8, 8), sharedEmissive(0x330d0d, '#ef4444', 2.4));
    eye.position.set(sx, 0.06, -0.54);
    g.add(eye);
    const cannon = new THREE.Mesh(gCyl(0.04, 0.04, 0.48, 8), sharedArmor(0x1e242e));
    cannon.rotation.x = Math.PI / 2;
    cannon.position.set(sx, -0.22, -0.62);
    g.add(cannon);
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
  const core = new THREE.Mesh(gOct(0.38), sharedEmissive(0x3a0d0d, '#ef4444', 2.6));
  g.add(core);
  const frame = new THREE.Mesh(gBox(1.04, 0.08, 1.04), sharedArmor(0x4a4034, 0.5, 0.6));
  frame.rotation.y = Math.PI / 4;
  frame.position.y = 0.18;
  g.add(frame);
  for (const [ax, az] of [[0.44, 0.44], [-0.44, 0.44], [0.44, -0.44], [-0.44, -0.44]] as const) {
    rotor(g, ax, 0.26, az, 0.22, sharedArmor(0x6b7686));
  }
  const fin = new THREE.Mesh(gBox(0.05, 0.32, 0.22), sharedArmor(0x333c49));
  fin.position.set(0, 0.35, 0.3);
  g.add(fin);
  const eye = new THREE.Mesh(gSph(0.085, 8, 8), sharedEmissive(0x330d0d, '#ff7847', 2.8));
  eye.position.set(0, -0.18, -0.32);
  g.add(eye);
  return g;
}

function buildWarden(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gCyl(0.3, 0.42, 0.95, 6), sharedArmor(0x4e473a, 0.45, 0.7));
  hull.castShadow = true;
  g.add(hull);
  const collar = new THREE.Mesh(gCyl(0.46, 0.46, 0.12, 6), sharedArmor(0x33302a, 0.7, 0.4));
  collar.position.y = 0.4;
  g.add(collar);
  rotor(g, -0.62, 0.62, 0, 0.3, sharedArmor(0x77705f));
  rotor(g, 0.62, 0.62, 0, 0.3, sharedArmor(0x77705f));
  const barrel = new THREE.Mesh(gCyl(0.05, 0.06, 1.05, 6), sharedArmor(0x2a2d35, 0.3, 0.85));
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, -0.05, -0.76);
  g.add(barrel);
  const eye = new THREE.Mesh(gSph(0.11, 10, 10), sharedEmissive(0x332200, '#ffb020', 2.8));
  eye.position.set(0, 0.05, -0.42);
  g.add(eye);
  const scope = new THREE.Mesh(gBox(0.16, 0.1, 0.26), sharedArmor(0x1f2430));
  scope.position.set(0, 0.28, -0.3);
  g.add(scope);
  return g;
}

function buildBomber(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(1.18, 0.44, 1.18), sharedArmor(0x504636, 0.45, 0.65));
  hull.castShadow = true;
  g.add(hull);
  const deck = new THREE.Mesh(gBox(1.52, 0.12, 1.52), sharedArmor(0x38322a, 0.7, 0.4));
  deck.position.y = 0.26;
  g.add(deck);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    rotor(g, Math.cos(a) * 0.88, 0.36, Math.sin(a) * 0.88, 0.26, sharedArmor(0x6f6858));
  }
  const pod = new THREE.Mesh(gSph(0.32, 12, 10), sharedEmissive(0x241f1a, '#ef4444', 1.4));
  pod.position.y = -0.42;
  g.add(pod);
  const strip = new THREE.Mesh(gBox(1.2, 0.06, 0.06), sharedEmissive(0x111111, '#f59e0b', 1.8));
  strip.position.set(0, 0.34, 0.62);
  g.add(strip);
  for (const sx of [-0.4, 0.4]) {
    const eye = new THREE.Mesh(gSph(0.065, 8, 8), sharedEmissive(0x330d0d, '#ff7847', 2.2));
    eye.position.set(sx, 0.1, -0.6);
    g.add(eye);
  }
  return g;
}

function buildCrawler(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gCyl(0.5, 0.36, 1.1, 6), sharedArmor(0x4a4436, 0.5, 0.65));
  hull.rotation.x = Math.PI / 2;
  hull.position.y = 0.62;
  hull.castShadow = true;
  g.add(hull);
  const plate = new THREE.Mesh(gBox(0.9, 0.14, 0.7), sharedArmor(0x35302a, 0.75, 0.4));
  plate.position.y = 1.0;
  g.add(plate);
  const eye = new THREE.Mesh(gSph(0.095, 8, 8), sharedEmissive(0x330d0d, '#ff5a1f', 2.5));
  eye.position.set(0, 0.75, -0.58);
  g.add(eye);
  const jaw = new THREE.Mesh(gBox(0.36, 0.2, 0.32), sharedEmissive(0x1c1a16, '#ef4444', 1.2));
  jaw.position.set(0, 0.45, -0.68);
  g.add(jaw);
  const legGeo = gBox(0.09, 0.62, 0.09);
  const legMat = sharedArmor(0x2c3038);
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
  rotor(g, 0, 1.08, 0.42, 0.26, sharedArmor(0x6f6858));
  return g;
}

function buildColossus(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(2.5, 1.3, 1.9), sharedArmor(0x39414f, 0.4, 0.75));
  hull.castShadow = true;
  g.add(hull);
  const bridge = new THREE.Mesh(gBox(1.5, 0.5, 1.2), sharedArmor(0x2b3340, 0.65, 0.5));
  bridge.position.y = 0.85;
  g.add(bridge);
  for (const [sx, sz] of [[-1.35, -0.9], [1.35, -0.9], [-1.35, 0.9], [1.35, 0.9]] as const) {
    rotor(g, sx, 1.15, sz, 0.68, sharedArmor(0x57627a));
  }
  const core = new THREE.Mesh(gCyl(0.32, 0.32, 0.52, 12), sharedEmissive(0x032a33, '#22d3ee', 2.2));
  core.position.set(0, 1.15, 0);
  g.add(core);
  for (const sx of [-0.55, 0, 0.55]) {
    const eye = new THREE.Mesh(gSph(0.095, 8, 8), sharedEmissive(0x330d0d, '#ef4444', 2.4));
    eye.position.set(sx, 0.15, -0.98);
    g.add(eye);
  }
  const pod = new THREE.Mesh(gBox(0.8, 0.4, 1.2), sharedArmor(0x232a35));
  pod.position.set(0, -0.8, -0.5);
  g.add(pod);
  for (const sx of [-0.25, 0.25]) {
    const barrel = new THREE.Mesh(gCyl(0.06, 0.07, 0.9, 6), sharedArmor(0x1a1f28));
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

/** NEW: Phantom Stealth Wing — swept delta-wing assassin with optical camouflage shimmer. */
function buildPhantom(): THREE.Group {
  const g = new THREE.Group();
  const cloakMat = new THREE.MeshStandardMaterial({
    color: 0x2a1f3d,
    roughness: 0.25,
    metalness: 0.85,
    emissive: new THREE.Color('#7e22ce'),
    emissiveIntensity: 0.6,
    transparent: true,
    opacity: 0.75,
  });
  g.userData.cloakMat = cloakMat;
  // Swept fuselage + delta wings
  const fuselage = new THREE.Mesh(gBox(0.45, 0.22, 1.15), cloakMat);
  g.add(fuselage);
  const leftWing = new THREE.Mesh(gBox(0.85, 0.06, 0.55), cloakMat);
  leftWing.position.set(-0.5, 0, 0.1);
  leftWing.rotation.y = 0.38;
  g.add(leftWing);
  const rightWing = new THREE.Mesh(gBox(0.85, 0.06, 0.55), cloakMat);
  rightWing.position.set(0.5, 0, 0.1);
  rightWing.rotation.y = -0.38;
  g.add(rightWing);
  // Twin violet phase emitters
  for (const sx of [-0.24, 0.24]) {
    const emitter = new THREE.Mesh(gSph(0.08, 8, 8), sharedEmissive(0x2e1065, '#d8b4fe', 3.0));
    emitter.position.set(sx, 0.02, -0.58);
    g.add(emitter);
  }
  rotor(g, -0.55, 0.1, 0.15, 0.2, sharedArmor(0x4c1d95));
  rotor(g, 0.55, 0.1, 0.15, 0.2, sharedArmor(0x4c1d95));
  return g;
}

/** NEW: Matrix Shield Relay — hexagonal support drone with rotating gyro-rings that projects shields to allies. */
function buildShielder(): THREE.Group {
  const g = new THREE.Group();
  const core = new THREE.Mesh(gOct(0.44), sharedEmissive(0x083344, '#38bdf8', 2.5));
  g.add(core);
  // Rotating outer matrix ring
  const ring = new THREE.Mesh(gTorus(0.68, 0.055, 8, 18), sharedArmor(0x38bdf8, 0.25, 0.85));
  g.add(ring);
  // Dorsal emitterspire
  const pylon = new THREE.Mesh(gCyl(0.06, 0.16, 0.75, 8), sharedArmor(0x1e293b));
  pylon.position.y = 0.55;
  g.add(pylon);
  const beacon = new THREE.Mesh(gSph(0.14, 10, 10), sharedEmissive(0x083344, '#22d3ee', 3.2));
  beacon.position.y = 0.95;
  g.add(beacon);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    rotor(g, Math.cos(a) * 0.65, 0.15, Math.sin(a) * 0.65, 0.22, sharedArmor(0x64748b));
  }
  g.userData.blades = [...(g.userData.blades || []), ring];
  return g;
}

/** NEW: Titan Apex Dreadnought — boss-tier heavy carrier with quad nacelles, radar dish & dual plasma turrets. */
function buildTitan(): THREE.Group {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(gBox(3.2, 1.5, 2.4), sharedArmor(0x272d38, 0.38, 0.8));
  hull.castShadow = true;
  g.add(hull);
  const upperDeck = new THREE.Mesh(gBox(2.1, 0.65, 1.6), sharedArmor(0x3b4454, 0.55, 0.6));
  upperDeck.position.y = 1.05;
  g.add(upperDeck);
  // Glowing dorsal reactor core (weak spot)
  const reactor = new THREE.Mesh(gCyl(0.45, 0.45, 0.65, 12), sharedEmissive(0x450a0a, '#f59e0b', 2.8));
  reactor.position.set(0, 1.48, 0);
  g.add(reactor);
  // Rotating radar dish
  const radar = new THREE.Mesh(gBox(1.1, 0.12, 0.22), sharedArmor(0x94a3b8, 0.3, 0.85));
  radar.position.set(0, 1.9, -0.35);
  g.add(radar);
  // Quad heavy thruster nacelles
  for (const [sx, sz] of [[-1.85, -1.1], [1.85, -1.1], [-1.85, 1.1], [1.85, 1.1]] as const) {
    rotor(g, sx, 1.3, sz, 0.82, sharedArmor(0x64748b));
  }
  // Dual underslung heavy plasma cannons
  for (const sx of [-0.65, 0.65]) {
    const turret = new THREE.Mesh(gBox(0.55, 0.45, 0.9), sharedArmor(0x1e242d));
    turret.position.set(sx, -0.95, -0.6);
    g.add(turret);
    const barrel = new THREE.Mesh(gCyl(0.08, 0.09, 1.25, 8), sharedArmor(0x0f172a));
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(sx, -0.98, -1.45);
    g.add(barrel);
    const muzzleGlow = new THREE.Mesh(gSph(0.11, 8, 8), sharedEmissive(0x450a0a, '#ef4444', 2.8));
    muzzleGlow.position.set(sx, -0.98, -0.95);
    g.add(muzzleGlow);
  }
  // Frontal shield dome
  const shieldMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#f59e0b'),
    transparent: true,
    opacity: 0.24,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const shield = new THREE.Mesh(gSphArc(2.55, 18, 12, Math.PI * 0.7, Math.PI * 1.6), shieldMat);
  shield.rotation.y = Math.PI / 2;
  g.add(shield);
  g.userData.shieldMesh = shield;
  g.userData.blades = [...(g.userData.blades || []), radar];
  return g;
}

// Pre-allocated scratch vectors for zero GC pressure in update loop
const _tmp = new THREE.Vector3();
const _sep = new THREE.Vector3();
const _tangential = new THREE.Vector3();
const _weave = new THREE.Vector3();
const _desired = new THREE.Vector3();
const _from = new THREE.Vector3();
const _to = new THREE.Vector3();
const _prev = new THREE.Vector3();
const _bodyTop = new THREE.Vector3();
const _d1 = new THREE.Vector3();
const _d2 = new THREE.Vector3();
const _rp = new THREE.Vector3();
const _p1 = new THREE.Vector3();
const _p2 = new THREE.Vector3();
const _tangent = new THREE.Vector3();

function segSegDist(p: THREE.Vector3, q: THREE.Vector3, r: THREE.Vector3, s: THREE.Vector3): number {
  _d1.copy(q).sub(p);
  _d2.copy(s).sub(r);
  _rp.copy(p).sub(r);
  const a = _d1.lengthSq();
  const e = _d2.lengthSq();
  const f = _d2.dot(_rp);
  let t = 0;
  let u = 0;
  let b = 0;
  let c = 0;
  if (a <= 1e-9 && e <= 1e-9) return p.distanceTo(r);
  if (a <= 1e-9) {
    u = f / e;
  } else {
    c = _d1.dot(_rp);
    if (e <= 1e-9) {
      t = -c / a;
    } else {
      b = _d1.dot(_d2);
      const denom = a * e - b * b;
      t = denom !== 0 ? (b * f - c * e) / denom : 0;
      u = (b * t + f) / e;
    }
    t = THREE.MathUtils.clamp(t, 0, 1);
    u = THREE.MathUtils.clamp(u, 0, 1);
    t = THREE.MathUtils.clamp((b * u - c) / a, 0, 1);
  }
  u = THREE.MathUtils.clamp(u, 0, 1);
  _p1.copy(p).addScaledVector(_d1, t);
  _p2.copy(r).addScaledVector(_d2, u);
  return _p1.distanceTo(_p2);
}

const BUILDERS: Record<DroneKind, () => THREE.Group> = {
  scout: buildScout,
  heavy: buildHeavy,
  kamikaze: buildKamikaze,
  warden: buildWarden,
  bomber: buildBomber,
  crawler: buildCrawler,
  colossus: buildColossus,
  phantom: buildPhantom,
  shielder: buildShielder,
  titan: buildTitan,
};

interface BoltSlot {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  dmg: number;
}

const PROJ_POOL = 110;
const BOMB_POOL = 28;

export class DroneManager {
  drones: Drone[] = [];
  private scene: THREE.Scene;
  private projectiles: BoltSlot[] = [];
  private projFree: number[] = [];
  private bombs: BoltSlot[] = [];
  private bombFree: number[] = [];
  private projGeo = gSph(0.095, 6, 6);
  private projMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff6b4a'), blending: THREE.AdditiveBlending, transparent: true, fog: false });
  private bombGeo = gSph(0.17, 8, 8);
  private bombMat = new THREE.MeshStandardMaterial({ color: 0x14100c, roughness: 0.7, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 1.4 });
  private colliders: Collider[] = [];
  private hpMul = 1;
  private dmgMul = 1;
  private _hitCache: THREE.Object3D[] = [];
  private _hitDirty = true;

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

  private fireBolt(pool: BoltSlot[], free: number[], from: THREE.Vector3, vel: THREE.Vector3, life: number, dmg: number, scale = 1): void {
    let i = free.pop();
    if (i === undefined) {
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

  setColliders(list: Collider[]): void {
    this.colliders = list;
  }

  setMods(hpMul: number, dmgMul: number): void {
    this.hpMul = hpMul;
    this.dmgMul = dmgMul;
  }

  spawn(kind: DroneKind, pos: THREE.Vector3, isHvt = false): Drone {
    const base = DRONES[kind];
    const group = BUILDERS[kind]();
    group.position.copy(pos);
    if (isHvt) group.scale.setScalar(1.22);

    const bodyHit = new THREE.Mesh(gSph(base.radius + 0.14, 8, 8), hitMat);
    group.add(bodyHit);
    let shieldHit: THREE.Mesh | null = null;
    let weakHit: THREE.Mesh | null = null;
    if (kind === 'heavy' || kind === 'colossus' || kind === 'titan') {
      const sRad = kind === 'titan' ? 2.65 : kind === 'colossus' ? 2.15 : 1.3;
      const sOff = kind === 'titan' ? -1.1 : kind === 'colossus' ? -0.9 : -0.45;
      const wRad = kind === 'titan' ? 0.95 : kind === 'colossus' ? 0.75 : 0.52;
      const wOff = kind === 'titan' ? 1.45 : kind === 'colossus' ? 1.05 : 0.62;
      shieldHit = new THREE.Mesh(gSph(sRad, 10, 8), hitMat);
      shieldHit.position.set(0, 0, sOff);
      group.add(shieldHit);
      weakHit = new THREE.Mesh(gSph(wRad, 6, 6), hitMat);
      weakHit.position.set(0, wOff, 0);
      group.add(weakHit);
    } else if (kind === 'warden' || kind === 'bomber' || kind === 'shielder') {
      weakHit = new THREE.Mesh(gSph(0.42, 6, 6), hitMat);
      weakHit.position.set(0, kind === 'bomber' ? -0.42 : 0.45, 0);
      group.add(weakHit);
    }

    const hpScaled = Math.round(base.hp * this.hpMul * (isHvt ? 1.65 : 1));
    const shScaled = Math.round(base.shield * this.hpMul * (isHvt ? 1.5 : 1));
    const shieldMesh = group.userData.shieldMesh as THREE.Mesh | undefined;
    const drone: Drone = {
      kind,
      group,
      hp: hpScaled,
      maxHp: hpScaled,
      shield: shScaled,
      maxShield: Math.max(1, shScaled),
      radius: base.radius * (isHvt ? 1.2 : 1),
      phase: Math.random() * Math.PI * 2,
      strafe: Math.random() > 0.5 ? 1 : -1,
      fireTimer: 0.9 + Math.random() * 1.8,
      burstLeft: 0,
      burstTimer: 0,
      spotted: false,
      dying: false,
      deathTimer: 0,
      targetTower: kind === 'kamikaze' && Math.random() < 0.35,
      beepTimer: 0,
      charge: 0,
      chargeTick: 0,
      stunTimer: 0,
      isHvt,
      hitN: null,
      rotors: (group.userData.blades as THREE.Object3D[]) ?? [],
      bodyHit,
      shieldHit,
      weakHit,
      shieldMat: shieldMesh ? (shieldMesh.material as THREE.MeshBasicMaterial) : null,
      cloakMat: group.userData.cloakMat as THREE.MeshStandardMaterial | undefined,
      vel: new THREE.Vector3(),
    };
    bodyHit.userData = { drone, part: 'body' };
    if (shieldHit) shieldHit.userData = { drone, part: 'shield' };
    if (weakHit) weakHit.userData = { drone, part: 'weak' };
    this.drones.push(drone);
    this.scene.add(group);
    this._hitDirty = true;
    return drone;
  }

  hitMeshes(): THREE.Object3D[] {
    if (this._hitDirty) {
      this._hitCache.length = 0;
      for (let i = 0; i < this.drones.length; i++) {
        const d = this.drones[i];
        if (d.dying) continue;
        this._hitCache.push(d.bodyHit);
        if (d.shieldHit && d.shield > 0) this._hitCache.push(d.shieldHit);
        if (d.weakHit) this._hitCache.push(d.weakHit);
      }
      this._hitDirty = false;
    }
    return this._hitCache;
  }

  applyDamage(drone: Drone, part: string, dmg: number, shieldMult = 1.0): { killed: boolean; shieldHit: boolean; crit: boolean } {
    if (drone.dying) return { killed: false, shieldHit: false, crit: false };
    let d = dmg;
    let shieldHit = false;
    const crit = part === 'weak';
    if (crit) {
      d *= 2.0;
      if (drone.shield > 0) {
        const absorbed = Math.min(drone.shield, d * shieldMult);
        drone.shield -= absorbed;
        d = Math.max(0, d - absorbed / shieldMult);
        shieldHit = true;
      }
    } else if (part === 'shield' && drone.shield > 0) {
      const effShieldDmg = d * shieldMult;
      const absorbed = Math.min(drone.shield, effShieldDmg);
      drone.shield -= absorbed;
      d = Math.max(0, d - absorbed / shieldMult);
      shieldHit = true;
    }
    if (drone.shield <= 0 && drone.shieldMat) {
      drone.shieldMat.opacity = 0;
      const sm = drone.group.userData.shieldMesh as THREE.Mesh | undefined;
      if (sm && sm.visible) {
        sm.visible = false;
        this._hitDirty = true;
      }
    }
    drone.hp -= d;
    if (drone.hp <= 0) {
      drone.dying = true;
      drone.deathTimer = drone.kind === 'kamikaze' ? 0.02 : 0.95;
      this._hitDirty = true;
      this.cb.onExplosion(drone.group.position.clone(), drone.kind, true);
      return { killed: true, shieldHit, crit };
    }
    return { killed: false, shieldHit, crit };
  }

  /** Stun and damage all active drones within radius (Cryo-EMP pod). */
  empShockwave(center: THREE.Vector3, radius: number, dmg: number): number {
    let hitCount = 0;
    for (const d of [...this.drones]) {
      if (d.dying) continue;
      if (d.group.position.distanceTo(center) <= radius) {
        d.stunTimer = 4.5;
        d.shield = 0;
        this.applyDamage(d, 'body', dmg, 2.0);
        hitCount++;
      }
    }
    return hitCount;
  }

  killAll(): void {
    for (const d of this.drones) {
      if (!d.dying) {
        d.dying = true;
        d.deathTimer = 0.85;
        this.cb.onExplosion(d.group.position.clone(), d.kind, true);
      }
    }
    this._hitDirty = true;
  }

  activeCount(): number {
    let n = 0;
    for (let i = 0; i < this.drones.length; i++) if (!this.drones[i].dying) n++;
    return n;
  }

  clearHostiles(): void {
    for (const d of this.drones) this.scene.remove(d.group);
    this.drones.length = 0;
    this._hitDirty = true;
    this.projectiles.forEach((p, i) => {
      if (p.life > 0) DroneManager.release(this.projectiles, this.projFree, i);
    });
    this.bombs.forEach((b, i) => {
      if (b.life > 0) DroneManager.release(this.bombs, this.bombFree, i);
    });
  }

  update(dt: number, time: number, playerPos: THREE.Vector3, towerPos: THREE.Vector3, alive: boolean): void {
    for (let i = this.drones.length - 1; i >= 0; i--) {
      const d = this.drones[i];
      for (let r = 0; r < d.rotors.length; r++) d.rotors[r].rotation.y += dt * 38;

      // Fast, zero-allocation death tumble (no material cloning!)
      if (d.dying) {
        d.deathTimer -= dt;
        d.group.rotation.z += dt * 7;
        d.group.rotation.x += dt * 3;
        d.group.position.y -= dt * 9.5;
        const s = Math.max(0.1, d.deathTimer);
        d.group.scale.setScalar(s);
        if (d.deathTimer <= 0) {
          this.scene.remove(d.group);
          this.drones.splice(i, 1);
          this._hitDirty = true;
        }
        continue;
      }

      if (!alive) continue;

      if (d.stunTimer > 0) {
        d.stunTimer -= dt;
        d.group.position.y = Math.max(1.2, d.group.position.y - dt * 1.5);
        d.group.rotation.z = Math.sin(time * 22 + d.phase) * 0.25;
        continue;
      } else {
        d.group.rotation.z = 0;
      }

      const base = DRONES[d.kind];
      const target = d.kind === 'kamikaze' && d.targetTower ? towerPos : playerPos;
      _tmp.copy(target).sub(d.group.position);
      const dist = _tmp.length();
      if (dist > 1e-4) _tmp.divideScalar(dist);

      // Separation from neighbours (zero allocations)
      _sep.set(0, 0, 0);
      for (let j = 0; j < this.drones.length; j++) {
        const o = this.drones[j];
        if (o === d || o.dying) continue;
        const dx = d.group.position.x - o.group.position.x;
        const dy = d.group.position.y - o.group.position.y;
        const dz = d.group.position.z - o.group.position.z;
        const dd = Math.hypot(dx, dy, dz);
        if (dd < 2.4 && dd > 0.001) {
          const push = (2.4 - dd) / dd;
          _sep.x += dx * push;
          _sep.y += dy * push;
          _sep.z += dz * push;
        }
      }

      const speed = base.speed;

      if (d.kind === 'scout' || d.kind === 'phantom') {
        const isPhantom = d.kind === 'phantom';
        if (isPhantom && d.cloakMat) {
          d.cloakMat.opacity = d.spotted || dist < 12 ? 0.92 : 0.24 + 0.16 * Math.sin(time * 4.5 + d.phase);
        }
        const ring = isPhantom ? 13 : 11 + Math.sin(time * 0.6 + d.phase) * 3;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * speed * (isPhantom ? 0.85 : 0.5));
        _weave
          .set(Math.sin(time * 3.4 + d.phase), Math.sin(time * 2.3 + d.phase * 2) * 0.5, Math.cos(time * 2.9 + d.phase))
          .multiplyScalar(d.spotted ? 0.8 : isPhantom ? 3.8 : 2.5);
        _desired
          .copy(_tmp)
          .multiplyScalar(dist > ring ? speed : -speed * 0.6)
          .add(_tangential)
          .add(_weave)
          .addScaledVector(_sep, 1.4);
        _desired.y += (3.4 + Math.sin(time + d.phase) * 1.2 - d.group.position.y) * 1.5;
        this.steer(d, _desired, dt, speed * 1.6);
        d.group.lookAt(playerPos.x, d.group.position.y, playerPos.z);
      } else if (d.kind === 'shielder') {
        // Shielder orbits at medium range and periodically restores shield to nearby allies
        const ring = 21;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * speed * 0.7);
        _desired
          .copy(_tmp)
          .multiplyScalar(dist > ring ? speed : -speed * 0.45)
          .add(_tangential)
          .addScaledVector(_sep, 1.8);
        _desired.y += (5.2 + Math.sin(time * 1.2 + d.phase) * 0.8 - d.group.position.y) * 1.3;
        this.steer(d, _desired, dt, speed * 1.3);
        d.chargeTick -= dt;
        if (d.chargeTick <= 0) {
          d.chargeTick = 1.6;
          for (let j = 0; j < this.drones.length; j++) {
            const ally = this.drones[j];
            if (ally === d || ally.dying || ally.kind === 'shielder') continue;
            if (ally.group.position.distanceTo(d.group.position) < 16 && ally.shield < ally.maxShield) {
              ally.shield = Math.min(ally.maxShield, ally.shield + 18);
              this.cb.onLaser(d.group.position, ally.group.position, '#38bdf8');
              break;
            }
          }
        }
      } else if (d.kind === 'heavy') {
        const ring = 17;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * (d.spotted ? 0 : speed * 0.55));
        _desired
          .copy(_tmp)
          .multiplyScalar(dist > ring ? speed : -speed * 0.4)
          .add(_tangential)
          .addScaledVector(_sep, 2);
        _desired.y += (4.2 - d.group.position.y) * 1.2;
        this.steer(d, _desired, dt, speed * 1.2);
        d.group.lookAt(playerPos.x, d.group.position.y, playerPos.z);
      } else if (d.kind === 'colossus' || d.kind === 'titan') {
        const isTitan = d.kind === 'titan';
        const ring = isTitan ? 23 : 20;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * (d.spotted ? 0 : speed * 0.5));
        _desired
          .copy(_tmp)
          .multiplyScalar(dist > ring ? speed : -speed * 0.35)
          .add(_tangential)
          .addScaledVector(_sep, 2.4);
        _desired.y += ((isTitan ? 6.2 : 5.0) - d.group.position.y) * 1.1;
        this.steer(d, _desired, dt, speed * 1.2);
        d.group.lookAt(playerPos.x, d.group.position.y, playerPos.z);
      } else if (d.kind === 'crawler') {
        _desired.copy(_tmp).multiplyScalar(speed).addScaledVector(_sep, 1.6);
        _desired.y += (0.75 - d.group.position.y) * 3;
        this.steer(d, _desired, dt, speed * 1.4);
        d.group.lookAt(target.x, d.group.position.y, target.z);
        const legs = d.group.userData.legs as THREE.Object3D[] | undefined;
        if (legs) {
          for (let li = 0; li < legs.length; li++) {
            legs[li].rotation.x = Math.sin(time * 16 + (legs[li].userData.phase as number)) * 0.42;
          }
        }
        if (dist < 2.5 && alive) {
          d.fireTimer -= dt;
          if (d.fireTimer <= 0) {
            d.fireTimer = base.fireInterval * (0.85 + Math.random() * 0.4);
            _from.copy(d.group.position).y += 0.6;
            _to.copy(playerPos).y += 1.0;
            this.cb.onLaser(_from, _to);
            this.cb.onPlayerHit(Math.round(base.fireDamage * this.dmgMul), _from);
            this.cb.onBeep(240);
          }
        }
      } else if (d.kind === 'warden') {
        const ring = 30;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * speed * 0.75);
        const radial = dist > ring + 3 ? speed : dist < ring - 4 ? -speed : 0;
        _desired.copy(_tmp).multiplyScalar(radial).add(_tangential).addScaledVector(_sep, 1.5);
        _desired.y += (6.2 + Math.sin(time * 0.7 + d.phase) * 0.8 - d.group.position.y) * 1.2;
        this.steer(d, _desired, dt, speed * 1.3);
        d.group.lookAt(target.x, d.group.position.y, target.z);
      } else if (d.kind === 'bomber') {
        const ring = 20;
        _tangential.set(-_tmp.z, 0, _tmp.x).multiplyScalar(d.strafe * speed * 0.6);
        _desired
          .copy(_tmp)
          .multiplyScalar(dist > ring ? speed : -speed * 0.4)
          .add(_tangential)
          .addScaledVector(_sep, 2);
        _desired.y += (7.6 - d.group.position.y) * 1.2;
        this.steer(d, _desired, dt, speed * 1.3);
        d.group.lookAt(target.x, d.group.position.y, target.z);
        d.fireTimer -= dt;
        if (d.fireTimer <= 0) {
          d.fireTimer = base.fireInterval * (0.8 + Math.random() * 0.5);
          _from.copy(d.group.position).y -= 0.6;
          _to.set(playerPos.x - d.group.position.x, 0, playerPos.z - d.group.position.z).clampLength(0, 3);
          _to.y = -1;
          this.fireBolt(this.bombs, this.bombFree, _from, _to, 8, 0);
          this.cb.onBeep(320);
        }
      } else {
        // kamikaze dive
        _desired.copy(_tmp).multiplyScalar(speed).addScaledVector(_sep, 1.8);
        _desired.y += (Math.max(target.y + 1.2, 1.6) - d.group.position.y) * 0.8;
        this.steer(d, _desired, dt, speed * 1.5);
        d.group.lookAt(target.x, target.y + 1, target.z);
        const fuseRange = d.targetTower ? 3.6 : 2.4;
        if (dist < fuseRange) {
          this.cb.onExplosion(d.group.position.clone(), 'kamikaze', false);
          d.dying = true;
          d.deathTimer = 0.01;
          this._hitDirty = true;
          continue;
        }
        d.beepTimer -= dt;
        if (d.beepTimer <= 0) {
          const closeness = THREE.MathUtils.clamp(1 - dist / 40, 0, 1);
          this.cb.onBeep(500 + closeness * 1400);
          d.beepTimer = 0.9 - closeness * 0.75;
        }
      }

      // Warden sniper charge & shot
      if (d.kind === 'warden') {
        if (d.charge > 0) {
          d.charge -= dt;
          d.chargeTick -= dt;
          if (d.chargeTick <= 0) {
            d.chargeTick = 0.28;
            _from.copy(d.group.position);
            _to.copy(playerPos).y += 1.1;
            this.cb.onLaser(_from, _to, '#ff3b30');
            this.cb.onBeep(1150);
          }
          if (d.charge <= 0) {
            _from.copy(d.group.position);
            const jScale = d.spotted ? 0.3 : 1;
            _to.set(
              playerPos.x + (Math.random() - 0.5) * 0.5 * jScale,
              playerPos.y + 1.0 + (Math.random() - 0.5) * 0.3 * jScale,
              playerPos.z + (Math.random() - 0.5) * 0.5 * jScale,
            );
            this.cb.onLaser(_from, _to, '#ff5a4a');
            _to.sub(_from).normalize().multiplyScalar(34);
            this.fireBolt(this.projectiles, this.projFree, _from, _to, 4, Math.round(base.fireDamage * this.dmgMul), 1.4);
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

      // Laser / plasma bursts
      if (
        d.kind === 'scout' ||
        d.kind === 'heavy' ||
        d.kind === 'colossus' ||
        d.kind === 'phantom' ||
        d.kind === 'shielder' ||
        d.kind === 'titan'
      ) {
        d.fireTimer -= dt;
        if (d.burstLeft > 0) {
          d.burstTimer -= dt;
          if (d.burstTimer <= 0) {
            d.burstLeft -= 1;
            d.burstTimer = d.kind === 'phantom' ? 0.08 : 0.12;
            _from.copy(d.group.position);
            const jScale = d.spotted ? 0.4 : 1;
            _to.set(
              playerPos.x + (Math.random() - 0.5) * 1.4 * jScale,
              playerPos.y + 1.1 + (Math.random() - 0.5) * 1.0 * jScale,
              playerPos.z + (Math.random() - 0.5) * 1.4 * jScale,
            );
            const laserCol = d.kind === 'phantom' ? '#c084fc' : d.kind === 'shielder' ? '#38bdf8' : '#ff5a4a';
            this.cb.onLaser(_from, _to, laserCol);
            _to.sub(_from).normalize().multiplyScalar(d.kind === 'titan' ? 23 : 19);
            this.fireBolt(
              this.projectiles,
              this.projFree,
              _from,
              _to,
              3,
              Math.round(base.fireDamage * this.dmgMul),
              d.kind === 'titan' ? 1.5 : 1,
            );
          }
        } else if (d.fireTimer <= 0 && dist < base.attackRange) {
          d.burstLeft = base.burst;
          d.burstTimer = 0;
          d.fireTimer = base.fireInterval * (0.7 + Math.random() * 0.6);
        }
      }

      if (d.shieldMat && d.shield > 0) {
        d.shieldMat.opacity = 0.16 + 0.08 * Math.sin(time * 5 + d.phase);
      }
    }

    // Projectiles update
    _bodyTop.set(playerPos.x, playerPos.y + 1.8, playerPos.z);
    for (let i = 0; i < this.projectiles.length; i++) {
      const p = this.projectiles[i];
      if (p.life <= 0) continue;
      _prev.copy(p.mesh.position);
      p.mesh.position.addScaledVector(p.vel, dt);
      p.life -= dt;
      const pp = p.mesh.position;
      let hit = false;
      if (alive && segSegDist(_prev, pp, playerPos, _bodyTop) < 0.45) {
        this.cb.onPlayerHit(p.dmg, pp);
        hit = true;
      }
      if (this.solidAt(pp)) hit = true;
      if (p.life <= 0 || pp.y < 0.1) hit = true;
      if (hit) DroneManager.release(this.projectiles, this.projFree, i);
    }

    // Bomber gravity bombs
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

  private solidAt(p: THREE.Vector3): boolean {
    for (let i = 0; i < this.colliders.length; i++) {
      const c = this.colliders[i];
      if (p.y >= c.top) continue;
      if (c.kind === 'cyl') {
        if (Math.hypot(p.x - c.x, p.z - c.z) < c.r) return true;
      } else if (Math.abs(p.x - c.x) < c.hx && Math.abs(p.z - c.z) < c.hz) return true;
    }
    return false;
  }

  private applyWallSlide(d: Drone, desired: THREE.Vector3, speed: number): void {
    const n = d.hitN;
    if (!n) return;
    const len = n.length();
    if (len < 1e-4) return;
    n.divideScalar(len);
    const into = desired.dot(n);
    if (into > 0) desired.addScaledVector(n, -into);
    _tangent.set(-n.z, 0, n.x).multiplyScalar(d.strafe);
    desired.addScaledVector(_tangent, speed * 0.85);
  }

  private steer(d: Drone, desired: THREE.Vector3, dt: number, maxSpeed: number): void {
    this.applyWallSlide(d, desired, maxSpeed);
    if (desired.length() > maxSpeed) desired.setLength(maxSpeed);
    d.vel.lerp(desired, Math.min(1, dt * 2.2));
    d.group.position.addScaledVector(d.vel, dt);
    const minY = d.kind === 'crawler' ? 0.75 : 1.2;
    if (d.group.position.y < minY) d.group.position.y = minY;
    if (d.group.position.y > 9.5) d.group.position.y = 9.5;
    const r = Math.hypot(d.group.position.x, d.group.position.z);
    if (r > 50) {
      d.group.position.x *= 50 / r;
      d.group.position.z *= 50 / r;
    }
    this.resolveCollision(d);
  }

  private resolveCollision(d: Drone): void {
    const p = d.group.position;
    const pad = d.radius + 0.35;
    if (d.hitN) d.hitN.set(0, 0, 0);
    let hadHit = false;
    for (let i = 0; i < this.colliders.length; i++) {
      const c = this.colliders[i];
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
          if (!d.hitN) d.hitN = new THREE.Vector3();
          d.hitN.x += nx;
          d.hitN.z += nz;
          hadHit = true;
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
          if (!d.hitN) d.hitN = new THREE.Vector3();
          d.hitN.x += nx;
          d.hitN.z += nz;
          hadHit = true;
        }
      }
    }
    if (!hadHit) d.hitN = null;
  }
}
