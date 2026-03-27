import { AutocompleteFieldProps } from './AutocompleteField.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useControlled, useId } from '../../hooks';
import { Autocomplete } from '../Autocomplete';
import { FormField, FormFieldHelperText, FormFieldLabel } from '../FormField';

/** The autocomplete is used to choose an item from a collection of options. */
export const AutocompleteField = <T,>(inProps: AutocompleteFieldProps<T>) => {
  const {
    className,
    style,

    autoFocus,
    disabled,
    error,
    fullWidth,
    id: inId,
    label,
    required,
    open: inOpen,

    closeAfterSelect,
    helperText,
    size,
    variant,

    InputProps,
    InputLabelProps,
    FormHelperTextProps,
    MenuGroupProps,

    onChange,

    ...rest
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteField',
  });

  const [open, setOpen] = useControlled(false, inOpen);

  const id = useId(inId);
  const helperTextId = helperText ? `${id}-helper-text` : undefined;
  const inputLabelId = label ? `${id}-label` : undefined;
  const { onClose, onOpen, ...restInputProps } = InputProps || {};

  const handleChange = (e: T & T[]) => {
    if (onChange) {
      onChange(e);
    }

    if (closeAfterSelect) {
      onClose?.();
      setOpen(false);
    }
  };

  return (
    <FormField
      className={clsx('es-autocomplete-field', className)}
      disabled={disabled}
      error={error}
      focused={open || undefined}
      fullWidth={fullWidth}
      id={id}
      required={required}
      size={size}
      style={style}
      variant={variant}
    >
      {label !== null && label !== '' && (
        <FormFieldLabel id={inputLabelId} {...InputLabelProps}>
          {label}
        </FormFieldLabel>
      )}
      <Autocomplete
        MenuGroupProps={MenuGroupProps}
        aria-describedby={helperTextId}
        autoFocus={autoFocus}
        id={id}
        label={label}
        open={open}
        onChange={handleChange as never}
        onClose={() => {
          onClose?.();
          setOpen(false);
        }}
        onOpen={() => {
          onOpen?.();
          setOpen(true);
        }}
        {...rest}
        {...restInputProps}
      />
      {!!helperText && (
        <FormFieldHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormFieldHelperText>
      )}
    </FormField>
  );
};
