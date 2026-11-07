// Alpine terrain: snow plateau, cliffs, ridges, pine forest, rocks.
import * as THREE from 'three';
import type { Collider } from './state';

export interface WorldBundle {
  group: THREE.Group; // all terrain visuals parented here (per-map visibility)
  ground: THREE.Mesh; // big disc used as a bullet-stop proxy
  colliders: Collider[];
  spawnRingRadius: number;
  spawnAngle: () => number; // bearing where wave drones materialize
}

function addCollider(list: Collider[], kind: 'box' | 'cyl', x: number, z: number, a: number, b?: number, top = 3): void {
  list.push(kind === 'box' ? { kind, x, z, hx: a, hz: b ?? a, r: 0, top } : { kind, x, z, hx: 0, hz: 0, r: a, top });
}

/** Alpine Pass: snow plateau, cliff ring, pine forest. */
export function buildWorld(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // Snow plateau
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x51637c, roughness: 0.95, metalness: 0 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 48), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  // packed snow pad under the outpost
  const pad = new THREE.Mesh(new THREE.CircleGeometry(16, 32), new THREE.MeshStandardMaterial({ color: 0x3c4b60, roughness: 1 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.02;
  pad.receiveShadow = true;
  group.add(pad);

  // Distant ridgelines
  const ridgeMat = new THREE.MeshStandardMaterial({ color: 0x0c1322, roughness: 1, fog: true });
  const snowCapMat = new THREE.MeshStandardMaterial({ color: 0x16233a, roughness: 1 });
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + Math.random() * 0.25;
    const r = 150 + Math.random() * 70;
    const h = 45 + Math.random() * 60;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(35 + Math.random() * 30, h, 6), ridgeMat);
    cone.position.set(Math.cos(a) * r, h / 2 - 6, Math.sin(a) * r);
    cone.rotation.y = Math.random() * Math.PI;
    group.add(cone);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(10 + Math.random() * 8, h * 0.3, 6), snowCapMat);
    cap.position.set(cone.position.x, h * 0.75, cone.position.z);
    cap.rotation.y = cone.rotation.y;
    group.add(cap);
  }

  // Cliff ring containing the plateau
  const cliffMat = new THREE.MeshStandardMaterial({ color: 0x2a3648, roughness: 1 });
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const r = 54 + Math.random() * 4;
    const w = 8 + Math.random() * 6;
    const h = 12 + Math.random() * 12;
    const rock = new THREE.Mesh(new THREE.BoxGeometry(w, h, w * 0.8), cliffMat);
    rock.position.set(Math.cos(a) * r, h / 2 - 1.5, Math.random() * 2 - 1);
    rock.position.x = Math.cos(a) * r;
    rock.position.z = Math.sin(a) * r;
    rock.rotation.y = a + Math.PI / 2 + (Math.random() - 0.5) * 0.4;
    rock.receiveShadow = true;
    group.add(rock);
    const snow = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.95, 1.2, w * 0.75),
      new THREE.MeshStandardMaterial({ color: 0x8fa6bf, roughness: 0.9 }),
    );
    snow.position.set(rock.position.x, h - 1.2, rock.position.z);
    snow.rotation.y = rock.rotation.y;
    group.add(snow);
    addCollider(colliders, 'cyl', Math.cos(a) * r, Math.sin(a) * r, w * 0.42, undefined, 20);
  }

  // Scattered boulders
  const boulderMat = new THREE.MeshStandardMaterial({ color: 0x39465a, roughness: 1, flatShading: true });
  for (let i = 0; i < 16; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 20 + Math.random() * 28;
    const s = 0.8 + Math.random() * 1.6;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), boulderMat);
    rock.position.set(Math.cos(a) * r, s * 0.5, Math.sin(a) * r);
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    rock.castShadow = true;
    rock.receiveShadow = true;
    group.add(rock);
    if (s > 1.4) addCollider(colliders, 'cyl', rock.position.x, rock.position.z, s * 0.9, undefined, s * 1.6);
  }

  // Pine forest (instanced cones + trunks) between outpost and cliffs
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2c2118, roughness: 1 });
  const pineMat = new THREE.MeshStandardMaterial({ color: 0x14261e, roughness: 0.9 });
  const pineSnowMat = new THREE.MeshStandardMaterial({ color: 0x51647a, roughness: 0.9, transparent: true, opacity: 0.35 });
  const treeSpots: { x: number; z: number; s: number }[] = [];
  let guard = 0;
  while (treeSpots.length < 90 && guard++ < 600) {
    const a = Math.random() * Math.PI * 2;
    const r = 20 + Math.random() * 30;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x + 8, z + 6) < 7) continue; // keep shack clear
    if (Math.hypot(x, z) < 17 && Math.abs(z) < 12 && Math.abs(x) < 14) continue; // keep yard clear
    treeSpots.push({ x, z, s: 0.8 + Math.random() * 0.9 });
  }
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.2, 1.6, 5);
  const coneGeo = new THREE.ConeGeometry(1.5, 4.6, 7);
  const capGeo = new THREE.ConeGeometry(1.55, 1.4, 7);
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeSpots.length);
  const cones = new THREE.InstancedMesh(coneGeo, pineMat, treeSpots.length);
  const caps = new THREE.InstancedMesh(capGeo, pineSnowMat, treeSpots.length);
  const m = new THREE.Matrix4();
  treeSpots.forEach((t, i) => {
    m.makeScale(t.s, t.s, t.s).setPosition(t.x, 0.8 * t.s, t.z);
    trunks.setMatrixAt(i, m);
    m.makeScale(t.s, t.s, t.s).setPosition(t.x, 3.6 * t.s, t.z);
    cones.setMatrixAt(i, m);
    m.makeScale(t.s, t.s, t.s).setPosition(t.x, 5.4 * t.s, t.z);
    caps.setMatrixAt(i, m);
  });
  trunks.castShadow = true;
  cones.castShadow = true;
  trunks.computeBoundingSphere();
  cones.computeBoundingSphere();
  caps.computeBoundingSphere();
  group.add(trunks, cones, caps);

  // Perimeter wire fence posts on the pad edge
  const postMat = new THREE.MeshStandardMaterial({ color: 0x232c3a, roughness: 0.7, metalness: 0.6 });
  const postGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.4, 4);
  const posts = new THREE.InstancedMesh(postGeo, postMat, 28);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    m.makeTranslation(Math.cos(a) * 15.5, 0.7, Math.sin(a) * 15.5);
    posts.setMatrixAt(i, m);
  }
  posts.computeBoundingSphere();
  group.add(posts);

  // Alpine Guard Watchtower (NE perimeter)
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x2a3648, roughness: 0.5, metalness: 0.7 });
  const tower = new THREE.Group();
  for (const [lx, lz] of [[-1.3, -1.3], [1.3, -1.3], [-1.3, 1.3], [1.3, 1.3]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 6.5, 6), steelMat);
    leg.position.set(lx, 3.25, lz);
    tower.add(leg);
  }
  const cab = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, 3.4), steelMat);
  cab.position.y = 7.2;
  cab.castShadow = true;
  tower.add(cab);
  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(3.52, 0.65, 3.52),
    new THREE.MeshStandardMaterial({ color: 0x0b1522, emissive: new THREE.Color('#38bdf8'), emissiveIntensity: 0.7, roughness: 0.2 }),
  );
  visor.position.y = 7.35;
  tower.add(visor);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.8, 1.2, 4), steelMat);
  roof.position.y = 8.9;
  roof.rotation.y = Math.PI / 4;
  tower.add(roof);
  tower.position.set(18, 0, -14);
  group.add(tower);
  addCollider(colliders, 'box', 18, -14, 1.8, 1.8, 8.5);

  // Tracked Snowcat Radar Vehicle (SW perimeter)
  const snowcat = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.45, metalness: 0.55 });
  const trackMat = new THREE.MeshStandardMaterial({ color: 0x1a202c, roughness: 0.85, metalness: 0.4 });
  for (const side of [-1, 1]) {
    const tread = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.85, 4.4), trackMat);
    tread.position.set(side * 1.35, 0.42, 0);
    snowcat.add(tread);
  }
  const chas = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.15, 4.0), hullMat);
  chas.position.y = 1.25;
  chas.castShadow = true;
  snowcat.add(chas);
  const windshield = new THREE.Mesh(
    new THREE.BoxGeometry(2.3, 0.6, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: new THREE.Color('#fef08a'), emissiveIntensity: 0.8 }),
  );
  windshield.position.set(0, 1.4, 2.01);
  snowcat.add(windshield);
  const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.2, 0.35, 12), steelMat);
  dish.position.set(0, 2.2, -0.6);
  dish.rotation.x = 0.4;
  snowcat.add(dish);
  snowcat.position.set(-16, 0, 14);
  snowcat.rotation.y = 0.65;
  group.add(snowcat);
  addCollider(colliders, 'box', -16, 14, 2.2, 2.2, 2.4);

  return {
    group,
    ground,
    colliders,
    spawnRingRadius: 50,
    spawnAngle: () => Math.random() * Math.PI * 2,
  };
}
