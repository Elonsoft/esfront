import { forwardRef, useRef } from 'react';

import { ListItemTypeMap } from './ListItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useForkRef } from '../../hooks';
import { ButtonBase } from '../ButtonBase';

export const ListItem = forwardRef(function ListItem(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESListItem' });
  const {
    className,
    alignItems = 'center',
    autoFocus = false,
    children,
    size = '200',
    disabled = false,
    selected = false,
    error = false,
    button = false,
    ...other
  } = props;

  const listItemRef = useRef<HTMLLIElement | null>(null);
  const handleRef = useForkRef(listItemRef, ref);

  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (process.env.NODE_ENV !== 'production') {
        console.error('MUI: Unable to set focus to a ListItem whose component has not been rendered.');
      }
    }
  }, [autoFocus]);

  const Component = button ? ButtonBase : 'li';

  return (
    <Component
      {...(button &&
        ({
          role: 'button',
          tabIndex: disabled ? -1 : 0,
          disabled,
          component: 'li',
          type: false,
          'aria-disabled': disabled,
        } as any))}
      {...other}
      ref={handleRef}
      className={clsx(
        className,
        'es-list-item',
        `es-list-item--size--${size}`,
        `es-list-item--align-items--${alignItems}`,
        button && 'es-list-item--button',
        selected && 'es-list-item--selected',
        disabled && 'es-list-item--disabled',
        error && 'es-list-item--error',
        size === '100' ? 'body100' : 'subtitle1'
      )}
    >
      {children}
    </Component>
  );
}) as OverridableComponent<ListItemTypeMap>;
