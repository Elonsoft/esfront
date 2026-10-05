'use client';

import { RefAttributes } from 'react';

import { ErrorPageFooterProps } from './ErrorPageFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageFooter = ({ ref, ...inProps }: ErrorPageFooterProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageFooter',
  });

  return (
    <div ref={ref} className={clsx('es-error-page-footer', 'body100', className)} style={style}>
      {children}
    </div>
  );
};
