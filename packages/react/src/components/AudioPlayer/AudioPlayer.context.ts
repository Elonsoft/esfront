import { createContext, useContext } from 'react';

export interface AudioPlayerContextValue {
  volume: number;
  setVolume: (value: number) => void;
}

export const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null);

export const useAudioPlayerContext = () => {
  const value = useContext(AudioPlayerContext);

  if (value === null) {
    throw new Error('Not provider for AudioPlayerContext.');
  }

  return value;
};
