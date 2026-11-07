# Outpost Zero: Signal Hold (Eight-Level Campaign)

A browser-based 3D first-person tactical horde-defense campaign built with **Three.js + TypeScript + Vite**. Hold eight isolated radio outposts — from an Alpine Pass and Glacier Harbor to a Geothermal Biolab and Orbital Citadel — while the distress signal transmits to orbit.

## Run

```bash
npm install
npm run dev        # dev server on http://localhost:3000
npm run build      # typecheck + production build to dist/
npm run preview    # serve dist/ on http://localhost:3000
```

## Eight-Theater Campaign

You can deploy directly to any of the 8 theaters from the Briefing screen or play sequentially from Level 1, carrying your rank, credits, and weapon upgrades forward across the campaign:

| # | Outpost | Time / Sky | New Threats & Unlocks |
|---|---|---|---|
| 1 | Alpine Pass | Night · Aurora | Scouts, Heavies, Kamikazes |
| 2 | Canyon Relay | Night · Aurora | **Warden** sniper · **Bomber** drone |
| 3 | Frozen Rail Yard | Dusk | **Crawler** ground unit · Unlock **Helios Plasma Carbine** |
| 4 | Dam Overlook | Dawn | **Colossus** fortress · Unlock **Vulcan SAM** |
| 5 | Summit Crater | Blood Dusk | **Phantom** stealth drone |
| 6 | Glacier Harbor | Subzero Aurora | **Shielder** support drone · Unlock **Aegis Railgun** |
| 7 | Geothermal Biolab | Emerald Mist | **Titan** apex dreadnought |
| 8 | Orbital Citadel | Solar Eclipse | All 10 hostile classes + dual Titan assault |

## Weapons (Keys `1`–`6` or Scroll Wheel)

| Key | Weapon | Notes |
|---|---|---|
| `1` | **M9 Tactical Pistol** | High-mobility semi-auto sidearm |
| `2` | **K2 Assault Rifle** | Reliable full-auto carbine |
| `3` | **M870 Combat Shotgun** | 8-pellet close-range heavy shredder |
| `4` | **Helios Plasma Carbine** | Rapid energy bolts; ×1.85 shield damage + chains lightning arcs to nearby hostiles |
| `5` | **FIM-92 "Vulcan" SAM** | Homing missile launcher; locks onto targets in a 45° cone with 5.5 m blast radius |
| `6` | **X-99 "Aegis" Railgun** | Hyper-velocity electromagnetic slug; pierces through all enemies along the beam |

## Diverse Supply Airdrops & Dynamic Sub-Objectives

- **5 Supply Airdrop Pods** (with descending parachutes & color-coded light pillars):
  - **Munitions Pod** (Amber) — Full ammo refill + 16s Weapon Overcharge (+35% fire rate & infinite mag).
  - **Nano-Med Pod** (Emerald) — +15 Max HP, full heal + armor, and 22s Nano-Regeneration.
  - **Auto-Sentry Pod** (Cyan) — Deploys an autonomous twin-barrel 3D sentry turret for 45s.
  - **Cryo-EMP Pod** (Violet) — Blasts and stuns all active drones + purges 45% Transmitter Heat.
  - **Prototype Ordnance Pod** (Gold) — Unlocks the next advanced weapon + 90 Tactical Credits.
- **5 Dynamic Tactical Sub-Objectives**:
  - **Destroy Signal Jammer** — Shoot down the hostile jammer pylon throttling uplink speed.
  - **Calibrate Field Relay** — Activate the auxiliary relay beacon (`F`) for 1.45× uplink speed.
  - **Purge Cryo-Coolant Valve** — Vent the cryo-conduit (`F`) to zero and lock transmitter heat.
  - **Hold Encrypted Data Zone** — Stand inside the holographic ring to burst-upload +9% signal.
  - **Eliminate Commander HVT** — Destroy the armored Commander carrier for +95 credits & a bonus Sentry Turret.
