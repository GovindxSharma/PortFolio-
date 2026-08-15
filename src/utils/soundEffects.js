// Web Audio API Synthesizer for Solo Leveling System Sound Effects
// Completely zero-asset, instant, and reliable in all browsers!

class SoundFXEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("solo_leveling_sound_muted") === "true";
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("solo_leveling_sound_muted", String(this.muted));
    if (!this.muted) {
      this.playClick();
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Futuristic high-tech interface click
  playClick() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.debug("Audio play error", e);
    }
  }

  // Subtle hover pulse
  playHover() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.linearRampToValueAtTime(680, now + 0.05);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      console.debug("Audio play error", e);
    }
  }

  // Authentic Solo Leveling System Quest / Notification Chime
  playSystemAlert() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [587.33, 880, 1174.66, 1760]; // D5, A5, D6, A6
      const now = this.ctx.currentTime;

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + i * 0.07;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.3);
      });
    } catch (e) {
      console.debug("Audio play error", e);
    }
  }

  // Epic "ARISE" (일어서라) Shadow Resonance Roar
  playArise() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Sub-bass rumble
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(120, now);
      osc1.frequency.exponentialRampToValueAtTime(35, now + 1.2);

      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      // Low pass filter for dark rumble
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.linearRampToValueAtTime(80, now + 1.2);

      osc1.connect(filter);
      filter.connect(gain1);
      gain1.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 1.2);

      // Mystic high chord resonance
      const chords = [440, 554.37, 659.25, 830.61]; // A major 7th ethereal resonance
      chords.forEach((freq, idx) => {
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        const startTime = now + 0.1 + idx * 0.05;

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(freq, startTime);
        osc2.frequency.exponentialRampToValueAtTime(freq * 1.5, startTime + 0.9);

        gain2.gain.setValueAtTime(0.12, startTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, startTime + 0.9);

        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);

        osc2.start(startTime);
        osc2.stop(startTime + 0.9);
      });
    } catch (e) {
      console.debug("Audio play error", e);
    }
  }

  // Level Up / S-Rank Fanfare
  playLevelUp() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const fanfare = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98]; // C, E, G, C, E, G

      fanfare.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + i * 0.08;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch (e) {
      console.debug("Audio play error", e);
    }
  }
}

export const soundFX = new SoundFXEngine();
