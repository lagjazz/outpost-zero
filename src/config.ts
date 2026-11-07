// Outpost Zero — all tunable constants and the alpine-tactical palette.
import type { AirdropKind, DroneKind, MapId, SubObjectiveKind, WeaponId } from './state';

export const PALETTE = {
  nightTop: '#070b12',
  nightBottom: '#0f172a',
  surface: 'rgba(10, 15, 26, 0.78)',
  hairline: 'rgba(255, 255, 255, 0.12)',
  amber: '#f59e0b',
  cyan: '#06b6d4',
  red: '#ef4444',
  green: '#10b981',
  violet: '#a855f7',
  snow: '#cfe3f5',
  steel: '#3b4657',
  darkSteel: '#232c3a',
} as const;

export const PLAYER = {
  eyeHeight: 1.62,
  radius: 0.42,
  walkSpeed: 4.8,
  sprintSpeed: 7.6,
  accel: 44,
  damping: 10,
  maxHealth: 100,
  maxArmor: 60,
  leanAngle: 0.15, // radians of camera roll at full lean
  leanOffset: 0.62, // lateral offset at full lean
  leanRate: 9, // damp lambda
  adsFov: 52,
  baseFov: 75,
  interactRange: 3.8,
} as const;

export interface WeaponBase {
  name: string;
  shortName: string;
  slotKey: string;
  damage: number;
  pellets: number;
  fireInterval: number; // seconds between shots
  magSize: number;
  reserveMax: number;
  reloadTime: number;
  spreadDeg: number; // hip base spread
  adsSpreadDeg: number;
  recoilPitchDeg: number;
  recoilYawDeg: number;
  auto: boolean;
  range: number;
  kickback: number; // viewmodel kick meters
  tracerColor: string;
  shieldMult: number; // bonus multiplier against energy shields
  pierce: boolean; // penetrates multiple targets
}

export const WEAPONS: Record<WeaponId, WeaponBase> = {
  pistol: {
    name: 'M9 Tactical Sidearm',
    shortName: 'M9 Pistol',
    slotKey: '1',
    damage: 28,
    pellets: 1,
    fireInterval: 0.24,
    magSize: 14,
    reserveMax: 112,
    reloadTime: 1.05,
    spreadDeg: 0.75,
    adsSpreadDeg: 0.2,
    recoilPitchDeg: 0.85,
    recoilYawDeg: 0.2,
    auto: false,
    range: 95,
    kickback: 0.048,
    tracerColor: '#ffd27f',
    shieldMult: 1.0,
    pierce: false,
  },
  rifle: {
    name: 'K2 Assault Carbine',
    shortName: 'K2 Rifle',
    slotKey: '2',
    damage: 19,
    pellets: 1,
    fireInterval: 0.092,
    magSize: 32,
    reserveMax: 224,
    reloadTime: 1.9,
    spreadDeg: 1.45,
    adsSpreadDeg: 0.42,
    recoilPitchDeg: 0.46,
    recoilYawDeg: 0.15,
    auto: true,
    range: 160,
    kickback: 0.032,
    tracerColor: '#ffcf70',
    shieldMult: 1.0,
    pierce: false,
  },
  shotgun: {
    name: 'M870 Combat Breacher',
    shortName: 'M870 Shotgun',
    slotKey: '3',
    damage: 15,
    pellets: 8,
    fireInterval: 0.88,
    magSize: 6,
    reserveMax: 36,
    reloadTime: 2.3,
    spreadDeg: 4.4,
    adsSpreadDeg: 3.1,
    recoilPitchDeg: 2.0,
    recoilYawDeg: 0.45,
    auto: false,
    range: 65,
    kickback: 0.085,
    tracerColor: '#ffb35c',
    shieldMult: 1.15,
    pierce: false,
  },
  plasma: {
    name: 'ARC-9 Plasma Carbine',
    shortName: 'ARC-9 Plasma',
    slotKey: '4',
    damage: 24,
    pellets: 1,
    fireInterval: 0.115,
    magSize: 28,
    reserveMax: 196,
    reloadTime: 1.75,
    spreadDeg: 1.1,
    adsSpreadDeg: 0.3,
    recoilPitchDeg: 0.35,
    recoilYawDeg: 0.12,
    auto: true,
    range: 140,
    kickback: 0.028,
    tracerColor: '#38e2ff',
    shieldMult: 1.75,
    pierce: false,
  },
  launcher: {
    name: 'FIM-92 "Vulcan" SAM',
    shortName: 'Vulcan SAM',
    slotKey: '5',
    damage: 70,
    pellets: 1,
    fireInterval: 1.35,
    magSize: 2,
    reserveMax: 10,
    reloadTime: 2.9,
    spreadDeg: 0.9,
    adsSpreadDeg: 0.35,
    recoilPitchDeg: 1.35,
    recoilYawDeg: 0.28,
    auto: false,
    range: 240,
    kickback: 0.07,
    tracerColor: '#ffb27f',
    shieldMult: 1.5,
    pierce: false,
  },
  railgun: {
    name: 'X-77 Gauss Railgun',
    shortName: 'X-77 Railgun',
    slotKey: '6',
    damage: 115,
    pellets: 1,
    fireInterval: 1.05,
    magSize: 4,
    reserveMax: 24,
    reloadTime: 2.4,
    spreadDeg: 0.35,
    adsSpreadDeg: 0.04,
    recoilPitchDeg: 1.6,
    recoilYawDeg: 0.15,
    auto: false,
    range: 280,
    kickback: 0.095,
    tracerColor: '#c084fc',
    shieldMult: 2.2,
    pierce: true,
  },
};

