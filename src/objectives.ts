// Dynamic tactical sub-objectives (Jammer Pylon, Relay Node, Coolant Valve, Uplink Zone, HVT)
// and Autonomous Sentry Turrets deployed from airdrop pods.
import * as THREE from 'three';
import { MISSION } from './config';
import type { Drone, DroneManager } from './drones';
import type { Effects } from './effects';
import type { AudioWorld } from './audio';
import type { ActiveSubObjective, Collider, Interactable, SubObjectiveKind } from './state';

export interface SentryTurret {
  group: THREE.Group;
  head: THREE.Group;
  pos: THREE.Vector3;
  life: number;
  maxLife: number;
  fireTimer: number;
}

const steel = (c: number, m = 0.75, r = 0.38) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const glow = (hex: string, int = 2.4) =>
  new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color(hex), emissiveIntensity: int, roughness: 0.25 });
const hitProxyMat = new THREE.MeshBasicMaterial({ visible: false });

const _turretMuzzle = new THREE.Vector3();

function buildTurretMesh(): { group: THREE.Group; head: THREE.Group } {
  const group = new THREE.Group();
  // Tripod base legs
  const legMat = steel(0x283240, 0.7, 0.45);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 1.15), legMat);
    leg.position.set(Math.cos(a) * 0.45, 0.12, Math.sin(a) * 0.45);
    leg.rotation.y = -a;
    group.add(leg);
  }
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.9, 10), steel(0x3b4758));
  ped.position.y = 0.55;
  group.add(ped);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.85, 1.0, 24),
    new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  group.add(ring);

  // Rotating turret head + twin barrels + sensor eye
  const head = new THREE.Group();
  head.position.y = 1.15;
  const housing = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.38, 0.68), steel(0x475569, 0.8, 0.3));
  head.add(housing);
  for (const sx of [-0.16, 0.16]) {
    const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 0.78, 8), steel(0x1e293b, 0.9, 0.2));
    brl.rotation.x = Math.PI / 2;
    brl.position.set(sx, 0, -0.58);
    head.add(brl);
  }
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), glow('#06b6d4', 3.0));
  eye.position.set(0, 0.14, -0.35);
  head.add(eye);
  const ammoBox = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.22, 0.32), glow('#0ea5e9', 1.4));
  ammoBox.position.set(0, -0.05, 0.15);
  head.add(ammoBox);

  group.add(head);
  return { group, head };
}

function buildJammerMesh(): { group: THREE.Group; hitMesh: THREE.Mesh; spinner: THREE.Object3D } {
  const group = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.15, 0.9, 8), steel(0x27171c, 0.7, 0.4));
  base.position.y = 0.45;
  base.castShadow = true;
  group.add(base);

  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.48, 3.2, 8), steel(0x3f1d24, 0.8, 0.3));
  shaft.position.y = 2.3;
  shaft.castShadow = true;
  group.add(shaft);

  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.2, 10), glow('#ef4444', 2.8));
  core.position.y = 2.5;
  group.add(core);

  const spinner = new THREE.Group();
  spinner.position.y = 3.8;
  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.07, 6, 18), glow('#ef4444', 2.6));
  spinner.add(ring1);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.06, 6, 18), steel(0x991b1b));
  ring2.rotation.x = Math.PI / 2;
  spinner.add(ring2);
  group.add(spinner);

  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.95, 0.95, 22, 12, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  beacon.position.y = 11;
  group.add(beacon);

  const hitMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 4.4, 8), hitProxyMat);
  hitMesh.position.y = 2.2;
  group.add(hitMesh);

  return { group, hitMesh, spinner };
}

function buildRelayNodeMesh(): { group: THREE.Group; dish: THREE.Object3D } {
  const group = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 1.1, 8), steel(0x1e293b));
  base.position.y = 0.55;
  group.add(base);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 2.2, 8), steel(0x475569));
  mast.position.y = 2.1;
  group.add(mast);
  const dish = new THREE.Mesh(new THREE.ConeGeometry(0.85, 0.55, 12, 1, true), glow('#06b6d4', 2.4));
  dish.position.y = 3.2;
  dish.rotation.x = Math.PI * 0.35;
  group.add(dish);
  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.75, 0.75, 20, 12, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  pillar.position.y = 10;
  group.add(pillar);
  return { group, dish };
}

