// Wave director: spawns 10 drone classes from the map's spawn ring/angles and drops 5 diverse supply pod types.
import * as THREE from 'three';
import { AIRDROP_SPECS, MISSION, type WaveDef } from './config';
import type { AirdropKind, DroneKind, Interactable } from './state';
import type { DroneManager } from './drones';

export interface Airdrop {
  kind: AirdropKind;
  pod: THREE.Group;
  chute: THREE.Group;
  pos: THREE.Vector3;
  landed: boolean;
  opened: boolean;
  beacon: THREE.Mesh;
  ring: THREE.Mesh;
}

const podBodyGeo = new THREE.CylinderGeometry(0.52, 0.58, 1.15, 8);
const podCapGeo = new THREE.ConeGeometry(0.56, 0.38, 8);
const podStrutGeo = new THREE.BoxGeometry(0.12, 0.55, 0.18);
const podBandGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.16, 8);
const beaconGeo = new THREE.CylinderGeometry(0.85, 0.85, 24, 12, 1, true);
const ringGeo = new THREE.RingGeometry(1.1, 1.35, 24);
ringGeo.rotateX(-Math.PI / 2);
const chuteDomeGeo = new THREE.SphereGeometry(1.65, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55);
const chuteCordGeo = new THREE.CylinderGeometry(0.015, 0.015, 2.8, 4);

const podBaseMat = new THREE.MeshStandardMaterial({
  color: 0x333c4a,
  roughness: 0.45,
  metalness: 0.72,
});
const podStrutMat = new THREE.MeshStandardMaterial({
  color: 0x1e242d,
  roughness: 0.6,
  metalness: 0.5,
});
const chuteMat = new THREE.MeshStandardMaterial({
  color: 0xd97706,
  roughness: 0.85,
  metalness: 0.05,
  side: THREE.DoubleSide,
});

const AIRDROP_ROTATION: AirdropKind[] = ['munitions', 'sentry', 'medical', 'emp', 'prototype'];

const bandMats: Record<AirdropKind, THREE.MeshStandardMaterial> = {
  munitions: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#f59e0b'), emissiveIntensity: 2.2 }),
  medical: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#10b981'), emissiveIntensity: 2.2 }),
  sentry: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#06b6d4'), emissiveIntensity: 2.2 }),
  emp: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#a855f7'), emissiveIntensity: 2.2 }),
  prototype: new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#eab308'), emissiveIntensity: 2.5 }),
};

