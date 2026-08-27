import { memo } from 'react';

import { SearchProps } from './Search.types';

import clsx from 'clsx';

import { IconCloseLineW350, IconMagnify2LineW400 } from '../../icons';
import { useDefaultProps } from '../../theming';
import { Button } from '../Button';
import { FormFieldAdornment } from '../FormField';
import { TextField } from '../TextField';

/** The text field that can be used to search, find, or filter. */
export const Search = memo(function Search(inProps: SearchProps) {
  const {
    className,

    value,
    onClear,
    placeholder = ' ',

    ariaLabel,
    labelClear,

    iconClear = <IconCloseLineW350 />,
    iconSearch = <IconMagnify2LineW400 />,

    startAdornment = iconSearch,
    endAdornment,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSearch',
  });

  const end =
    endAdornment ??
    (onClear && !!value && (
      <Button aria-label={labelClear} className="es-search__clear" color="mono-a" size="300" onClick={onClear}>
        {iconClear}
      </Button>
    ));

  return (
    <TextField
      fullWidth
      aria-label={ariaLabel}
      endAdornment={!!end && <FormFieldAdornment position="end">{end}</FormFieldAdornment>}
      placeholder={placeholder}
      size="400"
      startAdornment={!!startAdornment && <FormFieldAdornment position="start">{startAdornment}</FormFieldAdornment>}
      type="search"
      value={value}
      variant="outlined"
      {...props}
      className={clsx('es-search', className)}
    />
  );
});
