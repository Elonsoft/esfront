'use client';

import { RefAttributes } from 'react';

import { SFSFiltersGroupProps } from './SFSFiltersGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `SFS`
 */
export const SFSFiltersGroup = ({ ref, ...inProps }: SFSFiltersGroupProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style, title } = useDefaultProps({
    props: inProps,
    name: 'ESSFSFiltersGroup',
  });

  return (
    <div ref={ref} className={clsx('es-sfs-filters-group', className)} style={style}>
      {!!title && <div className="es-sfs-filters-group__title body200-w40">{title}</div>}
      {children}
    </div>
  );
};
