// Semantic DOM HUD: top telemetry bar, crosshair, hit direction arcs, bottom dock,
// interaction prompts, upgrade terminal, brief & result screens.
import { LEVELS, UPGRADE, WEAPONS, weaponTier } from './config';
import type { MissionState, UpgradeLevels, WeaponId, WeaponRuntime } from './state';

const TRACKS: { key: keyof UpgradeLevels; label: string }[] = [
  { key: 'damage', label: 'Damage' },
  { key: 'fireRate', label: 'Fire rate' },
  { key: 'capacity', label: 'Capacity' },
  { key: 'reload', label: 'Reload' },
];

const WEAPON_LABELS: Record<WeaponId, string> = {
  pistol: 'M9 Pistol',
  rifle: 'K2 Rifle',
  shotgun: 'M870 Shotgun',
  launcher: 'Vulcan SAM',
};

function el(cls: string, parent: HTMLElement, text?: string): HTMLElement {
  const d = document.createElement('div');
  d.className = cls;
  if (text !== undefined) d.textContent = text;
  parent.appendChild(d);
  return d;
}

export interface HudCallbacks {
  onStart(): void;
  onBuy(weapon: WeaponId, track: keyof UpgradeLevels): void;
  onCloseUpgrade(): void;
  onRestart(): void;
  onResume(): void;
}

export class Hud {
  private root: HTMLElement;
  // top bar
  private progressFill: HTMLElement;
  private progressText: HTMLElement;
  private waveChip: HTMLElement;
  private heatChip: HTMLElement;
  private heatFill: HTMLElement;
  private lightChip: HTMLElement;
  private rankChip: HTMLElement;
  private mapChip: HTMLElement;
  // crosshair
  private cross: HTMLElement;
  private crossTicks: HTMLElement[] = [];
  // hit arcs & vignette
  private hitLayer: HTMLElement;
  private vignette: HTMLElement;
  // interact prompt
  private prompt: HTMLElement;
  private promptKey: HTMLElement;
  private promptLabel: HTMLElement;
  private promptRing: HTMLElement;
  // bottom dock
  private dock: HTMLElement;
  private hpFill: HTMLElement;
  private hpText: HTMLElement;
  private armorFill: HTMLElement;
  private armorText: HTMLElement;
  private weaponName: HTMLElement;
  private ammoMag: HTMLElement;
  private ammoReserve: HTMLElement;
  private creditsText: HTMLElement;
  private reloadHint: HTMLElement;
  // banner
  private banner: HTMLElement;
  private bannerTitle: HTMLElement;
  private bannerSub: HTMLElement;
  // overlays
  private brief: HTMLElement;
  private upgrade: HTMLElement;
  private end: HTMLElement;
  private pause: HTMLElement;
  private upgradeBody: HTMLElement;
  private endBody: HTMLElement;
  private lastValues = new Map<string, string>();