// Rocket (Vulcan SAM) flight & warhead tuning. Blast damage = direct × blastMult.
export const ROCKET = {
  speed: 28,
  blastRadius: 6.0,
  blastMult: 2.1,
  lockConeDeg: 48,
  turnRate: 6.5, // steer lerp lambda toward the locked target
  fuseRadius: 0.95, // extra hit margin beyond the drone radius
} as const;

// Auto rank system: kill score (never spent) drives levels 1→10.
export const AUTOLEVEL = {
  maxLevel: 10,
  thresholds: [0, 40, 100, 190, 300, 430, 590, 780, 1000, 1250],
  hpPerLevel: 14, // +max HP per level above 1
  healOnLevelUp: 30, // instant heal on every level-up
  damagePerLevel: 0.1, // damage multiplier per level above 1
  fireRatePerLevel: 0.08, // fireInterval divisor per level above 1
  reloadPerLevel: 0.08, // reloadTime divisor per level above 1
} as const;

/** Weapon Mk tier (0–3) granted at levels 3 / 6 / 9. */
export function weaponTier(level: number): number {
  return level >= 9 ? 3 : level >= 6 ? 2 : level >= 3 ? 1 : 0;
}

// Flat bonuses per Mk tier (index 0 = Mk I).
export const TIER_BONUS: { dmgAdd: number; magAdd: number; pelletsAdd: number }[] = [
  { dmgAdd: 6, magAdd: 2, pelletsAdd: 1 }, // Mk I
  { dmgAdd: 13, magAdd: 5, pelletsAdd: 2 }, // Mk II
  { dmgAdd: 22, magAdd: 8, pelletsAdd: 3 }, // Mk III
];

export const UPGRADE = {
  maxLevel: 5,
  cost: (level: number) => 25 + 22 * level,
  damagePerLevel: 0.18,
  fireRatePerLevel: 0.12,
  capacityPerLevel: 0.25,
  reloadPerLevel: 0.12,
} as const;

export interface DroneBase {
  label: string;
  hp: number;
  shield: number;
  speed: number;
  radius: number;
  credits: number;
  fireDamage: number;
  fireInterval: number;
  burst: number;
  attackRange: number;
}

