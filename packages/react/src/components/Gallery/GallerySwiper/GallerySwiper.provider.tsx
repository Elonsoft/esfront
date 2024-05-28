import { ReactNode, useMemo, useState } from 'react';

import { GallerySwiperContext } from './GallerySwiper.context';

import { SwiperImperativeActions } from '../../Swiper';

export const GallerySwiperProvider = ({ children }: { children?: ReactNode }) => {
  const [actions, setActions] = useState<SwiperImperativeActions | null>(null);

  const value = useMemo(() => {
    return { actions, setActions };
  }, [actions, setActions]);

  return <GallerySwiperContext.Provider value={value}>{children}</GallerySwiperContext.Provider>;
};
