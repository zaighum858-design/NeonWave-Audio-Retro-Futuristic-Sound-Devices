// Retro-futuristic Ambient Web Audio Synth engine
class SynthwaveAmbienceEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  private chords = [
    [130.81, 164.81, 196.00, 246.94], // Cmaj7
    [110.00, 130.81, 164.81, 196.00], // Am7
    [146.83, 174.61, 220.00, 261.63], // Dm7
    [98.00, 123.47, 146.83, 196.00],  // G7
    [123.47, 155.56, 185.00, 233.08], // Bmaj7 (vaporwave modulation)
  ];
  private chordIndex = 0;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // Gentle non-intrusive volume
      this.masterGain.connect(this.ctx.destination);

      this.isPlaying = true;
      this.playNextChord();
      this.intervalId = window.setInterval(() => {
        if (this.isPlaying) {
          this.playNextChord();
        }
      }, 5000);
    } catch {
      this.isPlaying = false;
    }
  }

  private playNextChord() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const notes = this.chords[this.chordIndex];
    this.chordIndex = (this.chordIndex + 1) % this.chords.length;

    // Ocean filter pink noise simulation
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.02;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.linearRampToValueAtTime(550, now + 2.5);
    filter.frequency.linearRampToValueAtTime(320, now + 5.0);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.015, now);
    noiseGain.gain.linearRampToValueAtTime(0.04, now + 2.5);
    noiseGain.gain.linearRampToValueAtTime(0.015, now + 5.0);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    whiteNoise.start(now);
    whiteNoise.stop(now + 5.2);

    // Warm analog sawtooth oscillators for the synth chord
    notes.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      const oscFilter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      // Slight chorus detune
      osc.detune.setValueAtTime((Math.random() - 0.5) * 12, now);

      oscFilter.type = 'lowpass';
      oscFilter.frequency.setValueAtTime(500, now);
      oscFilter.frequency.exponentialRampToValueAtTime(1400, now + 1.2);
      oscFilter.frequency.exponentialRampToValueAtTime(450, now + 4.8);

      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.025, now + 1.0);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 4.9);

      osc.connect(oscFilter);
      oscFilter.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 5.0);
    });
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);
    }
  }
}

export const synthAudio = new SynthwaveAmbienceEngine();
