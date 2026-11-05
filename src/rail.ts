// Frozen Rail Yard (Level 3, dusk): parallel tracks, parked freight cars, warehouse, gantry.
import * as THREE from 'three';
import type { Collider } from './state';
import type { WorldBundle } from './world';

const steel = (c: number, m = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: m });

export function buildRailYard(scene: THREE.Scene): WorldBundle {
  const colliders: Collider[] = [];
  const group = new THREE.Group();
  scene.add(group);

  // ballast ground + packed pad
  const ground = new THREE.Mesh(new THREE.CircleGeometry(120, 48), new THREE.MeshStandardMaterial({ color: 0x33353d, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);
  const pad = new THREE.Mesh(new THREE.CircleGeometry(16, 32), new THREE.MeshStandardMaterial({ color: 0x3d4049, roughness: 1 }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = 0.02;
  pad.receiveShadow = true;
  group.add(pad);

  // four track rows: sleeper band + twin rails
  const sleeperMat = new THREE.MeshStandardMaterial({ color: 0x26282e, roughness: 1 });
  const railMat = steel(0x8b93a2, 0.85);
  const ROWS = [-17, -23, 13, 19];
  for (const z of ROWS) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(84, 0.1, 2.2), sleeperMat);
    band.position.set(0, 0.05, z);
    band.receiveShadow = true;
    group.add(band);
    for (const dz of [-0.75, 0.75]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(84, 0.14, 0.12), railMat);
      rail.position.set(0, 0.17, z + dz);
      group.add(rail);
    }
  }

  // parked freight cars (AABB cover)
  const carColors = [0x5d3a2e, 0x37455a, 0x4a4230, 0x44505e];
  ROWS.forEach((z, ri) => {
    for (const x of [-24, -10, 4, 18]) {
      const car = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(11, 3.2, 2.6), steel(carColors[(ri + (x > 0 ? 1 : 0)) % 4], 0.35));
      body.position.y = 2.1;
      body.castShadow = true;
      body.receiveShadow = true;
      car.add(body);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(11.2, 0.2, 2.8), steel(0x232830, 0.4));
      roof.position.y = 3.8;
      car.add(roof);
      for (const bx of [-4, 4]) {
        const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.7, 2.2), steel(0x1c212a, 0.7));
        bogie.position.set(bx, 0.55, 0);
        car.add(bogie);
      }
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(11.05, 0.3, 0.05), new THREE.MeshStandardMaterial({ color: 0x111, emissive: new THREE.Color('#f59e0b'), emissiveIntensity: 0.5 }));
      stripe.position.set(0, 2.6, 1.31);
      car.add(stripe);
      car.position.set(x, 0, z);
      group.add(car);
      colliders.push({ kind: 'box', x, z, hx: 5.6, hz: 1.5, r: 0, top: 4 });
    }
  });

  // one wrecked car tipped on its side
  const wreck = new THREE.Mesh(new THREE.BoxGeometry(10, 2.8, 2.6), steel(0x4a3a30, 0.3));
  wreck.position.set(-31, 1.4, 3);
  wreck.rotation.z = 1.25;
  wreck.rotation.y = 0.4;
  wreck.castShadow = true;
  group.add(wreck);
  colliders.push({ kind: 'box', x: -31, z: 3, hx: 4, hz: 2.2, r: 0, top: 2.8 });

  // warehouse on the east edge
  const wh = new THREE.Group();
  const walls = new THREE.Mesh(new THREE.BoxGeometry(16, 7, 12), steel(0x33404f, 0.4));
  walls.position.y = 3.5;
  walls.castShadow = true;
  walls.receiveShadow = true;
  wh.add(walls);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(16.6, 0.5, 12.6), steel(0x202936, 0.5));
  roof.position.y = 7.2;
  wh.add(roof);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 4.2), new THREE.MeshStandardMaterial({ color: 0x0c1119 }));
  door.position.set(-8.05, 2.1, 0);
  door.rotation.y = Math.PI / 2;
  wh.add(door);
  wh.position.set(32, 0, -6);
  group.add(wh);
  colliders.push({ kind: 'box', x: 32, z: -6, hx: 8, hz: 6, r: 0, top: 7 });
  const whLamp = new THREE.PointLight(new THREE.Color('#ffc98a'), 45, 26, 1.6);
  whLamp.position.set(23, 5, -6);
  group.add(whLamp);

  // gantry over the north tracks
  for (const gz of [-20, 20]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 9, 8), steel(0x44505e));
    post.position.set(26, 4.5, gz);
    post.castShadow = true;
    group.add(post);
    colliders.push({ kind: 'cyl', x: 26, z: gz, hx: 0, hz: 0, r: 0.5, top: 9 });
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 41), steel(0x39424f));
  beam.position.set(26, 9.1, 0);
  group.add(beam);

  // telegraph poles along the north
  for (let i = 0; i < 6; i++) {
    const x = -30 + i * 12;
    const pole = new THREE.Mesh(new THREE.BoxGeometry(0.26, 7, 0.26), steel(0x2c2118, 0.15));
    pole.position.set(x, 3.5, 27);
    pole.castShadow = true;
    group.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 0.14), steel(0x2c2118, 0.15));
    arm.position.set(x, 6.4, 27);
    group.add(arm);
  }

  // dusk floodlight masts
  for (const mx of [-18, 18]) {
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 10, 8), steel(0x3b4657));
    mast.position.set(mx, 5, 0);
    group.add(mast);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.5), steel(0x232c3a));
    head.position.set(mx, 10, 0);
    group.add(head);
    const lamp = new THREE.PointLight(new THREE.Color('#ffbd80'), 55, 34, 1.6);
    lamp.position.set(mx, 9.6, 0);
    group.add(lamp);
  }

  // distant hills silhouette
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x141118, roughness: 1, fog: true });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.3;
    const r = 140 + Math.random() * 50;
    const h = 30 + Math.random() * 40;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(30 + Math.random() * 24, h, 6), hillMat);
    cone.position.set(Math.cos(a) * r, h / 2 - 5, Math.sin(a) * r);
    cone.rotation.y = Math.random() * Math.PI;
    group.add(cone);
  }

  return { group, ground, colliders, spawnRingRadius: 50, spawnAngle: () => Math.random() * Math.PI * 2 };
}
