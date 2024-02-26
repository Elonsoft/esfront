import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryContextValue {
  items: any[];
  item: number;
  setItem: Dispatch<SetStateAction<number>>;
  onClose?: () => void;
}

export const GalleryContext = createContext<GalleryContextValue | null>(null);

export const useGalleryContext = () => {
  const value = useContext(GalleryContext);

  if (value === null) {
    throw new Error('Not provider for GalleryContext.');
  }

  return value;
};
