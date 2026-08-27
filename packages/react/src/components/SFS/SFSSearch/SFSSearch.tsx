import { memo } from 'react';

import { SFSSearchProps } from './SFSSearch.types';

import clsx from 'clsx';

import { IconCloseLineW350, IconMagnify2LineW400 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';
import { FormFieldAdornment } from '../../FormField';
import { TextField } from '../../TextField';

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
        {...props}
        fullWidth
        aria-label={ariaLabel}
        className="es-sfs-search__input"
        endAdornment={
          onClear && (
            <FormFieldAdornment position="end">
              <Button
                disableTouchRipple
                aria-label={labelClear}
                className="es-sfs-search__clear"
                color="mono-a"
                size="300"
                onClick={onClear}
              >
                {iconClear}
              </Button>
            </FormFieldAdornment>
          )
        }
        placeholder={placeholder}
        size="400"
        startAdornment={<FormFieldAdornment position="start">{iconSearch}</FormFieldAdornment>}
        variant="outlined"
      />
    </div>
  );
});
