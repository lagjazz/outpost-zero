// Outpost Zero — all tunable constants and the alpine-tactical palette.
import type { DroneKind, MapId, WeaponId } from './state';

export const PALETTE = {
  nightTop: '#070b12',
  nightBottom: '#0f172a',
  surface: 'rgba(10, 15, 26, 0.78)',
  hairline: 'rgba(255, 255, 255, 0.12)',
  amber: '#f59e0b',
  cyan: '#06b6d4',
  red: '#ef4444',
  green: '#10b981',
  snow: '#cfe3f5',
  steel: '#3b4657',
  darkSteel: '#232c3a',
} as const;

export const PLAYER = {
  eyeHeight: 1.62,
  radius: 0.42,
  walkSpeed: 4.6,
  sprintSpeed: 7.4,
  accel: 42,
  damping: 10,
  maxHealth: 100,
  maxArmor: 50,
  leanAngle: 0.15, // radians of camera roll at full lean
  leanOffset: 0.62, // lateral offset at full lean
  leanRate: 9, // damp lambda
  adsFov: 55,
  baseFov: 75,
  interactRange: 3.5,
} as const;

export interface WeaponBase {
  name: string;
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
}

export const WEAPONS: Record<WeaponId, WeaponBase> = {
  pistol: {
    name: 'M9 Tactical Pistol',
    damage: 26,
    pellets: 1,
    fireInterval: 0.26,
    magSize: 12,
    reserveMax: 96,
    reloadTime: 1.1,
    spreadDeg: 0.8,
    adsSpreadDeg: 0.25,
    recoilPitchDeg: 0.9,
    recoilYawDeg: 0.22,
    auto: false,
    range: 90,
    kickback: 0.05,
  },
  rifle: {
    name: 'K2 Assault Rifle',
    damage: 17,
    pellets: 1,
    fireInterval: 0.095,
    magSize: 30,
    reserveMax: 180,
    reloadTime: 2.0,
    spreadDeg: 1.6,
    adsSpreadDeg: 0.5,
    recoilPitchDeg: 0.5,
    recoilYawDeg: 0.16,
    auto: true,
    range: 150,
    kickback: 0.035,
  },
  shotgun: {
    name: 'M870 Pump Shotgun',
    damage: 13,
    pellets: 8,
    fireInterval: 0.95,
    magSize: 5,
    reserveMax: 30,
    reloadTime: 2.6,
    spreadDeg: 4.6,
    adsSpreadDeg: 3.4,
    recoilPitchDeg: 2.1,
    recoilYawDeg: 0.5,
    auto: false,
    range: 60,
    kickback: 0.09,
  },
  // Shoulder-fired homing SAM — unlocked by clearing Level 3.
  launcher: {
    name: 'FIM-92 "Vulcan" SAM',
    damage: 60,
    pellets: 1,
    fireInterval: 1.5,
    magSize: 1,
    reserveMax: 6,
    reloadTime: 3.4,
    spreadDeg: 1.0,
    adsSpreadDeg: 0.4,
    recoilPitchDeg: 1.4,
    recoilYawDeg: 0.3,
    auto: false,
    range: 240,
    kickback: 0.07,
  },
};

// Rocket (Vulcan SAM) flight & warhead tuning. Blast damage = direct × blastMult.
export const ROCKET = {
  speed: 26,
  blastRadius: 5.5,
  blastMult: 2,
  lockConeDeg: 45,
  turnRate: 6.0, // steer lerp lambda toward the locked target
  fuseRadius: 0.9, // extra hit margin beyond the drone radius
} as const;

// Auto rank system: kill score (never spent) drives levels 1→10.
// Each level boosts max HP / damage / fire rate / reload and heals on level-up;
// levels 3 / 6 / 9 unlock Mk I / II / III upgrades on all three weapons.
export const AUTOLEVEL = {
  maxLevel: 10,
  // score required to REACH level index+1 (thresholds[1] = score for level 2)
  thresholds: [0, 40, 100, 190, 300, 430, 590, 780, 1000, 1250],
  hpPerLevel: 12, // +max HP per level above 1
  healOnLevelUp: 25, // instant heal on every level-up
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
  { dmgAdd: 6, magAdd: 2, pelletsAdd: 0 }, // Mk I
  { dmgAdd: 12, magAdd: 4, pelletsAdd: 1 }, // Mk II
  { dmgAdd: 20, magAdd: 6, pelletsAdd: 2 }, // Mk III
];

