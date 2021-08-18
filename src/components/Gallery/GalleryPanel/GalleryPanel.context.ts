import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryPanelContextValue {
  position: 'top' | 'bottom';
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export const GalleryPanelContext = createContext<GalleryPanelContextValue | null>(null);

export const useGalleryPanelContext = () => {
  return useContext(GalleryPanelContext);
};
