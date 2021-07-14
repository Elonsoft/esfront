export interface AudioPlayerProviderVolumeStorage {
  set: (value: string) => void;
  get: () => string;
}

export interface AudioPlayerProviderProps {
  volumeStorage?: AudioPlayerProviderVolumeStorage;
}