export const UPGRADE = {
  maxLevel: 5,
  // cost to buy level N (0-indexed current level)
  cost: (level: number) => 30 + 25 * level,
  damagePerLevel: 0.18,
  fireRatePerLevel: 0.12, // interval divided by (1 + .12*level)
  capacityPerLevel: 0.25,
  reloadPerLevel: 0.12, // time divided by (1 + .12*level)
} as const;

export interface DroneBase {
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
    hp: 34,
    shield: 0,
    speed: 6.6,
    radius: 0.55,
    credits: 10,
    fireDamage: 4,
    fireInterval: 3.2,
    burst: 1,
    attackRange: 26,
  },
  heavy: {
    hp: 120,
    shield: 90,
    speed: 2.4,
    radius: 0.95,
    credits: 30,
    fireDamage: 6,
    fireInterval: 4.0,
    burst: 5,
    attackRange: 32,
  },
  kamikaze: {
    hp: 45,
    shield: 0,
    speed: 9.2,
    radius: 0.6,
    credits: 20,
    fireDamage: 45, // blast damage at epicenter
    fireInterval: 0,
    burst: 0,
    attackRange: 0,
  },
  // Canyon Relay exclusive: long-range designator sniper. Charges 1.4 s with a
  // visible red aim line + warning beep, then fires one high-velocity shot.
  warden: {
    hp: 45,
    shield: 0,
    speed: 4.2,
    radius: 0.7,
    credits: 25,
    fireDamage: 18,
    fireInterval: 4.5,
    burst: 1,
    attackRange: 48,
  },
  // Canyon Relay exclusive: hovering bomber that drops gravity bombs near the
  // player; blast damages within 5.5 m and heats the tower when near it.
  bomber: {
    hp: 80,
    shield: 0,
    speed: 3.2,
    radius: 0.9,
    credits: 35,
    fireDamage: 46, // blast damage at epicenter
    fireInterval: 5.0,
    burst: 0,
    attackRange: 0,
  },
  // Rail Yard onward: six-legged ground sweeper. Hugs the deck, is blocked by
  // every low obstacle like the player is, and bites on contact (melee).
  crawler: {
    hp: 55,
    shield: 0,
    speed: 5.4,
    radius: 0.55,
    credits: 15,
    fireDamage: 8, // per bite
    fireInterval: 0.9, // bite cadence
    burst: 0,
    attackRange: 0,
  },
  // Dam Overlook onward: armored flying fortress. Huge front shield — break it
  // from the top weak spot (x2) or flanks; homing rockets are the counter.
  colossus: {
    hp: 420,
    shield: 260,
    speed: 1.8,
    radius: 1.45,
    credits: 90,
    fireDamage: 12, // per bolt in a 3-round volley
    fireInterval: 4.6,
    burst: 3,
    attackRange: 36,
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
  concurrent: number;
  spawnGap: number;
}

export const WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, concurrent: 6, spawnGap: 2.2 },
  { atProgress: 20, scouts: 8, heavies: 0, kamikazes: 3, concurrent: 8, spawnGap: 1.9 },
  { atProgress: 40, scouts: 8, heavies: 3, kamikazes: 4, concurrent: 10, spawnGap: 1.6 },
  { atProgress: 60, scouts: 10, heavies: 5, kamikazes: 6, concurrent: 12, spawnGap: 1.4 },
  { atProgress: 80, scouts: 14, heavies: 6, kamikazes: 10, concurrent: 15, spawnGap: 1.1 },
];

// Per-map wave tables (canyon mixes in warden + bomber drones).
export const CANYON_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, concurrent: 6, spawnGap: 2.2 },
  { atProgress: 20, scouts: 7, heavies: 0, kamikazes: 3, wardens: 2, concurrent: 9, spawnGap: 1.9 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, wardens: 2, bombers: 2, concurrent: 11, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, bombers: 2, concurrent: 13, spawnGap: 1.4 },
  { atProgress: 80, scouts: 12, heavies: 5, kamikazes: 8, wardens: 4, bombers: 3, concurrent: 16, spawnGap: 1.1 },
];

