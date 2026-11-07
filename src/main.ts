// Outpost Zero — game bootstrap & per-frame orchestration (eight-level campaign).
import * as THREE from 'three';
import { AIRDROP_SPECS, AUTOLEVEL, BOMB_BLAST, DRONES, LEVELS, LIGHT_BUDGET, MISSION, PLAYER, ROCKET, UPGRADE, WEAPONS, weaponTier } from './config';
import { Engine, isSoftwareGl } from './engine';
import { AudioWorld } from './audio';
import { buildWorld, type WorldBundle } from './world';
import { LightRig } from './lightRig';
import { buildCanyon } from './canyon';
import { buildRailYard } from './rail';
import { buildDam } from './dam';
import { buildCrater } from './crater';
import { buildHarbor } from './harbor';
import { buildBiolab } from './biolab';
import { buildCitadel } from './citadel';
import { buildOutpost } from './outpost';
import { PlayerController } from './player';
import { WeaponSystem } from './weapons';
import { DroneManager, type Drone } from './drones';
import { Effects } from './effects';
import { Weather } from './weather';
import { WaveDirector } from './waves';
import { InteractSystem } from './interact';
import { TacticalDirector } from './objectives';
import { Hud } from './hud';
import {
  createMissionState,
  createPlayerState,
  createWeaponRuntimes,
  effectiveWeapon,
  type AirdropKind,
  type Collider,
  type DroneKind,
  type Interactable,
  type MapId,
  type MissionState,
  type SubObjectiveKind,
  type UpgradeLevels,
  type WeaponId,
} from './state';

interface MapRuntime {
  group: THREE.Group;
  ground: THREE.Mesh;
  colliders: Collider[];
  proxies: THREE.Mesh[];
  outpost: ReturnType<typeof buildOutpost>;
  waves: WaveDirector;
}

interface Rocket {
  slot: number;
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  direct: number;
}

const ROCKET_POOL = 12;
const _upAxis = new THREE.Vector3(0, 1, 0);
const _camDir = new THREE.Vector3();
const _rayEnd = new THREE.Vector3();
const _prevPos = new THREE.Vector3();
const _velDir = new THREE.Vector3();
const _toVec = new THREE.Vector3();
const _desiredVel = new THREE.Vector3();
const _segAB = new THREE.Vector3();
const _segAP = new THREE.Vector3();
const _segClosest = new THREE.Vector3();

class Game {
  private engine: Engine;
  private lightRig: LightRig;
  private frameGaps: number[] = [];

  private audio = new AudioWorld();
  private mission: MissionState;
  private player = createPlayerState();
  private runtimes = createWeaponRuntimes();
  private controller: PlayerController;
  private weapons: WeaponSystem;
  private drones: DroneManager;
  private effects: Effects;
  private weather: Weather;
  private waves: WaveDirector;
  private interact: InteractSystem;
  private tactical: TacticalDirector;
  private hud: Hud;
  private outpost: ReturnType<typeof buildOutpost>;
  private mapRuntimes: MapRuntime[];
  private levelIdx = 0;
  private staticProxies: THREE.Mesh[] = [];
  private groundMesh!: THREE.Mesh;
  private sharedRaycaster = new THREE.Raycaster();
  private rayTargets: THREE.Object3D[] = [];
  private enemyPositions: THREE.Vector3[] = [];

  private rockets: Rocket[] = [];
  private rocketGeo = new THREE.ConeGeometry(0.09, 0.5, 6);
  private rocketMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffd9a0'), blending: THREE.AdditiveBlending, transparent: true, fog: false });
  private rocketPool: THREE.Mesh[] = [];
  private rocketFree: number[] = [];

  private firingHeld = false;
  private firePressedEdge = false;
  private fHeld = false;
  private fPressedEdge = false;
  private holdConsole = 0;
  private focus: Interactable | null = null;
  private paused = false;
  private empTimer = -1;
  private endShown = false;

  constructor() {
    this.engine = new Engine(document.getElementById('viewport')!);
    const scene = this.engine.scene;

    this.mission = createMissionState();
    this.effects = new Effects(scene);
    this.weather = new Weather(scene);
    this.drones = new DroneManager(scene, {
      onPlayerHit: (dmg, from) => this.damagePlayer(dmg, from),
      onExplosion: (pos, kind, killedByPlayer) => this.onDroneExplosion(pos, kind, killedByPlayer),
      onLaser: (from, to) => this.effects.tracer(from, to, '#ff5a4a', 0.1),
      onBeep: (p) => this.audio.proximityBeep(p),
    });

    // all eight level maps are built up front; only the active one is visible
    const builders: Record<MapId, (s: THREE.Scene) => WorldBundle> = {
      alpine: buildWorld,
      canyon: buildCanyon,
      rail: buildRailYard,
      dam: buildDam,
      crater: buildCrater,
      harbor: buildHarbor,
      biolab: buildBiolab,
      citadel: buildCitadel,
    };
    this.mapRuntimes = LEVELS.map((def, i) => this.makeMapRuntime(i, builders[def.id](scene), buildOutpost(scene, def.layout)));

    this.outpost = this.mapRuntimes[0].outpost;
    this.waves = this.mapRuntimes[0].waves;
    this.staticProxies = this.mapRuntimes[0].proxies;
    this.groundMesh = this.mapRuntimes[0].ground;
    this.controller = new PlayerController(this.engine.camera, this.mapRuntimes[0].colliders, this.player);
    this.weapons = new WeaponSystem(this.engine.camera, this.runtimes, this.audio);
    this.interact = new InteractSystem(this.outpost.interactables);
    this.tactical = new TacticalDirector(scene, this.drones, this.effects, this.audio);
    this.engine.setAmbience(LEVELS[0].ambience);

    this.lightRig = new LightRig(scene, LIGHT_BUDGET);
    console.log(`[lights] ${this.lightRig.collect()} fixtures -> pool of ${this.lightRig.budget}`);
    for (let i = 0; i < ROCKET_POOL; i++) {
      const mesh = new THREE.Mesh(this.rocketGeo, this.rocketMat);
      mesh.visible = false;
      scene.add(mesh);
      this.rocketPool.push(mesh);
      this.rocketFree.push(i);
    }
    const tWarm = performance.now();
    this.warmHostiles();
    this.prewarmMaterials();
    (window as unknown as { __bootTimings: unknown }).__bootTimings = {
      warmHostiles: Math.round(performance.now() - tWarm),
    };

    this.hud = new Hud({
      onStart: (levelIdx = 0) => this.startLevel(levelIdx),
      onSelectPreviewLevel: (levelIdx) => this.previewLevel(levelIdx),
      onBuy: (w, t) => this.buyUpgrade(w, t),
      onUnlockWeapon: (w) => this.fieldUnlockWeapon(w),
      onCloseUpgrade: () => this.closeUpgrade(),
      onRestart: () => location.reload(),
      onResume: () => this.requestLock(),
      onToggleMusic: () => this.audio.toggleMusic(),
    });
    this.hud.restartCb = () => location.reload();
    this.hud.setPhase('brief');

    this.bindInput();
    (window as unknown as { __outpost: unknown }).__outpost = this.debugHooks();

    let last = performance.now();
    const scheduleNext = isSoftwareGl
      ? (fn: (now: number) => void) => this.engine.afterDraw(() => fn(performance.now()))
      : (fn: (now: number) => void) => requestAnimationFrame(fn);

    const loop = (now: number) => {
      this.frameGaps.push(now - last);
      if (this.frameGaps.length > 240) this.frameGaps.shift();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      this.update(dt);
      scheduleNext(loop);
    };
    requestAnimationFrame(loop);
  }

