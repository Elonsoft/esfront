'use client';

import { RefAttributes } from 'react';

import { FiltersContentProps } from './FiltersContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Filters`
 */
export const FiltersContent = ({ ref, ...inProps }: FiltersContentProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFiltersContent' });

  return (
    <div ref={ref} className={clsx('es-filters-content', className)} style={style}>
      {children}
    </div>
  );
};
