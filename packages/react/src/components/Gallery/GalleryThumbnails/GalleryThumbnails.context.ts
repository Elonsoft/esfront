import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryThumbnailsContextValue {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const GalleryThumbnailsContext = createContext<GalleryThumbnailsContextValue | null>(null);

/**
 * The hook that returns the gallery thumbnails context. Throws when used outside of
 * `GalleryThumbnailsProvider`.
 */
export const useGalleryThumbnailsContext = () => {
  const value = useContext(GalleryThumbnailsContext);

  if (value === null) {
    throw new Error('Not provider for GalleryThumbnailsContext.');
  }

  return value;
};
