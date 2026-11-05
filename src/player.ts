// First-person controller: WASD, sprint, mouse look, Q/E lean, ADS, collision.
import * as THREE from 'three';
import { PLAYER } from './config';
import type { Collider, PlayerState } from './state';

export class PlayerController {
  readonly keys: Record<string, boolean> = {};
  private recoilPitch = 0;
  private recoilYaw = 0;
  private trauma = 0;
  private mouseSens = 0.0021;
  adsHeld = false;

  constructor(
    private camera: THREE.PerspectiveCamera,
    private colliders: Collider[],
    private state: PlayerState,
  ) {}

  /** Swap the collider set (used when the mission map changes). */
  setColliders(list: Collider[]): void {
    this.colliders = list;
  }

  onKey(code: string, down: boolean): void {
    this.keys[code] = down;
  }

  onMouseMove(dx: number, dy: number): void {
    if (this.state.ads > 0.4) this.mouseSens = 0.0013;
    else this.mouseSens = 0.0021;
    this.state.yaw -= dx * this.mouseSens;
    this.state.pitch -= dy * this.mouseSens;
    this.state.pitch = THREE.MathUtils.clamp(this.state.pitch, -1.45, 1.45);
  }

  addRecoil(pitchRad: number, yawRad: number): void {
    this.recoilPitch += pitchRad;
    this.recoilYaw += (Math.random() - 0.5) * 2 * yawRad;
  }

  addTrauma(amount: number): void {
    this.trauma = Math.min(1, this.trauma + amount);
  }

  update(dt: number): void {
    const s = this.state;
    const k = this.keys;

    // ---- movement ----
    const fwdX = -Math.sin(s.yaw);
    const fwdZ = -Math.cos(s.yaw);
    const rightX = Math.cos(s.yaw);
    const rightZ = -Math.sin(s.yaw);
    let ix = 0;
    let iz = 0;
    if (k['KeyW']) {
      ix += fwdX;
      iz += fwdZ;
    }
    if (k['KeyS']) {
      ix -= fwdX;
      iz -= fwdZ;
    }
    if (k['KeyD']) {
      ix += rightX;
      iz += rightZ;
    }
    if (k['KeyA']) {
      ix -= rightX;
      iz -= rightZ;
    }
    const mag = Math.hypot(ix, iz);
    s.sprinting = !!k['ShiftLeft'] && mag > 0 && this.state.ads < 0.3;
    const speed = (s.sprinting ? PLAYER.sprintSpeed : PLAYER.walkSpeed) * (1 - 0.45 * s.ads);
    if (mag > 0) {
      ix /= mag;
      iz /= mag;
      s.vel.x += ix * PLAYER.accel * dt;
      s.vel.z += iz * PLAYER.accel * dt;
    }
    const planarSpeed = Math.hypot(s.vel.x, s.vel.z);
    const targetSpeed = mag > 0 ? speed : 0;
    if (planarSpeed > targetSpeed) {
      const damp = Math.exp(-PLAYER.damping * dt);
      s.vel.x *= damp;
      s.vel.z *= damp;
    }
    s.pos.x += s.vel.x * dt;
    s.pos.z += s.vel.z * dt;

    // ---- collision against colliders ----
    for (const c of this.colliders) {
      if (c.kind === 'cyl') {
        const dx = s.pos.x - c.x;
        const dz = s.pos.z - c.z;
        const d = Math.hypot(dx, dz);
        const min = c.r + PLAYER.radius;
        if (d < min && d > 0.0001) {
          const push = (min - d) / d;
          s.pos.x += dx * push;
          s.pos.z += dz * push;
        }
      } else {
        const dx = s.pos.x - c.x;
        const dz = s.pos.z - c.z;
        const ox = c.hx + PLAYER.radius - Math.abs(dx);
        const oz = c.hz + PLAYER.radius - Math.abs(dz);
        if (ox > 0 && oz > 0) {
          if (ox < oz) s.pos.x += dx > 0 ? ox : -ox;
          else s.pos.z += dz > 0 ? oz : -oz;
        }
      }
    }
    // plateau edge
    const r = Math.hypot(s.pos.x, s.pos.z);
    if (r > 52) {
      const scale = 52 / r;
      s.pos.x *= scale;
      s.pos.z *= scale;
    }

    // ---- lean & ADS smoothing ----
    s.leanTarget = (k['KeyE'] ? 1 : 0) + (k['KeyQ'] ? -1 : 0);
    if (s.ads > 0.6) s.leanTarget *= 0.35;
    s.lean = THREE.MathUtils.damp(s.lean, s.leanTarget, PLAYER.leanRate, dt);
    const adsTarget = this.adsHeld && !s.sprinting ? 1 : 0;
    s.ads = THREE.MathUtils.damp(s.ads, adsTarget, 12, dt);

    // ---- recoil recovery ----
    const recover = Math.exp(-7 * dt);
    this.recoilPitch *= recover;
    this.recoilYaw *= recover;
    this.trauma *= Math.exp(-2.2 * dt);

    // ---- apply to camera ----
    const bobT = performance.now() * 0.001;
    const moving = planarSpeed > 1.5;
    const bob = moving ? Math.sin(bobT * (s.sprinting ? 11 : 8)) * 0.035 * (s.ads > 0.5 ? 0.25 : 1) : 0;
    const shake = this.trauma * 0.02;
    this.camera.position.set(
      s.pos.x + rightX * s.lean * PLAYER.leanOffset,
      PLAYER.eyeHeight + bob + Math.sin(bobT * 31) * shake,
      s.pos.z + rightZ * s.lean * PLAYER.leanOffset,
    );
    this.camera.rotation.set(
      s.pitch + this.recoilPitch + Math.sin(bobT * 27) * shake,
      s.yaw + this.recoilYaw + Math.sin(bobT * 19) * shake * 0.7,
      -s.lean * PLAYER.leanAngle,
    );

    const fov = THREE.MathUtils.lerp(PLAYER.baseFov, PLAYER.adsFov, s.ads);
    if (Math.abs(this.camera.fov - fov) > 0.01) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
  }

  planarSpeed(): number {
    return Math.hypot(this.state.vel.x, this.state.vel.z);
  }

  eye(): THREE.Vector3 {
    return this.camera.position.clone();
  }
}
