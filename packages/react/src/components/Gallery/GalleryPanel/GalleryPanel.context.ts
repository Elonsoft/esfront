import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryPanelContextValue {
  position: 'top' | 'bottom';
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export const GalleryPanelContext = createContext<GalleryPanelContextValue | null>(null);

/**
 * The hook that returns the gallery panel context, or `null` when used outside of `GalleryPanel`.
 */
export const useGalleryPanelContext = () => {
  return useContext(GalleryPanelContext);
};
