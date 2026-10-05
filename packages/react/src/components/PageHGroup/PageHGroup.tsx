'use client';

import { RefAttributes } from 'react';

import { PageHGroupProps } from './PageHGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * This component represents a heading and related content.
 */
export const PageHGroup = ({ ref, ...inProps }: PageHGroupProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroup',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-page-h-group')} style={style}>
      {children}
    </div>
  );
};
