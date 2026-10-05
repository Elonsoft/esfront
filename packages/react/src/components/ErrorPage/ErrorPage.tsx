'use client';

import { RefAttributes } from 'react';

import { ErrorPageProps } from './ErrorPage.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * The layout container of a full-page error screen, composed from the `ErrorPage*` parts.
 */
export const ErrorPage = ({ ref, ...inProps }: ErrorPageProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPage',
  });

  return (
    <div ref={ref} className={clsx('es-error-page', className)} style={style}>
      {children}
    </div>
  );
};
