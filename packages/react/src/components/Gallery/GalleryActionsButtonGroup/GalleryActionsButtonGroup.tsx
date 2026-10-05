'use client';

import { RefAttributes } from 'react';

import { GalleryActionsButtonGroupProps } from './GalleryActionsButtonGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Gallery`
 */
export const GalleryActionsButtonGroup = ({
  ref,
  ...inProps
}: GalleryActionsButtonGroupProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryActionsButtonGroup',
  });

  return (
    <div ref={ref} className={clsx('es-gallery-actions-button-group', className)} style={style}>
      {children}
    </div>
  );
};
