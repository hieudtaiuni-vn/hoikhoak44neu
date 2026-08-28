// Simple Web Audio API gentle background melody generator for nostalgia reunion
class BackgroundMusicPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: any = null;

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

  private start() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.isPlaying = true;

      // Play gentle pentatonic notes loop (reminiscent of school days)
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C4, D4, E4, G4, A4, C5
      let index = 0;

      const playNote = () => {
        if (!this.isPlaying || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[index % notes.length], this.ctx.currentTime);
        index++;

        gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 2.6);

        this.timer = setTimeout(playNote, 1200);
      };

      playNote();
    } catch (e) {
      console.error("Audio error:", e);
      this.isPlaying = false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch (e) {}
      this.ctx = null;
    }
  }
}

export const bgMusic = new BackgroundMusicPlayer();

export function trackGoogleAnalytics(action: string, category: string, label: string) {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
  console.log(`[GA4 Track] ${category} / ${action} / ${label}`);
}