function buildCoolantValveMesh(): { group: THREE.Group; wheel: THREE.Object3D } {
  const group = new THREE.Group();
  for (const sx of [-0.45, 0.45]) {
    const tank = new THREE.Mesh(new THREE.CapsuleGeometry(0.32, 1.4, 6, 10), steel(0x0ea5e9, 0.6, 0.35));
    tank.position.set(sx, 1.1, 0);
    group.add(tank);
  }
  const pipe = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.25, 0.35), steel(0x334155));
  pipe.position.y = 1.35;
  group.add(pipe);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.055, 6, 14), glow('#10b981', 2.6));
  wheel.position.set(0, 1.35, 0.32);
  group.add(wheel);
  const pillar = new THREE.Mesh(
    new THREE.CylinderGeometry(0.75, 0.75, 20, 12, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  pillar.position.y = 10;
  group.add(pillar);
  return { group, wheel };
}

function buildUplinkZoneMesh(): { group: THREE.Group; crystal: THREE.Object3D } {
  const group = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(3.2, 3.65, 36),
    new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.06;
  group.add(ring);

  const innerDisc = new THREE.Mesh(
    new THREE.CircleGeometry(3.2, 32),
    new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  innerDisc.rotation.x = -Math.PI / 2;
  innerDisc.position.y = 0.05;
  group.add(innerDisc);

  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), glow('#34d399', 2.8));
  crystal.position.y = 1.8;
  group.add(crystal);

  return { group, crystal };
}

export class TacticalDirector {
  turrets: SentryTurret[] = [];
  activeObj: ActiveSubObjective | null = null;
  private triggeredMilestones = new Set<number>();
  private hvtDrone: Drone | null = null;

  constructor(
    private scene: THREE.Scene,
    private drones: DroneManager,
    private effects: Effects,
    private audio: AudioWorld,
  ) {
    // Pre-build hidden templates so shaders compile at boot
    const t1 = buildTurretMesh().group;
    const t2 = buildJammerMesh().group;
    const t3 = buildRelayNodeMesh().group;
    const t4 = buildCoolantValveMesh().group;
    const t5 = buildUplinkZoneMesh().group;
    for (const g of [t1, t2, t3, t4, t5]) {
      g.visible = false;
      scene.add(g);
    }
  }

  reset(removeInteractable: (id: string) => void): void {
    this.clearObjective(removeInteractable);
    for (const t of this.turrets) this.scene.remove(t.group);
    this.turrets.length = 0;
    this.triggeredMilestones.clear();
    this.hvtDrone = null;
  }

  deployTurret(pos: THREE.Vector3): void {
    const { group, head } = buildTurretMesh();
    group.position.copy(pos);
    this.scene.add(group);
    this.turrets.push({
      group,
      head,
      pos: pos.clone(),
      life: MISSION.turretDuration,
      maxLife: MISSION.turretDuration,
      fireTimer: 0.2,
    });
  }

  private findClearSpot(colliders: Collider[], minR = 14, maxR = 26): THREE.Vector3 {
    for (let attempt = 0; attempt < 50; attempt++) {
      const a = Math.random() * Math.PI * 2;
      const r = minR + Math.random() * (maxR - minR);
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      let blocked = false;
      for (const c of colliders) {
        if (c.kind === 'cyl') {
          if (Math.hypot(x - c.x, z - c.z) < c.r + 2.6) {
            blocked = true;
            break;
          }
        } else if (Math.abs(x - c.x) < c.hx + 2.6 && Math.abs(z - c.z) < c.hz + 2.6) {
          blocked = true;
          break;
        }
      }
      if (!blocked) return new THREE.Vector3(x, 0, z);
    }
    return new THREE.Vector3(0, 0, 12);
  }

