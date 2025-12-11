import { forwardRef } from 'react';

import { MenuItemTypeMap } from './MenuItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { ListItem } from '../ListItem';

export const MenuItem = forwardRef(function MenuItem(inProps, ref) {
  const {
    className,
    tabIndex: inTabIndex,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenuItem',
  });

  let tabIndex = -1;

  if (!props.disabled && inTabIndex !== undefined) {
    tabIndex = inTabIndex;
  }

  return (
    <ListItem
      ref={ref}
      button
      className={clsx(className, 'es-menu-item')}
      role="menuitem"
      tabIndex={tabIndex}
      {...props}
    />
  );
}) as OverridableComponent<MenuItemTypeMap>;
