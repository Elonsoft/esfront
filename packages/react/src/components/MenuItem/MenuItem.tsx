'use client';

import { MenuItemProps, MenuItemTypeMap } from './MenuItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';
import { OverridableComponent } from '../../types';
import { ListItem } from '../ListItem';

/**
 * An item of a dropdown menu, built on top of `ListItem`.
 */
export const MenuItem = (({ ref, ...inProps }: MenuItemProps) => {
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
