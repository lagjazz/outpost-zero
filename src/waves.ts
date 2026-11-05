// Wave director: spawns drone waves from the map's spawn ring/angles and drops supply pods.
import * as THREE from 'three';
import { MISSION, type WaveDef } from './config';
import type { DroneKind, Interactable } from './state';
import type { DroneManager } from './drones';

export interface Airdrop {
  pod: THREE.Group;
  pos: THREE.Vector3;
  landed: boolean;
  opened: boolean;
  beacon: THREE.Mesh;
}

// Shared pod resources: one set of geometries/materials for every pod in every
// map, so each drop allocates no GPU data and reuses already-compiled programs
// (the pod materials' program keys match the drone shield / emissive variants
// warmed at boot). The beacon pulse drives the shared material — every beacon
// on the field pulses in sync, which reads as one network-wide signal.
const podBodyGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
const podBodyMat = new THREE.MeshStandardMaterial({ color: 0x6a5a2e, roughness: 0.6, metalness: 0.3, emissive: new THREE.Color('#3a2b10'), emissiveIntensity: 0.4 });
const podBandGeo = new THREE.BoxGeometry(0.95, 0.12, 0.95);
const podBandMat = new THREE.MeshStandardMaterial({ color: 0x111, emissive: new THREE.Color('#f59e0b'), emissiveIntensity: 2 });
const beaconGeo = new THREE.CylinderGeometry(1.1, 1.1, 24, 12, 1, true);
const beaconMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#f59e0b'), transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: true });

export class WaveDirector {
  private kindQueue: DroneKind[] = [];
  private spawnTimer = 0;
  private lastWave = 0;
  private airDropsDone = new Set<number>();
  airdrops: Airdrop[] = [];
  waveBanner: { title: string; sub: string } | null = null;

  constructor(
    private scene: THREE.Scene,
    private drones: DroneManager,
    private colliders: { kind: 'box' | 'cyl'; x: number; z: number; hx: number; hz: number; r: number }[],
    private waves: WaveDef[],
    private spawnAngle: () => number,
  ) {
    // hidden template pod so the boot warm-up uploads pod geometry/textures;
    // the first live airdrop then paints nothing new.
    const t = new THREE.Group();
    const body = new THREE.Mesh(podBodyGeo, podBodyMat);
    body.position.y = 0.45;
    const band = new THREE.Mesh(podBandGeo, podBandMat);
    band.position.y = 0.45;
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.y = 12;
    t.add(body, band, beacon);
    t.visible = false;
    scene.add(t);
  }

  reset(): void {
    this.kindQueue = [];
    this.spawnTimer = 0;
    this.lastWave = 0;
    this.airDropsDone.clear();
  }

  /** Wave index (1-based) that the progress has reached, 0 if none. */
  waveForProgress(progress: number): number {
    let w = 0;
    for (let i = 0; i < this.waves.length; i++) if (progress >= this.waves[i].atProgress) w = i + 1;
    return w;
  }

  update(dt: number, progress: number): void {
    const wave = this.waveForProgress(progress);
    if (wave === 0) return;
    const def = this.waves[wave - 1];

    if (wave > this.lastWave) {
      this.lastWave = wave;
      this.kindQueue = [];
      const add = (k: DroneKind, n: number) => {
        for (let i = 0; i < n; i++) this.kindQueue.push(k);
      };
      add('scout', def.scouts);
      add('heavy', def.heavies);
      add('kamikaze', def.kamikazes);
      add('warden', def.wardens ?? 0);
      add('bomber', def.bombers ?? 0);
      add('crawler', def.crawlers ?? 0);
      add('colossus', def.colossi ?? 0);
      // shuffle so waves feel mixed
      for (let i = this.kindQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.kindQueue[i], this.kindQueue[j]] = [this.kindQueue[j], this.kindQueue[i]];
      }
      this.waveBanner = { title: `Wave ${wave} incoming`, sub: wave === this.waves.length ? 'Final hold — all hands to battle stations' : `Hostile units: ${this.kindQueue.length}` };
    }

