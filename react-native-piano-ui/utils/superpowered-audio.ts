import { NativeModules } from 'react-native';
import { NoteName, ChordType } from '../types/music';

const { RCTNativeSuperpoweredEngine } = NativeModules;

type SoundType = 'BALAFON' | 'PIANO' | 'RHODES' | 'STEEL_DRUM' | 'PLUCK' | 'PAD' | 'BASS' | 'SINE';

// Available sound types and their corresponding MP3 files
const AVAILABLE_SOUNDS: Record<SoundType, any> = {
  BALAFON: require('../assets/sounds/BALAFON.mp3'),
  PIANO: require('../assets/sounds/PIANO.mp3'),
  RHODES: require('../assets/sounds/RHODES EP.mp3'),
  STEEL_DRUM: require('../assets/sounds/STEEL DRUM.mp3'),
  PLUCK: require('../assets/sounds/PLUCK.mp3'),
  PAD: require('../assets/sounds/PAD.mp3'),
  BASS: require('../assets/sounds/BASS.mp3'),
  SINE: require('../assets/sounds/SINE.mp3'),
};

class SuperpoweredAudioManager {
  private currentInstrument: SoundType = 'PIANO';
  private isInitialized: boolean = false;

  constructor() {
    this.init();
  }

  private async init() {
    if (!this.isInitialized) {
      await RCTNativeSuperpoweredEngine.initSuperpowered();
      await this.loadInstruments();
      this.isInitialized = true;
    }
  }

  private async loadInstruments() {
    for (const [name, source] of Object.entries(AVAILABLE_SOUNDS)) {
      await RCTNativeSuperpoweredEngine.loadInstrument(source, name);
    }
    await this.setInstrument('PIANO');
  }

  async playChord(note: NoteName, chordType: ChordType) {
    await RCTNativeSuperpoweredEngine.playNote(this.currentInstrument, this.getNoteNumber(note));
  }

  async stopChord() {
    await RCTNativeSuperpoweredEngine.stopNote(this.currentInstrument);
  }

  async setInstrument(instrument: SoundType) {
    if (AVAILABLE_SOUNDS[instrument]) {
      this.currentInstrument = instrument;
      await RCTNativeSuperpoweredEngine.setCurrentInstrument(instrument);
    }
  }

  getAvailableInstruments(): SoundType[] {
    return Object.keys(AVAILABLE_SOUNDS) as SoundType[];
  }

  private getNoteNumber(note: NoteName): number {
    // Convert note name to MIDI note number (C4 = 60)
    const noteMap = {
      'C': 60, 'C#': 61, 'D': 62, 'D#': 63,
      'E': 64, 'F': 65, 'F#': 66, 'G': 67,
      'G#': 68, 'A': 69, 'A#': 70, 'B': 71
    };
    return noteMap[note] || 60;
  }
}

export const superpoweredAudioManager = new SuperpoweredAudioManager(); 