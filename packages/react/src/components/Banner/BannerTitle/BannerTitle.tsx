'use client';

import { RefAttributes } from 'react';

import { BannerTitleProps } from './BannerTitle.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Banner`
 */
export const BannerTitle = ({ ref, ...inProps }: BannerTitleProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESBannerTitle',
  });

  return (
    <div ref={ref} className={clsx('es-banner-title', 'body100-w50', className)} style={style}>
      {children}
    </div>
  );
};
