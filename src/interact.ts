// F-key facility interaction: find what the player is facing / near.
import * as THREE from 'three';
import type { Interactable } from './state';

const _to = new THREE.Vector3();

export class InteractSystem {
  items: Interactable[];
  private byId = new Map<string, Interactable>();

  constructor(items: Interactable[]) {
    this.items = items;
    for (const it of items) this.byId.set(it.id, it);
  }

  add(it: Interactable): void {
    if (this.byId.has(it.id)) return;
    this.items.push(it);
    this.byId.set(it.id, it);
  }

  remove(id: string): void {
    const it = this.byId.get(id);
    if (!it) return;
    this.byId.delete(id);
    const i = this.items.indexOf(it);
    if (i >= 0) this.items.splice(i, 1);
  }

  findFocus(camPos: THREE.Vector3, facing: THREE.Vector3, range: number, time: number): Interactable | null {
    let best: Interactable | null = null;
    let bestScore = -Infinity;
    for (const it of this.items) {
      if (it.readyAt > time) continue;
      _to.subVectors(it.pos, camPos);
      const dist = _to.length();
      if (dist > range || dist < 1e-5) continue;
      const dot = _to.multiplyScalar(1 / dist).dot(facing);
      // right next to a facility, looking down at it should still focus it
      if (dot < (dist < 1.6 ? -0.25 : 0.35)) continue;
      const score = dot * 2 - dist * 0.15;
      if (score > bestScore) {
        bestScore = score;
        best = it;
      }
    }
    return best;
  }
}
