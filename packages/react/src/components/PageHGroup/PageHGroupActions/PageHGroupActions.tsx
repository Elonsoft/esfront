'use client';

import { RefAttributes } from 'react';

import { PageHGroupActionsProps } from './PageHGroupActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `PageHGroup`
 */
export const PageHGroupActions = ({ ref, ...inProps }: PageHGroupActionsProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupActions',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-page-h-group-actions')} style={style}>
      {children}
    </div>
  );
};
