'use client';

import { forwardRef, MouseEvent, useRef } from 'react';

import { FormFieldFieldProps } from './FormFieldField.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { useFormFieldContext } from '../FormField.context';

export const FormFieldField = forwardRef<HTMLDivElement, FormFieldFieldProps>(function FormFieldField(
  inProps: FormFieldFieldProps,
  ref
) {
  const {
    className,
    style,

    children,
    label,

    startAdornment,
    endAdornment,

    multiline = false,
    shrink: shrinkProp,

    onKeyDown,
    onMouseDown,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFormFieldField',
  });

  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { inputRef, variant, size, required, disabled, error, focused, filled } = useFormFieldContext();
  const shrink = shrinkProp ?? (focused || filled);

  // The field is wider than its control, so a click on the padding around it has to reach the control as well. A click
  // on a child, an adornment or the control itself, is left alone.
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (inputRef.current && e.target === e.currentTarget) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      ref={handleRef}
      className={clsx(
        'es-form-field-field',
        `es-form-field-field--variant--${variant}`,
        `es-form-field-field--size--${size}`,
        required && 'es-form-field-field--required',
        disabled && 'es-form-field-field--disabled',
        error && 'es-form-field-field--error',
        focused && 'es-form-field-field--focused',
        multiline && 'es-form-field-field--multiline',
        className
      )}
      style={style}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseDown={onMouseDown}
    >
      {startAdornment}
      {children}
      {endAdornment}

      <fieldset className={clsx('es-form-field-field__outline', shrink && 'es-form-field-field__outline--shrink')}>
        {variant === 'outlined-notched' && !!label && (
          <legend className="caption">
            {label} {required && <span>*</span>}
          </legend>
        )}
      </fieldset>
    </div>
  );
});
