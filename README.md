# Outpost Zero: Signal Hold (Five-Level Campaign — Night to Blood Dusk)

A browser-based 3D first-person horde-defense campaign built with **Three.js + TypeScript + Vite**. Hold five isolated radio outposts — from a snowy alpine pass to a ring-walled summit crater — while the distress signal transmits to orbit.

## Run

```bash
npm install
npm run dev        # dev server on http://localhost:4173
npm run build      # typecheck + production build to dist/
npm run preview    # serve dist/ on http://localhost:4173
```

## Campaign

Win a level's signal (0→100%) and an **ADVANCE** button carries you to the next outpost. Score, rank and upgrade credits persist across levels; each level refills vitals and ammo and resets signal/heat. Clear all five → campaign complete; die → signal lost, and **Redeploy** restarts the campaign from Level 1.

| # | Outpost | Time | New threats |
|---|---|---|---|
| 1 | Alpine Pass | Night | scouts, heavies, kamikazes |
| 2 | Canyon Relay | Night | **Warden** sniper · **Bomber** drone |
| 3 | Frozen Rail Yard | Dusk | **Crawler** ground unit · unlock **Vulcan SAM** |
| 4 | Dam Overlook | Dawn | **Colossus** armored fortress |
| 5 | Summit Crater | Blood Dusk | all classes, Colossus packs |

Each level retints the whole scene (sky/lights/fog), rearranges the outpost layout, scales drone HP ×1.0→1.75 and damage ×1.0→1.45, and runs its own wave table.

## Gameplay loop

- Start the distress signal — transmission progress is the win condition.
- Survive 5 escalating waves per level: wave 1 spawns immediately, the rest at 20/40/60/80% progress.
- Drones:
  - **Scout** — fast, sine-weaving, light lasers.
  - **Heavy** — frontal arc energy shield; break it from behind or hit the top rotor (×2).
  - **Kamikaze** — dives at you or the tower; kill it early or it detonates and spikes tower heat.
  - **Warden** — charges 1.4 s with a visible red aim line, then one high-damage sniper shot.
  - **Bomber** — hovers high and drops gravity bombs; blasts near the tower also heat it.
  - **Crawler** — six-legged ground sweeper, blocked by low cover, bites on contact.
  - **Colossus** — armored flying fortress; huge front shield, top weak spot (×2); homing rockets are the counter.
- The transmitter overheats under load; when OVERHEAT alarms, fight back to the console and **hold F** to reboot.
- Supply: ammo rack + med station (+40 HP / +15 armor, on cooldown) beside the shack, plus beacon-marked **airdrop pods** at 10/30/50/70/92% progress. Armor absorbs 60% of incoming damage until depleted.
- **Searchlight (T / F at the switch)** pierces the blizzard and slows lit drones — it overloads after ~22 s continuous use.
- **Upgrade terminal (B)** — spend kill credits on damage / fire rate / capacity / reload (5 levels each).
- **Auto rank (no input)** — cumulative kill score auto-promotes you RANK 1→10: each rank grants +12 max HP, +10% damage, +8% fire rate / reload, and an instant 25 HP heal; ranks 3/6/9 unlock Mk I/II/III weapon upgrades (extra damage, mags, shotgun pellets). A banner + chime fires on every rank-up.
- Reach 100% → rescue inbound, EMP clears the field.

## Weapons

| Key | Weapon | Notes |
|---|---|---|
| 1 | M9 Tactical Pistol | semi-auto sidearm |
| 2 | K2 Assault Rifle | full-auto workhorse |
| 3 | M870 Pump Shotgun | 8 pellets, shred heavies up close |
| 4 | FIM-92 "Vulcan" SAM | homing rocket (unlocked from Level 3); locks onto anything in a 45° cone, 5.5 m blast at ×2 damage |

Mouse wheel cycles unlocked weapons.

## Controls

| Input | Action |
|---|---|
| WASD / Shift | Move / sprint |
| Mouse | Look (pointer lock) |
| LMB / RMB | Fire / aim down sights |
| 1 / 2 / 3 / 4, wheel | Pistol / rifle / shotgun / SAM |
| Q / E | Lean & peek cover |
| R | Reload |
| F | Interact (reboot / supply / airdrop / workbench / light) |
| T | Searchlight toggle |
| B | Upgrade terminal |
| H | Collapse status dock |

## Architecture

```
src/
  main.ts       — Game class: campaign flow, wiring, hitscan combat, frame loop, win/lose
  engine.ts     — renderer, scene, camera, sky/fog; per-level ambience retint
  config.ts     — all tunables + palette + LEVELS table (waves, ambience, outpost layout)
  state.ts      — Player/Mission/Weapon data models
  player.ts     — FPS controller: move, collision, lean, ADS, recoil
  weapons.ts    — procedural viewmodels, firing state machine, weapon unlocks
  drones.ts     — 7 drone classes: models, AI (shares player colliders), projectiles, damage
  waves.ts      — wave director + airdrop site search
  effects.ts    — tracers, sparks, explosions, debris, EMP (pooled lights)
  weather.ts    — blizzard particle field
  world.ts      — alpine terrain, cliffs, pine forest (instanced)
  canyon.ts     — rock-walled corridor (L2)
  rail.ts       — frozen rail yard, parked cars & gantry (L3)
  dam.ts        — high dam with 20 m arc wall (L4)
  crater.ts     — ring-walled crater with four spawn gaps (L5)
  outpost.ts    — structures, signal tower, searchlight rig, interactables (per-level layouts)
  interact.ts   — F-key facility focus
  audio.ts      — Web Audio synthesized SFX (no assets)
  hud.ts        — semantic DOM HUD: telemetry, crosshair, dock, level/end overlays
```

Design notes:

- **No external assets.** Every model is procedural geometry; all sound is synthesized (gunshot, explosions, alarm, drone hum, wind).
- **Pooled lights**: explosion/muzzle flashes reuse a fixed light pool — adding/removing scene lights forces WebGL shader recompiles and causes stutter.
- **Hit proxies**: drones carry invisible sphere proxies (`body` / `shield` / `weak`) parented to their group; buildings use height-aware static proxies so bullets stop at cover, and shots over low cover correctly pass above.
- Drones resolve the **same colliders as the player** (no clipping through structures; they wall-slide toward gaps, and may overfly anything below their altitude). Enemy bolts are swept against the player's body capsule and blocked by cover.
- Physics are capsule-vs-circle/AABB in XZ; drones fly with separation + hover clamping. All five maps are built at startup; the active level just swaps visibility, colliders, interactables and wave tables.

## Testing

Playwright load/flow scripts live in `/tmp/pwtest/op-*.mjs` (headless swiftshader), driving the debug API exposed at `window.__outpost` (`startLevel`, `advance`, `step`, `spawnAt`, `addScore`, ...):

- `op-loadcheck` — boot + phases
- `op-combat` — hit resolution
- `op-systems` — airdrops, stations, overheat→repair, victory, defeat
- `op-waves` / `op-levels` — wave closing behavior; auto-rank thresholds and Mk unlocks
- `op-v11` — collision, map swap, warden/bomber systems (14 checks)
- `op-campaign` — full 5-level campaign flow (24 checks); `op-campaign-shots` for per-level screenshots
- `op-showcase` — visuals

## Self-serve

To serve the built page yourself, use any static server over `dist/` (Vite `npm run preview`, `python3 -m http.server -d dist 4173`, nginx, etc.). No backend or assets required.
