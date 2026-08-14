'use client';

import { forwardRef, useRef } from 'react';

import { FormFieldLabelProps } from './FormFieldLabel.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { useFormFieldContext } from '../FormField.context';

/**
 * The label of a field, shrinking out of the control once that control is focused or filled.
 * @see `FormField`
 */
export const FormFieldLabel = forwardRef<HTMLLabelElement, FormFieldLabelProps>(function FormFieldLabel(
  inProps: FormFieldLabelProps,
  ref
) {
  const {
    children,
    className,
    style,
    id,
    shrink: shrinkProp,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFormFieldLabel',
  });

  const innerRef = useRef<HTMLLabelElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { id: inputId, inputRef, variant, size, required, disabled, error, focused, filled } = useFormFieldContext();
  const shrink = shrinkProp ?? (focused || filled);

  const onClick = () => {
    const control = inputRef.current;

    if (control && !control.matches('button, input, meter, output, progress, select, textarea')) {
      control.focus();
    }
  };

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
      htmlFor={inputId}
      id={id ?? `${inputId}-label`}
      style={style}
      onClick={onClick}
    >
      {children} {!!required && <span className="es-form-field-label__asterisk">*</span>}
    </label>
  );
});
