import { memo } from 'react';

import { SearchProps } from './Search.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { IconCloseLineW350, IconMagnify2LineW400 } from '../../icons';
import { Button } from '../Button';

/** The text field that can be used to search, find, or filter. */
export const Search = memo(function Search(inProps: SearchProps) {
  const {
    classes: inClasses,
    className,

    value,
    onClear,
    placeholder = ' ',

    ariaLabel,
    labelClear,

    iconClear = <IconCloseLineW350 />,
    iconSearch = <IconMagnify2LineW400 />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSearch',
  });

  return (
    <TextField
      fullWidth
      aria-label={ariaLabel}
      placeholder={placeholder}
      size="32"
      type="search"
      value={value}
      {...props}
      InputProps={{
        startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
        endAdornment: onClear && !!value && (
          <InputAdornment position="end" onClick={onClear}>
            <Button aria-label={labelClear} className="es-search__clear" color="mono-a" size="300">
              {iconClear}
            </Button>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      className={clsx('es-search', className)}
      classes={inClasses}
    />
  );
});
