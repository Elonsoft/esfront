import { forwardRef, useRef } from 'react';

import clsx from 'clsx';

import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useForkRef } from '../../../hooks';
import { useFormFieldContext } from '../FormField.context';

export const FormFieldInput = forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(function FormFieldInput({ className, ...props }, ref) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { id, variant, size, required, disabled, onFilled, onEmpty, onFocus, onBlur } = useFormFieldContext();

  useEnhancedEffect(() => {
    if (props.value) {
      onFilled();
    } else {
      onEmpty();
    }
  }, [!!props.value]);

  return (
    <input
      className={clsx(
        className,
        'es-form-field-input',
        `es-form-field-input--variant--${variant}`,
        `es-form-field-input--size--${size}`,
        disabled && 'es-form-field-input--disabled',
        size === '400' || size === '500' ? 'body100' : 'subtitle1'
      )}
      {...props}
      ref={handleRef}
      disabled={props.disabled ?? disabled}
      id={id}
      required={props.required ?? required}
      onBlur={(e) => {
        props.onBlur?.(e);
        onBlur();
      }}
      onFocus={(e) => {
        props.onFocus?.(e);
        onFocus();
      }}
    />
  );
});
