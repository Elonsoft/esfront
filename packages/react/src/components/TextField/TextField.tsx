'use client';

import { forwardRef } from 'react';

import { TextFieldProps } from './TextField.types';

import { useId } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { FormField, FormFieldField, FormFieldHelperText, FormFieldInput, FormFieldLabel } from '../FormField';

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(function TextField(inProps: TextFieldProps, ref) {
  const {
    className,
    style,

    id: idProp,

    label,
    helperText,

    startAdornment,
    endAdornment,

    multiline,

    variant,
    size,

    required,
    disabled,
    error,
    fullWidth,

    inputRef,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESTextField',
  });

  const id = useId(idProp);
  const labelId = label ? `${id}-label` : undefined;
  const helperTextId = helperText ? `${id}-helper-text` : undefined;

  return (
    <FormField
      ref={ref}
      className={className}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      id={id}
      required={required}
      size={size}
      style={style}
      variant={variant}
    >
      {!!label && <FormFieldLabel id={labelId}>{label}</FormFieldLabel>}
      <FormFieldField endAdornment={endAdornment} label={label} multiline={multiline} startAdornment={startAdornment}>
        <FormFieldInput ref={inputRef} aria-describedby={helperTextId} multiline={multiline} {...props} />
      </FormFieldField>
      {!!helperText && <FormFieldHelperText id={helperTextId}>{helperText}</FormFieldHelperText>}
    </FormField>
  );
});