  // ---------- warm-up ----------

  private warmHostiles(): void {
    const kinds: DroneKind[] = [
      'scout',
      'heavy',
      'kamikaze',
      'warden',
      'bomber',
      'crawler',
      'colossus',
      'phantom',
      'shielder',
      'titan',
    ];
    const keep = this.drones.drones.length;
    const cam = this.engine.camera;
    const dir = new THREE.Vector3();
    cam.getWorldDirection(dir);
    kinds.forEach((kind, i) => {
      const a = (i - (kinds.length - 1) / 2) * 0.25;
      const pos = cam.position
        .clone()
        .addScaledVector(dir, 24)
        .add(new THREE.Vector3(-dir.z * Math.sin(a) * 24, 7 + i * 1.2, dir.x * Math.sin(a) * 24));
      this.drones.spawn(kind, pos);
    });
    const hidden: THREE.Object3D[] = [];
    const culled: THREE.Object3D[] = [];
    this.engine.scene.traverse((obj) => {
      if (!obj.visible) {
        obj.visible = true;
        hidden.push(obj);
      }
      if (obj.frustumCulled) {
        obj.frustumCulled = false;
        culled.push(obj);
      }
    });
    this.engine.renderer.compile(this.engine.scene, cam);
    this.engine.render();
    this.engine.render();
    for (const obj of culled) obj.frustumCulled = true;
    for (const obj of hidden) obj.visible = false;
    for (const d of this.drones.drones.slice(keep)) this.engine.scene.remove(d.group);
    this.drones.drones.length = keep;
    console.log(`[warm] ${kinds.length} hostile kinds built, rendered once, removed`);
  }

  private prewarmMaterials(): void {
    this.engine.renderer.compile(this.engine.scene, this.engine.camera);
  }

  // ---------- map assembly ----------

  private makeMapRuntime(levelIdx: number, world: WorldBundle, ob: ReturnType<typeof buildOutpost>): MapRuntime {
    const group = new THREE.Group();
    group.add(world.group, ob.root);
    this.engine.scene.add(group);
    const colliders = [...world.colliders, ...ob.colliders];
    const proxies: THREE.Mesh[] = [];
    const proxyMat = new THREE.MeshBasicMaterial({ visible: false });
    for (const c of colliders) {
      const h = c.top;
      const geo = c.kind === 'box' ? new THREE.BoxGeometry(c.hx * 2, h, c.hz * 2) : new THREE.CylinderGeometry(c.r, c.r, h, 8);
      const m = new THREE.Mesh(geo, proxyMat);
      m.position.set(c.x, h / 2, c.z);
      m.userData = { part: 'world' };
      group.add(m);
      proxies.push(m);
    }
    group.visible = levelIdx === 0;
    const waves = new WaveDirector(this.engine.scene, this.drones, colliders, LEVELS[levelIdx].waves, world.spawnAngle);
    return { group, ground: world.ground, colliders, proxies, outpost: ob, waves };
  }

  /** Switch backdrop map while on the briefing screen so players can preview any theater. */
  private previewLevel(i: number): void {
    if (this.mission.phase !== 'brief') return;
    const def = LEVELS[i];
    if (!def) return;
    this.mapRuntimes.forEach((rt, idx) => (rt.group.visible = idx === i));
    this.engine.setAmbience(def.ambience);
    this.hud.setMap(`L${i + 1} · ${def.name}`);
  }

  // ---------- campaign lifecycle ----------

  /** Enter level i, carrying rank/credits/upgrades over and re-supplying fully. */
  private startLevel(i: number): void {
    const def = LEVELS[i];
    const m = this.mission;
    m.time = 0;
    m.progress = 0;
    m.wave = 0;
    m.heat = 0;
    m.overheated = false;
    m.blizzard = 0.25;
    m.searchlightOn = false;
    m.searchlightRuntime = 0;
    m.searchlightCooldownUntil = 0;
    m.signalBoostUntil = 0;
    m.thermalShieldUntil = 0;
    m.activeObjective = null;
    m.activeTurrets = 0;
    m.endReason = '';
    m.phase = 'brief';
    this.holdConsole = 0;
    this.levelIdx = i;
    this.endShown = false;
    this.empTimer = -1;
    this.clearRockets();

    this.mapRuntimes.forEach((rt, idx) => (rt.group.visible = idx === i));
    const rt = this.mapRuntimes[i];
    this.outpost = rt.outpost;
    this.waves = rt.waves;
    this.waves.reset();
    this.waves.clear();
    this.staticProxies = rt.proxies;
    this.groundMesh = rt.ground;
    this.interact = new InteractSystem([...this.outpost.interactables]);
    this.tactical.reset((id: string) => this.interact.remove(id));
    this.controller.setColliders(rt.colliders);
    this.drones.setColliders(rt.colliders);
    this.drones.setMods(def.hpMul, def.dmgMul);
    this.drones.clearHostiles();
    this.engine.setAmbience(def.ambience);

    // Unlock weapons up to this level
    for (let li = 0; li <= i; li++) {
      const wUnlock = LEVELS[li].weaponUnlock;
      if (wUnlock && this.weapons.locked.has(wUnlock)) {
        this.weapons.unlock(wUnlock);
      }
    }

    // If jumping directly to a later theater from brief, grant starting credits/rank floor so it's balanced
    if (i > 0 && m.level < i) {
      const targetRank = Math.min(AUTOLEVEL.maxLevel, i);
      while (m.level < targetRank) {
        m.level += 1;
        this.player.maxHealth += AUTOLEVEL.hpPerLevel;
      }
      this.player.credits = Math.max(this.player.credits, i * 35);
    }

    // between-level refresh: vitals & ammo full, rank bonuses and upgrades intact
    this.player.pos.set(0, 0, 10);
    this.player.health = this.player.maxHealth;
    this.player.armor = PLAYER.maxArmor;
    this.player.overchargeUntil = 0;
    this.player.regenUntil = 0;
    for (const id of Object.keys(this.runtimes) as WeaponId[]) {
      const wr = this.runtimes[id];
      wr.mag = effectiveWeapon(id, wr.levels, m.level).magSize;
      wr.reserve = WEAPONS[id].reserveMax;
    }
    this.weapons.autoLevel = m.level;
    if (this.weapons.locked.has(this.weapons.current)) this.weapons.switchTo('pistol');

    this.hud.setMap(`L${i + 1} · ${def.name}`);
    this.audio.init();
    this.audio.resume();
    m.phase = 'playing';
    this.hud.setPhase('playing');
    this.hud.banner_show(`LEVEL ${i + 1} — ${def.name}`, `${def.timeOfDay} · ${def.blurb}`);
    this.requestLock();
  }

