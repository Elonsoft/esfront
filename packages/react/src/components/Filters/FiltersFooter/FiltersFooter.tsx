'use client';

import { RefAttributes } from 'react';

import { FiltersFooterProps } from './FiltersFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `Filters`
 */
export const FiltersFooter = ({ ref, ...inProps }: FiltersFooterProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFiltersFooter' });

  return (
    <div ref={ref} className={clsx('es-filters-footer', className)} style={style}>
      {children}
    </div>
  );
};
