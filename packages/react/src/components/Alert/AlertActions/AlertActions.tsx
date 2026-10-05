'use client';

import { RefAttributes } from 'react';

import { AlertActionsProps } from './AlertActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Alert`
 */
export const AlertActions = ({ ref, ...inProps }: AlertActionsProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESAlertActions',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-alert-actions')} style={style}>
      {children}
    </div>
  );
};