  private advance(): void {
    if (this.levelIdx >= LEVELS.length - 1) return;
    this.startLevel(this.levelIdx + 1);
  }

  private requestLock(): void {
    this.paused = false;
    this.hud.showPause(false);
    const dom = this.engine.renderer.domElement;
    if (document.pointerLockElement !== dom) {
      try {
        const p = dom.requestPointerLock?.() as unknown;
        if (p && typeof (p as Promise<void>).catch === 'function') (p as Promise<void>).catch(() => undefined);
      } catch {
        /* headless harness may reject; the sim hook drives frames regardless */
      }
    }
    this.audio.resume();
  }

  restart(): void {
    location.reload();
  }

  // ---------- input ----------

  private bindInput(): void {
    const dom = this.engine.renderer.domElement;
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === dom;
      if (!locked && this.mission.phase === 'playing') {
        this.paused = true;
        this.hud.showPause(true);
      } else if (locked) {
        this.paused = false;
        this.hud.showPause(false);
      }
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === dom) this.controller.onMouseMove(e.movementX, e.movementY);
    });
    dom.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== dom) {
        if (this.mission.phase === 'playing') this.requestLock();
        return;
      }
      if (e.button === 0) {
        this.firingHeld = true;
        this.firePressedEdge = true;
      }
      if (e.button === 2) this.controller.adsHeld = true;
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.firingHeld = false;
      if (e.button === 2) this.controller.adsHeld = false;
    });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
    dom.addEventListener('wheel', (e) => {
      if (this.mission.phase !== 'playing') return;
      this.weapons.cycle(e.deltaY > 0 ? 1 : -1);
    });
    document.addEventListener('keydown', (e) => {
      if (e.repeat) {
        this.controller.onKey(e.code, true);
        return;
      }
      this.controller.onKey(e.code, true);
      switch (e.code) {
        case 'Digit1':
          this.weapons.switchTo('pistol');
          break;
        case 'Digit2':
          this.weapons.switchTo('rifle');
          break;
        case 'Digit3':
          this.weapons.switchTo('shotgun');
          break;
        case 'Digit4':
          this.weapons.switchTo('plasma');
          break;
        case 'Digit5':
          this.weapons.switchTo('launcher');
          break;
        case 'Digit6':
          this.weapons.switchTo('railgun');
          break;
        case 'KeyR':
          this.weapons.startReload();
          break;
        case 'KeyF':
          this.fHeld = true;
          this.fPressedEdge = true;
          break;
        case 'KeyB':
          if (this.mission.phase === 'playing') this.openUpgrade();
          else if (this.mission.phase === 'upgrade') this.closeUpgrade();
          break;
        case 'KeyH':
          this.hud.toggleDock();
          break;
        case 'KeyT':
          if (this.mission.phase === 'playing') this.toggleSearchlight();
          break;
        case 'KeyM': {
          const on = this.audio.toggleMusic();
          this.hud.setMusicState(on);
          break;
        }
      }
    });
    document.addEventListener('keyup', (e) => {
      this.controller.onKey(e.code, false);
      if (e.code === 'KeyF') this.fHeld = false;
    });
  }

  // ---------- upgrades ----------

  private openUpgrade(): void {
    this.mission.phase = 'upgrade';
    this.hud.setPhase('upgrade');
    this.renderUpgradePanel();
    document.exitPointerLock?.();
  }

  private closeUpgrade(): void {
    this.mission.phase = 'playing';
    this.hud.setPhase('playing');
    this.requestLock();
  }

  private renderUpgradePanel(): void {
    this.hud.renderUpgrade(
      this.player.credits,
      this.runtimes,
      (w, t) => this.buyUpgrade(w, t),
      this.weapons.locked,
      (w) => this.fieldUnlockWeapon(w),
    );
  }

  private fieldUnlockWeapon(weapon: WeaponId): void {
    if (!this.weapons.locked.has(weapon)) return;
    const cost = weapon === 'plasma' ? 60 : weapon === 'launcher' ? 85 : 110;
    if (this.player.credits < cost) return;
    this.player.credits -= cost;
    this.weapons.unlock(weapon);
    this.audio.levelUp();
    this.renderUpgradePanel();
  }

  private buyUpgrade(weapon: WeaponId, track: keyof UpgradeLevels): void {
    const levels = this.runtimes[weapon].levels;
    const lvl = levels[track];
    if (lvl >= UPGRADE.maxLevel) return;
    const cost = UPGRADE.cost(lvl);
    if (this.player.credits < cost) return;
    this.player.credits -= cost;
    levels[track] = lvl + 1;
    this.audio.pickup();
    this.renderUpgradePanel();
  }

  // ---------- auto rank ----------

  private addScore(n: number): void {
    const m = this.mission;
    m.score += n;
    while (m.level < AUTOLEVEL.maxLevel && m.score >= AUTOLEVEL.thresholds[m.level]) {
      m.level += 1;
      const p = this.player;
      p.maxHealth += AUTOLEVEL.hpPerLevel;
      p.health = Math.min(p.maxHealth, p.health + AUTOLEVEL.healOnLevelUp);
      this.weapons.autoLevel = m.level;
      this.audio.levelUp();
      const tier = weaponTier(m.level);
      const prevTier = weaponTier(m.level - 1);
      let sub = `Max HP ${p.maxHealth} (+${AUTOLEVEL.hpPerLevel}) · Healed +${AUTOLEVEL.healOnLevelUp} · Damage +${((m.level - 1) * AUTOLEVEL.damagePerLevel * 100) | 0}% · Fire rate up`;
      if (tier > prevTier) sub += ` · All weapons Mk ${['I', 'II', 'III'][tier - 1]} unlocked`;
      this.hud.banner_show(`RANK ${m.level}`, sub);
    }
  }

  // ---------- combat ----------

  private buildRayTargets(): THREE.Object3D[] {
    const droneMeshes = this.drones.hitMeshes();
    this.rayTargets.length = 0;
    for (let i = 0; i < droneMeshes.length; i++) this.rayTargets.push(droneMeshes[i]);
    if (this.tactical.activeObj?.hitMesh) this.rayTargets.push(this.tactical.activeObj.hitMesh);
    for (let i = 0; i < this.staticProxies.length; i++) this.rayTargets.push(this.staticProxies[i]);
    this.rayTargets.push(this.groundMesh);
    return this.rayTargets;
  }

  private fire(): void {
    const overcharged = this.player.overchargeUntil > this.mission.time;
    const shot = this.weapons.tryFire(this.player, this.controller.planarSpeed() > 1.5, this.mission.time);
    if (!shot) return;
    this.mission.stats.shotsFired += 1;
    this.mission.stats.pelletsFired += shot.dirs.length;
    const curWep = this.weapons.current;

    if (curWep === 'launcher') {
      const dir = shot.dirs[0];
      const slot = this.takeRocketSlot();
      const mesh = this.rocketPool[slot];
      mesh.position.copy(shot.muzzleWorld);
      mesh.quaternion.setFromUnitVectors(_upAxis, dir);
      mesh.visible = true;
      this.rockets.push({ slot, mesh, vel: dir.clone().multiplyScalar(ROCKET.speed), life: 8, direct: shot.damage });
      this.effects.flash(shot.muzzleWorld, '#ffb27f', 26, 6, 0.12);
    } else if (curWep === 'railgun') {
      // Piercing electromagnetic slug: hits every drone along the ray up to range or first solid world hit
      const from = this.engine.camera.position;
      const dir = shot.dirs[0];
      this.sharedRaycaster.set(from, dir);
      this.sharedRaycaster.far = shot.range;
      const hits = this.sharedRaycaster.intersectObjects(this.buildRayTargets(), false);
      const hitDrones = new Set<Drone>();
      let stopDist = shot.range;
      for (const h of hits) {
        const ud = h.object.userData as { drone?: Drone; part?: string };
        if (ud.part === 'world' || h.object === this.groundMesh) {
          stopDist = h.distance;
          this.effects.sparks(h.point, 'cyan', 8);
          break;
        }
        if (ud.part === 'jammer') {
          this.tactical.damageJammer(
            shot.damage * 1.25,
            (id) => this.interact.remove(id),
            (k, p) => this.onCompleteObjective(k, p),
          );
          this.effects.sparks(h.point, 'violet', 10);
          this.audio.critHit();
          continue;
        }
        if (ud.drone && ud.part && !hitDrones.has(ud.drone)) {
          hitDrones.add(ud.drone);
          const res = this.drones.applyDamage(ud.drone, ud.part, shot.damage, 1.35);
          this.mission.stats.pelletsHit += 1;
          this.effects.sparks(h.point, 'violet', 10);
          this.effects.shockwave(h.point, '#a855f7', 2.4);
          if (res.crit) this.audio.critHit();
          else this.audio.hitTick();
          if (res.killed) this.audio.killConfirm();
        }
      }
      _rayEnd.copy(from).addScaledVector(dir, stopDist);
      this.effects.tracer(shot.muzzleWorld, _rayEnd, '#c084fc', 0.14);
      this.effects.arcBeam(shot.muzzleWorld, _rayEnd, '#38bdf8');
    } else {
      const from = this.engine.camera.position;
      const targets = this.buildRayTargets();
      const isPlasma = curWep === 'plasma';
      const tracerCol = isPlasma ? '#38bdf8' : overcharged ? '#c084fc' : '#ffd27f';
      for (const dir of shot.dirs) {
        this.sharedRaycaster.set(from, dir);
        this.sharedRaycaster.far = shot.range;
        const hits = this.sharedRaycaster.intersectObjects(targets, false);
        const hit = hits[0];
        if (hit) {
          const ud = hit.object.userData as { drone?: Drone; part?: string };
          const end = hit.point;
          this.effects.tracer(shot.muzzleWorld, end, tracerCol, isPlasma ? 0.09 : 0.06);
          if (isPlasma) this.effects.arcBeam(shot.muzzleWorld, end, '#38bdf8');
          if (ud.part === 'jammer') {
            this.tactical.damageJammer(
              shot.damage,
              (id) => this.interact.remove(id),
              (k, p) => this.onCompleteObjective(k, p),
            );
            this.effects.sparks(end, isPlasma ? 'cyan' : 'amber', 6);
            this.audio.hitTick();
          } else if (ud.drone && ud.part) {
            const res = this.drones.applyDamage(ud.drone, ud.part, shot.damage, isPlasma ? 1.85 : 1);
            this.mission.stats.pelletsHit += 1;
            if (ud.part === 'shield') {
              this.effects.shieldRipple(end);
              this.audio.shieldZap();
            } else {
              this.effects.sparks(end, ud.part === 'weak' ? 'red' : isPlasma ? 'cyan' : 'amber', 6);
              if (res.crit) this.audio.critHit();
              else this.audio.hitTick();
            }
            if (res.killed) this.audio.killConfirm();

            // Helios Plasma Carbine chains an electric arc to a nearby hostile within 7.5m
            if (isPlasma) {
              let chainTarget: Drone | null = null;
              let bestD = 7.5;
              for (const other of this.drones.drones) {
                if (other === ud.drone || other.dying) continue;
                const d = other.group.position.distanceTo(end);
                if (d < bestD) {
                  bestD = d;
                  chainTarget = other;
                }
              }
              if (chainTarget) {
                this.effects.arcBeam(end, chainTarget.group.position, '#38bdf8');
                this.drones.applyDamage(chainTarget, 'body', shot.damage * 0.55, 1.8);
                this.audio.plasmaArc();
              }
            }
          } else if (ud.part === 'world') {
            this.effects.sparks(end, isPlasma ? 'cyan' : 'amber', 3);
          } else {
            this.effects.sparks(end, isPlasma ? 'cyan' : 'amber', 2);
          }
        } else {
          _rayEnd.copy(from).addScaledVector(dir, shot.range);
          this.effects.tracer(shot.muzzleWorld, _rayEnd, tracerCol, isPlasma ? 0.09 : 0.06);
        }
      }
    }
    this.controller.addRecoil(
      THREE.MathUtils.degToRad(WEAPONS[curWep].recoilPitchDeg),
      THREE.MathUtils.degToRad(WEAPONS[curWep].recoilYawDeg),
    );
    this.controller.addTrauma(
      curWep === 'shotgun' || curWep === 'railgun' ? 0.36 : curWep === 'launcher' ? 0.4 : 0.12,
    );
  }

  // ---------- Vulcan SAM rockets ----------

  private clearRockets(): void {
    for (const r of this.rockets) {
      r.mesh.visible = false;
      this.rocketFree.push(r.slot);
    }
    this.rockets.length = 0;
  }

  private takeRocketSlot(): number {
    const i = this.rocketFree.pop();
    if (i !== undefined) return i;
    const old = this.rockets.shift()!;
    old.mesh.visible = false;
    this.rocketFree.push(old.slot);
    return this.rocketFree.pop()!;
  }

  private static pointSegDist(p: THREE.Vector3, a: THREE.Vector3, b: THREE.Vector3): number {
    _segAB.subVectors(b, a);
    const len2 = _segAB.lengthSq();
    _segAP.subVectors(p, a);
    const t = len2 <= 1e-9 ? 0 : THREE.MathUtils.clamp(_segAP.dot(_segAB) / len2, 0, 1);
    return _segClosest.copy(a).addScaledVector(_segAB, t).distanceTo(p);
  }

  private solidWorldPoint(p: THREE.Vector3): boolean {
    for (const c of this.mapRuntimes[this.levelIdx].colliders) {
      if (p.y >= c.top) continue;
      if (c.kind === 'cyl') {
        if (Math.hypot(p.x - c.x, p.z - c.z) < c.r) return true;
      } else if (Math.abs(p.x - c.x) < c.hx && Math.abs(p.z - c.z) < c.hz) return true;
    }
    return false;
  }

  private detonateRocket(pos: THREE.Vector3, direct: number): void {
    this.effects.explosion(pos, 1.7);
    this.audio.explosion();
    this.controller.addTrauma(0.3);
    const blast = direct * ROCKET.blastMult;
    for (const d of [...this.drones.drones]) {
      if (d.dying) continue;
      const dist = d.group.position.distanceTo(pos);
      if (dist > ROCKET.blastRadius + d.radius) continue;
      const falloff = Math.max(0, 1 - Math.max(0, dist - d.radius) / ROCKET.blastRadius);
      const directHit = dist < d.radius + ROCKET.fuseRadius ? direct : 0;
      const res = this.drones.applyDamage(d, 'body', directHit + blast * falloff);
      if (res.killed) this.audio.killConfirm();
    }
    // Rockets also damage active jammer pylons if within blast radius
    if (this.tactical.activeObj?.kind === 'jammer') {
      const jDist = this.tactical.activeObj.pos.distanceTo(pos);
      if (jDist < ROCKET.blastRadius + 2) {
        this.tactical.damageJammer(
          direct * 1.4,
          (id) => this.interact.remove(id),
          (k, p) => this.onCompleteObjective(k, p),
        );
      }
    }
  }

  private updateRockets(dt: number): void {
    const cosLimit = Math.cos(THREE.MathUtils.degToRad(ROCKET.lockConeDeg));
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      _prevPos.copy(r.mesh.position);
      let target: Drone | null = null;
      let bestDist = Infinity;
      _velDir.copy(r.vel).normalize();
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        _toVec.subVectors(d.group.position, r.mesh.position);
        const dist = _toVec.length();
        if (dist > 120 || dist >= bestDist || dist < 1e-4) continue;
        if (dist > 4 && _toVec.multiplyScalar(1 / dist).dot(_velDir) < cosLimit) continue;
        target = d;
        bestDist = dist;
      }
      if (target) {
        _desiredVel.subVectors(target.group.position, r.mesh.position).normalize().multiplyScalar(ROCKET.speed);
        r.vel.lerp(_desiredVel, Math.min(1, dt * ROCKET.turnRate));
      }
      r.vel.setLength(ROCKET.speed);
      r.mesh.position.addScaledVector(r.vel, dt);
      _velDir.copy(r.vel).normalize();
      r.mesh.quaternion.setFromUnitVectors(_upAxis, _velDir);
      r.life -= dt;
      this.effects.tracer(_prevPos, r.mesh.position, '#ffb27f', 0.05);

      const p = r.mesh.position;
      let detonate = false;
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        if (Game.pointSegDist(d.group.position, _prevPos, p) < d.radius + ROCKET.fuseRadius) {
          detonate = true;
          break;
        }
      }
      if (p.y < 0.15 || this.solidWorldPoint(p) || r.life <= 0) detonate = true;
      if (detonate) {
        this.detonateRocket(p.clone(), r.direct);
        r.mesh.visible = false;
        this.rocketFree.push(r.slot);
        this.rockets.splice(i, 1);
      }
    }
  }

  private onDroneExplosion(pos: THREE.Vector3, kind: DroneKind, killedByPlayer: boolean): void {
    const tint: 'fire' | 'cyan' | 'violet' =
      kind === 'phantom' || kind === 'titan' ? 'violet' : kind === 'shielder' ? 'cyan' : 'fire';
    const scale =
      kind === 'titan'
        ? 2.2
        : kind === 'heavy' || kind === 'colossus'
          ? 1.5
          : kind === 'kamikaze' || kind === 'bomber'
            ? 1.4
            : 0.9;
    this.effects.explosion(pos, scale, tint);
    this.audio.explosion();
    if (killedByPlayer) {
      const reward = DRONES[kind].credits;
      this.player.credits += reward;
      this.mission.stats.kills[kind] += 1;
      this.addScore(reward);
      return;
    }
    const dmgMul = LEVELS[this.levelIdx].dmgMul;
    if (kind === 'bomber') {
      const d = this.player.pos.distanceTo(pos);
      if (d < BOMB_BLAST.radius) {
        this.damagePlayer(Math.round(BOMB_BLAST.maxDamage * dmgMul * Math.max(0, 1 - d / BOMB_BLAST.radius)), pos);
      }
      if (this.outpost.towerPos.distanceTo(pos) < BOMB_BLAST.towerRadius && this.mission.thermalShieldUntil <= this.mission.time) {
        this.mission.heat += BOMB_BLAST.towerHeat;
      }
      return;
    }
    // kamikaze detonation
    const d = this.player.pos.distanceTo(pos);
    if (d < 6) this.damagePlayer(Math.round(76 * dmgMul * Math.max(0, 1 - d / 6)), pos);
    const towerDist = this.outpost.towerPos.distanceTo(pos);
    if (towerDist < 7 && this.mission.thermalShieldUntil <= this.mission.time) {
      this.mission.heat += MISSION.kamikazeTowerHeat;
    }
  }

  private damagePlayer(dmg: number, from: THREE.Vector3): void {
    if (dmg <= 0 || this.mission.phase !== 'playing') return;
    const p = this.player;
    if (p.armor > 0) {
      const absorbed = Math.min(p.armor, dmg * 0.6);
      p.armor -= absorbed;
      p.health -= dmg - absorbed;
    } else {
      p.health -= dmg;
    }
    this.controller.addTrauma(0.5);
    this.hud.flashDamage(dmg);
    const bearing = Math.atan2(from.x - p.pos.x, from.z - p.pos.z);
    const facing = Math.atan2(-Math.sin(p.yaw), -Math.cos(p.yaw));
    this.hud.flashHit(bearing, facing);
    if (p.health <= 0) this.defeat('Vitals flatlined — the outpost line has collapsed');
  }

  private defeat(reason: string): void {
    if (this.mission.phase === 'won' || this.mission.phase === 'lost') return;
    this.mission.phase = 'lost';
    this.mission.endReason = reason;
    this.audio.setAlarm(false);
    this.audio.defeat();
    document.exitPointerLock?.();
    this.hud.setInteract(null, 0);
    this.hud.setPhase('lost');
    this.hud.showEnd(false, this.mission, this.mission.time);
    this.hud.restartCb = () => location.reload();
  }

  // ---------- facilities, diverse airdrops & sub-objectives ----------

  private toggleSearchlight(): void {
    const m = this.mission;
    if (m.searchlightOn) {
      m.searchlightOn = false;
    } else if (m.time < m.searchlightCooldownUntil) {
      return;
    } else {
      m.searchlightOn = true;
    }
    this.audio.uiClick();
  }

  private refillAllAmmo(): void {
    const m = this.mission;
    for (const id of Object.keys(this.runtimes) as WeaponId[]) {
      const wr = this.runtimes[id];
      wr.mag = effectiveWeapon(id, wr.levels, m.level).magSize;
      wr.reserve = WEAPONS[id].reserveMax;
    }
  }

  private onClaimAirdrop(kind: AirdropKind, pos: THREE.Vector3): void {
    const m = this.mission;
    const p = this.player;
    m.stats.airdrops += 1;
    this.effects.shockwave(pos, AIRDROP_SPECS[kind].color, 4.5);

    switch (kind) {
      case 'munitions':
        this.refillAllAmmo();
        p.overchargeUntil = m.time + 16;
        p.credits += 45;
        this.audio.pickup();
        this.hud.banner_show('MUNITIONS POD CLAIMED', 'All magazines & reserves full · +16s Weapon Overcharge (+35% DMG & ROF)');
        break;
      case 'medical':
        p.maxHealth += 15;
        p.health = p.maxHealth;
        p.armor = PLAYER.maxArmor;
        p.regenUntil = m.time + 22;
        p.credits += 35;
        this.audio.pickup();
        this.hud.banner_show('NANO-MED POD CLAIMED', 'Max HP +15 · Full HP & Armor · +22s Nano-Regeneration');
        break;
      case 'sentry':
        this.tactical.deployTurret(pos);
        p.credits += 40;
        this.audio.repairDone();
        this.hud.banner_show('AUTO-SENTRY DEPLOYED', 'Autonomous twin-barrel defense turret active for 45s');
        break;
      case 'emp':
        this.drones.empShockwave(pos, 48, 140);
        this.effects.triggerEmp(pos);
        m.heat = Math.max(0, m.heat - 45);
        m.overheated = false;
        this.audio.setAlarm(false);
        this.audio.empBlast();
        p.credits += 50;
        this.hud.banner_show('CRYO-EMP SHOCKWAVE', 'All active drones blasted & stunned · Transmitter heat purged');
        break;
      case 'prototype': {
        this.refillAllAmmo();
        p.health = p.maxHealth;
        p.armor = PLAYER.maxArmor;
        p.credits += 90;
        const lockedOrder: WeaponId[] = ['plasma', 'launcher', 'railgun'];
        const nextWep = lockedOrder.find((w) => this.weapons.locked.has(w));
        if (nextWep) {
          this.weapons.unlock(nextWep);
          this.weapons.switchTo(nextWep);
          this.audio.levelUp();
          this.hud.banner_show('PROTOTYPE ORDNANCE UNLOCKED', `${WEAPONS[nextWep].name} acquired + 90 Tactical Credits`);
        } else {
          p.overchargeUntil = m.time + 22;
          this.audio.levelUp();
          this.hud.banner_show('PROTOTYPE CORE OVERDRIVE', '+90 Tactical Credits · Full Resupply · +22s Overcharge');
        }
        break;
      }
    }
  }

  private onCompleteObjective(kind: SubObjectiveKind, pos: THREE.Vector3): void {
    const m = this.mission;
    const p = this.player;
    m.stats.objectivesCompleted += 1;
    this.audio.objectiveComplete();
    this.effects.shockwave(pos, '#38bdf8', 5);

    switch (kind) {
      case 'jammer':
        m.progress = Math.min(100, m.progress + 7);
        p.credits += 60;
        this.addScore(60);
        this.hud.banner_show('JAMMER DESTROYED', 'Uplink restored · +7% Signal Surge · +60 Credits');
        break;
      case 'relay':
        m.signalBoostUntil = m.time + 22;
        p.credits += 55;
        this.addScore(55);
        this.hud.banner_show('AUXILIARY RELAY SYNCHRONIZED', '1.45x Uplink Speed for 22s · +55 Credits');
        break;
      case 'coolant':
        m.heat = 0;
        m.overheated = false;
        m.thermalShieldUntil = m.time + 24;
        this.audio.setAlarm(false);
        p.credits += 50;
        this.addScore(50);
        this.hud.banner_show('CRYO THERMAL LOCK ENGAGED', 'Transmitter heat zeroed & locked for 24s · +50 Credits');
        break;
      case 'uplink_zone':
        m.progress = Math.min(100, m.progress + 9);
        p.overchargeUntil = m.time + 15;
        p.credits += 65;
        this.addScore(65);
        this.hud.banner_show('TELEMETRY SYNC COMPLETE', '+9% Signal Surge · +15s Weapon Overcharge · +65 Credits');
        break;
      case 'hvt':
        p.credits += 95;
        this.addScore(95);
        this.tactical.deployTurret(this.player.pos.clone());
        this.hud.banner_show('COMMAND CARRIER ELIMINATED', '+95 Credits · Bonus Auto-Sentry Turret deployed');
        break;
    }
  }

  private doInteract(it: Interactable): void {
    switch (it.kind) {
      case 'ammo': {
        const ids = Object.keys(this.runtimes) as WeaponId[];
        if (ids.every((id) => this.runtimes[id].reserve >= WEAPONS[id].reserveMax)) {
          this.hud.banner_show('Ammo station', 'All reserves already full — rack stands by');
          break;
        }
        this.refillAllAmmo();
        it.readyAt = this.mission.time + MISSION.ammoStationCooldown;
        this.audio.pickup();
        break;
      }
      case 'medkit': {
        if (this.player.health >= this.player.maxHealth - 0.5 && this.player.armor >= PLAYER.maxArmor - 0.5) {
          this.hud.banner_show('Med station', 'Already at full vitals — station stands by');
          break;
        }
        this.player.health = Math.min(this.player.maxHealth, this.player.health + MISSION.medHeal);
        this.player.armor = Math.min(PLAYER.maxArmor, this.player.armor + MISSION.medArmor);
        it.readyAt = this.mission.time + MISSION.medStationCooldown;
        this.audio.pickup();
        break;
      }
      case 'airdrop':
      case 'relay_node':
      case 'coolant_valve': {
        it.remove?.();
        break;
      }
      case 'workbench':
        this.openUpgrade();
        break;
      case 'searchlight':
        this.toggleSearchlight();
        break;
    }
  }

  // ---------- win / lose ----------

  private victory(): void {
    if (this.mission.phase !== 'playing') return;
    this.mission.phase = 'playing';
    this.empTimer = 0;
    this.drones.killAll();
    this.effects.triggerEmp(this.outpost.towerPos);
    this.audio.setAlarm(false);
    this.audio.fanfare();
  }

  private finishWin(): void {
    this.mission.phase = 'won';
    document.exitPointerLock?.();
    this.hud.setInteract(null, 0);
    this.hud.setPhase('won');
    const next = LEVELS[this.levelIdx + 1];
    this.hud.showEnd(true, this.mission, this.mission.time, next ? `LEVEL ${this.levelIdx + 2} · ${next.name}` : undefined);
    this.hud.restartCb = () => location.reload();
    this.hud.advanceCb = next ? () => this.advance() : null;
  }

  // ---------- frame ----------

  private update(dt: number, doRender = true): void {
    this.lightRig.update(this.engine.camera.position);
    const m = this.mission;
    const playing = m.phase === 'playing' && !this.paused;

    if (m.phase === 'upgrade') {
      this.effects.update(dt);
      if (doRender) this.engine.render();
      return;
    }

    if (playing) {
      m.time += dt;
      this.controller.update(dt);
      this.weapons.update(dt);
      this.engine.camera.userData.adsEase = this.player.ads;

      // Nano-regeneration buff
      if (this.player.regenUntil > m.time) {
        this.player.health = Math.min(this.player.maxHealth, this.player.health + 4.5 * dt);
        this.player.armor = Math.min(PLAYER.maxArmor, this.player.armor + 2.5 * dt);
      }

      // firing
      if (this.firingHeld && (WEAPONS[this.weapons.current].auto || this.firePressedEdge)) this.fire();

      // mission simulation
      if (this.empTimer < 0) {
        const jammed = this.tactical.activeObj?.kind === 'jammer';
        const boostMult = m.signalBoostUntil > m.time ? 1.45 : 1.0;
        const baseRate = m.overheated ? 0 : this.waves.spawning ? MISSION.waveSignalRate : MISSION.baseSignalRate;
        const rate = baseRate * (jammed ? 0.35 : 1.0) * boostMult;
        m.progress = Math.min(100, m.progress + rate * dt);

        if (m.thermalShieldUntil > m.time) {
          m.heat = Math.max(0, m.heat - MISSION.heatCool * 2 * dt);
          m.overheated = false;
        } else if (!m.overheated) {
          m.heat = Math.min(MISSION.overheatAt, m.heat + (MISSION.heatGain - MISSION.heatCool) * dt);
          if (m.heat >= MISSION.overheatAt) {
            m.overheated = true;
            m.stats.overheatEvents += 1;
            this.audio.setAlarm(true);
            this.hud.banner_show('Transmitter overheated', 'Uplink stalled — get to the console and hold F to repair');
          }
        } else {
          m.heat = Math.max(MISSION.overheatCoolTo - 4, m.heat - MISSION.heatCool * 0.6 * dt);
        }

        m.wave = this.waves.waveForProgress(m.progress);
        if (this.waves.waveBanner) {
          this.hud.banner_show(this.waves.waveBanner.title, this.waves.waveBanner.sub);
          this.waves.waveBanner = null;
        }
        this.waves.update(dt, m.progress);
        this.waves.updateAirdrops(
          dt,
          (it) => this.interact.add(it),
          (id) => this.interact.remove(id),
          (a) => this.onClaimAirdrop(a.kind, a.pos),
        );
      }

      // searchlight duty cycle
      if (m.searchlightOn) {
        m.searchlightRuntime += dt;
        if (m.searchlightRuntime >= MISSION.searchlightOverloadTime) {
          m.searchlightOn = false;
          m.searchlightRuntime = 0;
          m.searchlightCooldownUntil = m.time + MISSION.searchlightCooldown;
          this.hud.banner_show('Searchlight overloaded', 'Breaker cooling — try again later');
        }
      } else {
        m.searchlightRuntime = 0;
      }

      // searchlight marking
      this.enemyPositions.length = 0;
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        if (m.searchlightOn && this.outpost.searchlight.isInBeam(d.group.position)) d.spotted = true;
        else d.spotted = false;
        this.enemyPositions.push(d.group.position);
      }
      this.outpost.searchlight.update(dt, m.time, this.enemyPositions, m.searchlightOn);

      // drones
      this.drones.update(dt, m.time, this.player.pos, this.outpost.towerPos, true);

      // player rockets (Vulcan SAM)
      this.updateRockets(dt);

      // update tactical director (sub-objectives + auto-sentry turrets)
      const def = LEVELS[this.levelIdx];
      this.tactical.update(
        dt,
        m.progress,
        this.player.pos,
        def.objectives,
        this.mapRuntimes[this.levelIdx].colliders,
        (it) => this.interact.add(it),
        (id) => this.interact.remove(id),
        (k, pos) => this.onCompleteObjective(k, pos),
      );
      m.activeObjective = this.tactical.activeObj;
      m.activeTurrets = this.tactical.turrets.length;

      // interaction focus
      this.engine.camera.getWorldDirection(_camDir);
      this.focus = this.interact.findFocus(this.engine.camera.position, _camDir, PLAYER.interactRange, m.time);

      let hold = 0;
      if (this.focus) {
        if (this.focus.kind === 'console') {
          if (m.overheated && this.fHeld) {
            this.holdConsole += dt / MISSION.overheatRestartHold;
            hold = this.holdConsole;
            if (this.holdConsole >= 1) {
              m.overheated = false;
              m.heat = MISSION.overheatCoolTo;
              m.stats.repairs += 1;
              this.holdConsole = 0;
              this.audio.setAlarm(false);
              this.audio.repairDone();
              this.hud.banner_show('Transmitter rebooted', 'Signal uplink restored');
            }
          } else if (!m.overheated) {
            this.holdConsole = 0;
          }
        } else if (this.fPressedEdge) {
          this.doInteract(this.focus);
        }
      } else {
        this.holdConsole = 0;
      }

      this.hud.setInteract(
        this.focus
          ? this.focus.kind === 'console' && !m.overheated
            ? 'Transmitter nominal'
            : this.focus.kind === 'console'
              ? 'Hold F to repair & reboot'
              : this.focus.label
          : null,
        hold,
      );

      // blizzard by wave
      m.blizzard = THREE.MathUtils.clamp(0.22 + m.wave * 0.15 + 0.08 * Math.sin(m.time * 0.11), 0.1, 1);

      if (m.progress >= 100 && this.empTimer < 0) this.victory();
      if (this.fPressedEdge) this.fPressedEdge = false;
    }

    // EMP end sequence (sim continues briefly)
    if (this.empTimer >= 0) {
      this.empTimer += dt;
      this.drones.update(dt, m.time, this.player.pos, this.outpost.towerPos, false);
      if (this.empTimer > 3.2 && !this.endShown) {
        this.endShown = true;
        this.finishWin();
      }
    }

    this.outpost.update(dt, m.time);
    this.outpost.setSignalVisuals(m.progress, m.heat, m.overheated);
    this.weather.update(dt, m.time, this.engine.camera.position, m.blizzard);
    this.engine.setFog(m.blizzard);
    this.audio.setWind(m.blizzard);
    this.audio.setDroneHum(this.drones.activeCount());
    this.effects.update(dt);

    // airdrop smoke while falling
    for (const a of this.waves.airdrops) if (!a.landed && !a.opened) this.effects.smokePlume(a.pod.position, dt);

    // HUD refresh
    this.hud.setTop(m);
    this.hud.setObjective(m.activeObjective);
    this.hud.setBuffs(m, this.player, m.activeTurrets);
    const rt = this.runtimes[this.weapons.current];
    this.hud.setWeapon(
      this.weapons.current,
      rt.mag,
      rt.reserve,
      this.weapons.reloadTimer > 0,
      this.mission.level,
      this.weapons.locked,
    );
    this.hud.setVitals(Math.max(0, this.player.health), this.player.armor, this.player.credits, this.player.maxHealth);
    const spreadDeg =
      WEAPONS[this.weapons.current].spreadDeg * (1 - this.player.ads) +
      WEAPONS[this.weapons.current].adsSpreadDeg * this.player.ads;
    const moveK = this.controller.planarSpeed() > 1.5 ? 1.6 : 0;
    const bloom = this.weapons.cooldown > 0 ? 2 : 0;
    this.hud.setCrosshairSpread(spreadDeg * 9 * (1 + moveK) + bloom);

    this.firePressedEdge = false;
    if (doRender) this.engine.render();
  }

  private debugHooks(): Record<string, unknown> {
    return {
      mission: this.mission,
      player: this.player,
      runtimes: this.runtimes,
      drones: this.drones,
      weapons: this.weapons,
      tactical: this.tactical,
      spawn: (kind: DroneKind, r = 30, a = 0) =>
        this.drones.spawn(kind, new THREE.Vector3(Math.cos(a) * r, kind === 'crawler' ? 0.6 : 4, Math.sin(a) * r)),
      setProgress: (p: number) => {
        this.mission.progress = p;
      },
      addScore: (n: number) => this.addScore(n),
      damagePlayer: (d: number) => this.damagePlayer(d, new THREE.Vector3(10, 2, 0)),
      openUpgrade: () => this.openUpgrade(),
      closeUpgrade: () => this.closeUpgrade(),
      win: () => this.victory(),
      start: () => this.startLevel(0),
      startLevel: (i: number) => this.startLevel(i),
      advance: () => this.advance(),
      currentLevel: () => {
        const def = LEVELS[this.levelIdx];
        return {
          idx: this.levelIdx,
          id: def.id,
          name: def.name,
          hpMul: def.hpMul,
          dmgMul: def.dmgMul,
          launcherUnlock: def.weaponUnlock === 'launcher',
          weaponUnlock: def.weaponUnlock,
        };
      },
      activeMap: () => LEVELS[this.levelIdx].id,
      prof: (reset = false) => {
        const gaps = [...this.frameGaps].sort((a, b) => a - b);
        const q = (p: number) => (gaps.length ? gaps[Math.min(gaps.length - 1, Math.floor(gaps.length * p))] : 0);
        const mean = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
        const info = this.engine.renderer.info;
        const out = {
          samples: gaps.length,
          fps: mean ? +(1000 / mean).toFixed(1) : 0,
          frameMS: {
            p50: +q(0.5).toFixed(1),
            p90: +q(0.9).toFixed(1),
            p99: +q(0.99).toFixed(1),
            max: +q(0.999).toFixed(1),
          },
          hitchesOver50ms: this.frameGaps.filter((v) => v > 50).length,
          drawCalls: info.render.calls,
          programs: info.programs?.length ?? 0,
          geometries: info.memory.geometries,
          textures: info.memory.textures,
          lights: this.lightRig.stats(),
          pixelRatio: this.engine.renderer.getPixelRatio(),
        };
        if (reset) this.frameGaps.length = 0;
        return out;
      },
      rig: () => this.lightRig,
      lightRelease: () => this.lightRig.release(),
      lightBudget: (n?: number) => {
        if (typeof n === 'number') this.lightRig.setBudget(n);
        return this.lightRig.stats();
      },
      mapGroupsVisible: () => this.mapRuntimes.map((rt) => rt.group.visible),
      rockets: () => this.rockets.length,
      spawnAt: (kind: DroneKind, x: number, y: number, z: number) => {
        this.drones.spawn(kind, new THREE.Vector3(x, y, z));
        return this.drones.drones.length - 1;
      },
      fire: () => this.fire(),
      step: (dt: number, render = false) => {
        this.paused = false;
        this.update(Math.min(0.05, dt), render);
      },
      rayTest: () => {
        const dir = this.engine.camera.getWorldDirection(new THREE.Vector3());
        this.sharedRaycaster.set(this.engine.camera.position, dir);
        this.sharedRaycaster.far = 200;
        const hits = this.sharedRaycaster.intersectObjects(this.buildRayTargets(), false);
        return {
          dir: { x: +dir.x.toFixed(3), y: +dir.y.toFixed(3), z: +dir.z.toFixed(3) },
          hits: hits.slice(0, 4).map((h) => ({
            d: +h.distance.toFixed(2),
            part: String((h.object.userData as Record<string, unknown>).part ?? (h.object.userData?.drone ? 'drone' : '?')),
          })),
        };
      },
      switchWeapon: (id: WeaponId) => this.weapons.switchTo(id),
      searchlight: () => this.toggleSearchlight(),
      look: (yaw: number, pitch: number) => {
        this.player.yaw = yaw;
        this.player.pitch = pitch;
      },
      teleport: (x: number, z: number) => {
        this.player.pos.set(x, 0, z);
      },
      setF: (held: boolean) => {
        this.fHeld = held;
        if (held) this.fPressedEdge = true;
      },
      focusId: () => this.focus?.id ?? null,
      airdropPos: () =>
        this.waves.airdrops.filter((a) => a.landed && !a.opened).map((a) => ({ x: a.pos.x, z: a.pos.z, kind: a.kind })),
      airdropClearance: () => {
        const cs = this.mapRuntimes[this.levelIdx].colliders;
        return this.waves.airdrops
          .filter((a) => !a.opened)
          .map((a) => {
            let min = 999;
            for (const c of cs) {
              const cl =
                c.kind === 'cyl'
                  ? Math.hypot(a.pos.x - c.x, a.pos.z - c.z) - c.r
                  : Math.max(Math.abs(a.pos.x - c.x) - c.hx, Math.abs(a.pos.z - c.z) - c.hz);
              if (cl < min) min = cl;
            }
            return +min.toFixed(2);
          });
      },
      finish: () => this.finishWin(),
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
