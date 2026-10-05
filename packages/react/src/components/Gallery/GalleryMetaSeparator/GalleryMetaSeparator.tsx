'use client';

import { RefAttributes } from 'react';

import { GalleryMetaSeparatorProps } from './GalleryMetaSeparator.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Gallery`
 */
export const GalleryMetaSeparator = ({
  ref,
  ...inProps
}: GalleryMetaSeparatorProps & RefAttributes<HTMLDivElement>) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryMetaSeparator',
  });

  return <div ref={ref} className={clsx('es-gallery-meta-separator', className)} style={style} />;
};
