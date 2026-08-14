'use client';

import { AlertTitleProps } from './AlertTitle.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Alert`
 */
export const AlertTitle = (inProps: AlertTitleProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESAlertTitle',
  });

  return (
    <div className={clsx(className, 'es-alert-title', 'body100-w50')} style={style}>
      {children}
    </div>
  );
};
