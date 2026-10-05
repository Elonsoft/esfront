'use client';

import { RefAttributes } from 'react';

import { FiltersFormControlLabelProps } from './FiltersFormControlLabel.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { FormControlLabel } from '../../FormControlLabel';

/**
 * @see `Filters`
 */
export const FiltersFormControlLabel = ({
  ref,
  ...inProps
}: FiltersFormControlLabelProps & RefAttributes<HTMLLabelElement>) => {
  const { className, label, count, ...props } = useDefaultProps({ props: inProps, name: 'ESFiltersFormControlLabel' });

  return (
    <FormControlLabel
      ref={ref}
      className={clsx('es-filters-form-control-label', className)}
      label={
        <>
          {label}
          <span className="es-filters-form-control-label__count caption">{count}</span>
        </>
      }
      {...props}
      slotProps={{ ...props.slotProps, typography: { className: 'body100', ...props.slotProps?.typography } }}
    />
  );
};
