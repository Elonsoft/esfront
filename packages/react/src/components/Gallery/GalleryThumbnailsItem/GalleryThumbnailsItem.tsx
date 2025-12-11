import { GalleryThumbnailsItemProps } from './GalleryThumbnailsItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { ButtonBase } from '../../ButtonBase';

export const GalleryThumbnailsItem = (inProps: GalleryThumbnailsItemProps) => {
  const { className, style, isActive, onClick, children } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnailsItem',
  });

  return (
    <ButtonBase
      className={clsx('es-gallery-thumbnails-item', isActive && 'es-gallery-thumbnails-item--active', className)}
      style={style}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};
