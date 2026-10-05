'use client';

import { RefAttributes } from 'react';

import { EmptyStateCompactProps } from './EmptyStateCompact.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyStateCompact = ({ ref, ...inProps }: EmptyStateCompactProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESEmptyStateCompact',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-empty-state-compact', 'caption')} style={style}>
      {children}
    </div>
  );
};
