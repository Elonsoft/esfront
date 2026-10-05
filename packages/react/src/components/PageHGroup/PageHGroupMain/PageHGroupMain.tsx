'use client';

import { RefAttributes } from 'react';

import { PageHGroupMainProps } from './PageHGroupMain.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `PageHGroup`
 */
export const PageHGroupMain = ({ ref, ...inProps }: PageHGroupMainProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupMain',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-page-h-group-main')} style={style}>
      {children}
    </div>
  );
};
