import { AutocompleteFieldProps } from './AutocompleteField.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { textFieldClasses } from '@mui/material/TextField';
import { unstable_useId as useId } from '@mui/utils';

import { useControlled } from '../../hooks';
import { Autocomplete } from '../Autocomplete';

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
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
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
    <FormControl
      className={clsx('es-autocomplete-field', textFieldClasses.root, className)}
      disabled={disabled}
      error={error}
      focused={open || undefined}
      fullWidth={fullWidth}
      required={required}
      size={size}
      style={style}
    >
      {label !== null && label !== '' && (
        <InputLabel htmlFor={id} id={inputLabelId} required={required} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        MenuGroupProps={MenuGroupProps}
        aria-describedby={helperTextId}
        autoFocus={autoFocus}
        disabled={disabled}
        fullWidth={fullWidth}
        id={id}
        label={label}
        open={open}
        required={required}
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
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
