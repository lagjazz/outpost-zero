// The outpost structures, signal tower, searchlight rig and interactables.
import * as THREE from 'three';
import { MISSION, PALETTE, type OutpostLayout } from './config';
import type { Collider, Interactable } from './state';

const steel = (c = 0x3b4657, metal = 0.7) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: metal });
const concrete = new THREE.MeshStandardMaterial({ color: 0x4a5261, roughness: 0.95 });
const sandMat = new THREE.MeshStandardMaterial({ color: 0x6b6250, roughness: 1 });

export interface SearchlightRig {
  group: THREE.Group;
  update(dt: number, time: number, enemies: THREE.Vector3[], on: boolean): void;
  isInBeam(p: THREE.Vector3): boolean;
}

export interface OutpostBundle {
  root: THREE.Group; // all visuals parented here for per-map visibility toggling
  colliders: Collider[];
  interactables: Interactable[];
  searchlight: SearchlightRig;
  towerTop: THREE.Vector3;
  towerPos: THREE.Vector3;
  consolePos: THREE.Vector3;
  setSignalVisuals: (progress: number, heat: number, overheated: boolean) => void;
  update: (dt: number, time: number) => void;
}

export function buildOutpost(scene: THREE.Scene, layout: OutpostLayout): OutpostBundle {
  const colliders: Collider[] = [];
  const interactables: Interactable[] = [];
  const root = new THREE.Group();
  scene.add(root);
  const cyl = (x: number, z: number, r: number, top = 3) => colliders.push({ kind: 'cyl', x, z, hx: 0, hz: 0, r, top });
  const box = (x: number, z: number, hx: number, hz: number, top = 3) => colliders.push({ kind: 'box', x, z, hx, hz, r: 0, top });

  // ---- Comms shack ----
  const shack = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x2e3949, roughness: 0.8 });
  const mkWall = (w: number, h: number, d: number, x: number, y: number, z: number, mat = wallMat) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    shack.add(m);
    return m;
  };
  mkWall(7, 3.4, 0.3, 0, 1.7, -3); // north
  mkWall(0.3, 3.4, 6, -3.5, 1.7, 0); // west
  mkWall(7, 3.4, 0.3, 0, 1.7, 3); // south
  mkWall(0.3, 3.4, 2.2, 3.5, 1.7, -1.9); // east upper-left of door
  mkWall(0.3, 3.4, 2.4, 3.5, 1.7, 1.8); // east lower-right of door
  mkWall(0.3, 1.0, 1.4, 3.5, 2.9, 0); // above door
  const roof = mkWall(7.6, 0.25, 6.6, 0, 3.55, 0, new THREE.MeshStandardMaterial({ color: 0x55647c, roughness: 0.9 }));
  roof.rotation.z = 0.03;
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.4), new THREE.MeshStandardMaterial({ color: 0x0c1119 }));
  door.position.set(3.51, 1.2, 0);
  door.rotation.y = -Math.PI / 2;
  shack.add(door);
  const [shackX, shackZ] = layout.shack;
  shack.position.set(shackX, 0, shackZ);
  root.add(shack);
  box(shackX, shackZ, 3.8, 3.3, 3.6);

  // warm interior + doorway glow
  const shackLight = new THREE.PointLight(new THREE.Color(PALETTE.amber), 26, 14, 1.6);
  shackLight.position.set(shackX, 2.4, shackZ);
  root.add(shackLight);
  const doorGlow = new THREE.PointLight(new THREE.Color('#ffd9a0'), 14, 7, 1.8);
  doorGlow.position.set(shackX + 3.9, 2, shackZ);
  root.add(doorGlow);

  // ---- Signal tower ----
  const towerPos = new THREE.Vector3(layout.tower[0], 0, layout.tower[1]);
  const tower = new THREE.Group();
  const legMat = steel(0x525d6d, 0.8);
  const legGeo = new THREE.CylinderGeometry(0.1, 0.14, 22, 6);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(Math.cos(a) * 1.4, 11, Math.sin(a) * 1.4);
    leg.castShadow = true;
    tower.add(leg);
  }
  for (let y = 3; y <= 21; y += 4.5) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35 - (y / 22) * 0.9, 0.05, 4, 12), legMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    tower.add(ring);
  }
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 5, 5), legMat);
  mast.position.y = 24;
  tower.add(mast);
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), new THREE.MeshStandardMaterial({ color: 0x550000, emissive: new THREE.Color(PALETTE.red), emissiveIntensity: 2 }));
  beacon.position.y = 26.6;
  tower.add(beacon);
  const beaconLight = new THREE.PointLight(new THREE.Color(PALETTE.red), 30, 25, 1.5);
  beaconLight.position.y = 26.6;
  tower.add(beaconLight);
  const dish = new THREE.Mesh(new THREE.SphereGeometry(1.6, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2.6), steel(0x8a97a8, 0.6));
  dish.position.set(0, 13, 1.6);
  dish.rotation.x = -Math.PI / 3.2;
  tower.add(dish);
  // signal aura rings that climb the tower as progress rises
  const auraMats: THREE.MeshBasicMaterial[] = [];
  for (let i = 0; i < 3; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(PALETTE.green), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.8 + i * 0.35, 0.035, 6, 20), mat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 2;
    ring.userData.base = i;
    tower.add(ring);
    auraMats.push(mat);
  }
  const towerLight = new THREE.PointLight(new THREE.Color(PALETTE.green), 18, 16, 1.5);
  towerLight.position.set(0, 3, 0);
  tower.add(towerLight);
  tower.position.copy(towerPos);
  root.add(tower);
  cyl(towerPos.x, towerPos.z, 1.7, 26);

  // ---- Console desk at tower base ----
  const consolePos = new THREE.Vector3(towerPos.x + 1.4, 0, towerPos.z + 3.1);
  const desk = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.1, 0.9), steel(0x39424f, 0.5));
  body.position.y = 0.55;
  body.castShadow = true;
  desk.add(body);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.55), new THREE.MeshStandardMaterial({ color: 0x04140d, emissive: new THREE.Color(PALETTE.green), emissiveIntensity: 1.4 }));
  screen.position.set(0, 1.15, -0.2);
  screen.rotation.x = -0.5;
  desk.add(screen);
  const deskGlow = new THREE.PointLight(new THREE.Color(PALETTE.green), 6, 5, 1.8);
  deskGlow.position.set(0, 1.4, 0.2);
  desk.add(deskGlow);
  desk.position.copy(consolePos);
  desk.lookAt(towerPos.x, 0, towerPos.z);
  root.add(desk);
  box(consolePos.x, consolePos.z, 1.1, 0.6, 1.1);
  interactables.push({ id: 'console', kind: 'console', pos: new THREE.Vector3(consolePos.x - 0.1, 1.2, consolePos.z + 1.3), label: 'Repair & reboot transmitter', readyAt: 0 });

  // ---- Concrete blast walls ----
  const mkWallSeg = (x: number, z: number, rot: number) => {
    const w = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.5, 0.7), concrete);
    w.position.set(x, 0.75, z);
    w.rotation.y = rot;
    w.castShadow = true;
    w.receiveShadow = true;
    root.add(w);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.15, 0.75), new THREE.MeshStandardMaterial({ color: 0x7d8ea6, roughness: 0.9 }));
    cap.position.set(x, 1.55, z);
    cap.rotation.y = rot;
    root.add(cap);
    cyl(x, z, 2.4, 1.6);
  };
  for (const [wx, wz, wrot] of layout.walls) mkWallSeg(wx, wz, wrot);

  // ---- Sandbag emplacements ----
  const bagGeo = new THREE.BoxGeometry(1.1, 0.36, 0.62);
  for (const [x, z, rot] of layout.sandbags) {
    const cluster = new THREE.Group();
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3 - (row === 2 ? 1 : 0); col++) {
        const bag = new THREE.Mesh(bagGeo, sandMat);
        bag.position.set((col - 1) * 1.05 + (row === 1 ? 0.5 : 0), 0.18 + row * 0.36, 0);
        bag.castShadow = true;
        bag.receiveShadow = true;
        cluster.add(bag);
      }
    }
    const snowCap = new THREE.Mesh(new THREE.BoxGeometry(3, 0.06, 0.7), new THREE.MeshStandardMaterial({ color: 0x93a7bf, roughness: 0.9 }));
    snowCap.position.y = 1.26;
    cluster.add(snowCap);
    cluster.position.set(x, 0, z);
    cluster.rotation.y = rot;
    root.add(cluster);
    cyl(x, z, 1.5, 1.3);
  }

  // ---- Generator + fuel tank ----
  const gen = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.7, 1.5), steel(0x445061));
  gen.position.set(13, 0.85, -3.5);
  gen.castShadow = true;
  root.add(gen);
  const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.6, 6), steel(0x5a6675));
  pipe.position.set(13.8, 2.2, -3.5);
  root.add(pipe);
  const fuel = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 12), new THREE.MeshStandardMaterial({ color: 0x7a3b2a, roughness: 0.6, metalness: 0.4 }));
  fuel.position.set(15, 1.5, -1);
  fuel.castShadow = true;
  root.add(fuel);
  cyl(13.8, -2.6, 2.4, 3);

  // ---- Searchlight tower ----
  const slPos = new THREE.Vector3(layout.searchlight[0], 0, layout.searchlight[1]);
  const slGroup = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 6.6, 8), steel(0x4c5768));
  pole.position.y = 3.3;
  slGroup.add(pole);
  const platform = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.16, 10), steel(0x39424f));
  platform.position.y = 6.6;
  slGroup.add(platform);
  const headMat = steel(0x6a7686, 0.8);
  const beamTargets: THREE.Object3D[] = [];
  const beamLights: THREE.SpotLight[] = [];
  const coneMeshes: THREE.Mesh[] = [];
  const headGeo = new THREE.CylinderGeometry(0.34, 0.5, 0.8, 10);
  for (const side of [-0.7, 0.7]) {
    const head = new THREE.Mesh(headGeo, headMat);
    head.rotation.x = Math.PI / 2;
    head.position.set(side, 7.2, 0);
    slGroup.add(head);
    const target = new THREE.Object3D();
    target.position.set(0, 4, 34);
    slGroup.add(target);
    const spot = new THREE.SpotLight(new THREE.Color('#d8ecff'), 0, 90, THREE.MathUtils.degToRad(MISSION.searchlightAngleDeg), 0.45, 1.0);
    spot.position.set(side, 7.2, 0);
    spot.target = target;
    slGroup.add(spot);
    beamLights.push(spot);
    beamTargets.push(target);
    const coneLen = 55;
    const coneGeo = new THREE.ConeGeometry(4.6, coneLen, 16, 1, true);
    coneGeo.translate(0, -coneLen / 2, 0);
    const cone = new THREE.Mesh(
      coneGeo,
      new THREE.MeshBasicMaterial({ color: new THREE.Color('#bcd8ff'), transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    );
    cone.position.set(side, 7.2, 0);
    slGroup.add(cone);
    coneMeshes.push(cone);
  }
  slGroup.position.copy(slPos);
  root.add(slGroup);
  cyl(slPos.x, slPos.z, 0.7, 6.6);
  const switchBox = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.3), steel(0x556272));
  switchBox.position.set(slPos.x + 0.7, 1.3, slPos.z);
  root.add(switchBox);
  interactables.push({ id: 'searchlight', kind: 'searchlight', pos: new THREE.Vector3(slPos.x + 1.2, 1.3, slPos.z), label: 'Searchlight breaker', readyAt: 0 });

  const beamDir = new THREE.Vector3(0, -0.06, 1);
  const worldHead = new THREE.Vector3(slPos.x, 7.2, slPos.z);
  let sweepAngle = 0.4;
  const rig: SearchlightRig = {
    group: slGroup,
    update(dt, time, enemies, on) {
      // slow sweep; bias toward enemy centroid when lit enemies exist
      sweepAngle = 0.55 * Math.sin(time * 0.22);
      let targetAngle = sweepAngle;
      if (enemies.length > 0) {
        let cx = 0;
        let cz = 0;
        for (const e of enemies) {
          cx += e.x;
          cz += e.z;
        }
        targetAngle = Math.atan2(cx - slPos.x, cz - slPos.z);
        let d = targetAngle - sweepAngle;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        targetAngle = sweepAngle + d * 0.6;
      }
      const pitch = -0.12 + 0.06 * Math.sin(time * 0.31);
      beamDir.set(Math.sin(targetAngle), pitch, Math.cos(targetAngle)).normalize();
      const intensity = on ? 2200 : 0;
      for (let i = 0; i < beamLights.length; i++) {
        beamLights[i].intensity = intensity;
        beamTargets[i].position.set(beamDir.x * 40, beamDir.y * 40, beamDir.z * 40);
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), beamDir);
        coneMeshes[i].quaternion.copy(q);
        coneMeshes[i].visible = on;
      }
    },
    isInBeam(p) {
      const v = p.clone().sub(worldHead);
      const dist = v.length();
      if (dist > MISSION.searchlightRange) return false;
      v.normalize();
      return v.dot(beamDir) > Math.cos(THREE.MathUtils.degToRad(MISSION.searchlightAngleDeg) + 0.06);
    },
  };

  // ---- Supply station (ammo + medkit): free-standing crates beside the shack,
  //      clear of its wall collider so players can always approach and face them.
  const crate = (x: number, z: number, color: number) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.8, 1.1), new THREE.MeshStandardMaterial({ color, roughness: 0.8 }));
    m.position.set(x, 0.4, z);
    m.castShadow = true;
    root.add(m);
    colliders.push({ kind: 'box', x, z, hx: 0.6, hz: 0.6, r: 0, top: 0.85 });
    return m;
  };
  const ammoX = shackX + 5.6;
  const ammoZ = shackZ - 1.2;
  const medZ = shackZ + 2.2;
  crate(ammoX, ammoZ, 0x4c5a3a);
  const ammoStrip = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.08, 0.08), new THREE.MeshStandardMaterial({ color: 0x111, emissive: new THREE.Color(PALETTE.amber), emissiveIntensity: 1.6 }));
  ammoStrip.position.set(ammoX, 0.62, ammoZ + 0.58); // +z face, visible from the yard
  root.add(ammoStrip);
  interactables.push({ id: 'ammo', kind: 'ammo', pos: new THREE.Vector3(ammoX, 1.0, ammoZ + 0.85), label: 'Ammo resupply rack', readyAt: 0 });

  crate(ammoX, medZ, 0x5a3333);
  const crossMat = new THREE.MeshStandardMaterial({ color: 0x111, emissive: new THREE.Color(PALETTE.red), emissiveIntensity: 1.8 });
  const crossA = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.14, 0.06), crossMat);
  crossA.position.set(ammoX, 0.5, medZ + 0.58);
  const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.5, 0.06), crossMat);
  crossB.position.set(ammoX, 0.5, medZ + 0.58);
  root.add(crossA, crossB);
  interactables.push({ id: 'medkit', kind: 'medkit', pos: new THREE.Vector3(ammoX, 1.0, medZ + 0.85), label: 'Med station', readyAt: 0 });

  // ---- Weapon workbench ----
  const bench = new THREE.Group();
  const top = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 1), steel(0x4a5464, 0.3));
  top.position.y = 0.95;
  top.castShadow = true;
  bench.add(top);
  for (const [lx, lz] of [[-1, -0.4], [1, -0.4], [-1, 0.4], [1, 0.4]] as const) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.1), steel(0x39424f));
    leg.position.set(lx, 0.45, lz);
    bench.add(leg);
  }
  const toolBoard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 1.8), steel(0x2c3441));
  toolBoard.position.set(-1.3, 1.6, 0);
  bench.add(toolBoard);
  const benchLight = new THREE.PointLight(new THREE.Color(PALETTE.amber), 10, 6, 1.8);
  benchLight.position.set(0, 2, 0);
  bench.add(benchLight);
  const [benchX, benchZ] = layout.bench;
  bench.position.set(benchX, 0, benchZ);
  root.add(bench);
  box(benchX, benchZ, 1.4, 0.7, 2.2);
  interactables.push({ id: 'workbench', kind: 'workbench', pos: new THREE.Vector3(benchX - 1.2, 1.2, benchZ), label: 'Weapon mod bench (B)', readyAt: 0 });

  // ---- visuals/state update ----
  const towerColor = new THREE.Color();
  const update = (dt: number, time: number) => {
    const blink = Math.sin(time * 3) > 0.6;
    (beacon.material as THREE.MeshStandardMaterial).emissiveIntensity = blink ? 3 : 0.4;
    beaconLight.intensity = blink ? 36 : 4;
    for (let i = 0; i < auraMats.length; i++) {
      auraMats[i].opacity = 0.35 + 0.25 * Math.sin(time * 2 + i * 1.4);
    }
  };

  const setSignalVisuals = (progress: number, heat: number, overheated: boolean) => {
    if (overheated) towerColor.set(PALETTE.red);
    else if (heat > 70) towerColor.set(PALETTE.amber);
    else towerColor.set(PALETTE.green);
    for (const mat of auraMats) mat.color.copy(towerColor);
    towerLight.color.copy(towerColor);
    (screen.material as THREE.MeshStandardMaterial).emissive.copy(towerColor);
    deskGlow.color.copy(towerColor);
    towerLight.intensity = 12 + progress * 0.2;
  };

  return { root, colliders, interactables, searchlight: rig, towerTop: new THREE.Vector3(towerPos.x, 26.6, towerPos.z), towerPos, consolePos, setSignalVisuals, update };
}