  spawnObjective(
    kind: SubObjectiveKind,
    colliders: Collider[],
    addInteractable: (it: Interactable) => void,
    removeInteractable: (id: string) => void,
    onComplete: (kind: SubObjectiveKind, pos: THREE.Vector3) => void,
  ): ActiveSubObjective {
    this.clearObjective(removeInteractable);
    const pos = this.findClearSpot(colliders);
    const id = `obj-${Date.now()}`;

    if (kind === 'jammer') {
      const { group, hitMesh, spinner } = buildJammerMesh();
      group.position.copy(pos);
      group.userData.spinner = spinner;
      this.scene.add(group);
      const obj: ActiveSubObjective = {
        id,
        kind: 'jammer',
        title: 'DESTROY SIGNAL JAMMER',
        desc: 'Hostile jammer pylon is throttling uplink speed — shoot it down!',
        pos,
        progress: 1,
        hp: 160,
        maxHp: 160,
        timer: 45,
        mesh: group,
        hitMesh,
      };
      hitMesh.userData = { part: 'jammer', objective: obj };
      this.activeObj = obj;
    } else if (kind === 'relay') {
      const { group, dish } = buildRelayNodeMesh();
      group.position.copy(pos);
      group.userData.spinner = dish;
      this.scene.add(group);
      const interactId = `relay-${id}`;
      const obj: ActiveSubObjective = {
        id,
        kind: 'relay',
        title: 'CALIBRATE FIELD RELAY',
        desc: 'Reach the cyan relay beacon and press F to boost uplink rate (+55%)',
        pos,
        progress: 1,
        timer: 42,
        mesh: group,
        interactId,
      };
      addInteractable({
        id: interactId,
        kind: 'relay_node',
        pos: new THREE.Vector3(pos.x, 1.2, pos.z),
        label: 'Calibrate auxiliary relay (+55% Uplink Boost)',
        readyAt: 0,
        remove: () => {
          onComplete('relay', pos);
          this.clearObjective(removeInteractable);
        },
      });
      this.activeObj = obj;
    } else if (kind === 'coolant') {
      const { group, wheel } = buildCoolantValveMesh();
      group.position.copy(pos);
      group.userData.spinner = wheel;
      this.scene.add(group);
      const interactId = `coolant-${id}`;
      const obj: ActiveSubObjective = {
        id,
        kind: 'coolant',
        title: 'PURGE CRYO-COOLANT VALVE',
        desc: 'Vent the emerald cryo-conduit (F) to drop Transmitter Heat by 50%',
        pos,
        progress: 1,
        timer: 42,
        mesh: group,
        interactId,
      };
      addInteractable({
        id: interactId,
        kind: 'coolant_valve',
        pos: new THREE.Vector3(pos.x, 1.2, pos.z),
        label: 'Vent cryo-coolant valve (-50% Transmitter Heat)',
        readyAt: 0,
        remove: () => {
          onComplete('coolant', pos);
          this.clearObjective(removeInteractable);
        },
      });
      this.activeObj = obj;
    } else if (kind === 'uplink_zone') {
      const { group, crystal } = buildUplinkZoneMesh();
      group.position.copy(pos);
      group.userData.spinner = crystal;
      this.scene.add(group);
      const obj: ActiveSubObjective = {
        id,
        kind: 'uplink_zone',
        title: 'HOLD ENCRYPTED DATA ZONE',
        desc: 'Stand inside the emerald holographic ring to burst-upload (+10% Signal)',
        pos,
        progress: 0,
        timer: 45,
        mesh: group,
      };
      this.activeObj = obj;
    } else {
      // HVT Commander Drone
      const spawnPos = new THREE.Vector3(pos.x, 5.5, pos.z);
      const hvt = this.drones.spawn('colossus', spawnPos, true);
      this.hvtDrone = hvt;
      const obj: ActiveSubObjective = {
        id,
        kind: 'hvt',
        title: 'ELIMINATE COMMANDER HVT',
        desc: 'Destroy the heavily armored Commander Drone for +10% Signal & Supply Drop',
        pos: hvt.group.position,
        progress: 1,
        hp: hvt.hp + hvt.shield,
        maxHp: hvt.hp + hvt.shield,
        timer: 60,
      };
      this.activeObj = obj;
    }

    this.audio.objectiveAlert();
    return this.activeObj;
  }

  damageJammer(dmg: number, removeInteractable: (id: string) => void, onComplete: (kind: SubObjectiveKind, pos: THREE.Vector3) => void): boolean {
    const obj = this.activeObj;
    if (!obj || obj.kind !== 'jammer' || obj.hp === undefined || obj.maxHp === undefined) return false;
    obj.hp = Math.max(0, obj.hp - dmg);
    obj.progress = obj.hp / obj.maxHp;
    if (obj.hp <= 0) {
      const p = obj.pos.clone();
      this.effects.explosion(p.add(new THREE.Vector3(0, 2, 0)), 1.5, 'violet');
      this.audio.explosion();
      onComplete('jammer', obj.pos);
      this.clearObjective(removeInteractable);
      return true;
    }
    return false;
  }

