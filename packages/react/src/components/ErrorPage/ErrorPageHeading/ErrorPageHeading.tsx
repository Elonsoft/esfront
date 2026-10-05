'use client';

import { RefAttributes } from 'react';

import { ErrorPageHeadingProps } from './ErrorPageHeading.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageHeading = ({ ref, ...inProps }: ErrorPageHeadingProps & RefAttributes<HTMLHeadingElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageHeading',
  });

  return (
    <h1 ref={ref} className={clsx('es-error-page-heading', 'h2', className)} style={style}>
      {children}
    </h1>
  );
};
