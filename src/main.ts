// Outpost Zero — game bootstrap & per-frame orchestration (five-level campaign).
import * as THREE from 'three';
import { AUTOLEVEL, BOMB_BLAST, DRONES, LEVELS, LIGHT_BUDGET, MISSION, PLAYER, ROCKET, UPGRADE, WEAPONS, weaponTier } from './config';
import { Engine } from './engine';
import { AudioWorld } from './audio';
import { buildWorld, type WorldBundle } from './world';
import { LightRig } from './lightRig';
import { buildCanyon } from './canyon';
import { buildRailYard } from './rail';
import { buildDam } from './dam';
import { buildCrater } from './crater';
import { buildOutpost } from './outpost';
import { PlayerController } from './player';
import { WeaponSystem } from './weapons';
import { DroneManager, type Drone } from './drones';
import { Effects } from './effects';
import { Weather } from './weather';
import { WaveDirector } from './waves';
import { InteractSystem } from './interact';
import { Hud } from './hud';
import {
  createMissionState,
  createPlayerState,
  createWeaponRuntimes,
  effectiveWeapon,
  type Collider,
  type DroneKind,
  type Interactable,
  type MapId,
  type MissionState,
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
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  direct: number;
}

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
  private hud: Hud;
  private outpost: ReturnType<typeof buildOutpost>;
  private mapRuntimes: MapRuntime[];
  private levelIdx = 0;
  private staticProxies: THREE.Mesh[] = [];
  private groundMesh!: THREE.Mesh;

  private rockets: Rocket[] = [];
  private rocketGeo = new THREE.ConeGeometry(0.09, 0.5, 6);
  private rocketMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffd9a0'), blending: THREE.AdditiveBlending, transparent: true, fog: false });

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

    // all five level maps are built up front; only the active one is visible
    const builders: Record<MapId, (s: THREE.Scene) => WorldBundle> = {
      alpine: buildWorld,
      canyon: buildCanyon,
      rail: buildRailYard,
      dam: buildDam,
      crater: buildCrater,
    };
    this.mapRuntimes = LEVELS.map((def, i) => this.makeMapRuntime(i, builders[def.id](scene), buildOutpost(scene, def.layout)));

    this.outpost = this.mapRuntimes[0].outpost;
    this.waves = this.mapRuntimes[0].waves;
    this.staticProxies = this.mapRuntimes[0].proxies;
    this.groundMesh = this.mapRuntimes[0].ground;
    this.controller = new PlayerController(this.engine.camera, this.mapRuntimes[0].colliders, this.player);
    this.weapons = new WeaponSystem(this.engine.camera, this.runtimes, this.audio);
    this.interact = new InteractSystem(this.outpost.interactables);
    this.engine.setAmbience(LEVELS[0].ambience);

    // Constant light budget (see lightRig.ts). The five maps stack their lamps on
    // the same ground and airdrop pods add lights at runtime, so the scene's light
    // count used to change on level switches and pod spawns — each change re-keys
    // every shader program, which is the freeze people feel in the first minutes.
    this.lightRig = new LightRig(scene, LIGHT_BUDGET);
    console.log(`[lights] ${this.lightRig.collect()} fixtures -> pool of ${this.lightRig.budget}`);
    const tWarm = performance.now();
    this.warmHostiles();
    this.prewarmMaterials();
    (window as unknown as { __bootTimings: unknown }).__bootTimings = {
      warmHostiles: Math.round(performance.now() - tWarm),
    };

    this.hud = new Hud({
      onStart: () => this.startLevel(0),
      onBuy: (w, t) => this.buyUpgrade(w, t),
      onCloseUpgrade: () => this.closeUpgrade(),
      onRestart: () => location.reload(),
      onResume: () => this.requestLock(),
    });
    this.hud.restartCb = () => location.reload();
    this.hud.setPhase('brief');

    this.bindInput();
    (window as unknown as { __outpost: unknown }).__outpost = this.debugHooks();

    let last = performance.now();
    const loop = (now: number) => {
      // dt is clamped below, so the in-game FPS readout caps at 20 and cannot show
      // a stall; frameGaps keeps the true gap for __outpost.prof().
      this.frameGaps.push(now - last);
      if (this.frameGaps.length > 240) this.frameGaps.shift();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      this.update(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  // ---------- warm-up ----------

  /** Compile every program and upload every texture behind the brief screen.
   *  compile() walks the whole scene graph (visibility-agnostic for materials),
   *  so all five maps warm up while only the active map's lights are counted —
   *  nothing is drawn, so the maps never visibly stack. Without this, each
   *  map's materials compile the first time it is seen: a freeze mid-wave. */
  /** Every hostile is built from scratch the first time it spawns - BUILDERS[kind]
   *  makes fresh geometry and materials per drone, seven kinds in a normal run -
   *  so wave 1 pays seven shader compiles plus buffer uploads while you are
   *  already shooting. Build one of each in front of the camera, force them
   *  through compile + render here (same tick as boot, so nothing ever paints
   *  them and their AI never runs), then drop them. */
  private warmHostiles(): void {
    const kinds: DroneKind[] = ['scout', 'heavy', 'kamikaze', 'warden', 'bomber', 'crawler', 'colossus'];
    const keep = this.drones.drones.length;
    const cam = this.engine.camera;
    const dir = new THREE.Vector3();
    cam.getWorldDirection(dir);
    kinds.forEach((kind, i) => {
      const a = (i - (kinds.length - 1) / 2) * 0.3;
      const pos = cam.position.clone().addScaledVector(dir, 24)
        .add(new THREE.Vector3(-dir.z * Math.sin(a) * 24, 7 + i * 1.4, dir.x * Math.sin(a) * 24));
      this.drones.spawn(kind, pos);
    });
    // Same pass uploads everything else: the five maps are stacked at one origin
    // and toggled by group.visible, so a normal frame keeps four maps' geometry
    // and the current map's off-screen geometry out of VRAM until you walk there.
    const hidden: THREE.Object3D[] = [];
    const culled: THREE.Object3D[] = [];
    this.engine.scene.traverse((obj) => {
      if (!obj.visible) { obj.visible = true; hidden.push(obj); }
      if (obj.frustumCulled) { obj.frustumCulled = false; culled.push(obj); }
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
    // static bullet-stop proxies per map (only the active map's proxies get raycast)
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
    group.visible = levelIdx === 0; // brief preview backdrop
    const waves = new WaveDirector(this.engine.scene, this.drones, colliders, LEVELS[levelIdx].waves, world.spawnAngle);
    return { group, ground: world.ground, colliders, proxies, outpost: ob, waves };
  }

  // ---------- campaign lifecycle ----------

  /** Enter level i, carrying rank/credits/upgrades over and re-supplying fully. */
  private startLevel(i: number): void {
    const def = LEVELS[i];
    // reset the per-level mission fields in place (the object identity is referenced
    // by debug hooks & HUD) — score/rank/stats carry across the whole campaign
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
    this.staticProxies = rt.proxies;
    this.groundMesh = rt.ground;
    this.interact = new InteractSystem(this.outpost.interactables);
    this.controller.setColliders(rt.colliders);
    this.drones.setColliders(rt.colliders);
    this.drones.setMods(def.hpMul, def.dmgMul);
    this.drones.clearHostiles();
    this.engine.setAmbience(def.ambience);

    if (def.launcherUnlock && this.weapons.locked.has('launcher')) {
      this.weapons.unlock('launcher');
      this.hud.banner_show('Vulcan SAM acquired', 'Press 4 — shoulder-fired homing missile; resupply at ammo racks');
    }

    // between-level refresh: vitals & ammo full, rank bonuses and upgrades intact
    this.player.pos.set(0, 0, 10);
    this.player.health = this.player.maxHealth;
    this.player.armor = PLAYER.maxArmor;
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
          this.weapons.switchTo('launcher');
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
    this.hud.renderUpgrade(this.player.credits, this.runtimes, (w, t) => this.buyUpgrade(w, t), !this.weapons.locked.has('launcher'));
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

  /** Kill score drives automatic rank-ups (separate from spendable credits). */
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

  private fire(): void {
    const shot = this.weapons.tryFire(this.player, this.controller.planarSpeed() > 1.5);
    if (!shot) return;
    this.mission.stats.shotsFired += 1;
    this.mission.stats.pelletsFired += shot.dirs.length;

    if (this.weapons.current === 'launcher') {
      const dir = shot.dirs[0];
      const mesh = new THREE.Mesh(this.rocketGeo, this.rocketMat);
      mesh.position.copy(shot.muzzleWorld);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      this.engine.scene.add(mesh);
      this.rockets.push({ mesh, vel: dir.clone().multiplyScalar(ROCKET.speed), life: 8, direct: shot.damage });
      this.effects.flash(shot.muzzleWorld, '#ffb27f', 26, 6, 0.12);
    } else {
      const from = this.engine.camera.position;
      const ray = new THREE.Raycaster();
      const targets = [...this.drones.hitMeshes(), ...this.staticProxies, this.groundMesh];
      for (const dir of shot.dirs) {
        ray.set(from, dir);
        ray.far = shot.range;
        const hits = ray.intersectObjects(targets, false);
        const hit = hits[0];
        if (hit) {
          const ud = hit.object.userData as { drone?: Drone; part?: string };
          const end = hit.point;
          this.effects.tracer(shot.muzzleWorld, end, '#ffd27f', 0.06);
          if (ud.drone && ud.part) {
            const res = this.drones.applyDamage(ud.drone, ud.part, shot.damage);
            this.mission.stats.pelletsHit += 1;
            if (ud.part === 'shield') {
              this.effects.shieldRipple(end);
              this.audio.shieldZap();
            } else {
              this.effects.sparks(end, ud.part === 'weak' ? 'red' : 'amber', 6);
              this.audio.hitTick();
            }
          } else if (ud.part === 'world') {
            this.effects.sparks(end, 'amber', 3);
          } else {
            this.effects.sparks(end, 'amber', 2);
          }
        } else {
          const end = from.clone().addScaledVector(dir, shot.range);
          this.effects.tracer(shot.muzzleWorld, end, '#ffd27f', 0.06);
        }
      }
    }
    this.controller.addRecoil(
      THREE.MathUtils.degToRad(WEAPONS[this.weapons.current].recoilPitchDeg),
      THREE.MathUtils.degToRad(WEAPONS[this.weapons.current].recoilYawDeg),
    );
    this.controller.addTrauma(this.weapons.current === 'shotgun' ? 0.35 : this.weapons.current === 'launcher' ? 0.4 : 0.12);
  }

  // ---------- Vulcan SAM rockets ----------

  private clearRockets(): void {
    for (const r of this.rockets) this.engine.scene.remove(r.mesh);
    this.rockets.length = 0;
  }

  /** Closest distance from point p to segment a→b. */
  private static pointSegDist(p: THREE.Vector3, a: THREE.Vector3, b: THREE.Vector3): number {
    const ab = b.clone().sub(a);
    const len2 = ab.lengthSq();
    const t = len2 <= 1e-9 ? 0 : THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / len2, 0, 1);
    return a.clone().addScaledVector(ab, t).distanceTo(p);
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
      this.drones.applyDamage(d, 'body', directHit + blast * falloff);
    }
  }

  private updateRockets(dt: number): void {
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      const prev = r.mesh.position.clone();
      // acquire nearest hostile near the flight direction and curve toward it
      let target: Drone | null = null;
      let bestDist = Infinity;
      const velDir = r.vel.clone().normalize();
      const cosLimit = Math.cos(THREE.MathUtils.degToRad(ROCKET.lockConeDeg));
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        const to = d.group.position.clone().sub(r.mesh.position);
        const dist = to.length();
        if (dist > 120 || dist >= bestDist) continue;
        if (dist > 4 && to.normalize().dot(velDir) < cosLimit) continue; // behind the launcher cone
        target = d;
        bestDist = dist;
      }
      if (target) {
        const desired = target.group.position.clone().sub(r.mesh.position).normalize().multiplyScalar(ROCKET.speed);
        r.vel.lerp(desired, Math.min(1, dt * ROCKET.turnRate));
      }
      r.vel.setLength(ROCKET.speed);
      r.mesh.position.addScaledVector(r.vel, dt);
      r.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), r.vel.clone().normalize());
      r.life -= dt;
      this.effects.tracer(prev, r.mesh.position, '#ffb27f', 0.05);

      const p = r.mesh.position;
      let detonate = false;
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        if (Game.pointSegDist(d.group.position, prev, p) < d.radius + ROCKET.fuseRadius) {
          detonate = true;
          break;
        }
      }
      if (p.y < 0.15 || this.solidWorldPoint(p) || r.life <= 0) detonate = true;
      if (detonate) {
        this.detonateRocket(p.clone(), r.direct);
        this.engine.scene.remove(r.mesh);
        this.rockets.splice(i, 1);
      }
    }
  }

  private onDroneExplosion(pos: THREE.Vector3, kind: DroneKind, killedByPlayer: boolean): void {
    this.effects.explosion(pos, kind === 'heavy' || kind === 'colossus' ? 1.5 : kind === 'kamikaze' || kind === 'bomber' ? 1.4 : 0.9);
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
      // dropped bomb blast
      const d = this.player.pos.distanceTo(pos);
      if (d < BOMB_BLAST.radius) {
        this.damagePlayer(Math.round(BOMB_BLAST.maxDamage * dmgMul * Math.max(0, 1 - d / BOMB_BLAST.radius)), pos);
      }
      if (this.outpost.towerPos.distanceTo(pos) < BOMB_BLAST.towerRadius) {
        this.mission.heat += BOMB_BLAST.towerHeat;
      }
      return;
    }
    // kamikaze detonation
    const d = this.player.pos.distanceTo(pos);
    if (d < 6) this.damagePlayer(Math.round(76 * dmgMul * Math.max(0, 1 - d / 6)), pos);
    const towerDist = this.outpost.towerPos.distanceTo(pos);
    if (towerDist < 7) {
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

  // ---------- facilities ----------

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
    for (const id of Object.keys(this.runtimes) as WeaponId[]) {
      this.runtimes[id].reserve = WEAPONS[id].reserveMax;
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
      case 'airdrop': {
        this.refillAllAmmo();
        this.player.health = this.player.maxHealth;
        this.player.armor = PLAYER.maxArmor;
        this.player.credits += 40;
        this.mission.stats.airdrops += 1;
        this.audio.pickup();
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
    this.mission.phase = 'playing'; // keep simulating during EMP
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

      // firing
      if (this.firingHeld && (WEAPONS[this.weapons.current].auto || this.firePressedEdge)) this.fire();

      // mission simulation
      if (this.empTimer < 0) {
        const rate = m.overheated ? 0 : this.waves.spawning ? MISSION.waveSignalRate : MISSION.baseSignalRate;
        m.progress = Math.min(100, m.progress + rate * dt);
        if (!m.overheated) {
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
        this.waves.updateAirdrops(dt, (it) => this.interact.add(it), (id) => this.interact.remove(id));
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
      const enemyPos: THREE.Vector3[] = [];
      for (const d of this.drones.drones) {
        if (d.dying) continue;
        if (m.searchlightOn && this.outpost.searchlight.isInBeam(d.group.position)) d.spotted = true;
        else d.spotted = false;
        enemyPos.push(d.group.position);
      }
      this.outpost.searchlight.update(dt, m.time, enemyPos, m.searchlightOn);

      // drones
      this.drones.update(dt, m.time, this.player.pos, this.outpost.towerPos, true);

      // player rockets (Vulcan SAM)
      this.updateRockets(dt);

      // interaction focus
      const camDir = this.engine.camera.getWorldDirection(new THREE.Vector3());
      this.focus = this.interact.findFocus(this.engine.camera.position, camDir, PLAYER.interactRange, m.time);
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
        this.focus ? (this.focus.kind === 'console' && !m.overheated ? 'Transmitter nominal' : this.focus.kind === 'console' ? 'Hold F to repair & reboot' : this.focus.label) : null,
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
    const rt = this.runtimes[this.weapons.current];
    this.hud.setWeapon(this.weapons.current, rt.mag, rt.reserve, this.weapons.reloadTimer > 0, this.mission.level);
    this.hud.setVitals(Math.max(0, this.player.health), this.player.armor, this.player.credits, this.player.maxHealth);
    const spreadDeg = WEAPONS[this.weapons.current].spreadDeg * (1 - this.player.ads) + WEAPONS[this.weapons.current].adsSpreadDeg * this.player.ads;
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
      spawn: (kind: DroneKind, r = 30, a = 0) => this.drones.spawn(kind, new THREE.Vector3(Math.cos(a) * r, kind === 'crawler' ? 0.6 : 4, Math.sin(a) * r)),
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
        return { idx: this.levelIdx, id: def.id, name: def.name, hpMul: def.hpMul, dmgMul: def.dmgMul, launcherUnlock: def.launcherUnlock };
      },
      activeMap: () => LEVELS[this.levelIdx].id,
      /** Perf snapshot: true frame gaps (the clamped dt hides stalls), draw
       *  stats, compiled program count and light-pool usage. prof(true) resets. */
      prof: (reset = false) => {
        const gaps = [...this.frameGaps].sort((a, b) => a - b);
        const q = (p: number) => (gaps.length ? gaps[Math.min(gaps.length - 1, Math.floor(gaps.length * p))] : 0);
        const mean = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
        const info = this.engine.renderer.info;
        const out = {
          samples: gaps.length,
          fps: mean ? +(1000 / mean).toFixed(1) : 0,
          frameMS: { p50: +q(0.5).toFixed(1), p90: +q(0.9).toFixed(1), p99: +q(0.99).toFixed(1), max: +q(0.999).toFixed(1) },
          hitchesOver50ms: this.frameGaps.filter((v) => v > 50).length,
          drawCalls: info.render.calls, programs: info.programs?.length ?? 0,
          geometries: info.memory.geometries, textures: info.memory.textures,
          lights: this.lightRig.stats(), pixelRatio: this.engine.renderer.getPixelRatio(),
        };
        if (reset) this.frameGaps.length = 0;
        return out;
      },
      rig: () => this.lightRig,   // measurement only: fixture library + pool
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
        this.paused = false; // headless harness has no pointer lock; drive the sim regardless
        this.update(Math.min(0.05, dt), render);
      },
      rayTest: () => {
        const ray = new THREE.Raycaster();
        const dir = this.engine.camera.getWorldDirection(new THREE.Vector3());
        ray.set(this.engine.camera.position, dir);
        ray.far = 200;
        const targets = [...this.drones.hitMeshes(), ...this.staticProxies, this.groundMesh];
        const hits = ray.intersectObjects(targets, false);
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
      airdropPos: () => this.waves.airdrops.filter((a) => a.landed && !a.opened).map((a) => ({ x: a.pos.x, z: a.pos.z })),
      airdropClearance: () => {
        // min signed distance from each unopened pod to the nearest collider surface (negative = buried)
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
