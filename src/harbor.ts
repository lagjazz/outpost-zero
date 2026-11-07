// Glacier Harbor (Level 6, Sub-Zero Aurora): Ice-locked naval port, trapped nuclear icebreaker ship,
// harbor gantry cranes, radar dome, and glowing sea-ice fissures.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

const steel = (c: number, m = 0.72, r = 0.45) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const iceMat = (c: number, r = 0.25, m = 0.35) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });

export function buildHarbor(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // Frozen harbor sea-ice sheet + concrete pier apron
  const ground = new THREE.Mesh(new THREE.CircleGeometry(125, 48), iceMat(0x1f364d, 0.32, 0.35));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const pierApron = new THREE.Mesh(
    new THREE.CircleGeometry(28, 36),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.92, metalness: 0.1 }),
  );
  pierApron.rotation.x = -Math.PI / 2;
  pierApron.position.y = 0.02;
  pierApron.receiveShadow = true;
  group.add(pierApron);

  const pad = new THREE.Mesh(
    new THREE.CircleGeometry(16, 32),
    new THREE.MeshStandardMaterial({ color: 0x283548, roughness: 0.95 }),
  );
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.04;
  pad.receiveShadow = true;
  group.add(pad);

  // Glowing sub-surface aurora fissures across the sea ice
  const fissureMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#2dd4bf'),
    transparent: true,
    opacity: 0.42,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.2;
    const dist = 24 + (i % 3) * 8;
    const crack = new THREE.Mesh(new THREE.PlaneGeometry(14, 0.45), fissureMat);
    crack.rotation.x = -Math.PI / 2;
    crack.rotation.z = a + 0.5;
    crack.position.set(Math.cos(a) * dist, 0.03, Math.sin(a) * dist);
    group.add(crack);
  }

  // ---- Trapped Nuclear Icebreaker Ship (North-West berth) ----
  const ship = new THREE.Group();
  const hullRed = steel(0x7f1d1d, 0.55, 0.5);
  const hullDark = steel(0x1e293b, 0.65, 0.45);
  const deckWhite = steel(0xcbd5e1, 0.4, 0.6);

  const lowerHull = new THREE.Mesh(new THREE.BoxGeometry(28, 4.5, 7.6), hullRed);
  lowerHull.position.y = 2.25;
  lowerHull.castShadow = true;
  lowerHull.receiveShadow = true;
  ship.add(lowerHull);

  const upperHull = new THREE.Mesh(new THREE.BoxGeometry(29.5, 2.4, 8.0), hullDark);
  upperHull.position.y = 5.4;
  upperHull.castShadow = true;
  ship.add(upperHull);

  // Icebreaker angled bow wedge
  const bow = new THREE.Mesh(new THREE.ConeGeometry(5.6, 8.5, 4), hullRed);
  bow.rotation.z = -Math.PI / 2;
  bow.rotation.x = Math.PI / 4;
  bow.position.set(18, 3.6, 0);
  ship.add(bow);

  // Superstructure bridge tower
  const bridgeBase = new THREE.Mesh(new THREE.BoxGeometry(8.5, 5.2, 6.4), deckWhite);
  bridgeBase.position.set(-4, 9.1, 0);
  bridgeBase.castShadow = true;
  ship.add(bridgeBase);

  const bridgeWings = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.2, 8.8), deckWhite);
  bridgeWings.position.set(-2.5, 12.6, 0);
  ship.add(bridgeWings);

  // Glowing bridge windows
  const winGlow = new THREE.MeshStandardMaterial({ color: 0x082f49, emissive: new THREE.Color('#38bdf8'), emissiveIntensity: 2.2 });
  const winStrip = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.7, 8.9), winGlow);
  winStrip.position.set(-2.5, 12.8, 0);
  ship.add(winStrip);

  // Twin nuclear icebreaker smokestacks + radar mast
  for (const sz of [-1.6, 1.6]) {
    const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.95, 4.2, 10), steel(0xf59e0b, 0.5, 0.5));
    stack.position.set(-6.2, 13.5, sz);
    ship.add(stack);
  }
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.35, 6.5, 8), hullDark);
  mast.position.set(-3.5, 16.5, 0);
  ship.add(mast);

  ship.position.set(-22, 0, -24);
  ship.rotation.y = 0.38;
  group.add(ship);
  colliders.push({ kind: 'box', x: -22, z: -24, hx: 14.5, hz: 4.5, r: 0, top: 14 });

  const shipLamp = new THREE.PointLight(new THREE.Color('#38bdf8'), 48, 32, 1.6);
  shipLamp.position.set(-18, 12, -18);
  group.add(shipLamp);

  // ---- Twin Harbor Gantry Cranes (East & South-East docks) ----
  const buildCrane = (x: number, z: number, rotY: number) => {
    const crane = new THREE.Group();
    const craneMat = steel(0xd97706, 0.65, 0.45);
    const legGeo = new THREE.BoxGeometry(0.7, 11, 0.7);
    for (const [lx, lz] of [[-2.4, -2.2], [2.4, -2.2], [-2.4, 2.2], [2.4, 2.2]] as const) {
      const leg = new THREE.Mesh(legGeo, craneMat);
      leg.position.set(lx, 5.5, lz);
      leg.castShadow = true;
      crane.add(leg);
    }
    const cab = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.2, 5.2), steel(0x334155, 0.7, 0.4));
    cab.position.y = 11.5;
    crane.add(cab);
    const boom = new THREE.Mesh(new THREE.BoxGeometry(16, 0.9, 1.4), craneMat);
    boom.position.set(4.5, 13.2, 0);
    boom.rotation.z = 0.12;
    crane.add(boom);
    crane.position.set(x, 0, z);
    crane.rotation.y = rotY;
    group.add(crane);
    colliders.push({ kind: 'box', x, z, hx: 2.8, hz: 2.6, r: 0, top: 12 });
  };
  buildCrane(23, -10, -0.5);
  buildCrane(18, 19, 2.2);

  // ---- Coastal Radar Dome & Comms Bunker (South-West) ----
  const radarBunker = new THREE.Group();
  const baseCyl = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 3.8, 12), steel(0x3b4859, 0.5, 0.6));
  baseCyl.position.y = 1.9;
  baseCyl.castShadow = true;
  radarBunker.add(baseCyl);
  const radome = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.8, 1),
    new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.35, metalness: 0.2, flatShading: true }),
  );
  radome.position.y = 5.4;
  radome.castShadow = true;
  radarBunker.add(radome);
  radarBunker.position.set(-23, 0, 17);
  group.add(radarBunker);
  colliders.push({ kind: 'cyl', x: -23, z: 17, hx: 0, hz: 0, r: 4.5, top: 8.5 });

  // ---- Cargo Containers & Ice Blocks for Cover ----
  const addContainer = (x: number, z: number, rotY: number, color: number) => {
    const c = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(6.2, 2.6, 2.5), steel(color, 0.45, 0.65));
    box.position.y = 1.3;
    box.castShadow = true;
    box.receiveShadow = true;
    c.add(box);
    const snow = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.18, 2.3), iceMat(0xcfe3f5, 0.8, 0.1));
    snow.position.y = 2.65;
    c.add(snow);
    c.position.set(x, 0, z);
    c.rotation.y = rotY;
    group.add(c);
    const alongX = Math.abs(Math.cos(rotY)) > 0.5;
    colliders.push({ kind: 'box', x, z, hx: alongX ? 3.1 : 1.3, hz: alongX ? 1.3 : 3.1, r: 0, top: 2.7 });
  };
  addContainer(4, -19, 0, 0x1e40af);
  addContainer(16, 4, Math.PI / 2, 0x991b1b);
  addContainer(-6, 21, 0, 0x065f46);

  // Jagged Perimeter Icebergs (InstancedMesh)
  const bergGeo = new THREE.ConeGeometry(6.5, 18, 6);
  const bergMat = new THREE.MeshStandardMaterial({
    color: 0x7dd3fc,
    roughness: 0.3,
    metalness: 0.25,
    flatShading: true,
  });
  const bergCount = 26;
  const bergs = new THREE.InstancedMesh(bergGeo, bergMat, bergCount);
  const m = new THREE.Matrix4();
  const pos = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const scl = new THREE.Vector3();
  for (let i = 0; i < bergCount; i++) {
    const a = (i / bergCount) * Math.PI * 2;
    const r = 52 + (i % 3) * 4;
    const hScale = 0.75 + (i % 4) * 0.28;
    const wScale = 0.8 + (i % 3) * 0.25;
    pos.set(Math.cos(a) * r, 7 * hScale - 1, Math.sin(a) * r);
    quat.setFromEuler(new THREE.Euler((i % 2) * 0.12, a * 1.7, ((i + 1) % 3) * 0.1));
    scl.set(wScale, hScale, wScale);
    m.compose(pos, quat, scl);
    bergs.setMatrixAt(i, m);
    colliders.push({ kind: 'cyl', x: pos.x, z: pos.z, hx: 0, hz: 0, r: 4.2 * wScale, top: 15 * hScale });
  }
  bergs.instanceMatrix.needsUpdate = true;
  bergs.computeBoundingSphere();
  group.add(bergs);

  return {
    group,
    ground,
    colliders,
    spawnRingRadius: 50,
    spawnAngle: () => Math.random() * Math.PI * 2,
  };
}
