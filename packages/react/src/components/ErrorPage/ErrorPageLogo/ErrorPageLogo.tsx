'use client';

import { RefAttributes } from 'react';

import { ErrorPageLogoProps } from './ErrorPageLogo.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageLogo = ({ ref, ...inProps }: ErrorPageLogoProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageLogo',
  });

  return (
    <div ref={ref} className={clsx('es-error-page-logo', className)} style={style}>
      {children}
    </div>
  );
};
