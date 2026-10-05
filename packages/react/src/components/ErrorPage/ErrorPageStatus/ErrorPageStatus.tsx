'use client';

import { RefAttributes } from 'react';

import { ErrorPageStatusProps } from './ErrorPageStatus.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageStatus = ({ ref, ...inProps }: ErrorPageStatusProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageStatus',
  });

  return (
    <div ref={ref} className={clsx('es-error-page-status', className)} style={style}>
      {children}
    </div>
  );
};
