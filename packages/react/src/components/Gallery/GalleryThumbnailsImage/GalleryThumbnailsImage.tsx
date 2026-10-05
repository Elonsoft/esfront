'use client';

import { RefAttributes } from 'react';

import { GalleryThumbnailsImageProps } from './GalleryThumbnailsImage.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Gallery`
 */
export const GalleryThumbnailsImage = ({
  ref,
  ...inProps
}: GalleryThumbnailsImageProps & RefAttributes<HTMLImageElement>) => {
  const { className, style, src, alt } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnailsImage',
  });

  return <img ref={ref} alt={alt} className={clsx('es-gallery-thumbnails-image', className)} src={src} style={style} />;
};
