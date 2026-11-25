'use client';

import { RefAttributes } from 'react';

import { FiltersHeaderProps } from './FiltersHeader.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `Filters`
 */
export const FiltersHeader = ({ ref, ...inProps }: FiltersHeaderProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESFiltersHeader',
  });

  const { children, className, style, onClear, labelFilters, labelReset } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESFiltersHeader',
  });

  return (
    <div ref={ref} className={clsx('es-filters-header', className)} style={style}>
      <div className="es-filters-header__title h5">
        {labelFilters}
        {!!onClear && (
          <Button color="tertiary" size="300" variant="text" onClick={onClear}>
            {labelReset}
          </Button>
        )}
      </div>
      {!!children && <div className="es-filters-header__children">{children}</div>}
    </div>
  );
};
