'use client';

import { MouseEvent, RefAttributes, useCallback, useMemo } from 'react';

import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

import clsx from 'clsx';

import { ToggleButtonGroupContext } from './ToggleButtonGroup.context';

import { useDefaultProps } from '../../theming';

/** A Toggle Button can be used to group related options. */
export const ToggleButtonGroup = ({ ref, ...inProps }: ToggleButtonGroupProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    children,
    breakpoint = '0',
    orientation = 'horizontal',
    exclusive = false,
    disabled = false,
    fullWidth = false,
    size = '500',
    onChange,
    value,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESToggleButtonGroup',
  });

  const handleChange = useCallback(
    (event: MouseEvent, buttonValue: string) => {
      if (!onChange) {
        return;
      }

      const selectedValues = Array.isArray(value) ? value : value ? [value] : [];
      const newValue = selectedValues.includes(buttonValue)
        ? selectedValues.filter((selectedValue) => selectedValue !== buttonValue)
        : [...selectedValues, buttonValue];

      onChange(event, newValue);
    },
    [onChange, value]
  );

  const handleExclusiveChange = useCallback(
    (event: MouseEvent, buttonValue: string) => {
      if (!onChange) {
        return;
      }

      onChange(event, value === buttonValue ? null : buttonValue);
    },
    [onChange, value]
  );

  const context = useMemo(
    () => ({
      onChange: exclusive ? handleExclusiveChange : handleChange,
      disabled,
      fullWidth,
      value,
      size,
    }),
    [exclusive, handleExclusiveChange, handleChange, value, disabled, fullWidth, size]
  );

  return (
    <div
      ref={ref}
      className={clsx(
        className,
        'es-toggle-button-group',
        `es-toggle-button-group--size--${size}`,
        `es-toggle-button-group--orientation--${orientation}`,
        breakpoint && `es-toggle-button-group--breakpoint--${breakpoint}`,
        fullWidth && 'es-toggle-button-group--full-width'
      )}
      {...props}
    >
      <ToggleButtonGroupContext.Provider value={context}>{children}</ToggleButtonGroupContext.Provider>
    </div>
  );
};
