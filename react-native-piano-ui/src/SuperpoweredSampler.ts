import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { SuperpoweredSampler } = NativeModules;

export interface EnvelopeParams {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface FilterParams {
  hpfFreq: number;
  hpfResonance: number;
  lpfFreq: number;
  lpfResonance: number;
}

export interface ReverbParams {
  enabled: boolean;
  mix: number;
  roomSize: number;
  decay: number;
  predelay: number;
  damping: number;
}

export interface SampleParameters {
  pitch: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  hpf: number;
  hpfResonance: number;
  lpf: number;
  lpfResonance: number;
  reverbEnabled: number;
  reverbMix: number;
  reverbRoomSize: number;
  reverbDecay: number;
  reverbPredelay: number;
  reverbDamping: number;
}

// Only create event emitter if the module exists
export const SuperpoweredEvents = SuperpoweredSampler ? new NativeEventEmitter(SuperpoweredSampler) : null;

// Export the native module interface
export default SuperpoweredSampler; 