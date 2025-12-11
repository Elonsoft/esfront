import * as React from 'react';

import { RadioProps } from './Radio.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { createChainedFunction } from '@mui/material';

import { RadioIcon } from './RadioIcon';

import { useRadioGroup } from '../RadioGroup';
import { SwitchBase } from '../SwitchBase';

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

const defaultCheckedIcon = <RadioIcon />;
const defaultIcon = <RadioIcon />;

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(function Radio(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESRadio' });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    inputProps,
    size = 'medium',
    className,
    checked: checkedProp,
    disabled,
    error,
    variant = 'contained',
    onChange: onChangeProp,
    name: nameProp,
    ...other
  } = props;

  const radioGroup = useRadioGroup();

  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp as never, radioGroup?.onChange as never);
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }

    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return (
    <SwitchBase
      ref={ref}
      TouchRippleProps={{ center: true }}
      checked={checked}
      checkedIcon={checkedIcon}
      className={clsx(
        'es-radio',
        error && 'es-radio--error',
        disabled && 'es-radio--disabled',
        `es-radio--color--${color}`,
        `es-radio--size--${size}`,
        `es-radio--variant--${variant}`,
        className
      )}
      disabled={disabled}
      icon={iconProp}
      inputProps={{
        ...inputProps,
      }}
      name={name}
      type="radio"
      onChange={onChange}
      {...other}
    />
  );
});
