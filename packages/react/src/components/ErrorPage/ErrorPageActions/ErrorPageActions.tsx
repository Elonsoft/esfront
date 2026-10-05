'use client';

import { RefAttributes } from 'react';

import { ErrorPageActionsProps } from './ErrorPageActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `ErrorPage`
 */
export const ErrorPageActions = ({ ref, ...inProps }: ErrorPageActionsProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageActions',
  });

  return (
    <div ref={ref} className={clsx('es-error-page-actions', className)} style={style}>
      {children}
    </div>
  );
};
