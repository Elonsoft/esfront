'use client';

import { RefAttributes } from 'react';

import { BannerActionsProps } from './BannerActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Banner`
 */
export const BannerActions = ({ ref, ...inProps }: BannerActionsProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESBannerActions',
  });

  return (
    <div ref={ref} className={clsx('es-banner-actions', className)} style={style}>
      {children}
    </div>
  );
};
