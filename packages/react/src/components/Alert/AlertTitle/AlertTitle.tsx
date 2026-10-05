'use client';

import { RefAttributes } from 'react';

import { AlertTitleProps } from './AlertTitle.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Alert`
 */
export const AlertTitle = ({ ref, ...inProps }: AlertTitleProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESAlertTitle',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-alert-title', 'body100-w50')} style={style}>
      {children}
    </div>
  );
};
