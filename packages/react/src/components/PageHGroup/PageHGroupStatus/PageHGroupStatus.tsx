'use client';

import { RefAttributes } from 'react';

import { PageHGroupStatusProps } from './PageHGroupStatus.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `PageHGroup`
 */
export const PageHGroupStatus = ({ ref, ...inProps }: PageHGroupStatusProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupStatus',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-page-h-group-status', 'body100')} style={style}>
      {children}
    </div>
  );
};