const beaconMats: Record<AirdropKind, THREE.MeshBasicMaterial> = {
  munitions: new THREE.MeshBasicMaterial({ color: new THREE.Color('#f59e0b'), transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  medical: new THREE.MeshBasicMaterial({ color: new THREE.Color('#10b981'), transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  sentry: new THREE.MeshBasicMaterial({ color: new THREE.Color('#06b6d4'), transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  emp: new THREE.MeshBasicMaterial({ color: new THREE.Color('#a855f7'), transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
  prototype: new THREE.MeshBasicMaterial({ color: new THREE.Color('#eab308'), transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
};

function buildPodMesh(kind: AirdropKind): { pod: THREE.Group; chute: THREE.Group; beacon: THREE.Mesh; ring: THREE.Mesh } {
  const pod = new THREE.Group();
  const body = new THREE.Mesh(podBodyGeo, podBaseMat);
  body.position.y = 0.58;
  body.castShadow = true;
  pod.add(body);

  const cap = new THREE.Mesh(podCapGeo, podStrutMat);
  cap.position.y = 1.34;
  pod.add(cap);

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const strut = new THREE.Mesh(podStrutGeo, podStrutMat);
    strut.position.set(Math.cos(a) * 0.54, 0.3, Math.sin(a) * 0.54);
    strut.rotation.y = -a;
    pod.add(strut);
  }

  const band = new THREE.Mesh(podBandGeo, bandMats[kind]);
  band.position.y = 0.65;
  pod.add(band);

  const beacon = new THREE.Mesh(beaconGeo, beaconMats[kind]);
  beacon.position.y = 12;
  pod.add(beacon);

  const ring = new THREE.Mesh(ringGeo, beaconMats[kind]);
  ring.position.y = 0.04;
  pod.add(ring);

  // Parachute assembly visible while descending
  const chute = new THREE.Group();
  const dome = new THREE.Mesh(chuteDomeGeo, chuteMat);
  dome.position.y = 3.6;
  chute.add(dome);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const cord = new THREE.Mesh(chuteCordGeo, podStrutMat);
    cord.position.set(Math.cos(a) * 0.75, 2.3, Math.sin(a) * 0.75);
    cord.rotation.z = Math.cos(a) * 0.32;
    cord.rotation.x = -Math.sin(a) * 0.32;
    chute.add(cord);
  }
  pod.add(chute);

  return { pod, chute, beacon, ring };
}

export class WaveDirector {
  private kindQueue: DroneKind[] = [];
  private spawnTimer = 0;
  private lastWave = 0;
  private airDropsDone = new Set<number>();
  private dropCounter = 0;
  airdrops: Airdrop[] = [];
  waveBanner: { title: string; sub: string } | null = null;

  constructor(
    private scene: THREE.Scene,
    private drones: DroneManager,
    private colliders: { kind: 'box' | 'cyl'; x: number; z: number; hx: number; hz: number; r: number }[],
    private waves: WaveDef[],
    private spawnAngle: () => number,
  ) {
    // Hidden template pods for each airdrop kind so boot warm-up compiles all materials
    for (const k of AIRDROP_ROTATION) {
      const { pod } = buildPodMesh(k);
      pod.visible = false;
      scene.add(pod);
    }
  }

  reset(): void {
    this.kindQueue = [];
    this.spawnTimer = 0;
    this.lastWave = 0;
    this.airDropsDone.clear();
    this.dropCounter = 0;
  }

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
      add('phantom', def.phantoms ?? 0);
      add('shielder', def.shielders ?? 0);
      add('titan', def.titans ?? 0);

      for (let i = this.kindQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.kindQueue[i], this.kindQueue[j]] = [this.kindQueue[j], this.kindQueue[i]];
      }
      this.waveBanner = {
        title: `Wave ${wave} Incoming`,
        sub: wave === this.waves.length ? 'Final assault — all hostile classes converging' : `Hostile signatures detected: ${this.kindQueue.length}`,
      };
    }

    if (this.kindQueue.length > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0 && this.drones.activeCount() < def.concurrent) {
        const kind = this.kindQueue.shift()!;
        const a = this.spawnAngle();
        const r = 44 + Math.random() * 6;
        const y =
          kind === 'crawler'
            ? 0.6
            : kind === 'heavy' || kind === 'bomber'
              ? 5.5
              : kind === 'warden' || kind === 'titan'
                ? 6.5
                : kind === 'colossus' || kind === 'shielder'
                  ? 5.0
                  : 2.8 + Math.random() * 3.8;
        this.drones.spawn(kind, new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
        this.spawnTimer = def.spawnGap * (0.7 + Math.random() * 0.6);
      }
    }

    // Airdrops at progress checkpoints
    for (const cp of MISSION.airdropProgress) {
      if (progress >= cp && !this.airDropsDone.has(cp)) {
        this.airDropsDone.add(cp);
        const kind = AIRDROP_ROTATION[this.dropCounter % AIRDROP_ROTATION.length];
        this.dropCounter++;
        this.dropAirdrop(kind);
      }
    }
  }

  get spawning(): boolean {
    return this.kindQueue.length > 0;
  }

  findDropSite(pad = 2.4): { x: number; z: number } {
    for (let t = 0; t < 60; t++) {
      const a = Math.random() * Math.PI * 2;
      const r = 16 + Math.random() * 13;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      if (!this.nearCollider(x, z, pad)) return { x, z };
    }
    for (const ringPad of [pad, pad * 0.6]) {
      for (let r = 15; r <= 30; r += 1.5) {
        for (let i = 0; i < 24; i++) {
          const a = (i / 24) * Math.PI * 2 + r * 0.35;
          const x = Math.cos(a) * r;
          const z = Math.sin(a) * r;
          if (!this.nearCollider(x, z, ringPad)) return { x, z };
        }
      }
    }
    return { x: 0, z: 4 };
  }

  dropAirdrop(kind: AirdropKind = 'munitions', customPos?: { x: number; z: number }): void {
    const { x: px, z: pz } = customPos ?? this.findDropSite();
    const { pod, chute, beacon, ring } = buildPodMesh(kind);
    pod.position.set(px, 38, pz);
    this.scene.add(pod);
    this.airdrops.push({
      kind,
      pod,
      chute,
      pos: new THREE.Vector3(px, 0, pz),
      landed: false,
      opened: false,
      beacon,
      ring,
    });
  }

  private nearCollider(x: number, z: number, pad: number): boolean {
    for (const c of this.colliders) {
      if (c.kind === 'cyl') {
        if (Math.hypot(x - c.x, z - c.z) < c.r + pad) return true;
      } else if (Math.abs(x - c.x) < c.hx + pad && Math.abs(z - c.z) < c.hz + pad) return true;
    }
    return false;
  }

  updateAirdrops(
    dt: number,
    addInteractable: (it: Interactable) => void,
    removeInteractable: (id: string) => void,
    onClaim?: (a: Airdrop) => void,
  ): void {
    const pulse = 0.15 + 0.12 * Math.abs(Math.sin(performance.now() * 0.0035));
    for (const k of AIRDROP_ROTATION) {
      beaconMats[k].opacity = pulse;
    }

    for (const a of this.airdrops) {
      if (a.opened) continue;
      if (!a.landed) {
        a.pod.position.y -= 9.5 * dt;
        a.pod.rotation.y += dt * 0.8;
        if (a.pod.position.y <= 0) {
          a.pod.position.y = 0;
          a.landed = true;
          a.chute.visible = false; // collapse parachute on touchdown
          const spec = AIRDROP_SPECS[a.kind];
          addInteractable({
            id: `airdrop-${a.pos.x.toFixed(1)}-${a.pos.z.toFixed(1)}`,
            kind: 'airdrop',
            pos: new THREE.Vector3(a.pos.x, 1, a.pos.z),
            label: `Open ${spec.name}`,
            readyAt: 0,
            remove: () => {
              onClaim?.(a);
              this.openAirdrop(a, removeInteractable);
            },
          });
        }
      }
    }
  }

  private openAirdrop(a: Airdrop, removeInteractable: (id: string) => void): void {
    a.opened = true;
    a.pod.visible = false;
    removeInteractable(`airdrop-${a.pos.x.toFixed(1)}-${a.pos.z.toFixed(1)}`);
  }

  clear(): void {
    for (const a of this.airdrops) if (a.pod.parent) this.scene.remove(a.pod);
    this.airdrops.length = 0;
  }
}
