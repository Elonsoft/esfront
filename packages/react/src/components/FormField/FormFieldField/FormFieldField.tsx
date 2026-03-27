import { forwardRef, useRef } from 'react';

import { FormFieldFieldProps } from './FormFieldField.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useFormFieldContext } from '../FormField.context';

export const FormFieldField = forwardRef<HTMLDivElement, FormFieldFieldProps>(function FormFieldField(
  {
    children,
    label,

    startAdornment,
    endAdornment,
  },
  ref
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { variant, size, required, disabled, error, focused, filled } = useFormFieldContext();
  const shrink = focused || filled;

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
        focused && 'es-form-field-field--focused'
      )}
    >
      {startAdornment}
      {children}
      {endAdornment}

      <fieldset className={clsx('es-form-field-field__outline', shrink && 'es-form-field-field__outline--shrink')}>
        {variant === 'outlined-notched' && (
          <legend className="caption">
            {label} {required && <span>*</span>}
          </legend>
        )}
      </fieldset>
    </div>
  );
});