  constructor(cb: HudCallbacks) {
    this.root = document.getElementById('hud-root')!;

    // ---- top bar ----
    const top = el('topbar', this.root);
    const sig = el('signal', top);
    el('sig-label', sig, 'Rescue Signal');
    const bar = el('bar', sig);
    this.progressFill = el('fill green', bar);
    this.progressText = el('sig-pct mono', sig, '0.0%');
    this.waveChip = el('chip', top, 'STANDBY');
    const heat = el('chip heat', top);
    el('chip-label', heat, 'Transmitter');
    const hbar = el('mini-bar', heat);
    this.heatFill = el('fill amber', hbar);
    this.heatChip = heat;
    this.lightChip = el('chip', top, 'Searchlight ○');
    this.rankChip = el('chip', top, 'RANK 1');
    this.mapChip = el('chip', top, 'ALPINE PASS');

    // ---- crosshair ----
    const crossWrap = el('crosshair', this.root);
    this.cross = crossWrap;
    for (const cls of ['tick up', 'tick down', 'tick left', 'tick right']) {
      this.crossTicks.push(el(cls, crossWrap));
    }
    el('cross-dot', crossWrap);
    this.hitLayer = el('hit-layer', this.root);
    this.vignette = el('vignette', this.root);

    // ---- interact prompt ----
    this.prompt = el('prompt', this.root);
    this.prompt.style.display = 'none';
    this.promptRing = el('hold-ring', this.prompt);
    this.promptKey = el('key', this.prompt, 'F');
    this.promptLabel = el('prompt-label', this.prompt, '');

    // ---- bottom dock ----
    this.dock = el('dock', this.root);
    const vitals = el('vitals', this.dock);
    const hp = el('meter', vitals);
    el('meter-label', hp, 'HP');
    const hpb = el('bar', hp);
    this.hpFill = el('fill green', hpb);
    this.hpText = el('meter-num mono', hp, '100');
    const ar = el('meter', vitals);
    el('meter-label', ar, 'Armor');
    const arb = el('bar', ar);
    this.armorFill = el('fill cyan', arb);
    this.armorText = el('meter-num mono', ar, '25');
    const mid = el('weapon-block', this.dock);
    this.weaponName = el('weapon-name', mid, 'M9 Tactical Pistol');
    const ammo = el('ammo', mid);
    this.ammoMag = el('ammo-mag mono', ammo, '12');
    el('ammo-sep', ammo, '/');
    this.ammoReserve = el('ammo-reserve mono', ammo, '96');
    this.reloadHint = el('reload-hint', mid, 'Reloading…');
    this.reloadHint.style.display = 'none';
    const right = el('dock-right', this.dock);
    el('credits-label', right, 'Tactical credits');
    this.creditsText = el('credits mono', right, '0');
    el('hints', right, 'WASD Move · Shift Sprint · Q/E Lean · RMB Aim · R Reload · B Bench · T Searchlight · H Dock');

    // ---- banner ----
    this.banner = el('banner', this.root);
    this.banner.style.display = 'none';
    this.bannerTitle = el('banner-title', this.banner, '');
    this.bannerSub = el('banner-sub', this.banner, '');

    // ---- brief ----
    this.brief = el('overlay', this.root);
    const briefCard = el('card', this.brief);
    el('card-kicker', briefCard, 'OUTPOST ZERO // SIGNAL HOLD');
    el('card-title', briefCard, 'Alpine Radio Outpost · Night Defense');
    el(
      'card-body',
      briefCard,
      'Elevation 3,800 m. The transmitter is ready — once the distress uplink to the orbital satellite begins, its raw electromagnetic radiation will draw a swarm of rogue combat drones out of the valley. Hold the outpost through five waves, manage transmitter overheat crises, and keep the uplink running until it reaches 100%.',
    );
    const keys = el('keygrid', briefCard);
    const keyLines = [
      ['WASD / Shift', 'Move · Sprint'],
      ['Q / E', 'Lean at cover'],
      ['LMB / RMB', 'Fire / Precision aim'],
      ['1 / 2 / 3 / 4 · Wheel', 'Pistol / Rifle / Shotgun / Vulcan SAM'],
      ['F', 'Repair · Resupply · Airdrop · Searchlight'],
      ['B', 'Weapon mod bench'],
      ['T · H', 'Searchlight on/off · Collapse dock'],
    ];
    for (const [k, v] of keyLines) {
      const row = el('keyrow', keys);
      el('k mono', row, k);
      el('v', row, v);
    }
    el(
      'map-blurb',
      briefCard,
      'Five-hold campaign. Clear a level and your rank, upgrades, credits and hardened vitals carry forward to the next — the swarm gets heavier and stranger with every map. You only re-deploy from Level 1 if the line collapses.',
    );
    const levelList = el('level-list', briefCard);
    LEVELS.forEach((lv, i) => {
      const row = el(`lv-row${i === 0 ? '' : ' locked'}`, levelList);
      el('lv-title mono', row, `LEVEL ${i + 1} · ${lv.name}`);
      el('lv-sub', row, [lv.timeOfDay, lv.newThreats].filter(Boolean).join(' · ') || 'Standard hostile mix');
    });
    const deployBtn = el('btn', briefCard, `Deploy — LEVEL 1 · ${LEVELS[0].name}`);
    deployBtn.addEventListener('click', () => cb.onStart());

    // ---- upgrade ----
    this.upgrade = el('overlay', this.root);
    this.upgrade.style.display = 'none';
    const upCard = el('card wide', this.upgrade);
    el('card-kicker', upCard, 'TACTICAL WORKBENCH');
    el('card-title', upCard, 'Weapon Mod Bench');
    this.upgradeBody = el('upgrade-body', upCard);
    const close = el('btn', upCard, 'Back to the line (B)');
    close.addEventListener('click', () => cb.onCloseUpgrade());

    // ---- end ----
    this.end = el('overlay', this.root);
    this.end.style.display = 'none';
    const endCard = el('card', this.end);
    this.endBody = endCard;

    // ---- pause ----
    this.pause = el('overlay translucent', this.root);
    this.pause.style.display = 'none';
    const pauseCard = el('card small', this.pause);
    el('card-title', pauseCard, 'Paused');
    el('card-body', pauseCard, 'Pointer released. Click to resume combat.');
    this.pause.addEventListener('click', () => cb.onResume());
  }

  private set(key: string, node: HTMLElement, value: string): void {
    if (this.lastValues.get(key) !== value) {
      this.lastValues.set(key, value);
      node.textContent = value;
    }
  }

