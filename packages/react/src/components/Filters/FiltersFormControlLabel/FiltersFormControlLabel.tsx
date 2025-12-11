import { FiltersFormControlLabelProps } from './FiltersFormControlLabel.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { FormControlLabel } from '../../FormControlLabel';

export const FiltersFormControlLabel = (inProps: FiltersFormControlLabelProps) => {
  const { className, label, count, ...props } = useDefaultProps({ props: inProps, name: 'ESFiltersFormControlLabel' });

  return (
    <FormControlLabel
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