export const DRONES: Record<DroneKind, DroneBase> = {
  scout: {
    label: 'Recon Scout',
    hp: 34,
    shield: 0,
    speed: 6.6,
    radius: 0.55,
    credits: 12,
    fireDamage: 4,
    fireInterval: 3.1,
    burst: 1,
    attackRange: 26,
  },
  heavy: {
    label: 'Aegis Heavy Gunship',
    hp: 120,
    shield: 90,
    speed: 2.5,
    radius: 0.95,
    credits: 32,
    fireDamage: 6,
    fireInterval: 3.8,
    burst: 5,
    attackRange: 32,
  },
  kamikaze: {
    label: 'Valkyrie Breacher',
    hp: 44,
    shield: 0,
    speed: 9.2,
    radius: 0.6,
    credits: 22,
    fireDamage: 44, // blast damage at epicenter
    fireInterval: 0,
    burst: 0,
    attackRange: 0,
  },
  warden: {
    label: 'Warden Laser Sniper',
    hp: 48,
    shield: 0,
    speed: 4.2,
    radius: 0.7,
    credits: 28,
    fireDamage: 18,
    fireInterval: 4.4,
    burst: 1,
    attackRange: 48,
  },
  bomber: {
    label: 'Goliath Mortar Bomber',
    hp: 85,
    shield: 0,
    speed: 3.2,
    radius: 0.92,
    credits: 38,
    fireDamage: 44,
    fireInterval: 4.8,
    burst: 0,
    attackRange: 0,
  },
  crawler: {
    label: 'Arachnid Ground Sweeper',
    hp: 58,
    shield: 0,
    speed: 5.5,
    radius: 0.58,
    credits: 18,
    fireDamage: 8,
    fireInterval: 0.9,
    burst: 0,
    attackRange: 0,
  },
  colossus: {
    label: 'Colossus Siege Fortress',
    hp: 400,
    shield: 240,
    speed: 1.85,
    radius: 1.45,
    credits: 95,
    fireDamage: 11,
    fireInterval: 4.4,
    burst: 3,
    attackRange: 36,
  },
  phantom: {
    label: 'Phantom Stealth Wing',
    hp: 52,
    shield: 30,
    speed: 8.2,
    radius: 0.62,
    credits: 30,
    fireDamage: 7,
    fireInterval: 2.6,
    burst: 2,
    attackRange: 30,
  },
  shielder: {
    label: 'Matrix Shield Relay',
    hp: 75,
    shield: 110,
    speed: 3.4,
    radius: 0.78,
    credits: 40,
    fireDamage: 5,
    fireInterval: 4.2,
    burst: 1,
    attackRange: 28,
  },
  titan: {
    label: 'Titan Apex Dreadnought',
    hp: 680,
    shield: 380,
    speed: 1.45,
    radius: 1.85,
    credits: 160,
    fireDamage: 14,
    fireInterval: 3.8,
    burst: 4,
    attackRange: 42,
  },
};

export interface AirdropSpec {
  kind: AirdropKind;
  name: string;
  desc: string;
  color: string;
  hex: number;
}

export const AIRDROP_SPECS: Record<AirdropKind, AirdropSpec> = {
  munitions: {
    kind: 'munitions',
    name: 'Munitions & Overcharge Pod',
    desc: 'Full ammo + +65 Credits + 14s Rapid-Fire Overcharge',
    color: '#f59e0b',
    hex: 0xf59e0b,
  },
  medical: {
    kind: 'medical',
    name: 'Nano-Med & Exo-Armor Pod',
    desc: 'Full HP + Overshield Armor + 16s Nano-Regeneration',
    color: '#10b981',
    hex: 0x10b981,
  },
  sentry: {
    kind: 'sentry',
    name: 'Autonomous Sentry Turret Pod',
    desc: 'Deploys a twin-barrel auto-turret for 45s + Full Ammo',
    color: '#06b6d4',
    hex: 0x06b6d4,
  },
  emp: {
    kind: 'emp',
    name: 'Cryo-EMP Shockwave Pod',
    desc: 'Detonates an EMP blast + Cools Transmitter to 0% + +55 Credits',
    color: '#a855f7',
    hex: 0xa855f7,
  },
  prototype: {
    kind: 'prototype',
    name: 'Prototype Arsenal Pod',
    desc: 'Unlocks heavy weapons + +120 Rank Score + +80 Credits',
    color: '#eab308',
    hex: 0xeab308,
  },
};

