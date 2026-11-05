// Procedural Web Audio soundscape — no sample assets.
import type { WeaponId } from './state';

export class AudioWorld {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private noiseBuf!: AudioBuffer;
  private windGain: GainNode | null = null;
  private humGain: GainNode | null = null;
  private alarmOsc: OscillatorNode | null = null;
  private alarmGain: GainNode | null = null;
  enabled = true;

  init(): void {
    if (this.ctx) return;
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
  }

  resume(): void {
    void this.ctx?.resume();
  }

  private noise(dur: number): AudioBufferSourceNode {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.start();
    src.stop(this.ctx!.currentTime + dur);
    return src;
  }

  private env(peak: number, attack: number, decay: number): GainNode {
    const g = this.ctx!.createGain();
    const t = this.ctx!.currentTime;
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
    filter.frequency.value = 380;
    filter.Q.value = 0.6;
    this.windGain = this.ctx!.createGain();
    this.windGain.gain.value = 0.04;
    src.connect(filter).connect(this.windGain).connect(this.master);
    src.start();
  }

  setWind(intensity: number): void {
    if (this.windGain) this.windGain.gain.value = 0.02 + 0.09 * intensity;
  }

  private startDroneHum(): void {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 84;
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 42;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 260;
    this.humGain = ctx.createGain();
    this.humGain.gain.value = 0;
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(this.humGain).connect(this.master);
    osc.start();
    osc2.start();
  }

  setDroneHum(activeCount: number): void {
    if (this.humGain) this.humGain.gain.value = Math.min(0.12, activeCount * 0.018);
  }

  setAlarm(on: boolean): void {
    if (!this.ctx) return;
    if (on && !this.alarmOsc) {
      const osc = this.ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = 660;
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 3.2;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.05;
      this.alarmGain = this.ctx.createGain();
      this.alarmGain.gain.value = 0.06;
      lfo.connect(lfoGain).connect(this.alarmGain.gain);
      osc.connect(this.alarmGain).connect(this.master);
      osc.start();
      lfo.start();
      this.alarmOsc = osc;
    } else if (!on && this.alarmOsc) {
      this.alarmOsc.stop();
      this.alarmOsc = null;
      this.alarmGain = null;
    }
  }

  gunshot(id: WeaponId): void {
    if (!this.ctx || !this.enabled) return;
    const cfg =
      id === 'shotgun'
        ? { peak: 0.9, lp: 900, decay: 0.28, thump: 55 }
        : id === 'rifle'
          ? { peak: 0.5, lp: 2400, decay: 0.13, thump: 85 }
          : id === 'launcher'
            ? { peak: 0.85, lp: 650, decay: 0.4, thump: 46 } // dull rocket-swoosh thud
            : { peak: 0.55, lp: 1600, decay: 0.16, thump: 100 };
    const n = this.noise(cfg.decay + 0.05);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = cfg.lp;
    const g = this.env(cfg.peak, 0.002, cfg.decay);
    n.connect(lp).connect(g).connect(this.master);
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(cfg.thump, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + cfg.decay);
    const og = this.env(cfg.peak * 0.8, 0.002, cfg.decay * 0.8);
    osc.connect(og).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + cfg.decay + 0.1);
  }

  dryFire(): void {
    this.blip(2200, 0.05, 0.15, 'square');
  }

  reload(): void {
    this.blip(900, 0.03, 0.08, 'square');
    setTimeout(() => this.blip(650, 0.03, 0.09, 'square'), 180);
  }

  hitTick(): void {
    this.blip(1750, 0.04, 0.06, 'triangle');
  }

  shieldZap(): void {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.12);
    const g = this.env(0.16, 0.002, 0.13);
    osc.connect(g).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }

  laser(): void {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(2400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.15);
    const g = this.env(0.12, 0.002, 0.16);
    osc.connect(g).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  explosion(): void {
    if (!this.ctx || !this.enabled) return;
    const n = this.noise(0.9);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1400, this.ctx.currentTime);
    lp.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.8);
    const g = this.env(0.85, 0.004, 0.85);
    n.connect(lp).connect(g).connect(this.master);
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(70, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(24, this.ctx.currentTime + 0.7);
    const og = this.env(0.7, 0.004, 0.7);
    osc.connect(og).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.9);
  }

  proximityBeep(pitch: number): void {
    this.blip(pitch, 0.05, 0.1, 'sine');
  }

  pickup(): void {
    this.blip(880, 0.05, 0.12, 'sine');
    setTimeout(() => this.blip(1320, 0.05, 0.14, 'sine'), 90);
  }

  uiClick(): void {
    this.blip(1100, 0.02, 0.05, 'square');
  }

  repairDone(): void {
    this.blip(520, 0.04, 0.1, 'sine');
    setTimeout(() => this.blip(780, 0.04, 0.12, 'sine'), 110);
    setTimeout(() => this.blip(1040, 0.05, 0.16, 'sine'), 220);
  }

  levelUp(): void {
    const notes = [660, 880, 990, 1320];
    notes.forEach((f, i) => setTimeout(() => this.blip(f, 0.09, 0.3, 'triangle'), i * 90));
    setTimeout(() => this.blip(1980, 0.05, 0.45, 'sine'), 380);
  }

  fanfare(): void {
    const notes = [523, 659, 784, 1046];
    notes.forEach((f, i) => setTimeout(() => this.blip(f, 0.12, 0.5, 'triangle'), i * 160));
  }

  defeat(): void {
    const notes = [392, 330, 262, 196];
    notes.forEach((f, i) => setTimeout(() => this.blip(f, 0.1, 0.6, 'sawtooth'), i * 220));
  }

  private blip(freq: number, peak: number, decay: number, type: OscillatorType): void {
    if (!this.ctx || !this.enabled) return;
    const osc = this.ctx.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    const g = this.env(peak, 0.003, decay);
    osc.connect(g).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + decay + 0.05);
  }
}
