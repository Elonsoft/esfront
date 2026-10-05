'use client';

import { RefAttributes, useRef } from 'react';

import { FormFieldHelperTextProps } from './FormFieldHelperText.types';

import clsx from 'clsx';

import { useForkRef } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { useFormFieldContext } from '../FormField.context';

/**
 * The text under a field, describing what the field expects or the error it is in.
 * @see `FormField`
 */
export const FormFieldHelperText = ({ ref, ...inProps }: FormFieldHelperTextProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style, id } = useDefaultProps({
    props: inProps,
    name: 'ESFormFieldHelperText',
  });

  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const { disabled, error } = useFormFieldContext();

  return (
    <div
      ref={handleRef}
      className={clsx(
        className,
        'es-form-field-helper-text',
        disabled && 'es-form-field-helper-text--disabled',
        error && 'es-form-field-helper-text--error',
        'caption'
      )}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};
