// Shared game state types and the initial-state factory.
import * as THREE from 'three';
import { AUTOLEVEL, MISSION, PLAYER, TIER_BONUS, WEAPONS, weaponTier } from './config';

export type Phase = 'brief' | 'playing' | 'upgrade' | 'won' | 'lost';
export type WeaponId = 'pistol' | 'rifle' | 'shotgun' | 'plasma' | 'launcher' | 'railgun';
export type DroneKind =
  | 'scout'
  | 'heavy'
  | 'kamikaze'
  | 'warden'
  | 'bomber'
  | 'crawler'
  | 'colossus'
  | 'phantom'
  | 'shielder'
  | 'titan';
export type MapId = 'alpine' | 'canyon' | 'rail' | 'dam' | 'crater' | 'harbor' | 'biolab' | 'citadel';
export type AirdropKind = 'munitions' | 'medical' | 'sentry' | 'emp' | 'prototype';
export type InteractKind =
  | 'console'
  | 'searchlight'
  | 'ammo'
  | 'medkit'
  | 'airdrop'
  | 'workbench'
  | 'relay_node'
  | 'coolant_valve';

export type SubObjectiveKind = 'jammer' | 'relay' | 'coolant' | 'uplink_zone' | 'hvt';

export interface ActiveSubObjective {
  id: string;
  kind: SubObjectiveKind;
  title: string;
  desc: string;
  pos: THREE.Vector3;
  progress: number; // 0..1 for hold/zone or HP ratio for jammer/hvt
  maxHp?: number;
  hp?: number;
  timer: number; // remaining seconds before expiry
  mesh?: THREE.Group;
  hitMesh?: THREE.Mesh;
  interactId?: string;
}

export interface Collider {
  kind: 'box' | 'cyl';
  x: number;
  z: number;
  hx: number; // half extents (box)
  hz: number;
  r: number; // radius (cyl)
  top: number; // physical height for bullet-blocking
}

export interface Interactable {
  id: string;
  kind: InteractKind;
  pos: THREE.Vector3;
  label: string;
  readyAt: number; // game time when usable again (cooldown gate)
  remove?: () => void;
}

export interface UpgradeLevels {
  damage: number;
  fireRate: number;
  capacity: number;
  reload: number;
}

export interface WeaponRuntime {
  id: WeaponId;
  mag: number;
  reserve: number;
  levels: UpgradeLevels;
}

export interface PlayerState {
  pos: THREE.Vector3; // feet position
  vel: THREE.Vector3;
  yaw: number;
  pitch: number;
  health: number;
  maxHealth: number; // grows with auto rank level
  armor: number;
  maxArmor: number;
  lean: number; // -1..1 smoothed
  leanTarget: number;
  ads: number; // 0..1 smoothed
  sprinting: boolean;
  credits: number;
  overchargeUntil: number; // game time until munition overcharge buff expires
  regenUntil: number; // game time until nano-med regen expires
}

export interface MissionStats {
  kills: Record<DroneKind, number>;
  shotsFired: number;
  pelletsFired: number;
  pelletsHit: number;
  airdrops: number;
  overheatEvents: number;
  repairs: number;
  objectivesCompleted: number;
}

export interface MissionState {
  phase: Phase;
  time: number;
  progress: number; // signal transmission %
  wave: number; // 1-based, 0 before first
  heat: number;
  overheated: boolean;
  blizzard: number; // 0.1..1
  searchlightOn: boolean;
  searchlightRuntime: number;
  searchlightCooldownUntil: number;
  stats: MissionStats;
  endReason: string;
  score: number; // cumulative kill score (rank currency, never spent)
  level: number; // auto rank 1..AUTOLEVEL.maxLevel
  signalBoostUntil: number; // game time until relay surge expires
  thermalShieldUntil: number; // game time until coolant thermal immunity expires
  activeObjective: ActiveSubObjective | null;
  activeTurrets: number;
}

