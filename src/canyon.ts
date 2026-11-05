// Canyon Relay map: a narrow rock-walled valley corridor with a frozen river,
// container wreckage for cover, and dead snags. Hostiles enter from both ends.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

function addCollider(list: Collider[], kind: 'box' | 'cyl', x: number, z: number, a: number, b?: number, top = 3): void {
  list.push(kind === 'box' ? { kind, x, z, hx: a, hz: b ?? a, r: 0, top } : { kind, x, z, hx: 0, hz: 0, r: a, top });
}

export function buildCanyon(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // rocky valley floor
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x414753, roughness: 0.98, metalness: 0.05 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 48), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  // packed pad under the outpost (keeps the facility kit grounded)
  const pad = new THREE.Mesh(new THREE.CircleGeometry(16, 32), new THREE.MeshStandardMaterial({ color: 0x39404d, roughness: 1 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.02;
  pad.receiveShadow = true;
  group.add(pad);

  // frozen river running down the corridor
  const river = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 130),
    new THREE.MeshStandardMaterial({ color: 0x1d3a52, roughness: 0.25, metalness: 0.55 }),
  );
  river.rotation.x = -Math.PI / 2;
  river.position.set(3.2, 0.03, 4);
  group.add(river);
  const iceMat = new THREE.MeshStandardMaterial({ color: 0x274863, roughness: 0.3, metalness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const pond = new THREE.Mesh(new THREE.CircleGeometry(1.6 + Math.random() * 2.4, 10), iceMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(-16 + Math.random() * 32, 0.028, -30 + Math.random() * 60);
    group.add(pond);
  }

  // jagged canyon walls along both sides of the corridor
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x2f3541, roughness: 1, flatShading: true });
  const snowMat = new THREE.MeshStandardMaterial({ color: 0x7f93ab, roughness: 0.9 });
  const m = new THREE.Matrix4();
  const wallGeo = new THREE.BoxGeometry(9, 18, 7);
  const capGeo = new THREE.BoxGeometry(9.2, 1.4, 7.2);
  const wallRocks: THREE.Mesh[] = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i <= 17; i++) {
      const z = -63 + i * 7.5 + (Math.random() - 0.5) * 2.5;
      const x = side * (26 + Math.random() * 5);
      const h = 14 + Math.random() * 12;
      const rock = new THREE.Mesh(wallGeo, rockMat);
      rock.position.set(x, (h * 18) / 36, z);
      rock.scale.y = h / 18;
      rock.rotation.y = side * (Math.PI / 2) + (Math.random() - 0.5) * 0.3;
      rock.receiveShadow = true;
      wallRocks.push(rock);
      addCollider(colliders, 'cyl', x, z, 4.2, undefined, 20);
    }
  }
  const walls = new THREE.InstancedMesh(wallGeo, rockMat, wallRocks.length);
  wallRocks.forEach((r, i) => {
    m.compose(r.position, r.quaternion, r.scale);
    walls.setMatrixAt(i, m);
  });
  group.add(walls);
  // snow dust on wall tops
  const caps: THREE.Mesh[] = [];
  wallRocks.forEach((r) => {
    const cap = new THREE.Mesh(capGeo, snowMat);
    cap.position.set(r.position.x, r.scale.y * 9 + 0.4, r.position.z);
    cap.rotation.copy(r.rotation);
    caps.push(cap);
  });
  const capMesh = new THREE.InstancedMesh(capGeo, snowMat, caps.length);
  caps.forEach((c, i) => {
    m.makeRotationY(c.rotation.y).setPosition(c.position);
    capMesh.setMatrixAt(i, m);
  });
  group.add(capMesh);

  // distant outer walls for depth (visual only)
  for (const side of [-1, 1]) {
    for (let i = 0; i < 9; i++) {
      const z = -72 + i * 18;
      const h = 26 + Math.random() * 18;
      const far = new THREE.Mesh(new THREE.BoxGeometry(10, h, 14), new THREE.MeshStandardMaterial({ color: 0x131a28, roughness: 1, fog: true }));
      far.position.set(side * (44 + Math.random() * 6), h / 2 - 1, z);
      far.rotation.y = (Math.random() - 0.5) * 0.4;
      group.add(far);
    }
  }

  // scattered boulders in the corridor
  const boulderMat = new THREE.MeshStandardMaterial({ color: 0x3a4150, roughness: 1, flatShading: true });
  for (let i = 0; i < 14; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 20 + Math.random() * 24;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.abs(x) > 20) continue;
    const s = 0.8 + Math.random() * 1.5;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), boulderMat);
    rock.position.set(x, s * 0.5, z);
    rock.rotation.set(Math.random(), Math.random(), Math.random());
    rock.castShadow = true;
    group.add(rock);
    if (s > 1.3) addCollider(colliders, 'cyl', x, z, s * 0.9, undefined, s * 1.6);
  }

  // dead tree snags
  const snagMat = new THREE.MeshStandardMaterial({ color: 0x241c14, roughness: 1 });
  const snagGeo = new THREE.CylinderGeometry(0.09, 0.2, 4.2, 5);
  const snags = new THREE.InstancedMesh(snagGeo, snagMat, 34);
  let placed = 0;
  let guard = 0;
  while (placed < 34 && guard++ < 400) {
    const z = -40 + Math.random() * 80;
    const x = (Math.random() - 0.5) * 40;
    if (Math.hypot(x, z) < 18) continue;
    m.makeScale(1, 0.7 + Math.random() * 0.7, 1).setPosition(x, 1.8, z);
    snags.setMatrixAt(placed++, m);
  }
  snags.count = placed;
  snags.castShadow = true;
  group.add(snags);

  // ---- cover: shipping containers + a wrecked hauler (axis-aligned colliders)
  const container = (x: number, z: number, rotY: number, color: number) => {
    const long = 6.2;
    const wide = 2.4;
    const body = new THREE.Mesh(new THREE.BoxGeometry(long, 2.6, wide), new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.35 }));
    body.position.set(x, 1.3, z);
    body.rotation.y = rotY;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    const rib = new THREE.Mesh(new THREE.BoxGeometry(long + 0.05, 0.5, wide + 0.05), new THREE.MeshStandardMaterial({ color: 0x232830, roughness: 0.8, metalness: 0.3 }));
    rib.position.set(x, 2.1, z);
    rib.rotation.y = rotY;
    group.add(rib);
    const alongX = Math.abs(Math.cos(rotY)) > 0.5;
    colliders.push({ kind: 'box', x, z, hx: alongX ? long / 2 : wide / 2, hz: alongX ? wide / 2 : long / 2, r: 0, top: 2.6 });
  };
  container(-17, 3, 0, 0x6a3f2e);
  container(16, 6, Math.PI / 2, 0x2e4a5e);
  container(2, 19, 0, 0x4c5a3a);
  container(-6, -14.5, Math.PI / 2, 0x5e5330);
  container(19.5, -10, Math.PI / 2, 0x39424f);

  // wrecked hauler: cab + tipped bed
  const wreckMat = new THREE.MeshStandardMaterial({ color: 0x4a3a30, roughness: 0.85, metalness: 0.25 });
  const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 2.4), wreckMat);
  cab.position.set(-2, 0.8, -19);
  cab.castShadow = true;
  group.add(cab);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.4, 2.5), wreckMat);
  bed.position.set(-6.2, 0.9, -19.4);
  bed.rotation.z = 0.22;
  bed.castShadow = true;
  group.add(bed);
  colliders.push({ kind: 'box', x: -4.2, z: -19.2, hx: 4.4, hz: 1.6, r: 0, top: 1.7 });

  // perimeter fence posts stay on the pad edge
  const postMat = new THREE.MeshStandardMaterial({ color: 0x232c3a, roughness: 0.7, metalness: 0.6 });
  const postGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.4, 4);
  const posts = new THREE.InstancedMesh(postGeo, postMat, 28);
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    m.makeTranslation(Math.cos(a) * 15.5, 0.7, Math.sin(a) * 15.5);
    posts.setMatrixAt(i, m);
  }
  group.add(posts);

  return {
    group,
    ground,
    colliders,
    spawnRingRadius: 50,
    // drones funnel in from the two open ends of the corridor (±z bearings)
    spawnAngle: () => (Math.random() < 0.5 ? Math.PI / 2 : -Math.PI / 2) + (Math.random() - 0.5) * 0.6,
  };
}
