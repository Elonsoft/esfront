'use client';

import { AnimationEvent, CSSProperties, forwardRef, useCallback, useEffect, useRef } from 'react';

import { FormFieldInputElement, FormFieldInputProps } from './FormFieldInput.types';

import clsx from 'clsx';

import { useEnhancedEffect, useForkRef } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { isFilled } from '../../../utils';
import { useFormFieldContext } from '../FormField.context';

/** Names of the keyframes the theme runs on `:-webkit-autofill` to report that the browser has filled the input in. */
const AUTO_FILL_KEYFRAMES = 'es-form-field-auto-fill-keyframes';
const AUTO_FILL_CANCEL_KEYFRAMES = 'es-form-field-auto-fill-cancel-keyframes';

export const FormFieldInput = forwardRef<FormFieldInputElement, FormFieldInputProps>(function FormFieldInput(
  inProps: FormFieldInputProps,
  ref
) {
  const {
    className,
    multiline = false,
    rows,
    type,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESFormFieldInput',
  });

  const { id, inputRef, variant, size, required, disabled, error, onFilled, onEmpty, onFocus, onBlur } =
    useFormFieldContext();

  const innerRef = useRef<FormFieldInputElement | null>(null);
  // The context ref is widened to any element, so it is filled through a callback rather than forked directly.
  const setControl = useCallback(
    (node: FormFieldInputElement | null) => {
      inputRef.current = node;
    },
    [inputRef]
  );
  const handleRef = useForkRef(ref, innerRef, setControl);

  // A controlled input receives its value as a prop, so the very first render decides the mode for the whole lifetime.
  const { current: isControlled } = useRef(props.value !== null && props.value !== undefined);

  const checkDirty = useCallback(
    (input?: { value?: unknown } | null) => {
      if (isFilled(input)) {
        onFilled();
      } else {
        onEmpty();
      }
    },
    [onFilled, onEmpty]
  );

  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({ value: props.value });
    }
  }, [props.value, checkDirty, isControlled]);

  // Check the input on mount to catch a `defaultValue` or a value the browser has filled in before the hydration.
  useEffect(() => {
    checkDirty(innerRef.current);
  }, []);

  const onAnimationStart = (e: AnimationEvent<FormFieldInputElement>) => {
    if (e.animationName === AUTO_FILL_KEYFRAMES) {
      // Chrome may refuse to expose the filled in value for security reasons, so a stand-in is used to mark the input
      // as filled.
      checkDirty({ value: 'x' });
    } else if (e.animationName === AUTO_FILL_CANCEL_KEYFRAMES) {
      checkDirty(innerRef.current);
    }
  };

  const controlProps = {
    'aria-invalid': error || undefined,
    ...props,
    ref: handleRef,
    className: clsx(
      className,
      'es-form-field-input',
      `es-form-field-input--variant--${variant}`,
      `es-form-field-input--size--${size}`,
      disabled && 'es-form-field-input--disabled',
      multiline && 'es-form-field-input--multiline',
      size === '400' || size === '500' ? 'body100' : 'subtitle1'
    ),
    disabled: props.disabled ?? disabled,
    id,
    required: props.required ?? required,
    onAnimationStart: (e: AnimationEvent<FormFieldInputElement>) => {
      onAnimationStart(e);
      props.onAnimationStart?.(e);
    },
    onBlur: (e: React.FocusEvent<FormFieldInputElement>) => {
      props.onBlur?.(e);
      onBlur();
    },
    onChange: (e: React.ChangeEvent<FormFieldInputElement>) => {
      if (!isControlled) {
        checkDirty(e.target);
      }

      props.onChange?.(e);
    },
    onFocus: (e: React.FocusEvent<FormFieldInputElement>) => {
      props.onFocus?.(e);
      onFocus();
    },
  };

  if (multiline) {
    return (
      <textarea
        {...controlProps}
        rows={rows}
        style={{ ...props.style, '--es-form-field-input-rows': rows } as CSSProperties}
      />
    );
  }

  return <input {...controlProps} type={type} />;
});