// ---- Campaign: five sequential levels ----

export interface AmbienceSpec {
  skyTop: string;
  skyBottom: string;
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
  waves: WaveDef[];
  hpMul: number;
  dmgMul: number;
  ambience: AmbienceSpec;
  layout: OutpostLayout;
  launcherUnlock: boolean;
}

const NIGHT: AmbienceSpec = {
  skyTop: '#070b12', skyBottom: '#0f172a', ambient: '#1b2a44', ambientInt: 0.7,
  hemiSky: '#2c3d5e', hemiGround: '#0a0e15', hemiInt: 0.55, moon: '#8fb2e8', moonInt: 0.85, fog: '#0f172a',
};
const NIGHT_CLEAR: AmbienceSpec = {
  skyTop: '#060a14', skyBottom: '#131c30', ambient: '#1e2c48', ambientInt: 0.7,
  hemiSky: '#31446a', hemiGround: '#0a0e15', hemiInt: 0.55, moon: '#a3c2f0', moonInt: 1.0, fog: '#101a2c',
};
const DUSK: AmbienceSpec = {
  skyTop: '#141026', skyBottom: '#6b3b2f', ambient: '#4c3a4e', ambientInt: 0.75,
  hemiSky: '#5a4055', hemiGround: '#171018', hemiInt: 0.6, moon: '#ffb37a', moonInt: 0.65, fog: '#3a2a35',
};
const DAWN: AmbienceSpec = {
  skyTop: '#0e1830', skyBottom: '#4f7d92', ambient: '#3a5670', ambientInt: 0.8,
  hemiSky: '#6f93ac', hemiGround: '#141c26', hemiInt: 0.65, moon: '#bfe0ff', moonInt: 0.95, fog: '#2c4257',
};
const BLOOD: AmbienceSpec = {
  skyTop: '#180a12', skyBottom: '#7c2833', ambient: '#63303c', ambientInt: 0.75,
  hemiSky: '#7a3a44', hemiGround: '#1a0e12', hemiInt: 0.55, moon: '#ff9a70', moonInt: 0.7, fog: '#421f28',
};

// Shared default yard layout (levels 1–2); later levels rearrange the structures.
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

export const RAIL_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, concurrent: 6, spawnGap: 2.2 },
  { atProgress: 20, scouts: 7, heavies: 0, kamikazes: 3, crawlers: 5, concurrent: 10, spawnGap: 1.9 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, wardens: 2, bombers: 1, crawlers: 6, concurrent: 12, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, crawlers: 7, concurrent: 14, spawnGap: 1.4 },
  { atProgress: 80, scouts: 12, heavies: 5, kamikazes: 8, wardens: 4, bombers: 3, crawlers: 9, concurrent: 17, spawnGap: 1.1 },
];

export const DAM_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, crawlers: 3, concurrent: 8, spawnGap: 2.1 },
  { atProgress: 20, scouts: 6, heavies: 0, kamikazes: 3, wardens: 2, crawlers: 5, concurrent: 10, spawnGap: 1.9 },
  { atProgress: 40, scouts: 7, heavies: 3, kamikazes: 3, bombers: 2, colossi: 1, crawlers: 6, concurrent: 12, spawnGap: 1.6 },
  { atProgress: 60, scouts: 9, heavies: 4, kamikazes: 5, wardens: 3, crawlers: 7, colossi: 1, concurrent: 14, spawnGap: 1.4 },
  { atProgress: 80, scouts: 11, heavies: 5, kamikazes: 8, wardens: 4, bombers: 3, crawlers: 8, colossi: 2, concurrent: 17, spawnGap: 1.1 },
];

export const CRATER_WAVES: WaveDef[] = [
  { atProgress: 0, scouts: 6, heavies: 0, kamikazes: 0, crawlers: 4, concurrent: 8, spawnGap: 2.1 },
  { atProgress: 20, scouts: 7, heavies: 0, kamikazes: 4, wardens: 2, crawlers: 6, concurrent: 11, spawnGap: 1.9 },
  { atProgress: 40, scouts: 8, heavies: 3, kamikazes: 3, bombers: 2, crawlers: 7, wardens: 2, colossi: 1, concurrent: 13, spawnGap: 1.6 },
  { atProgress: 60, scouts: 10, heavies: 4, kamikazes: 6, wardens: 3, crawlers: 8, colossi: 2, concurrent: 15, spawnGap: 1.4 },
  { atProgress: 80, scouts: 12, heavies: 6, kamikazes: 9, wardens: 4, bombers: 4, crawlers: 10, colossi: 3, concurrent: 18, spawnGap: 1.1 },
];

