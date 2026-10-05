'use client';

import { RefAttributes } from 'react';

import { TabBarProps } from './TabBar.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * TabBar allows movement between primary destinations in an app.
 */
export const TabBar = ({ ref, ...inProps }: TabBarProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESTabBar',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-tab-bar')} style={style}>
      {children}
    </div>
  );
};
