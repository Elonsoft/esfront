'use client';

import { RefAttributes } from 'react';

import { GalleryThumbnailsItemProps } from './GalleryThumbnailsItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { ButtonBase } from '../../ButtonBase';

/**
 * @see `Gallery`
 */
export const GalleryThumbnailsItem = ({
  ref,
  ...inProps
}: GalleryThumbnailsItemProps & RefAttributes<HTMLButtonElement>) => {
  const { className, style, isActive, onClick, children } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryThumbnailsItem',
  });

  return (
    <ButtonBase
      ref={ref}
      className={clsx('es-gallery-thumbnails-item', isActive && 'es-gallery-thumbnails-item--active', className)}
      style={style}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
};
