// Orbital Citadel (Level 8, Solar Eclipse Finale): High-summit orbital defense array,
// towering monolith pylons, deep-space parabolic dishes, and fortified bastions.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

const titanium = (c: number, m = 0.82, r = 0.3) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const glow = (hex: string, int = 2.5) =>
  new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color(hex), emissiveIntensity: int, roughness: 0.2 });

export function buildCitadel(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // Obsidian-titanium citadel plaza
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(125, 48),
    new THREE.MeshStandardMaterial({ color: 0x1a1423, roughness: 0.85, metalness: 0.25 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const outerPlaza = new THREE.Mesh(new THREE.CircleGeometry(38, 48), titanium(0x271f36, 0.5, 0.6));
  outerPlaza.rotation.x = -Math.PI / 2;
  outerPlaza.position.y = 0.02;
  outerPlaza.receiveShadow = true;
  group.add(outerPlaza);

  const pad = new THREE.Mesh(new THREE.CircleGeometry(17, 36), titanium(0x312544, 0.65, 0.45));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.04;
  pad.receiveShadow = true;
  group.add(pad);

  // Glowing concentric orbital calibration rings on the citadel floor
  for (const r of [17.2, 28.5, 37.8]) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(r - 0.18, r, 48),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#c084fc'),
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;
    group.add(ring);
  }

  // ---- 6 Towering Orbital Monolith Pylons Around the Perimeter ----
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    const r = 34;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const pylon = new THREE.Group();

    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 3.2, 3.5, 6), titanium(0x1e1b2e, 0.75, 0.35));
    base.position.y = 1.75;
    base.castShadow = true;
    pylon.add(base);

    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 2.2, 18, 6), titanium(0x2e2640, 0.85, 0.25));
    shaft.position.y = 12.5;
    shaft.castShadow = true;
    pylon.add(shaft);

    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.35, 16, 2.45), glow('#a855f7', 2.4));
    strip.position.y = 12.5;
    pylon.add(strip);

    const crown = new THREE.Mesh(new THREE.OctahedronGeometry(1.6, 0), glow('#fde047', 2.8));
    crown.position.y = 23;
    pylon.add(crown);

    pylon.position.set(x, 0, z);
    pylon.lookAt(0, 0, 0);
    group.add(pylon);
    colliders.push({ kind: 'cyl', x, z, hx: 0, hz: 0, r: 3.1, top: 22 });
  }

  // ---- 3 Deep-Space Parabolic Dish Arrays ----
  const dishAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  for (const a of dishAngles) {
    const x = Math.cos(a) * 23;
    const z = Math.sin(a) * 23;
    const array = new THREE.Group();

    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(4.2, 4.4, 4.2), titanium(0x252038, 0.7, 0.4));
    pedestal.position.y = 2.2;
    pedestal.castShadow = true;
    array.add(pedestal);

    const dish = new THREE.Mesh(
      new THREE.SphereGeometry(4.6, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.42),
      titanium(0x64748b, 0.85, 0.25),
    );
    dish.position.y = 6.2;
    dish.rotation.x = Math.PI * 0.75;
    array.add(dish);

    const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 3.2, 8), glow('#38bdf8', 2.4));
    feed.position.set(0, 7.8, 1.2);
    feed.rotation.x = -Math.PI * 0.25;
    array.add(feed);

    array.position.set(x, 0, z);
    array.lookAt(0, 6, 0);
    group.add(array);
    colliders.push({ kind: 'box', x, z, hx: 2.3, hz: 2.3, r: 0, top: 8 });
  }

  // ---- Tactical Shield Bunkers (Inner Ring Cover) ----
  const bunkerCoords: [number, number, number][] = [
    [-15, -13, 0.7],
    [15, -13, -0.7],
    [-16, 12, 2.3],
    [16, 12, -2.3],
  ];
  for (const [bx, bz, rot] of bunkerCoords) {
    const b = new THREE.Group();
    const wall = new THREE.Mesh(new THREE.BoxGeometry(6.4, 2.5, 1.8), titanium(0x33294a, 0.75, 0.35));
    wall.position.y = 1.25;
    wall.castShadow = true;
    wall.receiveShadow = true;
    b.add(wall);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.22, 1.9), glow('#f59e0b', 1.8));
    trim.position.y = 2.2;
    b.add(trim);
    b.position.set(bx, 0, bz);
    b.rotation.y = rot;
    group.add(b);
    colliders.push({ kind: 'cyl', x: bx, z: bz, hx: 0, hz: 0, r: 2.8, top: 2.6 });
  }

  // Citadel ambient point lights
  for (const [lx, lz] of [[-18, 0], [18, 0]] as const) {
    const lamp = new THREE.PointLight(new THREE.Color('#c084fc'), 45, 32, 1.6);
    lamp.position.set(lx, 8, lz);
    group.add(lamp);
  }

  // Outer Jagged Mountain Peaks Ring (InstancedMesh)
  const peakGeo = new THREE.ConeGeometry(14, 46, 5);
  const peakMat = new THREE.MeshStandardMaterial({ color: 0x12091c, roughness: 0.95, flatShading: true });
  const peaks = new THREE.InstancedMesh(peakGeo, peakMat, 20);
  const m = new THREE.Matrix4();
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const r = 82 + (i % 3) * 14;
    const h = 0.8 + (i % 4) * 0.35;
    m.makeScale(1.1, h, 1.1).setPosition(Math.cos(a) * r, 18 * h, Math.sin(a) * r);
    peaks.setMatrixAt(i, m);
  }
  peaks.instanceMatrix.needsUpdate = true;
  peaks.computeBoundingSphere();
  group.add(peaks);

  return {
    group,
    ground,
    colliders,
    spawnRingRadius: 50,
    spawnAngle: () => Math.random() * Math.PI * 2,
  };
}