  setTop(m: MissionState): void {
    const p = m.progress.toFixed(1);
    this.progressFill.style.width = `${m.progress}%`;
    this.set('prog', this.progressText, `${p}%`);
    this.set('wave', this.waveChip, m.wave > 0 ? `Wave ${m.wave}` : 'STANDBY');
    this.heatFill.style.width = `${m.heat}%`;
    this.heatFill.className = `fill ${m.overheated ? 'red' : m.heat > 70 ? 'red' : 'amber'}`;
    this.set('heat', this.heatChip.querySelector('.chip-label') as HTMLElement, m.overheated ? 'OVERHEAT' : 'Transmitter');
    this.heatChip.classList.toggle('danger', m.overheated);
    const sl = m.searchlightOn ? 'Searchlight ●' : m.searchlightCooldownUntil > m.time ? 'Searchlight ⚡ overload' : 'Searchlight ○';
    this.set('sl', this.lightChip, sl);
    this.lightChip.classList.toggle('lit', m.searchlightOn);
    this.set('rank', this.rankChip, `RANK ${m.level}`);
    this.rankChip.classList.toggle('gold', m.level > 1);
  }

  setMap(name: string): void {
    this.set('map', this.mapChip, name);
  }

  setWeapon(id: WeaponId, mag: number, reserve: number, reloading: boolean, rank = 1): void {
    const tier = weaponTier(rank);
    this.set('wname', this.weaponName, tier > 0 ? `${WEAPONS[id].name} Mk ${['I', 'II', 'III'][tier - 1]}` : WEAPONS[id].name);
    this.set('mag', this.ammoMag, `${mag}`);
    this.set('res', this.ammoReserve, `${reserve}`);
    this.ammoMag.classList.toggle('low', mag === 0);
    this.reloadHint.style.display = reloading ? 'block' : 'none';
  }

  setVitals(hp: number, armor: number, credits: number, maxHp = 100): void {
    const hpPct = Math.max(0, Math.min(100, (hp / maxHp) * 100));
    this.hpFill.style.width = `${hpPct}%`;
    this.hpFill.className = `fill ${hpPct > 50 ? 'green' : hpPct > 25 ? 'amber' : 'red'}`;
    this.set('hp', this.hpText, `${Math.ceil(hp)}`);
    this.armorFill.style.width = `${(armor / 50) * 100}%`;
    this.set('armor', this.armorText, `${Math.ceil(armor)}`);
    this.set('credits', this.creditsText, `${credits}`);
  }

  setCrosshairSpread(spreadPx: number): void {
    const gap = 5 + spreadPx;
    const t = this.crossTicks;
    t[0].style.transform = `translateY(-${gap}px)`;
    t[1].style.transform = `translateY(${gap}px)`;
    t[2].style.transform = `translateX(-${gap}px)`;
    t[3].style.transform = `translateX(${gap}px)`;
    this.cross.classList.toggle('hidden', spreadPx < -100);
  }

  /** worldBearing & facingBearing are atan2(dx, dz) style bearings. */
  flashHit(worldBearing: number, facingBearing: number): void {
    const rel = worldBearing - facingBearing;
    const marker = el('hit-arc', this.hitLayer);
    marker.style.transform = `rotate(${(rel * 180) / Math.PI}deg)`;
    setTimeout(() => marker.remove(), 900);
  }

  flashDamage(magnitude: number): void {
    this.vignette.style.opacity = String(Math.min(0.85, 0.25 + magnitude / 60));
    setTimeout(() => (this.vignette.style.opacity = '0'), 140);
  }

  setInteract(label: string | null, holdProgress: number): void {
    if (!label) {
      this.prompt.style.display = 'none';
      return;
    }
    this.prompt.style.display = 'flex';
    this.promptLabel.textContent = label;
    this.promptRing.style.background =
      holdProgress > 0
        ? `conic-gradient(#f59e0b ${holdProgress * 360}deg, rgba(255,255,255,0.15) 0deg)`
        : 'conic-gradient(rgba(255,255,255,0.15) 360deg, rgba(255,255,255,0.15) 0deg)';
  }

  banner_show(title: string, sub: string): void {
    this.bannerTitle.textContent = title;
    this.bannerSub.textContent = sub;
    this.banner.style.display = 'block';
    this.banner.classList.remove('fade');
    void this.banner.offsetWidth;
    setTimeout(() => this.banner.classList.add('fade'), 2400);
    setTimeout(() => (this.banner.style.display = 'none'), 3200);
  }

