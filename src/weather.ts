// Blizzard snow particles that follow the player and thicken with intensity.
import * as THREE from 'three';
import { WEATHER } from './config';

function flakeTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(16, 16, 1, 16, 16, 15);
  g.addColorStop(0, 'rgba(235,244,255,0.95)');
  g.addColorStop(1, 'rgba(235,244,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}

export class Weather {
  private points: THREE.Points;
  private vel: Float32Array; // per-flake fall speed
  private positions: Float32Array;

  constructor(private scene: THREE.Scene) {
    const n = WEATHER.snowCount;
    const geo = new THREE.BufferGeometry();
    this.positions = new Float32Array(n * 3);
    this.vel = new Float32Array(n);
    const B = WEATHER.snowBox;
    for (let i = 0; i < n; i++) {
      this.positions[i * 3] = (Math.random() - 0.5) * B * 2;
      this.positions[i * 3 + 1] = Math.random() * 26;
      this.positions[i * 3 + 2] = (Math.random() - 0.5) * B * 2;
      this.vel[i] = 1.5 + Math.random() * 3.5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    const mat = new THREE.PointsMaterial({
      map: flakeTexture(),
      color: new THREE.Color('#dce8f7'),
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  update(dt: number, time: number, center: THREE.Vector3, intensity: number): void {
    const B = WEATHER.snowBox;
    const windX = Math.sin(time * 0.25) * 3 + 2;
    const windZ = Math.cos(time * 0.19) * 2.4 - 1.2;
    const fall = 1 + intensity * 2.4;
    for (let i = 0; i < this.vel.length; i++) {
      const ix = i * 3;
      this.positions[ix] += (windX * intensity * 2 + 0.4) * dt;
      this.positions[ix + 1] -= this.vel[i] * fall * dt;
      this.positions[ix + 2] += (windZ * intensity * 2) * dt;
      if (this.positions[ix + 1] < 0) this.positions[ix + 1] += 26;
      const rx = this.positions[ix] - center.x;
      const rz = this.positions[ix + 2] - center.z;
      if (rx > B) this.positions[ix] -= B * 2;
      else if (rx < -B) this.positions[ix] += B * 2;
      if (rz > B) this.positions[ix + 2] -= B * 2;
      else if (rz < -B) this.positions[ix + 2] += B * 2;
    }
    (this.points.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (this.points.material as THREE.PointsMaterial).opacity = 0.5 + intensity * 0.5;
    (this.points.material as THREE.PointsMaterial).size = 0.12 + intensity * 0.1;
  }
}
