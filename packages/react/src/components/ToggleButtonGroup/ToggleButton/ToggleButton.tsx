'use client';

import { MouseEvent, RefAttributes, useContext } from 'react';

import { ExtendButtonBase } from '../../ButtonBase/ButtonBase.types';
import { ToggleButtonProps, ToggleButtonTypeMap } from './ToggleButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { ButtonBase } from '../../ButtonBase';
import isValueSelected from '../isValueSelected';
import { ToggleButtonGroupContext } from '../ToggleButtonGroup.context';

/**
 * A Toggle Button can be used to group related options.
 */
export const ToggleButton = (({ ref, ...inProps }: ToggleButtonProps & RefAttributes<HTMLButtonElement>) => {
  const {
    value: contextValue,
    onChange,
    size: groupSize = '500',
    disabled: groupDisabled,
    fullWidth: groupFullWidth,
  } = useContext(ToggleButtonGroupContext);

  const {
    className,
    children,
    value,
    selected = isValueSelected(value, contextValue),
    size = groupSize,
    disabled = groupDisabled,
    fullWidth = groupFullWidth,
    startIcon,
    endIcon,
    onClick,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESToggleButton',
  });

  const handleClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event, value);

      if (event.defaultPrevented) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <ButtonBase
      ref={ref}
      aria-label={value}
      aria-pressed={selected}
      className={clsx(
        className,
        'es-toggle-button',
        `es-toggle-button--size--${size}`,
        selected && 'es-toggle-button--selected',
        fullWidth && 'es-toggle-button--full-width',
        !children && 'es-toggle-button--element'
      )}
      disabled={disabled}
      {...props}
      onClick={handleClick}
    >
      {startIcon && <span className="es-toggle-button__start-icon">{startIcon}</span>}
      {children && <span className="es-toggle-button__label">{children}</span>}
      {endIcon && <span className="es-toggle-button__end-icon">{endIcon}</span>}
    </ButtonBase>
  );
}) as ExtendButtonBase<ToggleButtonTypeMap>;
