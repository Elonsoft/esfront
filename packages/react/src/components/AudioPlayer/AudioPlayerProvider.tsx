import { useCallback, useMemo, useState } from 'react';

import { AudioPlayerProviderProps, AudioPlayerProviderVolumeStorage } from './AudioPlayerProvider.types';

import { AudioPlayerContext } from './AudioPlayer.context';

export class AudioPlayerProviderVolumeStorageLocal implements AudioPlayerProviderVolumeStorage {
  private key: string;

  constructor(key = 'ESAudioPlayerVolume') {
    this.key = key;
  }

  set = (value: string) => {
    localStorage.setItem(this.key, value);
  };

  get = () => {
    return localStorage.getItem(this.key) || '';
  };
}

export class AudioPlayerProviderVolumeStorageMemory implements AudioPlayerProviderVolumeStorage {
  private volume = '100';

  set = (value: string) => {
    this.volume = value;
  };

  get = () => {
    return this.volume;
  };
}

const DEFAULT_VOLUME_STORAGE = new AudioPlayerProviderVolumeStorageLocal();

/**
 * The provider for the audio player volume storage.
 */
export const AudioPlayerProvider = ({ children, volumeStorage = DEFAULT_VOLUME_STORAGE }: AudioPlayerProviderProps) => {
  const [volume, setVolumeState] = useState(+volumeStorage.get() || 100);

  const setVolume = useCallback(
    (value: number) => {
      setVolumeState(value);
      volumeStorage.set(value.toString());
    },
    [volumeStorage, setVolumeState]
  );

  const value = useMemo(() => {
    return { volume, setVolume };
  }, [volume, setVolume]);

  return <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>;
};