export interface WaveDef {
  atProgress: number; // triggers when signalProgress >= this
  scouts: number;
  heavies: number;
  kamikazes: number;
  wardens?: number;
  bombers?: number;
  crawlers?: number;
  colossi?: number;
  phantoms?: number;
  shielders?: number;
  titans?: number;
  concurrent: number;
  spawnGap: number;
}

export const WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, concurrent: 6, spawnGap: 2.2 },
  { atProgress: 20, scouts: 8, heavies: 0, kamikazes: 3, phantoms: 2, concurrent: 8, spawnGap: 1.9 },
  { atProgress: 40, scouts: 8, heavies: 3, kamikazes: 4, phantoms: 2, concurrent: 10, spawnGap: 1.6 },
  { atProgress: 60, scouts: 10, heavies: 4, kamikazes: 5, shielders: 1, concurrent: 12, spawnGap: 1.4 },
  { atProgress: 80, scouts: 12, heavies: 5, kamikazes: 8, phantoms: 3, shielders: 2, concurrent: 15, spawnGap: 1.15 },
];

export const CANYON_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, phantoms: 2, concurrent: 7, spawnGap: 2.1 },
  { atProgress: 20, scouts: 7, heavies: 0, kamikazes: 3, wardens: 2, phantoms: 2, concurrent: 9, spawnGap: 1.9 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, wardens: 2, bombers: 2, shielders: 1, concurrent: 11, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, bombers: 2, shielders: 2, concurrent: 13, spawnGap: 1.4 },
  { atProgress: 80, scouts: 11, heavies: 5, kamikazes: 7, wardens: 4, bombers: 3, phantoms: 3, concurrent: 16, spawnGap: 1.1 },
];

export const RAIL_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, crawlers: 3, concurrent: 7, spawnGap: 2.1 },
  { atProgress: 20, scouts: 7, heavies: 0, kamikazes: 3, crawlers: 5, phantoms: 2, concurrent: 10, spawnGap: 1.9 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, wardens: 2, bombers: 1, crawlers: 6, shielders: 1, concurrent: 12, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, crawlers: 7, shielders: 2, concurrent: 14, spawnGap: 1.4 },
  { atProgress: 80, scouts: 11, heavies: 5, kamikazes: 7, wardens: 4, bombers: 3, crawlers: 8, colossi: 1, concurrent: 16, spawnGap: 1.1 },
];

export const DAM_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, crawlers: 3, phantoms: 2, concurrent: 8, spawnGap: 2.0 },
  { atProgress: 20, scouts: 6, heavies: 1, kamikazes: 3, wardens: 2, crawlers: 5, shielders: 1, concurrent: 10, spawnGap: 1.85 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, bombers: 2, colossi: 1, crawlers: 6, concurrent: 12, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, crawlers: 7, colossi: 1, shielders: 2, concurrent: 14, spawnGap: 1.35 },
  { atProgress: 80, scouts: 10, heavies: 5, kamikazes: 7, wardens: 4, bombers: 3, crawlers: 8, colossi: 2, concurrent: 17, spawnGap: 1.1 },
];

export const CRATER_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 1, kamikazes: 0, crawlers: 4, phantoms: 2, concurrent: 8, spawnGap: 2.0 },
  { atProgress: 20, scouts: 7, heavies: 2, kamikazes: 4, wardens: 2, crawlers: 6, shielders: 1, concurrent: 11, spawnGap: 1.8 },
  { atProgress: 40, scouts: 8, heavies: 3, kamikazes: 3, bombers: 2, crawlers: 7, wardens: 2, colossi: 1, concurrent: 13, spawnGap: 1.55 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, crawlers: 8, colossi: 2, shielders: 2, concurrent: 15, spawnGap: 1.35 },
  { atProgress: 80, scouts: 11, heavies: 5, kamikazes: 8, wardens: 4, bombers: 3, crawlers: 9, colossi: 2, titans: 1, concurrent: 18, spawnGap: 1.05 },
];

