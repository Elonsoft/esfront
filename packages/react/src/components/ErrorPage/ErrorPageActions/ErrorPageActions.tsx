'use client';

import { ErrorPageActionsProps } from './ErrorPageActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

export const ErrorPageActions = (inProps: ErrorPageActionsProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageActions',
  });

  return (
    <div className={clsx('es-error-page-actions', className)} style={style}>
      {children}
    </div>
  );
};
