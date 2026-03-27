import { forwardRef, useRef } from 'react';

import { FormFieldLabelProps } from './FormFieldLabel.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useFormFieldContext } from '../FormField.context';

export const FormFieldLabel = forwardRef<HTMLLabelElement, FormFieldLabelProps>(function FormFieldLabel(
  { children, className, style },
  ref
) {
  const innerRef = useRef<HTMLLabelElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { id, variant, size, required, disabled, error, focused, filled } = useFormFieldContext();
  const shrink = focused || filled;

  return (
    <label
      ref={handleRef}
      className={clsx(
        className,
        (variant === 'outlined-notched' || variant === 'filled') && !shrink
          ? size === '400' || size === '500'
            ? 'body100'
            : 'subtitle1'
          : 'caption',
        'es-form-field-label',
        `es-form-field-label--variant--${variant}`,
        `es-form-field-label--size--${size}`,
        required && 'es-form-field-label--required',
        disabled && 'es-form-field-label--disabled',
        error && 'es-form-field-label--error',
        shrink && 'es-form-field-label--shrink'
      )}
      htmlFor={id}
      id={`${id}-label`}
      style={style}
    >
      {children} {!!required && <span className="es-form-field-label__asterisk">*</span>}
    </label>
  );
});