export const HARBOR_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 1, kamikazes: 2, phantoms: 3, concurrent: 9, spawnGap: 1.95 },
  { atProgress: 20, scouts: 7, heavies: 2, kamikazes: 3, wardens: 3, phantoms: 4, shielders: 2, concurrent: 11, spawnGap: 1.75 },
  { atProgress: 40, scouts: 8, heavies: 3, kamikazes: 4, bombers: 3, colossi: 1, phantoms: 4, concurrent: 13, spawnGap: 1.5 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, colossi: 2, shielders: 2, concurrent: 15, spawnGap: 1.3 },
  { atProgress: 80, scouts: 11, heavies: 5, kamikazes: 7, bombers: 4, colossi: 2, titans: 1, shielders: 2, concurrent: 18, spawnGap: 1.05 },
];

export const BIOLAB_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 1, kamikazes: 2, crawlers: 5, phantoms: 3, concurrent: 9, spawnGap: 1.9 },
  { atProgress: 20, scouts: 7, heavies: 2, kamikazes: 4, crawlers: 7, shielders: 2, bombers: 2, concurrent: 12, spawnGap: 1.7 },
  { atProgress: 40, scouts: 8, heavies: 4, kamikazes: 4, crawlers: 8, colossi: 2, phantoms: 4, concurrent: 14, spawnGap: 1.45 },
  { atProgress: 60, scouts: 10, heavies: 4, kamikazes: 6, wardens: 3, colossi: 2, titans: 1, shielders: 2, concurrent: 16, spawnGap: 1.25 },
  { atProgress: 80, scouts: 12, heavies: 6, kamikazes: 8, crawlers: 10, colossi: 2, titans: 1, shielders: 3, concurrent: 19, spawnGap: 1.0 },
];

export const CITADEL_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 7, heavies: 2, kamikazes: 3, phantoms: 4, shielders: 2, concurrent: 10, spawnGap: 1.85 },
  { atProgress: 20, scouts: 8, heavies: 3, kamikazes: 4, wardens: 3, colossi: 1, phantoms: 4, concurrent: 12, spawnGap: 1.65 },
  { atProgress: 40, scouts: 9, heavies: 4, kamikazes: 5, bombers: 3, colossi: 2, titans: 1, shielders: 2, concurrent: 15, spawnGap: 1.4 },
  { atProgress: 60, scouts: 10, heavies: 5, kamikazes: 6, wardens: 4, colossi: 2, titans: 1, phantoms: 5, concurrent: 17, spawnGap: 1.2 },
  { atProgress: 80, scouts: 12, heavies: 6, kamikazes: 9, wardens: 4, bombers: 4, colossi: 3, titans: 2, shielders: 3, concurrent: 20, spawnGap: 0.95 },
];

// ---- Campaign: eight sequential levels ----

export interface AmbienceSpec {
  skyTop: string;
  skyBottom: string;
  auroraColor: string;
  auroraIntensity: number;
  ambient: string;
  ambientInt: number;
  hemiSky: string;
  hemiGround: string;
  hemiInt: number;
  moon: string;
  moonInt: number;
  fog: string;
}

/** Per-level outpost structure placement (supply crates auto-offset from the shack). */
export interface OutpostLayout {
  shack: [number, number];
  tower: [number, number];
  bench: [number, number];
  searchlight: [number, number];
  walls: [number, number, number][]; // x, z, rotY
  sandbags: [number, number, number][];
}

export interface LevelDef {
  id: MapId;
  name: string;
  timeOfDay: string;
  blurb: string;
  newThreats: string;
  missionDirective: string;
  objectives: SubObjectiveKind[];
  waves: WaveDef[];
  hpMul: number;
  dmgMul: number;
  ambience: AmbienceSpec;
  layout: OutpostLayout;
  weaponUnlock?: WeaponId;
}

