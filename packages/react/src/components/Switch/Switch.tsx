import React from 'react';

import { SwitchProps } from './Switch.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useControlled } from '../../hooks/useControlled';
import { ButtonBase } from '../ButtonBase';

/**
 * Switches toggle the state of a single setting on or off.
 */
export const Switch = (inProps: SwitchProps) => {
  const {
    className,
    checked: checkedProp,
    indeterminate,
    onChange,
    type = 'checkbox',
    disabled,
    defaultChecked,
    color = 'secondary',
    size = 'medium',
    autoFocus,
    id,
    name,
    readOnly,
    value,
    style,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSwitch',
  });
  const [checked, setCheckedState] = useControlled(defaultChecked, checkedProp);

  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setCheckedState(e.target.checked);

      if (onChange) {
        onChange(e);
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!readOnly && e.key === 'Enter') {
      e.preventDefault();
      setCheckedState(!checked);

      if (onChange) {
        onChange({ target: { name, checked: !checked } } as any);
      }
    }
  };

  return (
    <div
      className={clsx(
        'es-switch',
        checked && 'es-switch--checked',
        disabled && 'es-switch--disabled',
        indeterminate && 'es-switch--indeterminate',
        `es-switch--size--${size}`,
        `es-switch--color--${color}`,
        className
      )}
      style={style}
    >
      <ButtonBase disableTouchRipple className="es-switch__button" component="span" disabled={disabled} tabIndex={-1}>
        <input
          autoFocus={autoFocus}
          checked={!!checked}
          className="es-switch__input"
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          readOnly={readOnly}
          type="checkbox"
          value={value}
          onChange={onSwitchChange}
          onKeyDown={type === 'button' ? onKeyDown : undefined}
        />
        <div className="es-switch__thumb" />
      </ButtonBase>
      <div className="es-switch__track" />
    </div>
  );
};
