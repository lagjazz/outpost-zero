// ============================================================
// lightRig.ts — a constant light budget for a forward renderer.
// Zero per-frame scene.traverse overhead: all fixtures are collected at boot
// or registered explicitly when dynamic pods spawn.
// ============================================================

import * as THREE from 'three';

interface Fixture {
  light: THREE.PointLight;
  parent: THREE.Object3D | null;
}

export class LightRig {
  readonly pool: THREE.PointLight[] = [];
  fixtures: Fixture[] = [];
  budget = 0;
  active = 0;

  private readonly _cands: { f: Fixture; d2: number }[] = [];
  private _tmp = new THREE.Vector3();

  constructor(private scene: THREE.Scene, budget: number) {
    this.setBudget(budget);
  }

  /** Move every point light currently in the graph into the fixture library. */
  collect(): number {
    const found: THREE.PointLight[] = [];
    this.scene.traverse((o) => {
      if ((o as THREE.PointLight).isPointLight && !this.pool.includes(o as THREE.PointLight)) {
        found.push(o as THREE.PointLight);
      }
    });
    for (const light of found) {
      if (this.fixtures.some((f) => f.light === light)) continue;
      const parent = light.parent;
      if (parent) parent.remove(light);
      this.fixtures.push({ light, parent: parent && parent !== this.scene ? parent : null });
    }
    return this.fixtures.length;
  }

  /** Register a dynamic PointLight (e.g. airdrop pod or sub-objective beacon) without scene traversal. */
  register(light: THREE.PointLight, parentObj?: THREE.Object3D): void {
    if (this.pool.includes(light) || this.fixtures.some((f) => f.light === light)) return;
    const parent = parentObj ?? light.parent;
    if (light.parent) light.parent.remove(light);
    this.fixtures.push({ light, parent: parent && parent !== this.scene ? parent : null });
  }

  setBudget(n: number): void {
    n = Math.max(1, Math.floor(n));
    while (this.pool.length < n) {
      const l = new THREE.PointLight(0xffffff, 0, 0, 2);
      l.name = `lightRigPool${this.pool.length}`;
      this.scene.add(l);
      this.pool.push(l);
    }
    while (this.pool.length > n) {
      const l = this.pool.pop();
      if (l) this.scene.remove(l);
    }
    this.budget = n;
  }

  private shown(f: Fixture): boolean {
    if (!f.light.visible) return false;
    let o: THREE.Object3D | null = f.parent;
    while (o) {
      if (!o.visible) return false;
      if (o === this.scene) return true;
      o = o.parent;
    }
    return f.parent === null;
  }

  private worldPos(f: Fixture, out: THREE.Vector3): THREE.Vector3 {
    if (f.parent) out.copy(f.light.position).applyMatrix4(f.parent.matrixWorld);
    else out.copy(f.light.position);
    return out;
  }

  /** Feed the pool the fixtures that can reach the camera (zero GC allocations). */
  update(camPos: THREE.Vector3): void {
    const cands = this._cands;
    cands.length = 0;
    for (let i = 0; i < this.fixtures.length; i++) {
      const f = this.fixtures[i];
      const L = f.light;
      if (L.intensity <= 0 || !this.shown(f)) continue;
      const d2 = this.worldPos(f, this._tmp).distanceToSquared(camPos);
      const reach = (L.distance || 0) + 8;
      if (d2 > reach * reach) continue;
      cands.push({ f, d2 });
    }
    cands.sort((a, b) => a.d2 - b.d2);

    for (let i = 0; i < this.pool.length; i++) {
      const slot = this.pool[i];
      const c = cands[i];
      if (!c) {
        slot.intensity = 0;
        continue;
      }
      const L = c.f.light;
      slot.color.copy(L.color);
      slot.intensity = L.intensity;
      slot.distance = L.distance;
      slot.decay = L.decay;
      this.worldPos(c.f, slot.position);
    }
    this.active = Math.min(cands.length, this.pool.length);
  }

  release(): void {
    for (const f of this.fixtures) {
      if (f.parent) f.parent.add(f.light);
      else this.scene.add(f.light);
    }
    this.fixtures = [];
  }

  stats(): { fixtures: number; budget: number; active: number } {
    return { fixtures: this.fixtures.length, budget: this.budget, active: this.active };
  }
}
