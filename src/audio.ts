// Procedural Web Audio soundscape — zero sample assets, zero main-thread setTimeout jitter.
import type { WeaponId } from './state';

export class AudioWorld {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private noiseBuf!: AudioBuffer;
  private windGain: GainNode | null = null;
  private humGain: GainNode | null = null;
  private alarmOsc: OscillatorNode | null = null;
  private alarmLfo: OscillatorNode | null = null;
  private alarmGain: GainNode | null = null;
  private musicTimer: number | null = null;
  private musicStep = 0;
  musicEnabled = true;
  enabled = true;

  init(): void {
    if (this.ctx) return;
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    this.ctx = new Ctor();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);

    const len = this.ctx.sampleRate * 2;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    this.startWind();
    this.startDroneHum();
    this.startTacticalPulse();
  }

  resume(): void {
    void this.ctx?.resume();
  }

  toggleMute(): boolean {
    this.enabled = !this.enabled;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(this.enabled ? 0.55 : 0, this.ctx.currentTime, 0.03);
    }
    return this.enabled;
  }

  toggleMusic(): boolean {
    this.musicEnabled = !this.musicEnabled;
    return this.musicEnabled;
  }

  private noise(dur: number, startOffset = 0): AudioBufferSourceNode {
    const t = this.ctx!.currentTime + startOffset;
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.start(t);
    src.stop(t + dur);
    return src;
  }

  private env(peak: number, attack: number, decay: number, startOffset = 0): GainNode {
    const g = this.ctx!.createGain();
    const t = this.ctx!.currentTime + startOffset;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    return g;
  }

  private startWind(): void {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const filter = this.ctx!.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 360;
    filter.Q.value = 0.7;
    this.windGain = this.ctx!.createGain();
    this.windGain.gain.value = 0.035;
    src.connect(filter).connect(this.windGain).connect(this.master);
    src.start();
  }

  setWind(intensity: number): void {
    if (this.windGain) this.windGain.gain.value = 0.02 + 0.085 * intensity;
  }

  private startDroneHum(): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 82;
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.value = 41;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 240;
    this.humGain = ctx.createGain();
    this.humGain.gain.value = 0;
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(this.humGain).connect(this.master);
    osc.start();
    osc2.start();
  }

  setDroneHum(activeCount: number): void {
    if (this.humGain) this.humGain.gain.value = Math.min(0.11, activeCount * 0.015);
  }

  /** Subtle procedural tactical dark-synth bass pulse during combat. */
  private startTacticalPulse(): void {
    if (this.musicTimer !== null) return;
    const bassNotes = [55, 55, 65.41, 55, 49, 49, 61.74, 49];
    this.musicTimer = window.setInterval(() => {
      if (!this.ctx || !this.enabled || !this.musicEnabled || this.ctx.state !== 'running') return;
      const f = bassNotes[this.musicStep % bassNotes.length];
      this.musicStep++;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, t);
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(280, t);
      lp.frequency.exponentialRampToValueAtTime(95, t + 0.22);
      const g = this.env(0.055, 0.008, 0.24);
      osc.connect(lp).connect(g).connect(this.master);
      osc.start(t);
      osc.stop(t + 0.27);
    }, 280);
  }

  setAlarm(on: boolean): void {
    if (!this.ctx) return;
    if (on && !this.alarmOsc) {
      const osc = this.ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = 640;
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 3.2;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.045;
      this.alarmGain = this.ctx.createGain();
      this.alarmGain.gain.value = 0.055;
      lfo.connect(lfoGain).connect(this.alarmGain.gain);
      osc.connect(this.alarmGain).connect(this.master);
      osc.start();
      lfo.start();
      this.alarmOsc = osc;
      this.alarmLfo = lfo;
    } else if (!on && this.alarmOsc) {
      try {
        this.alarmOsc.stop();
        this.alarmLfo?.stop();
      } catch {
        /* ignore */
      }
      this.alarmOsc = null;
      this.alarmLfo = null;
      this.alarmGain = null;
    }
  }

  gunshot(id: WeaponId): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;

    if (id === 'plasma') {
      // High-tech plasma bolt zap + sub-thump
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1650, t);
      osc.frequency.exponentialRampToValueAtTime(190, t + 0.14);
      const g = this.env(0.32, 0.002, 0.14);
      osc.connect(g).connect(this.master);
      osc.start(t);
      osc.stop(t + 0.16);

      const sub = this.ctx.createOscillator();
      sub.type = 'sine';
      sub.frequency.setValueAtTime(140, t);
      sub.frequency.exponentialRampToValueAtTime(42, t + 0.12);
      const sg = this.env(0.35, 0.002, 0.12);
      sub.connect(sg).connect(this.master);
      sub.start(t);
      sub.stop(t + 0.14);
      return;
    }

    if (id === 'railgun') {
      // Supersonic electromagnetic crack + harmonic capacitor discharge
      const n = this.noise(0.38);
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(2200, t);
      bp.frequency.exponentialRampToValueAtTime(320, t + 0.35);
      bp.Q.value = 1.2;
      const ng = this.env(0.85, 0.001, 0.36);
      n.connect(bp).connect(ng).connect(this.master);

      const whip = this.ctx.createOscillator();
      whip.type = 'sawtooth';
      whip.frequency.setValueAtTime(2800, t);
      whip.frequency.exponentialRampToValueAtTime(65, t + 0.32);
      const wg = this.env(0.45, 0.002, 0.32);
      whip.connect(wg).connect(this.master);
      whip.start(t);
      whip.stop(t + 0.35);

      const chime = this.ctx.createOscillator();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(880, t + 0.05);
      chime.frequency.exponentialRampToValueAtTime(1760, t + 0.45);
      const cg = this.env(0.14, 0.02, 0.4, 0.05);
      chime.connect(cg).connect(this.master);
      chime.start(t + 0.05);
      chime.stop(t + 0.5);
      return;
    }

    const cfg =
      id === 'shotgun'
        ? { peak: 0.9, lp: 950, decay: 0.28, thump: 58 }
        : id === 'rifle'
          ? { peak: 0.52, lp: 2450, decay: 0.13, thump: 88 }
          : id === 'launcher'
            ? { peak: 0.85, lp: 680, decay: 0.42, thump: 46 }
            : { peak: 0.56, lp: 1700, decay: 0.15, thump: 105 };
    const n = this.noise(cfg.decay + 0.05);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = cfg.lp;
    const g = this.env(cfg.peak, 0.002, cfg.decay);
    n.connect(lp).connect(g).connect(this.master);
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(cfg.thump, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + cfg.decay);
    const og = this.env(cfg.peak * 0.8, 0.002, cfg.decay * 0.8);
    osc.connect(og).connect(this.master);
    osc.start(t);
    osc.stop(t + cfg.decay + 0.08);
  }

  turretShot(): void {
    if (!this.ctx || !this.enabled) return;
    this.blip(320, 0.12, 0.06, 'sawtooth', 0);
    this.blip(1100, 0.06, 0.04, 'triangle', 0);
  }

  dryFire(): void {
    this.blip(2200, 0.05, 0.12, 'square');
  }

  reload(): void {
    this.blip(880, 0.04, 0.08, 'square', 0);
    this.blip(640, 0.04, 0.09, 'square', 0.16);
    this.blip(1180, 0.05, 0.07, 'triangle', 0.34);
  }

  hitTick(): void {
    this.blip(1780, 0.05, 0.055, 'triangle');
  }

  critHit(): void {
    this.blip(2450, 0.09, 0.09, 'sine', 0);
    this.blip(3200, 0.07, 0.11, 'triangle', 0.03);
  }

  killConfirm(): void {
    this.blip(1046, 0.07, 0.1, 'triangle', 0);
    this.blip(1568, 0.08, 0.16, 'sine', 0.06);
  }

  shieldZap(): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1300, t);
    osc.frequency.exponentialRampToValueAtTime(220, t + 0.12);
    const g = this.env(0.16, 0.002, 0.13);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.16);
  }

  plasmaArc(): void {
    if (!this.ctx || !this.enabled) return;
    this.blip(1950, 0.07, 0.08, 'sawtooth', 0);
    this.blip(1420, 0.06, 0.08, 'square', 0.03);
  }

  empBlast(): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(22, t + 0.85);
    const g = this.env(0.75, 0.01, 0.85);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.9);
    this.blip(1480, 0.12, 0.45, 'triangle', 0.02);
  }

  laser(): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(2400, t);
    osc.frequency.exponentialRampToValueAtTime(700, t + 0.15);
    const g = this.env(0.12, 0.002, 0.16);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  explosion(): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const n = this.noise(0.85);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1450, t);
    lp.frequency.exponentialRampToValueAtTime(110, t + 0.78);
    const g = this.env(0.82, 0.004, 0.82);
    n.connect(lp).connect(g).connect(this.master);
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(74, t);
    osc.frequency.exponentialRampToValueAtTime(24, t + 0.68);
    const og = this.env(0.68, 0.004, 0.68);
    osc.connect(og).connect(this.master);
    osc.start(t);
    osc.stop(t + 0.85);
  }

  proximityBeep(pitch: number): void {
    this.blip(pitch, 0.05, 0.09, 'sine');
  }

  pickup(): void {
    this.blip(880, 0.06, 0.12, 'sine', 0);
    this.blip(1320, 0.06, 0.14, 'sine', 0.08);
    this.blip(1760, 0.05, 0.18, 'triangle', 0.16);
  }

  objectiveAlert(): void {
    this.blip(740, 0.07, 0.12, 'triangle', 0);
    this.blip(987, 0.07, 0.16, 'triangle', 0.12);
  }

  objectiveComplete(): void {
    this.blip(587, 0.08, 0.18, 'triangle', 0);
    this.blip(880, 0.08, 0.22, 'triangle', 0.1);
    this.blip(1174, 0.09, 0.35, 'sine', 0.2);
  }

  uiClick(): void {
    this.blip(1150, 0.025, 0.045, 'square');
  }

  repairDone(): void {
    this.blip(520, 0.05, 0.1, 'sine', 0);
    this.blip(780, 0.05, 0.12, 'sine', 0.1);
    this.blip(1040, 0.06, 0.18, 'sine', 0.2);
  }

  levelUp(): void {
    const notes = [660, 880, 990, 1320];
    notes.forEach((f, i) => this.blip(f, 0.09, 0.28, 'triangle', i * 0.085));
    this.blip(1980, 0.06, 0.42, 'sine', 0.36);
  }

  fanfare(): void {
    const notes = [523, 659, 784, 1046];
    notes.forEach((f, i) => this.blip(f, 0.11, 0.45, 'triangle', i * 0.15));
  }

  defeat(): void {
    const notes = [392, 330, 262, 196];
    notes.forEach((f, i) => this.blip(f, 0.09, 0.55, 'sawtooth', i * 0.2));
  }

  private blip(freq: number, peak: number, decay: number, type: OscillatorType, startOffset = 0): void {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime + startOffset;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    const g = this.env(peak, 0.003, decay, startOffset);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + decay + 0.04);
  }
}
