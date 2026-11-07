// Geothermal Biolab (Level 7, Emerald Mist): Geodesic glass biodomes, hyperboloid cooling towers,
// glowing emerald thermal pools, and pressurized cryo-pipelines.
import * as THREE from 'three';
import { isSoftwareGl } from './engine';
import type { Collider } from './state';
import type { WorldBundle } from './world';

const metal = (c: number, m = 0.75, r = 0.35) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });

export function buildBiolab(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // Volcanic moss-slate terrain + concrete research compound pad
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(125, 48),
    new THREE.MeshStandardMaterial({ color: 0x1a2e29, roughness: 0.95, metalness: 0.05 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const pad = new THREE.Mesh(
    new THREE.CircleGeometry(18, 36),
    new THREE.MeshStandardMaterial({ color: 0x2a3b3c, roughness: 0.9 }),
  );
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.02;
  pad.receiveShadow = true;
  group.add(pad);

  // ---- Glowing Geothermal Emerald Pools ----
  const poolMat = new THREE.MeshStandardMaterial({
    color: 0x064e3b,
    emissive: new THREE.Color('#10b981'),
    emissiveIntensity: 1.35,
    roughness: 0.2,
    metalness: 0.3,
  });
  const poolRimMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
  for (const [px, pz, pr] of [[-18, -16, 5.2], [20, 14, 4.6], [-21, 16, 4.0]] as const) {
    const pool = new THREE.Mesh(new THREE.CircleGeometry(pr, 24), poolMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(px, 0.03, pz);
    group.add(pool);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(pr, 0.35, 8, 24), poolRimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(px, 0.15, pz);
    group.add(rim);
  }

  // ---- 3 Geodesic Glass Biodomes ----
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x6ee7b7,
    roughness: 0.15,
    metalness: 0.1,
    transmission: isSoftwareGl ? 0 : 0.75,
    transparent: true,
    opacity: isSoftwareGl ? 0.38 : 0.85,
    ior: 1.45,
    depthWrite: false,
  });
  const frameMat = metal(0x475569, 0.85, 0.3);
  const coreFloraMat = new THREE.MeshStandardMaterial({
    color: 0x047857,
    emissive: new THREE.Color('#34d399'),
    emissiveIntensity: 2.0,
    roughness: 0.4,
  });

  const buildBiodome = (x: number, z: number, radius: number) => {
    const d = new THREE.Group();
    const baseWall = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius + 0.4, 1.4, 16), metal(0x334155, 0.6, 0.5));
    baseWall.position.y = 0.7;
    baseWall.castShadow = true;
    d.add(baseWall);

    // Interior bioluminescent crystal-tree specimen
    const specimen = new THREE.Mesh(new THREE.ConeGeometry(radius * 0.42, radius * 1.35, 7), coreFloraMat);
    specimen.position.y = 1.2 + radius * 0.5;
    d.add(specimen);

    // Outer glass hemisphere + wireframe ribs
    const domeGeo = new THREE.IcosahedronGeometry(radius, 1);
    const domeGlass = new THREE.Mesh(domeGeo, glassMat);
    domeGlass.position.y = 1.4;
    domeGlass.renderOrder = 2;
    d.add(domeGlass);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(domeGeo),
      new THREE.LineBasicMaterial({ color: 0x94a3b8 }),
    );
    wire.position.y = 1.4;
    d.add(wire);

    d.position.set(x, 0, z);
    group.add(d);
    colliders.push({ kind: 'cyl', x, z, hx: 0, hz: 0, r: radius + 0.3, top: radius + 1.4 });
  };

  buildBiodome(-22, -2, 6.2);
  buildBiodome(22, -14, 5.6);
  buildBiodome(4, 24, 5.4);

  const bioLight = new THREE.PointLight(new THREE.Color('#34d399'), 45, 30, 1.6);
  bioLight.position.set(-22, 5, -2);
  group.add(bioLight);

  // ---- Twin Geothermal Hyperboloid Cooling Towers (North) ----
  for (const tx of [-9, 11]) {
    const tower = new THREE.Group();
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(3.8, 5.4, 9, 16), metal(0x475569, 0.3, 0.85));
    lower.position.y = 4.5;
    lower.castShadow = true;
    tower.add(lower);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 3.8, 6, 16), metal(0x64748b, 0.3, 0.85));
    upper.position.y = 12;
    upper.castShadow = true;
    tower.add(upper);
    const glowRing = new THREE.Mesh(
      new THREE.TorusGeometry(4.45, 0.16, 8, 24),
      new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color('#10b981'), emissiveIntensity: 2.2 }),
    );
    glowRing.rotation.x = Math.PI / 2;
    glowRing.position.y = 15;
    tower.add(glowRing);
    tower.position.set(tx, 0, -27);
    group.add(tower);
    colliders.push({ kind: 'cyl', x: tx, z: -27, hx: 0, hz: 0, r: 5.2, top: 15 });
  }

  // ---- Pressurized Cryo-Tanks for Mid-Field Cover ----
  for (const [cx, cz, rot] of [[-13, 12, 0.4], [15, 3, -0.5], [14, -4, 0.2], [-4, -17, 1.1]] as const) {
    const pod = new THREE.Group();
    const tank = new THREE.Mesh(new THREE.CapsuleGeometry(1.1, 3.2, 6, 12), metal(0x94a3b8, 0.8, 0.25));
    tank.rotation.z = Math.PI / 2;
    tank.position.y = 1.4;
    tank.castShadow = true;
    pod.add(tank);
    const saddle1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 2.4), metal(0x1e293b));
    saddle1.position.set(-1.1, 0.6, 0);
    pod.add(saddle1);
    const saddle2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.2, 2.4), metal(0x1e293b));
    saddle2.position.set(1.1, 0.6, 0);
    pod.add(saddle2);
    pod.position.set(cx, 0, cz);
    pod.rotation.y = rot;
    group.add(pod);
    colliders.push({ kind: 'cyl', x: cx, z: cz, hx: 0, hz: 0, r: 2.4, top: 2.6 });
  }

  // ---- Perimeter Basalt Cliffs (InstancedMesh) ----
  const cliffGeo = new THREE.DodecahedronGeometry(6.5, 0);
  const cliffMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9, flatShading: true });
  const cliffCount = 28;
  const cliffs = new THREE.InstancedMesh(cliffGeo, cliffMat, cliffCount);
  const m = new THREE.Matrix4();
  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const scl = new THREE.Vector3();
  for (let i = 0; i < cliffCount; i++) {
    const a = (i / cliffCount) * Math.PI * 2;
    const r = 53 + (i % 3) * 3;
    const sy = 1.2 + (i % 4) * 0.45;
    pos.set(Math.cos(a) * r, 4.5 * sy, Math.sin(a) * r);
    quat.setFromEuler(new THREE.Euler(i * 0.3, a, 0));
    scl.set(1.2, sy, 1.1);
    m.compose(pos, quat, scl);
    cliffs.setMatrixAt(i, m);
    colliders.push({ kind: 'cyl', x: pos.x, z: pos.z, hx: 0, hz: 0, r: 5.5, top: 14 });
  }
  cliffs.instanceMatrix.needsUpdate = true;
  cliffs.computeBoundingSphere();
  group.add(cliffs);

  return {
    group,
    ground,
    colliders,
    spawnRingRadius: 50,
    spawnAngle: () => Math.random() * Math.PI * 2,
  };
}
