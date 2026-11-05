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
  lightRig.ts   — fixed PointLight pool across all five maps' lamps (stable shader count)
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
- **Constant light budget** (`lightRig.ts`, `LIGHT_BUDGET = 14` in `config.ts`): the five maps stack their lamps on the same ground and airdrop pods add lights at runtime, so the scene's light *count* used to change on level switches and pod spawns. Any count change re-keys every shader program — a ~1.4 s freeze measured at a level switch. The rig keeps ONE pool of `LIGHT_BUDGET` PointLights and swaps which fixtures occupy the slots each frame (visibility-aware, nearest-first). 14 was chosen from a reachability sweep: the busiest map has at most 10 lamps in range, so the pool never clamps. `__outpost.lightBudget(n)` retunes it live and `lightRelease()` restores the old add/remove behaviour for A/B measurements.
- **Boot prewarm** (`warmHostiles()` + the pass in `main.ts`): boot builds one of every hostile kind, renders it once, then removes it; and it flips every object visible with `frustumCulled = false` and renders twice, so all five maps' geometry and textures land in VRAM before the first shot. `renderer.compile()` alone is NOT enough — frustum-culled and hidden objects never bind their attribute buffers, so they were uploaded the first time you walked into that area. The whole warm stage is one boot-time cost, `window.__bootTimings.warmHostiles` (332 ms under software rendering / swiftshader, so treat it as an upper bound on a real GPU); it lands before the menu, never as a hitch mid-fight. Measured after boot: 28 compiled programs, flat through the first waves (previously +4 during a fight), light pool `48 fixtures -> 14, active 7`.
- **Hit proxies**: drones carry invisible sphere proxies (`body` / `shield` / `weak`) parented to their group; buildings use height-aware static proxies so bullets stop at cover, and shots over low cover correctly pass above.
- Drones resolve the **same colliders as the player** (no clipping through structures; they wall-slide toward gaps, and may overfly anything below their altitude). Enemy bolts are swept against the player's body capsule and blocked by cover.
- Physics are capsule-vs-circle/AABB in XZ; drones fly with separation + hover clamping. All five maps are built at startup; the active level just swaps visibility, colliders, interactables and wave tables.

## Debug API and perf probes

The game exposes itself for harnesses and for measuring the player's real hardware. In the console:

```js
__bootTimings                      // boot stage costs (ms)
__outpost.prof(true)               // fps, frameMS p50/p90/p99/max, hitchesOver50ms,
                                   // drawCalls, programs, geometries, textures,
                                   // light-pool usage, pixelRatio (true resets the gaps)
```

`prof()` reports **true frame gaps**, not the clamped `dt` the simulation uses — a 1.5 s stall is invisible in `dt`, and it is the number that matters for stutter. `programs` climbing during play means shader recompiles; `geometries`/`textures` climbing means VRAM uploads of not-yet-seen geometry.

Other hooks on `window.__outpost`: `start()`, `startLevel(i)`, `advance()`, `step(dt, render)` (drive the sim headless — no pointer lock needed), `spawn(kind, r, a)` / `spawnAt(kind, x, y, z)`, `fire()`, `setProgress(p)`, `addScore(n)`, `damagePlayer(d)`, `win()`, `openUpgrade()` / `closeUpgrade()`, `currentLevel()`, `activeMap()`, `mapGroupsVisible()`, `rockets()`, `rayTest()`, plus `mission`, `player`, `weapons`, `drones`, `runtimes` for reading state.

Flow harnesses (boot, hit resolution, airdrops/stations/overheat, waves and auto-rank, collision and map swap, the full 5-level campaign, screenshots) were driven headless through those hooks with Playwright under swiftshader. They were throwaway scripts outside the repo, not a suite — rebuild one from this section if you need it, and note that swiftshader fps numbers say nothing about real GPUs; only the counters transfer.

## Serving and deploying

`npm run build` writes a self-contained `dist/` — no backend, no asset files, no runtime fetches beyond Google Fonts. Serve `dist/` from anything static (`npm run preview`, `python3 -m http.server -d dist 4173`, nginx).

**Hosting it under a subpath requires relative asset paths.** On lagjazz.com the entry is
`https://lagjazz.com/games-media/outpost-zero/dist/index.html`, i.e. three levels below the site root.
Vite's default `base: "/"` emits `<script src="/assets/index-*.js">`, the browser then requests
`lagjazz.com/assets/...`, gets a 404, and the page is **blank with no in-game error** — the classic
white screen. `vite.config.ts` therefore sets `base: "./"`. Keep it: if you remove that line the site
breaks even though `npm run preview` still works, because preview serves from the root.

Two more rules when copying `dist/` into a public web root:

- Copy the **game directory**, not the project: `node_modules/` (93 MB here) must never land inside a
  served tree — it becomes downloadable through the same URL space as the game.
- Verify by what the server actually returns, not by the copy succeeding: the served HTML must
  reference the current hashed bundle (`grep -o 'index-[A-Za-z0-9_-]*\.js'`) and that bundle must
  answer 200 at its resolved subpath URL.