const NIGHT: AmbienceSpec = {
  skyTop: '#050911', skyBottom: '#101d36', auroraColor: '#10b981', auroraIntensity: 0.35,
  ambient: '#1e2f4d', ambientInt: 0.75,
  hemiSky: '#33486e', hemiGround: '#0a0e15', hemiInt: 0.6, moon: '#9bc0f5', moonInt: 0.9, fog: '#0f172a',
};
const NIGHT_CLEAR: AmbienceSpec = {
  skyTop: '#040812', skyBottom: '#13223b', auroraColor: '#06b6d4', auroraIntensity: 0.5,
  ambient: '#213352', ambientInt: 0.75,
  hemiSky: '#38507a', hemiGround: '#0a0e15', hemiInt: 0.6, moon: '#a8cbf8', moonInt: 1.05, fog: '#101a2c',
};
const DUSK: AmbienceSpec = {
  skyTop: '#120e24', skyBottom: '#783f31', auroraColor: '#f59e0b', auroraIntensity: 0.25,
  ambient: '#523e54', ambientInt: 0.78,
  hemiSky: '#63455e', hemiGround: '#171018', hemiInt: 0.62, moon: '#ffb882', moonInt: 0.75, fog: '#3a2a35',
};
const DAWN: AmbienceSpec = {
  skyTop: '#0b162c', skyBottom: '#55879e', auroraColor: '#38bdf8', auroraIntensity: 0.3,
  ambient: '#3d5c78', ambientInt: 0.82,
  hemiSky: '#759cb8', hemiGround: '#141c26', hemiInt: 0.68, moon: '#c7e5ff', moonInt: 1.0, fog: '#2c4257',
};
const BLOOD: AmbienceSpec = {
  skyTop: '#160810', skyBottom: '#852936', auroraColor: '#ef4444', auroraIntensity: 0.45,
  ambient: '#683340', ambientInt: 0.78,
  hemiSky: '#823e48', hemiGround: '#1a0e12', hemiInt: 0.58, moon: '#ff9e75', moonInt: 0.8, fog: '#421f28',
};
const AURORA_SUBZERO: AmbienceSpec = {
  skyTop: '#030b14', skyBottom: '#0d2b3e', auroraColor: '#2dd4bf', auroraIntensity: 0.85,
  ambient: '#1c3b4f', ambientInt: 0.8,
  hemiSky: '#2dd4bf', hemiGround: '#08121c', hemiInt: 0.62, moon: '#a5f3fc', moonInt: 0.95, fog: '#0b2233',
};
const EMERALD_MIST: AmbienceSpec = {
  skyTop: '#061412', skyBottom: '#163d35', auroraColor: '#34d399', auroraIntensity: 0.7,
  ambient: '#1f473e', ambientInt: 0.8,
  hemiSky: '#34d399', hemiGround: '#0a1614', hemiInt: 0.6, moon: '#a7f3d0', moonInt: 0.9, fog: '#122e28',
};
const SOLAR_ECLIPSE: AmbienceSpec = {
  skyTop: '#0d0618', skyBottom: '#5b1e38', auroraColor: '#c084fc', auroraIntensity: 0.8,
  ambient: '#4a2545', ambientInt: 0.82,
  hemiSky: '#a855f7', hemiGround: '#140a18', hemiInt: 0.65, moon: '#fde047', moonInt: 1.0, fog: '#2d1429',
};

const LAYOUT_A: OutpostLayout = {
  shack: [-9, -6], tower: [0, -4.5], bench: [8, 5], searchlight: [-14.5, 7],
  walls: [[8, -2.5, -0.6], [-4, 9, 0.4], [11, 7.5, 1.1]],
  sandbags: [[-8.5, 5.5, 0.5], [6.5, -7.5, -0.9], [12.5, 2, 1.4], [-2.5, -9.5, 0.1]],
};
const LAYOUT_B: OutpostLayout = {
  shack: [-11, -7], tower: [1, -2], bench: [9, 7], searchlight: [-15, -4],
  walls: [[-6, 6, 0.3], [7, -6, -0.4], [3, 10, 1.2]],
  sandbags: [[-7, -10.5, 0.6], [6, -3, -0.7], [12, 10, 1.3], [-1, -4, 0.2]],
};
const LAYOUT_C: OutpostLayout = {
  shack: [-10, 7], tower: [0, 1], bench: [9, -6], searchlight: [-14, -8],
  walls: [[-7, -3, 0.5], [6, 6, -0.3], [9, -10, 0.8]],
  sandbags: [[-6, -7, 0.3], [4, 9, -1.0], [12, 4, 1.5], [-3, 4, 0.1]],
};
const LAYOUT_D: OutpostLayout = {
  shack: [-9, 8], tower: [0, -3], bench: [9, 6], searchlight: [-13, -9],
  walls: [[-6, -8, 0.4], [7, 3, -0.5], [2, 11, 1.2]],
  sandbags: [[-8, -2, 0.2], [6, -9, -0.8], [11, -6, 1.4], [-6, 12, 0.6]],
};

