import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';

import { FormFieldProps } from './FormField.types';

import clsx from 'clsx';

import { unstable_useId as useId } from '@mui/utils';

import { FormFieldContext } from './FormField.context';

import { useForkRef } from '../../hooks';

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(
  {
    children,

    className,
    style,

    id: idProp,

    variant = 'outlined',
    size = '500',

    required = false,
    disabled = false,
    error = false,
    fullWidth = false,
  },
  ref
) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const id = useId(idProp);

  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);
  const [adornedStart, setAdornedStart] = useState(false);

  if (disabled && focused) {
    setFocused(false);
  }

  const onFilled = useCallback(() => {
    setFilled(true);
  }, []);

  const onEmpty = useCallback(() => {
    setFilled(false);
  }, []);

  const onFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const value = useMemo(() => {
    return {
      id: id!,

      variant,
      size,

      required,
      disabled,
      error,
      fullWidth,

      filled,
      focused,
      adornedStart,
      setAdornedStart,

      onFilled,
      onEmpty,
      onFocus,
      onBlur,
    };
  }, [
    id,
    variant,
    size,
    required,
    disabled,
    error,
    fullWidth,
    filled,
    focused,
    adornedStart,
    setAdornedStart,
    onFilled,
    onEmpty,
    onFocus,
    onBlur,
  ]);

  return (
    <div
      ref={handleRef}
      className={clsx(
        className,
        'es-form-field',
        `es-form-field--variant--${variant}`,
        `es-form-field--size--${size}`,
        required && 'es-form-field--required',
        disabled && 'es-form-field--disabled',
        error && 'es-form-field--error',
        fullWidth && 'es-form-field--full-width'
      )}
      style={style}
    >
      <FormFieldContext.Provider value={value}>{children}</FormFieldContext.Provider>
    </div>
  );
});
