import { memo } from 'react';

import { SFSSearchProps } from './SFSSearch.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { IconCloseLineW350, IconMagnify2LineW400 } from '../../../icons';
import { Button } from '../../Button';

export const SFSSearch = memo(function SFSSearch(inProps: SFSSearchProps) {
  const {
    className,
    style,
    onClear,
    ariaLabel,
    labelClear,
    placeholder,
    iconClear = <IconCloseLineW350 />,
    iconSearch = <IconMagnify2LineW400 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSSearch',
  });

  return (
    <div className={clsx('es-sfs-search', className)} style={style}>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
          endAdornment: onClear && (
            <InputAdornment position="end" onClick={onClear}>
              <Button
                disableTouchRipple
                aria-label={labelClear}
                className="es-sfs-search__clear"
                color="mono-a"
                size="300"
              >
                {iconClear}
              </Button>
            </InputAdornment>
          ),
        }}
        {...props}
        fullWidth
        aria-label={ariaLabel}
        className="es-sfs-search__input"
        placeholder={placeholder}
        size="32"
      />
    </div>
  );
});
