import { FormControlLabelProps } from './FormControlLabel.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * Use this component if you want to display an extra label for the Checkbox or Radio.
 */
export const FormControlLabel = (inProps: FormControlLabelProps) => {
  const {
    className,
    style,
    control,
    label,
    labelPlacement = 'end',
    slots = {},
    slotProps = {},
  } = useDefaultProps({ props: inProps, name: 'ESFormControlLabel' });

  const LabelComponent = slots.typography ?? 'div';

  const labelProps = {
    ...slotProps.typography,
    className: clsx('es-form-control-label__label', slotProps.typography?.className || 'subtitle1'),
  };

  return (
    <label
      className={clsx(className, 'es-form-control-label', `es-form-control-label--label-placement--${labelPlacement}`)}
      style={style}
    >
      {control}
      <LabelComponent {...labelProps}>{label}</LabelComponent>
    </label>
  );
};
