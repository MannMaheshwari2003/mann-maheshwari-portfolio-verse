
import { Howl } from 'howler';

class SoundManager {
  private sounds: { [key: string]: Howl } = {};
  private enabled: boolean = true;
  private volume: number = 0.3;

  constructor() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.enabled = !prefersReducedMotion;
    
    this.initSounds();
  }

  private initSounds() {
    if (!this.enabled) return;

    // Hover sound for buttons
    this.sounds.hover = new Howl({
      src: ['data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhETiz2+zYfiwFL4DN8tiTOA0PZLLr6aVPFRVKp9/0xHIkBTuS2e3WfywESHXH8N6QQAQUXrTp66hVFQxGn+DyvmwhETiz2+zWgCwGK4DN8tiTOgsQZbLr6aVPFxVKp9/0xHIlBTuS2e3WfywAAABAf8BAAAF='],
      volume: this.volume * 0.5,
      sprite: {
        hover: [0, 200]
      }
    });

    // Click sound for buttons
    this.sounds.click = new Howl({
      src: ['data:audio/wav;base64,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'],
      volume: this.volume * 0.7,
      sprite: {
        click: [0, 150]
      }
    });

    // Ambient background sound
    this.sounds.ambient = new Howl({
      src: ['data:audio/wav;base64,UklGRuQCAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQACAAC2tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1'],
      volume: this.volume * 0.2,
      loop: true,
      autoplay: false
    });
  }

  play(soundName: string, sprite?: string) {
    if (!this.enabled || !this.sounds[soundName]) return;
    
    if (sprite && this.sounds[soundName]) {
      this.sounds[soundName].play(sprite);
    } else {
      this.sounds[soundName].play();
    }
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(sound => {
      sound.volume(this.volume);
    });
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
    if (!this.enabled) {
      Object.values(this.sounds).forEach(sound => sound.stop());
    }
  }

  startAmbient() {
    if (this.enabled && this.sounds.ambient) {
      this.sounds.ambient.play();
    }
  }

  stopAmbient() {
    if (this.sounds.ambient) {
      this.sounds.ambient.stop();
    }
  }
}

export const soundManager = new SoundManager();