  setPhase(phase: string): void {
    this.brief.style.display = phase === 'brief' ? 'flex' : 'none';
    this.upgrade.style.display = phase === 'upgrade' ? 'flex' : 'none';
    this.end.style.display = phase === 'won' || phase === 'lost' ? 'flex' : 'none';
  }

  showPause(on: boolean): void {
    this.pause.style.display = on ? 'flex' : 'none';
  }

  toggleDock(): void {
    this.dock.classList.toggle('collapsed');
  }

  renderUpgrade(credits: number, runtimes: Record<WeaponId, WeaponRuntime>, onBuy: HudCallbacks['onBuy'], hasLauncher = false): void {
    this.upgradeBody.textContent = '';
    el('upgrade-credits mono', this.upgradeBody, `Credits on hand: ${credits}`);
    const ids: WeaponId[] = hasLauncher ? ['pistol', 'rifle', 'shotgun', 'launcher'] : ['pistol', 'rifle', 'shotgun'];
    for (const id of ids) {
      const row = el('up-row', this.upgradeBody);
      el('up-weapon', row, WEAPON_LABELS[id]);
      const tracks = el('up-tracks', row);
      for (const tr of TRACKS) {
        const cell = el('up-cell', tracks);
        el('up-track-name', cell, tr.label);
        const pips = el('up-pips', cell);
        const lvl = runtimes[id].levels[tr.key];
        for (let i = 0; i < UPGRADE.maxLevel; i++) {
          const pip = el('pip', pips);
          if (i < lvl) pip.classList.add('on');
        }
        if (lvl < UPGRADE.maxLevel) {
          const cost = UPGRADE.cost(lvl);
          const btn = document.createElement('button');
          btn.className = 'up-buy mono';
          btn.textContent = `Upgrade ${cost}`;
          btn.disabled = credits < cost;
          btn.addEventListener('click', () => onBuy(id, tr.key));
          cell.appendChild(btn);
        } else {
          el('up-max mono', cell, 'MAX');
        }
      }
    }
  }

  /** nextLabel present on a level win that is not the campaign finale → Advance button. */
  showEnd(won: boolean, m: MissionState, seconds: number, nextLabel?: string): void {
    this.endBody.textContent = '';
    el('card-kicker', this.endBody, won ? 'RESCUE INBOUND' : 'SIGNAL LOST');
    el('card-title', this.endBody, won ? 'Rescue arrived — signal complete' : 'Outpost lost');
    if (!won) el('card-body', this.endBody, m.endReason);
    const stats = m.stats;
    const fired = Math.max(1, stats.pelletsFired);
    const acc = Math.round((stats.pelletsHit / fired) * 100);
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const grade = won ? (acc >= 45 && m.stats.kills.heavy >= 5 && m.progress >= 100 ? 'S' : acc >= 30 ? 'A' : 'B') : 'F';
    const grid = el('statgrid', this.endBody);
    const lines: [string, string][] = [
      ['Grade', grade],
      ['Rank reached', `${m.level}`],
      ['Final progress', `${m.progress.toFixed(1)}%`],
      ['Waves held', `${Math.max(1, m.wave)} / 5`],
      ['Time survived', `${mins}:${String(secs).padStart(2, '0')}`],
      ['Scouts downed', `${stats.kills.scout}`],
      ['Heavies downed', `${stats.kills.heavy}`],
      ['Kamikazes downed', `${stats.kills.kamikaze}`],
      ['Accuracy', `${acc}%`],
      ['Overheat crises', `${stats.overheatEvents} / repairs ${stats.repairs}`],
    ];
    if (stats.kills.warden > 0 || stats.kills.bomber > 0) {
      lines.push(['Wardens downed', `${stats.kills.warden}`], ['Bombers downed', `${stats.kills.bomber}`]);
    }
    if (stats.kills.crawler > 0 || stats.kills.colossus > 0) {
      lines.push(['Crawlers downed', `${stats.kills.crawler}`], ['Colossi downed', `${stats.kills.colossus}`]);
    }
    for (const [k, v] of lines) {
      const r = el('statrow', grid);
      el('k', r, k);
      el('v mono', r, v);
    }
    if (won && nextLabel) {
      const adv = el('btn', this.endBody, `ADVANCE — ${nextLabel}`);
      adv.addEventListener('click', () => this.advanceCb?.());
      const again = el('btn ghost', this.endBody, 'Restart campaign from Level 1');
      again.addEventListener('click', () => this.restartCb?.());
    } else {
      const btn = el('btn', this.endBody, won ? 'Campaign complete — redeploy' : 'Redeploy');
      btn.addEventListener('click', () => this.restartCb?.());
    }
  }

  restartCb: (() => void) | null = null;
  advanceCb: (() => void) | null = null;
}
