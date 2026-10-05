'use client';

import { RefAttributes } from 'react';

import { FiltersProps } from './Filters.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/** The collection of components for building a ecommerce filters. */
export const Filters = ({ ref, ...inProps }: FiltersProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFilters' });

  return (
    <div ref={ref} className={clsx('es-filters', className)} style={style}>
      {children}
    </div>
  );
};