export const LEVELS: LevelDef[] = [
  {
    id: 'alpine',
    name: 'ALPINE PASS',
    timeOfDay: 'Night · Aurora',
    blurb: 'Snow plateau surrounded by jagged granite peaks and pine woods. Hold the primary beacon and calibrate field relays.',
    newThreats: 'Scout · Heavy · Kamikaze · Phantom',
    missionDirective: 'Hold Uplink + Calibrate Field Relays & Destroy Jammer Pylons',
    objectives: ['relay', 'jammer', 'uplink_zone'],
    waves: WAVES,
    hpMul: 1.0,
    dmgMul: 1.0,
    ambience: NIGHT,
    layout: LAYOUT_A,
  },
  {
    id: 'canyon',
    name: 'CANYON RELAY',
    timeOfDay: 'Clear Night',
    blurb: 'Narrow rock-walled gorge with a frozen river and convoy wreckage; hostiles funnel through both canyon mouths.',
    newThreats: 'NEW: Warden Sniper · Bomber · Shielder · Unlock: ARC-9 Plasma',
    missionDirective: 'Corridor Defense + Purge Cryo Conduits & Neutralize Jammers',
    objectives: ['jammer', 'coolant', 'relay'],
    waves: CANYON_WAVES,
    hpMul: 1.15,
    dmgMul: 1.08,
    ambience: NIGHT_CLEAR,
    layout: LAYOUT_A,
    weaponUnlock: 'plasma',
  },
  {
    id: 'rail',
    name: 'FROZEN RAIL YARD',
    timeOfDay: 'Dusk',
    blurb: 'Dusk over a snowbound freight terminal — armored boxcars, signal gantries and switching warehouses.',
    newThreats: 'NEW: Crawler Pack · Unlock: FIM-92 Vulcan SAM',
    missionDirective: 'Rail Yard Siege + Secure Data Zones & Calibrate Switch Relays',
    objectives: ['uplink_zone', 'jammer', 'hvt'],
    waves: RAIL_WAVES,
    hpMul: 1.28,
    dmgMul: 1.16,
    ambience: DUSK,
    layout: LAYOUT_B,
    weaponUnlock: 'launcher',
  },
  {
    id: 'dam',
    name: 'DAM OVERLOOK',
    timeOfDay: 'Dawn',
    blurb: 'Dawn at the hydroelectric mega-dam — the 24 m concrete wall shields the north while swarms rise from the gorge.',
    newThreats: 'NEW: Colossus Flying Fortress',
    missionDirective: 'Hydro Dam Hold + Vent Turbine Coolant & Eliminate Colossus HVT',
    objectives: ['coolant', 'hvt', 'jammer'],
    waves: DAM_WAVES,
    hpMul: 1.42,
    dmgMul: 1.24,
    ambience: DAWN,
    layout: LAYOUT_C,
  },
  {
    id: 'crater',
    name: 'SUMMIT CRATER',
    timeOfDay: 'Blood Dusk',
    blurb: 'Volcanic caldera rimmed with obsidian monoliths and geothermal vents — hostiles pour through four breach gaps.',
    newThreats: 'NEW: Titan Apex Dreadnought · Unlock: X-77 Gauss Railgun',
    missionDirective: 'Caldera Siege + Purge Thermal Vents & Intercept Dreadnought',
    objectives: ['coolant', 'jammer', 'hvt'],
    waves: CRATER_WAVES,
    hpMul: 1.58,
    dmgMul: 1.32,
    ambience: BLOOD,
    layout: LAYOUT_D,
    weaponUnlock: 'railgun',
  },
  {
    id: 'harbor',
    name: 'GLACIER HARBOR',
    timeOfDay: 'Sub-Zero Aurora',
    blurb: 'Ice-locked naval dockyard with a trapped nuclear icebreaker, cargo cranes, and glowing sea-ice fissures.',
    newThreats: 'Phantom Wing Packs · Shielder Phalanx',
    missionDirective: 'Naval Dock Defense + Align Shipboard Relays & Hold Ice Pier',
    objectives: ['relay', 'uplink_zone', 'hvt'],
    waves: HARBOR_WAVES,
    hpMul: 1.72,
    dmgMul: 1.38,
    ambience: AURORA_SUBZERO,
    layout: LAYOUT_B,
  },
  {
    id: 'biolab',
    name: 'GEOTHERMAL BIOLAB',
    timeOfDay: 'Emerald Mist',
    blurb: 'High-altitude cryo-botanical research complex with glowing geodesic glass domes, cooling towers and thermal springs.',
    newThreats: 'Mutated Swarm · Dual Colossus & Titan Escorts',
    missionDirective: 'Biolab Quarantine + Stabilize Cryo Valves & Destroy Bio-Jammers',
    objectives: ['coolant', 'jammer', 'uplink_zone'],
    waves: BIOLAB_WAVES,
    hpMul: 1.88,
    dmgMul: 1.44,
    ambience: EMERALD_MIST,
    layout: LAYOUT_C,
  },
  {
    id: 'citadel',
    name: 'ORBITAL CITADEL',
    timeOfDay: 'Solar Eclipse',
    blurb: 'Final stand at the summit orbital uplink array — towering defense monoliths, deep-space dishes, and an eclipse sky.',
    newThreats: 'Full Armada · Twin Titan Dreadnoughts',
    missionDirective: 'Final Orbital Uplink + All Tactical Objectives Active',
    objectives: ['jammer', 'uplink_zone', 'hvt'],
    waves: CITADEL_WAVES,
    hpMul: 2.05,
    dmgMul: 1.5,
    ambience: SOLAR_ECLIPSE,
    layout: LAYOUT_D,
  },
];

