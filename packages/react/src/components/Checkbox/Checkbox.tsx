import * as React from 'react';

import { CheckboxProps } from './Checkbox.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { CheckboxIcon } from './CheckboxIcon';
import {
  IconCheckLarge,
  IconCheckMedium,
  IconCheckSmall,
  IconIndeterminateLarge,
  IconIndeterminateMedium,
  IconIndeterminateSmall,
} from './icons';

import { SwitchBase } from '../SwitchBase';

const defaultIcon = {
  large: (
    <CheckboxIcon>
      <IconCheckLarge />
    </CheckboxIcon>
  ),
  medium: (
    <CheckboxIcon>
      <IconCheckMedium />
    </CheckboxIcon>
  ),
  small: (
    <CheckboxIcon>
      <IconCheckSmall />
    </CheckboxIcon>
  ),
};

const defaultIndeterminateIcon = {
  large: (
    <CheckboxIcon>
      <IconIndeterminateLarge />
    </CheckboxIcon>
  ),
  medium: (
    <CheckboxIcon>
      <IconIndeterminateMedium />
    </CheckboxIcon>
  ),
  small: (
    <CheckboxIcon>
      <IconIndeterminateSmall />
    </CheckboxIcon>
  ),
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESCheckbox' });
  const {
    size = 'medium',
    variant = 'contained',
    color = 'primary',
    checkedIcon = defaultIcon[size],
    icon: iconProp = defaultIcon[size],
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon[size],
    iconMapping = defaultIcon,
    inputProps,
    className,
    checked,
    disabled,
    error,
    ...other
  } = props;

  const icon = indeterminate ? indeterminateIconProp : iconProp ?? iconMapping[size];
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon ?? iconMapping[size];

  return (
    <SwitchBase
      ref={ref}
      TouchRippleProps={{ center: true }}
      checked={checked}
      checkedIcon={indeterminateIcon}
      className={clsx(
        className,
        'es-checkbox',
        `es-checkbox--color--${color}`,
        `es-checkbox--size--${size}`,
        `es-checkbox--variant--${variant}`,
        indeterminate && 'es-checkbox--indeterminate',
        disabled && 'es-checkbox--disabled',
        error && 'es-checkbox--error'
      )}
      disabled={disabled}
      icon={icon}
      inputProps={{
        ...{ 'data-indeterminate': indeterminate },
        ...inputProps,
      }}
      type="checkbox"
      {...other}
    />
  );
});
