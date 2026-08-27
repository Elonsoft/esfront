import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';

import { FormFieldProps } from './FormField.types';

import clsx from 'clsx';

import { FormFieldContext } from './FormField.context';

import { useForkRef, useId } from '../../hooks';
import { useDefaultProps } from '../../theming';

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(inProps: FormFieldProps, ref) {
  const {
    children,

    className,
    style,

    id: idProp,

    variant = 'outlined-notched',
    size = '700',

    required = false,
    disabled = false,
    error = false,
    fullWidth = false,

    focused: focusedProp,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFormField',
  });

  const innerRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(ref, innerRef);

  const id = useId(idProp);

  const inputRef = useRef<HTMLElement | null>(null);

  const [filled, setFilled] = useState(false);
  const [focusedState, setFocused] = useState(false);
  const [adornedStart, setAdornedStart] = useState(false);

  if (disabled && focusedState) {
    setFocused(false);
  }

  // A disabled field is never shown as focused, no matter what the prop says.
  const focused = focusedProp !== undefined && !disabled ? focusedProp : focusedState;

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
      id,
      inputRef,

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
    inputRef,
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
