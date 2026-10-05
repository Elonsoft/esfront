'use client';

import { RefAttributes } from 'react';

import { GallerySwiperImageProps } from './GallerySwiperImage.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Gallery`
 */
export const GallerySwiperImage = ({ ref, ...inProps }: GallerySwiperImageProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, src, alt } = useDefaultProps({
    props: inProps,
    name: 'ESGallerySwiperImage',
  });

  return (
    <div ref={ref} className={clsx('es-gallery-swiper-image', className)} style={style}>
      <img alt={alt} className="es-gallery-swiper-image__image" src={src} />
    </div>
  );
};