  clearObjective(removeInteractable: (id: string) => void): void {
    if (!this.activeObj) return;
    if (this.activeObj.interactId) removeInteractable(this.activeObj.interactId);
    if (this.activeObj.mesh) this.scene.remove(this.activeObj.mesh);
    this.activeObj = null;
    this.hvtDrone = null;
  }

  update(
    dt: number,
    progress: number,
    playerPos: THREE.Vector3,
    levelObjectives: SubObjectiveKind[],
    colliders: Collider[],
    addInteractable: (it: Interactable) => void,
    removeInteractable: (id: string) => void,
    onComplete: (kind: SubObjectiveKind, pos: THREE.Vector3) => void,
  ): void {
    // Trigger level sub-objectives at progress checkpoints
    if (!this.activeObj) {
      for (let i = 0; i < MISSION.objectiveProgress.length; i++) {
        const cp = MISSION.objectiveProgress[i];
        if (progress >= cp && !this.triggeredMilestones.has(cp)) {
          this.triggeredMilestones.add(cp);
          const kind = levelObjectives[i % levelObjectives.length] ?? 'relay';
          this.spawnObjective(kind, colliders, addInteractable, removeInteractable, onComplete);
          break;
        }
      }
    }

    // Update active objective
    if (this.activeObj) {
      const obj = this.activeObj;
      obj.timer -= dt;
      if (obj.mesh?.userData.spinner) {
        const sp = obj.mesh.userData.spinner as THREE.Object3D;
        sp.rotation.y += dt * 2.2;
      }

      if (obj.kind === 'uplink_zone') {
        const d = Math.hypot(playerPos.x - obj.pos.x, playerPos.z - obj.pos.z);
        if (d <= 3.7) {
          obj.progress = Math.min(1, obj.progress + dt / 5.5);
          if (obj.progress >= 1) {
            onComplete('uplink_zone', obj.pos.clone());
            this.clearObjective(removeInteractable);
          }
        }
      } else if (obj.kind === 'hvt' && this.hvtDrone) {
        if (this.hvtDrone.dying || this.hvtDrone.hp <= 0) {
          onComplete('hvt', this.hvtDrone.group.position.clone());
          this.clearObjective(removeInteractable);
        } else {
          obj.pos.copy(this.hvtDrone.group.position);
          obj.hp = Math.max(0, this.hvtDrone.hp + this.hvtDrone.shield);
          obj.progress = obj.hp / (obj.maxHp || 1);
        }
      }

      if (this.activeObj && this.activeObj.timer <= 0) {
        this.clearObjective(removeInteractable);
      }
    }

    // Update autonomous sentry turrets
    for (let i = this.turrets.length - 1; i >= 0; i--) {
      const t = this.turrets[i];
      t.life -= dt;
      if (t.life <= 0) {
        this.scene.remove(t.group);
        this.turrets.splice(i, 1);
        continue;
      }
      t.fireTimer -= dt;
      // Find nearest living drone within turret range
      let best: Drone | null = null;
      let bestDist: number = MISSION.turretRange;
      for (let j = 0; j < this.drones.drones.length; j++) {
        const d = this.drones.drones[j];
        if (d.dying) continue;
        const dist = d.group.position.distanceTo(t.pos);
        if (dist < bestDist) {
          bestDist = dist;
          best = d;
        }
      }
      if (best) {
        t.head.lookAt(best.group.position.x, best.group.position.y, best.group.position.z);
        if (t.fireTimer <= 0) {
          t.fireTimer = MISSION.turretFireInterval;
          _turretMuzzle.copy(t.pos).y += 1.25;
          this.effects.tracer(_turretMuzzle, best.group.position, '#38e2ff', 0.06, 1.2);
          this.effects.sparks(best.group.position, 'cyan', 3);
          this.audio.turretShot();
          this.drones.applyDamage(best, 'body', MISSION.turretDamage, 1.25);
        }
      } else {
        t.head.rotation.y += dt * 1.2;
      }
    }
  }
}
