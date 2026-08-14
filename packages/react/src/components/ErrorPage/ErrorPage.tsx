'use client';

import { ErrorPageProps } from './ErrorPage.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * The layout container of a full-page error screen, composed from the `ErrorPage*` parts.
 */
export const ErrorPage = (inProps: ErrorPageProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPage',
  });

  return (
    <div className={clsx('es-error-page', className)} style={style}>
      {children}
    </div>
  );
};
