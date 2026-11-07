// Dam Overlook (Level 4, dawn): concrete arc dam wall to the north, spillway channel east, transformer yard.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

const concrete = (c: number) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.95 });

export function buildDam(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // concrete apron ground + maintenance pad
  const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 48), new THREE.MeshStandardMaterial({ color: 0x3d4652, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);
  const pad = new THREE.Mesh(new THREE.CircleGeometry(16, 32), new THREE.MeshStandardMaterial({ color: 0x46505c, roughness: 1 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.02;
  pad.receiveShadow = true;
  group.add(pad);

  // the dam: 19 concrete segments on an arc centered (0,-55) r26 — blocks all north approaches
  const arcMat = concrete(0x555f6c);
  const capMat = concrete(0x6b7684);
  const CX = 0;
  const CZ = -55;
  const R = 26;
  for (let i = 0; i < 19; i++) {
    const a = (-70 + i * (140 / 18)) * (Math.PI / 180);
    const x = CX + Math.sin(a) * R;
    const z = CZ + Math.cos(a) * R;
    const seg = new THREE.Mesh(new THREE.BoxGeometry(9.2, 26, 3.4), arcMat);
    seg.position.set(x, 11.5, z);
    seg.rotation.y = a;
    seg.castShadow = true;
    seg.receiveShadow = true;
    group.add(seg);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.6, 3.8), capMat);
    cap.position.set(x, 24.6, z);
    cap.rotation.y = a;
    group.add(cap);
    colliders.push({ kind: 'cyl', x, z, hx: 0, hz: 0, r: 3.6, top: 20 });
  }
  // downstream glow spilling under the dam face
  const spill = new THREE.PointLight(new THREE.Color('#9fd4ff'), 40, 30, 1.6);
  spill.position.set(0, 2, -28);
  group.add(spill);

  // spillway guide walls to the east (narrow corridor choke)
  for (const wx of [19, 25]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(1.3, 8, 16), concrete(0x4d5765));
    wall.position.set(wx, 4, -2);
    wall.castShadow = true;
    wall.receiveShadow = true;
    group.add(wall);
    colliders.push({ kind: 'box', x: wx, z: -2, hx: 0.7, hz: 8, r: 0, top: 8 });
  }
  const frozen = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.1, 16), new THREE.MeshStandardMaterial({ color: 0x2c4257, roughness: 0.4, metalness: 0.15 }));
  frozen.position.set(22, 0.06, -2);
  group.add(frozen);

  // transformer yard blocks (southwest cover)
  const blockMat = concrete(0x4a5461);
  const blocks: [number, number][] = [[-24, 16], [-19, 16], [-14, 18], [-24, 22], [-19, 22], [-14, 24]];
  for (const [bx, bz] of blocks) {
    const blk = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.6, 3.4), blockMat);
    blk.position.set(bx, 1.3, bz);
    blk.castShadow = true;
    blk.receiveShadow = true;
    group.add(blk);
    const bush = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.1, 6), new THREE.MeshStandardMaterial({ color: 0x6a5a2e, roughness: 0.6 }));
    bush.position.set(bx, 3.1, bz);
    group.add(bush);
    colliders.push({ kind: 'box', x: bx, z: bz, hx: 1.7, hz: 1.7, r: 0, top: 2.6 });
  }

  // dead pines on the west rim (visual only, like alpine trees)
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2c2118, roughness: 1 });
  const branchMat = new THREE.MeshStandardMaterial({ color: 0x1d2430, roughness: 0.95 });
  for (let i = 0; i < 8; i++) {
    const x = -34 + Math.random() * 6;
    const z = -14 + i * 4.5;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.22, 4.4, 5), trunkMat);
    trunk.position.set(x, 2.2, z);
    trunk.rotation.z = (Math.random() - 0.5) * 0.24;
    group.add(trunk);
    for (let b = 0; b < 3; b++) {
      const br = new THREE.Mesh(new THREE.BoxGeometry(2.4 - b * 0.6, 0.09, 0.09), branchMat);
      br.position.set(x + (b % 2 ? 0.9 : -0.9), 2.6 + b * 0.8, z);
      br.rotation.z = (b % 2 ? -1 : 1) * 0.5;
      group.add(br);
    }
  }

  // dawn rim lights along the dam crest
  for (const lx of [-16, 16]) {
    const lamp = new THREE.PointLight(new THREE.Color('#bfe0ff'), 30, 24, 1.7);
    lamp.position.set(lx, 24.5, -32);
    group.add(lamp);
  }

  // Massive steel penstock turbine pipes descending the dam face
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0x2c3a4a, roughness: 0.4, metalness: 0.8 });
  for (const px of [-9, 0, 9]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 24, 12), pipeMat);
    pipe.position.set(px, 11.5, -27.2);
    pipe.rotation.x = 0.14;
    pipe.castShadow = true;
    group.add(pipe);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.22, 0.12, 8, 16),
      new THREE.MeshStandardMaterial({ color: 0x0b131e, emissive: new THREE.Color('#38bdf8'), emissiveIntensity: 1.5 }),
    );
    ring.position.set(px, 6.0, -26.4);
    group.add(ring);
  }

  // High-voltage transmission tower in the SW transformer yard
  const pylonMat = new THREE.MeshStandardMaterial({ color: 0x3b4758, roughness: 0.5, metalness: 0.7 });
  const pylon = new THREE.Mesh(new THREE.ConeGeometry(2.2, 15, 4), pylonMat);
  pylon.position.set(-28, 7.5, 20);
  pylon.rotation.y = Math.PI / 4;
  group.add(pylon);
  for (const ay of [10, 13.5]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.25, 0.25), pylonMat);
    arm.position.set(-28, ay, 20);
    group.add(arm);
    for (const side of [-3.2, 3.2]) {
      const ins = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.14, 0.8, 8),
        new THREE.MeshStandardMaterial({ color: 0x0ea5e9, emissive: new THREE.Color('#38bdf8'), emissiveIntensity: 1.6 }),
      );
      ins.position.set(-28 + side, ay - 0.5, 20);
      group.add(ins);
    }
  }

  // distant peaks behind the dam
  const peakMat = new THREE.MeshStandardMaterial({ color: 0x0d1420, roughness: 1, fog: true });
  for (let i = 0; i < 9; i++) {
    const a = Math.PI + (i / 9) * Math.PI;
    const r = 160 + Math.random() * 40;
    const h = 50 + Math.random() * 55;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(34 + Math.random() * 26, h, 6), peakMat);
    cone.position.set(Math.cos(a) * r, h / 2 - 6, Math.sin(a) * r - 40);
    group.add(cone);
  }

  // hostiles swarm up from the south valley, occasionally around the dam ends
  const spawnAngle = () => {
    if (Math.random() < 0.7) return Math.PI / 2 + (Math.random() - 0.5) * 2.4;
    return (Math.random() < 0.5 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.6;
  };
  return { group, ground, colliders, spawnRingRadius: 50, spawnAngle };
}
