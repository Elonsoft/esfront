import { ReactNode } from 'react';
export interface AudioPlayerProviderVolumeStorage {
  set: (value: string) => void;
  get: () => string;
}

export interface AudioPlayerProviderProps {
  children?: ReactNode;
  volumeStorage?: AudioPlayerProviderVolumeStorage;
}