export function createPlayerState(): PlayerState {
  return {
    pos: new THREE.Vector3(0, 0, 10),
    vel: new THREE.Vector3(),
    yaw: 0, // face the tower (−z) at spawn
    pitch: 0,
    health: PLAYER.maxHealth,
    maxHealth: PLAYER.maxHealth,
    armor: 35,
    maxArmor: PLAYER.maxArmor,
    lean: 0,
    leanTarget: 0,
    ads: 0,
    sprinting: false,
    credits: 0,
    overchargeUntil: 0,
    regenUntil: 0,
  };
}

export function createMissionState(): MissionState {
  return {
    phase: 'brief',
    time: 0,
    progress: 0,
    wave: 0,
    heat: 0,
    overheated: false,
    blizzard: 0.25,
    searchlightOn: false,
    searchlightRuntime: 0,
    searchlightCooldownUntil: 0,
    stats: {
      kills: {
        scout: 0,
        heavy: 0,
        kamikaze: 0,
        warden: 0,
        bomber: 0,
        crawler: 0,
        colossus: 0,
        phantom: 0,
        shielder: 0,
        titan: 0,
      },
      shotsFired: 0,
      pelletsFired: 0,
      pelletsHit: 0,
      airdrops: 0,
      overheatEvents: 0,
      repairs: 0,
      objectivesCompleted: 0,
    },
    endReason: '',
    score: 0,
    level: 1,
    signalBoostUntil: 0,
    thermalShieldUntil: 0,
    activeObjective: null,
    activeTurrets: 0,
  };
}

export function createWeaponRuntimes(): Record<WeaponId, WeaponRuntime> {
  return {
    pistol: { id: 'pistol', mag: WEAPONS.pistol.magSize, reserve: WEAPONS.pistol.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
    rifle: { id: 'rifle', mag: WEAPONS.rifle.magSize, reserve: WEAPONS.rifle.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
    shotgun: { id: 'shotgun', mag: WEAPONS.shotgun.magSize, reserve: WEAPONS.shotgun.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
    plasma: { id: 'plasma', mag: WEAPONS.plasma.magSize, reserve: WEAPONS.plasma.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
    launcher: { id: 'launcher', mag: WEAPONS.launcher.magSize, reserve: WEAPONS.launcher.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
    railgun: { id: 'railgun', mag: WEAPONS.railgun.magSize, reserve: WEAPONS.railgun.reserveMax, levels: { damage: 0, fireRate: 0, capacity: 0, reload: 0 } },
  };
}

/** Effective stats of a weapon after upgrades. */
export interface EffectiveWeapon {
  damage: number;
  pellets: number;
  fireInterval: number;
  magSize: number;
  reloadTime: number;
}

export function effectiveWeapon(id: WeaponId, levels: UpgradeLevels, autoLevel = 1): EffectiveWeapon {
  const base = WEAPONS[id];
  const lvl = Math.max(0, autoLevel - 1); // rank bonus above level 1
  const tier = weaponTier(autoLevel); // 0..3
  const tb = tier > 0 ? TIER_BONUS[tier - 1] : { dmgAdd: 0, magAdd: 0, pelletsAdd: 0 };
  const isSingleShot = id === 'launcher' || id === 'railgun';
  const pelletsBonus = id === 'shotgun' ? tb.pelletsAdd : 0;
  return {
    damage: (base.damage + tb.dmgAdd) * (1 + MISSION.damageUpgradePerLevel * levels.damage) * (1 + AUTOLEVEL.damagePerLevel * lvl),
    pellets: base.pellets + pelletsBonus,
    fireInterval: base.fireInterval / ((1 + 0.12 * levels.fireRate) * (1 + AUTOLEVEL.fireRatePerLevel * lvl)),
    magSize: Math.max(1, Math.round((base.magSize + (isSingleShot ? 0 : tb.magAdd)) * (1 + 0.25 * levels.capacity))),
    reloadTime: base.reloadTime / ((1 + 0.12 * levels.reload) * (1 + AUTOLEVEL.reloadPerLevel * lvl)),
  };
}
