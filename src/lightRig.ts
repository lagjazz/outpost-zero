// ============================================================
// lightRig.ts — a constant light budget for a forward renderer.
//
// All five level maps are built up front and only the active one is visible, so
// the world contains ~40 point lights at once. Two costs follow from that:
//
//  1. three.js re-keys a shader program whenever the light COUNT in the scene
//     changes. A hidden subtree is not counted, so toggling a map group
//     (startLevel), spawning an airdrop pod (waves.ts adds a PointLight to it)
//     or removing one re-keys every material in the game: a multi-second
//     freeze, worst in the first minutes of a run while states are still new.
//  2. Every light in the graph is uploaded to every material and looped over
//     per fragment, so a map the player cannot see still costs fragment work.
//
// The rig keeps a FIXED number of PointLights in the scene forever and feeds
// them the N nearest fixtures each frame. Fixtures stay live objects — the
// beacon pulse and searchlight code keeps mutating them — they are simply not
// children of the scene any more, so they cannot change the light count.
//
// Because the five maps occupy the same ground, a fixture is only a candidate
// while it is visible in the graph: a lamp belonging to a hidden map must not
// light the active one.
// ============================================================

import * as THREE from 'three';

interface Fixture {
  light: THREE.PointLight;
  /** Original parent, kept so lights authored inside moving groups (airdrop
   *  pods, vehicle interiors) still follow that group's transform. */
  parent: THREE.Object3D | null;
}

export class LightRig {
  readonly pool: THREE.PointLight[] = [];
  fixtures: Fixture[] = [];
  budget = 0;
  active = 0;

  private readonly _cands: { f: Fixture; d2: number }[] = [];
  private _tmp = new THREE.Vector3();
  private _frame = 0;

  constructor(private scene: THREE.Scene, budget: number) {
    this.setBudget(budget);
  }

  /** Move every point light currently in the graph into the fixture library.
   *  Call once at boot, BEFORE the prewarm compile, so the programs are built
   *  for the pool size and never need recompiling. traverse() ignores
   *  visibility on purpose: lights inside hidden map groups and hidden
   *  viewmodels are exactly the ones that would otherwise change the count. */
  collect(): number {
    const found: THREE.PointLight[] = [];
    this.scene.traverse((o) => {
      if ((o as THREE.PointLight).isPointLight && !this.pool.includes(o as THREE.PointLight)) {
        found.push(o as THREE.PointLight);
      }
    });
    for (const light of found) {
      const parent = light.parent;
      if (parent) parent.remove(light);
      this.fixtures.push({ light, parent: parent && parent !== this.scene ? parent : null });
    }
    return this.fixtures.length;
  }

  /** Resize the pool. Only on a deliberate quality/budget change, which
   *  recompiles anyway; never mid-fight. */
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

  /** Adopt point lights added to the graph after boot (airdrop pods) and drop
   *  fixtures whose parent left the scene, so the count can never drift. */
  private sweep(): void {
    this.scene.traverse((o) => {
      const l = o as THREE.PointLight;
      if (!l.isPointLight || this.pool.includes(l)) return;
      if (this.fixtures.some((f) => f.light === l)) return;
      const parent = l.parent;
      if (parent) parent.remove(l);
      this.fixtures.push({ light: l, parent: parent && parent !== this.scene ? parent : null });
    });
    this.fixtures = this.fixtures.filter((f) => this.connected(f));
  }

  /** Is the fixture's original parent still part of the scene graph? A pod that
   *  was picked up and removed must stop lighting the world. */
  private connected(f: Fixture): boolean {
    if (!f.parent) return true;
    let o: THREE.Object3D | null = f.parent;
    while (o) {
      if (o === this.scene) return true;
      o = o.parent;
    }
    return false;
  }

  /** A fixture lights the scene only while its graph is visible (per-map
   *  visibility, hidden props, viewmodels). */
  private shown(f: Fixture): boolean {
    if (!f.light.visible) return false;
    let o: THREE.Object3D | null = f.parent;
    while (o) {
      if (!o.visible) return false;
      o = o.parent;
    }
    return true;
  }

  private worldPos(f: Fixture, out: THREE.Vector3): THREE.Vector3 {
    if (f.parent) out.copy(f.light.position).applyMatrix4(f.parent.matrixWorld);
    else out.copy(f.light.position);
    return out;
  }

  /** Feed the pool the fixtures that can reach the camera. */
  update(camPos: THREE.Vector3): void {
    if ((this._frame = (this._frame + 1) % 20) === 0) this.sweep();
    const cands = this._cands;
    cands.length = 0;
    for (const f of this.fixtures) {
      const L = f.light;
      if (L.intensity <= 0 || !this.shown(f)) continue;
      const d2 = this.worldPos(f, this._tmp).distanceToSquared(camPos);
      const reach = (L.distance || 0) + 8; // three fades a light to 0 at L.distance
      if (d2 > reach * reach) continue;
      cands.push({ f, d2 });
    }
    cands.sort((a, b) => a.d2 - b.d2);

    for (let i = 0; i < this.pool.length; i++) {
      const slot = this.pool[i];
      const c = cands[i];
      if (!c) {
        slot.intensity = 0; // dark slot, but still counted: that is the point
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

  /** Measure-only: hand every fixture back to the scene, restoring the old
   *  behaviour (every map's lights live in the graph, count changes with
   *  visibility). Used to A/B the cost of a fixed light budget. */
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
