'use client';

import { RefAttributes } from 'react';

import { ErrorPageDescriptionProps } from './ErrorPageDescription.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageDescription = ({
  ref,
  ...inProps
}: ErrorPageDescriptionProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageDescription',
  });

  return (
    <div ref={ref} className={clsx('es-error-page-description', 'body200', className)} style={style}>
      {children}
    </div>
  );
};
