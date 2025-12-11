import { GallerySwiperImageProps } from './GallerySwiperImage.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const GallerySwiperImage = (inProps: GallerySwiperImageProps) => {
  const { className, style, src, alt } = useDefaultProps({
    props: inProps,
    name: 'ESGallerySwiperImage',
  });

  return (
    <div className={clsx('es-gallery-swiper-image', className)} style={style}>
      <img alt={alt} className="es-gallery-swiper-image__image" src={src} />
    </div>
  );
};
