import { forwardRef } from 'react';

import { SwitchBaseProps } from './SwitchBase.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useFormControl } from '@mui/material';

import { useControlled } from '../../hooks';
import { ButtonBase } from '../ButtonBase';

export const SwitchBase = forwardRef<HTMLButtonElement | null, SwitchBaseProps>(function SwitchBase(
  inProps: SwitchBaseProps,
  ref
) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESSwitchBase',
  });

  const [checked, setCheckedState] = useControlled(Boolean(defaultChecked), checkedProp);

  const muiFormControl = useFormControl();

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event as never);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLButtonElement, Element>) => {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event as never);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    const newChecked = event.target.checked;

    setCheckedState(newChecked);

    if (onChange) {
      onChange(event, newChecked);
    }
  };

  let disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  const hasLabelFor = type === 'checkbox' || type === 'radio';

  return (
    <ButtonBase
      ref={ref}
      centerRipple
      className={clsx(
        className,
        'es-switch-base',
        checked && 'es-switch-base--checked',
        disabled && 'es-switch-base--disabled',
        edge && `es-switch-base--edge--${edge}`
      )}
      component="span"
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      role={undefined}
      tabIndex={null}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...other}
    >
      <input
        ref={inputRef}
        autoFocus={autoFocus}
        checked={checkedProp}
        className="es-switch-base__input"
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={hasLabelFor ? id : undefined}
        name={name}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        type={type}
        value={value}
        onChange={handleInputChange}
        //{...(type === 'checkbox' && value === undefined ? {} : { value })}
        {...inputProps}
      />
      {checked ? checkedIcon : icon}
    </ButtonBase>
  );
});