export const LEVELS: LevelDef[] = [
  {
    id: 'alpine', name: 'ALPINE PASS', timeOfDay: 'Night',
    blurb: 'Standard hold on the snow plateau — scouts, heavies and kamikazes attack from every bearing.',
    newThreats: '', waves: WAVES, hpMul: 1, dmgMul: 1, ambience: NIGHT, layout: LAYOUT_A, launcherUnlock: false,
  },
  {
    id: 'canyon', name: 'CANYON RELAY', timeOfDay: 'Night',
    blurb: 'Narrow rock-walled corridor; hostiles funnel from both ridge gaps.',
    newThreats: 'NEW: Warden sniper · Bomber drone', waves: CANYON_WAVES, hpMul: 1.15, dmgMul: 1.1, ambience: NIGHT_CLEAR, layout: LAYOUT_A, launcherUnlock: false,
  },
  {
    id: 'rail', name: 'FROZEN RAIL YARD', timeOfDay: 'Dusk',
    blurb: 'Dusk falls over the frozen rail yard — parked cars, warehouse and gantry choke the field.',
    newThreats: 'NEW: Crawler ground unit · Unlock: Vulcan SAM', waves: RAIL_WAVES, hpMul: 1.3, dmgMul: 1.2, ambience: DUSK, layout: LAYOUT_B, launcherUnlock: true,
  },
  {
    id: 'dam', name: 'DAM OVERLOOK', timeOfDay: 'Dawn',
    blurb: 'Dawn at the high dam — the 20 m wall shields the north, hostiles pour up from the valley.',
    newThreats: 'NEW: Colossus armored fortress', waves: DAM_WAVES, hpMul: 1.5, dmgMul: 1.3, ambience: DAWN, layout: LAYOUT_C, launcherUnlock: false,
  },
  {
    id: 'crater', name: 'SUMMIT CRATER', timeOfDay: 'Blood Dusk',
    blurb: 'Final siege inside a ring-walled crater — the swarm enters through four gaps and everything it has comes at once.',
    newThreats: 'All classes · Colossus pack', waves: CRATER_WAVES, hpMul: 1.75, dmgMul: 1.45, ambience: BLOOD, layout: LAYOUT_D, launcherUnlock: false,
  },
];

// Bomber drop-blast tuning (Canyon Relay).
export const BOMB_BLAST = { radius: 5.5, maxDamage: 46, towerHeat: 14, towerRadius: 7 } as const;

/** Point lights the shaders will ever hold. The five maps stack ~40 lamps on
 *  the same ground and airdrop pods add more, so the renderer is fed only the
 *  nearest ones (lightRig.ts): 24 slots cost 1.7x the fragment work of 12 with
 *  no visible difference, and a constant count means no mid-wave recompiles. */
export const LIGHT_BUDGET = 14;

export const MISSION = {
  baseSignalRate: 0.42, // %/s while transmitting
  waveSignalRate: 0.3, // %/s while a wave is actively spawning
  heatGain: 1.9, // heat %/s while transmitting
  heatCool: 0.7, // heat %/s passive cooling
  overheatAt: 100,
  overheatRestartHold: 2.5, // seconds holding F to reboot
  overheatCoolTo: 18, // heat after reboot
  kamikazeTowerHeat: 26, // heat added by kamikaze blast near tower
  airdropProgress: [10, 30, 50, 70, 92],
  ammoStationCooldown: 32,
  medStationCooldown: 40,
  medHeal: 40,
  medArmor: 15,
  searchlightOverloadTime: 22, // continuous seconds before overload
  searchlightCooldown: 12,
  searchlightRange: 62,
  searchlightAngleDeg: 13,
} as const;

export const WEATHER = {
  baseFog: 0.011,
  fogPerBlizzard: 0.017,
  fogOscillation: 0.0035,
  snowCount: 1400,
  snowBox: 55,
} as const;