    if (this.kindQueue.length > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0 && this.drones.activeCount() < def.concurrent) {
        const kind = this.kindQueue.shift()!;
        const a = this.spawnAngle();
        const r = 44 + Math.random() * 6;
        const y = kind === 'crawler' ? 0.6 : kind === 'heavy' || kind === 'bomber' ? 5.5 : kind === 'warden' ? 6.5 : kind === 'colossus' ? 5 : 2.5 + Math.random() * 4;
        this.drones.spawn(kind, new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
        this.spawnTimer = def.spawnGap * (0.7 + Math.random() * 0.6);
      }
    }

    // airdrops at progress checkpoints
    for (const cp of MISSION.airdropProgress) {
      if (progress >= cp && !this.airDropsDone.has(cp)) {
        this.airDropsDone.add(cp);
        this.dropAirdrop();
      }
    }
  }

  get spawning(): boolean {
    return this.kindQueue.length > 0;
  }

  /** Find a drop site that is provably clear of every collider — random sample
   *  first, then a deterministic ring scan so a pod can never land buried in a wall. */
  private findDropSite(pad = 2.2): { x: number; z: number } {
    for (let t = 0; t < 60; t++) {
      const a = Math.random() * Math.PI * 2;
      const r = 17 + Math.random() * 12;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (!this.nearCollider(x, z, pad)) return { x, z };
    }
    for (const ringPad of [pad, pad * 0.6]) {
      for (let r = 16; r <= 30; r += 1.5) {
        for (let i = 0; i < 24; i++) {
          const a = (i / 24) * Math.PI * 2 + r * 0.35;
          const x = Math.cos(a) * r;
          const z = Math.sin(a) * r;
          if (!this.nearCollider(x, z, ringPad)) return { x, z };
        }
      }
    }
    return { x: 0, z: 0 }; // center of the outpost yard
  }

  private dropAirdrop(): void {
    const { x: px, z: pz } = this.findDropSite();

    const pod = new THREE.Group();
    const body = new THREE.Mesh(podBodyGeo, podBodyMat);
    body.position.y = 0.45;
    pod.add(body);
    const band = new THREE.Mesh(podBandGeo, podBandMat);
    band.position.y = 0.45;
    pod.add(band);
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.y = 12;
    pod.add(beacon);
    const glow = new THREE.PointLight(new THREE.Color('#f59e0b'), 40, 16, 1.6);
    glow.position.y = 1.5;
    pod.add(glow);
    pod.position.set(px, 40, pz);
    this.scene.add(pod);
    this.airdrops.push({ pod, pos: new THREE.Vector3(px, 0, pz), landed: false, opened: false, beacon });
  }

  private nearCollider(x: number, z: number, pad: number): boolean {
    for (const c of this.colliders) {
      if (c.kind === 'cyl') {
        if (Math.hypot(x - c.x, z - c.z) < c.r + pad) return true;
      } else if (Math.abs(x - c.x) < c.hx + pad && Math.abs(z - c.z) < c.hz + pad) return true;
    }
    return false;
  }

  updateAirdrops(dt: number, addInteractable: (it: Interactable) => void, removeInteractable: (id: string) => void): void {
    for (const a of this.airdrops) {
      if (a.opened) continue;
      if (!a.landed) {
        a.pod.position.y -= 9 * dt;
        if (a.pod.position.y <= 0) {
          a.pod.position.y = 0;
          a.landed = true;
          addInteractable({ id: `airdrop-${a.pos.x.toFixed(1)}-${a.pos.z.toFixed(1)}`, kind: 'airdrop', pos: new THREE.Vector3(a.pos.x, 1, a.pos.z), label: 'Open airdrop crate', readyAt: 0, remove: () => this.openAirdrop(a, removeInteractable) });
        }
      }
      (a.beacon.material as THREE.MeshBasicMaterial).opacity = 0.16 + 0.12 * Math.abs(Math.sin(performance.now() * 0.003));
    }
  }

  private openAirdrop(a: Airdrop, removeInteractable: (id: string) => void): void {
    a.opened = true;
    a.pod.visible = false; // shared materials: never disposed, just hidden
    removeInteractable(`airdrop-${a.pos.x.toFixed(1)}-${a.pos.z.toFixed(1)}`);
  }

  clear(): void {
    for (const a of this.airdrops) if (a.pod.parent) this.scene.remove(a.pod);
    this.airdrops.length = 0;
  }
}