// Bomber drop-blast tuning (Canyon Relay onward).
export const BOMB_BLAST = { radius: 5.5, maxDamage: 44, towerHeat: 14, towerRadius: 7 } as const;

/** Fixed point-light pool budget for zero shader recompiles. */
export const LIGHT_BUDGET = 14;

export const MISSION = {
  baseSignalRate: 0.45, // %/s while transmitting
  waveSignalRate: 0.34, // %/s while a wave is actively spawning
  boostSignalMult: 1.55, // multiplier when relay surge is active
  jammerSignalMult: 0.38, // multiplier when an enemy jammer pylon is active
  heatGain: 1.85, // heat %/s while transmitting
  heatCool: 0.72, // heat %/s passive cooling
  overheatAt: 100,
  overheatRestartHold: 2.2, // seconds holding F to reboot
  overheatCoolTo: 15, // heat after reboot
  kamikazeTowerHeat: 24, // heat added by kamikaze blast near tower
  airdropProgress: [12, 28, 46, 64, 82, 93],
  objectiveProgress: [16, 48, 76], // progress % triggers for dynamic sub-objectives
  ammoStationCooldown: 26,
  medStationCooldown: 32,
  medHeal: 48,
  medArmor: 24,
  searchlightOverloadTime: 26,
  searchlightCooldown: 10,
  searchlightRange: 66,
  searchlightAngleDeg: 14,
  damageUpgradePerLevel: 0.18,
  turretDuration: 45, // seconds an airdrop sentry turret stays active
  turretFireInterval: 0.24,
  turretDamage: 16,
  turretRange: 38,
} as const;

export const WEATHER = {
  baseFog: 0.0105,
  fogPerBlizzard: 0.0155,
  fogOscillation: 0.003,
  snowCount: 1400,
  snowBox: 55,
} as const;
