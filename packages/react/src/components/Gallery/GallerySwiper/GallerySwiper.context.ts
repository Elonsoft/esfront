import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { SwiperImperativeActions } from '../../Swiper';

export interface GallerySwiperContextValue {
  actions: SwiperImperativeActions | null;
  setActions: Dispatch<SetStateAction<SwiperImperativeActions | null>>;
}

export const GallerySwiperContext = createContext<GallerySwiperContextValue | null>(null);

/**
 * The hook that returns the gallery swiper context. Throws when used outside of `GallerySwiperProvider`.
 */
export const useGallerySwiperContext = () => {
  const value = useContext(GallerySwiperContext);

  if (value === null) {
    throw new Error('Not provider for GallerySwiperContext.');
  }

  return value;
};
