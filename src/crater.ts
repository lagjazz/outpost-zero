// Summit Crater (Level 5, blood dusk): ring wall with four attack gaps, obsidian spires, steam vents.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

export function buildCrater(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // dark crater floor + frozen ice patch at the center
  const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 48), new THREE.MeshStandardMaterial({ color: 0x241a20, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(44, 40), new THREE.MeshStandardMaterial({ color: 0x2b2026, roughness: 1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.01;
  floor.receiveShadow = true;
  group.add(floor);
  const ice = new THREE.Mesh(new THREE.CircleGeometry(18, 32), new THREE.MeshStandardMaterial({ color: 0x3a4a5e, roughness: 0.4, metalness: 0.15 }));
  ice.rotation.x = -Math.PI / 2;
  ice.position.y = 0.03;
  group.add(ice);
  const pad = new THREE.Mesh(new THREE.CircleGeometry(16, 32), new THREE.MeshStandardMaterial({ color: 0x33262c, roughness: 1 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.05;
  pad.receiveShadow = true;
  group.add(pad);

  // the rim: 24 chunks at r40, four diagonal gaps (45/135/225/315°) let the swarm in
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x3a2a30, roughness: 1, flatShading: true });
  const rimCapMat = new THREE.MeshStandardMaterial({ color: 0x5a3a3a, roughness: 1 });
  const gaps = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const nearGap = gaps.some((g) => Math.abs(Math.atan2(Math.sin(a - g), Math.cos(a - g))) < Math.PI / 12);
    if (nearGap) continue;
    const r = 40 + (Math.random() - 0.5) * 1.6;
    const h = 11 + Math.random() * 6;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const chunk = new THREE.Mesh(new THREE.BoxGeometry(10.4, h, 7), rimMat);
    chunk.position.set(x, h / 2 - 1, z);
    chunk.rotation.y = a + Math.PI / 2;
    chunk.castShadow = true;
    chunk.receiveShadow = true;
    group.add(chunk);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(10.6, 1.1, 7.2), rimCapMat);
    cap.position.set(x, h - 1.1, z);
    cap.rotation.y = chunk.rotation.y;
    group.add(cap);
    colliders.push({ kind: 'cyl', x, z, hx: 0, hz: 0, r: 3.6, top: h - 1 });
  }
  // gap mouth markers: faint red beacons so the openings read at dusk
  for (const g of gaps) {
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 8), new THREE.MeshStandardMaterial({ color: 0x400808, emissive: new THREE.Color('#ef4444'), emissiveIntensity: 2.2 }));
    beacon.position.set(Math.cos(g) * 40, 3.2, Math.sin(g) * 40);
    group.add(beacon);
  }

  // obsidian spires inside the ring
  const spireMat = new THREE.MeshStandardMaterial({ color: 0x161016, roughness: 0.35, metalness: 0.4, flatShading: true });
  const spires: [number, number, number][] = [[-28, 10, 7], [-23, -14, 6], [-17, 25, 5], [15, 27, 7], [27, 13, 6], [30, -9, 8], [19, -25, 5], [7, -31, 7], [-7, -26, 6], [-31, -3, 5]];
  for (const [sx, sz, h] of spires) {
    const spire = new THREE.Mesh(new THREE.ConeGeometry(1.3, h, 6), spireMat);
    spire.position.set(sx, h / 2, sz);
    spire.rotation.y = Math.random() * Math.PI;
    spire.rotation.z = (Math.random() - 0.5) * 0.2;
    spire.castShadow = true;
    group.add(spire);
    colliders.push({ kind: 'cyl', x: sx, z: sz, hx: 0, hz: 0, r: 1, top: h });
  }

  // steam vents: stub rims + translucent plumes
  const ventMat = new THREE.MeshStandardMaterial({ color: 0x241a20, roughness: 1 });
  const plumeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#c9b0a8'), transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  const vents: [number, number][] = [[-14, 19], [17, -15], [-21, -19], [12, 21]];
  for (const [vx, vz] of vents) {
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.15, 0.7, 10), ventMat);
    rim.position.set(vx, 0.35, vz);
    group.add(rim);
    colliders.push({ kind: 'cyl', x: vx, z: vz, hx: 0, hz: 0, r: 1, top: 0.7 });
    const plume = new THREE.Mesh(new THREE.ConeGeometry(2.2, 12, 10, 1, true), plumeMat);
    plume.position.set(vx, 6, vz);
    group.add(plume);
  }

  // crashed hauler wreck south of the tower
  const wreck = new THREE.Mesh(new THREE.BoxGeometry(7, 2.4, 3), new THREE.MeshStandardMaterial({ color: 0x3f3437, roughness: 0.8, metalness: 0.3 }));
  wreck.position.set(22, 1.1, 30);
  wreck.rotation.y = 0.7;
  wreck.rotation.z = 0.2;
  wreck.castShadow = true;
  group.add(wreck);
  colliders.push({ kind: 'box', x: 22, z: 30, hx: 3.4, hz: 1.7, r: 0, top: 2.6 });

  // blood-dusk cloud band
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0x120a10, roughness: 1, fog: true });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const r = 150 + Math.random() * 60;
    const h = 26 + Math.random() * 34;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(30 + Math.random() * 22, h, 5), cloudMat);
    cone.position.set(Math.cos(a) * r, h / 2 - 6, Math.sin(a) * r);
    group.add(cone);
  }

  // the swarm enters only through the four diagonal gaps
  const spawnAngle = () => gaps[Math.floor(Math.random() * gaps.length)] + (Math.random() - 0.5) * 0.3;
  return { group, ground, colliders, spawnRingRadius: 46, spawnAngle };
}
