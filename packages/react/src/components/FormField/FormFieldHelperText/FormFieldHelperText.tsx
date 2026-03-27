import { forwardRef, useRef } from 'react';

import { FormFieldHelperTextProps } from './FormFieldHelperText.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useFormFieldContext } from '../FormField.context';

export const FormFieldHelperText = forwardRef<HTMLDivElement, FormFieldHelperTextProps>(function FormFieldHelperText(
  { children },
  ref
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { disabled, error } = useFormFieldContext();

  return (
    <div
      ref={handleRef}
      className={clsx(
        'es-form-field-helper-text',
        disabled && 'es-form-field-helper-text--disabled',
        error && 'es-form-field-helper-text--error',
        'caption'
      )}
    >
      {children}
    </div>
  );
});
