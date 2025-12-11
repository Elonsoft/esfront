import { GalleryThumbnailsImageProps } from './GalleryThumbnailsImage.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const GalleryThumbnailsImage = (inProps: GalleryThumbnailsImageProps) => {
  const { className, style, src, alt } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnailsImage',
  });

  return <img alt={alt} className={clsx('es-gallery-thumbnails-image', className)} src={src} style={style} />;
};
