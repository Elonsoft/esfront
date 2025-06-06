import { forwardRef } from 'react';

import { MenuItemProps, MenuItemTypeMap } from './MenuItem.types';

import clsx from 'clsx';
import { getMenuItemUtilityClass } from './MenuItem.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import composeClasses from '@mui/utils/composeClasses';

import { ListItem, listItemClasses } from '../ListItem';

type MenuItemOwnerState = {
  classes?: MenuItemProps['classes'];
};

const useUtilityClasses = (ownerState: MenuItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getMenuItemUtilityClass, classes);
};

const MenuItemRoot = styled(ListItem, {
  name: 'ESMenuItem',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  [`&.${listItemClasses.selected}`]: {
    '--background': theme.vars.palette.secondary.A100,
  },
}));

export const MenuItem = forwardRef(function MenuItem(inProps, ref) {
  const {
    className,
    classes: inClasses,
    tabIndex: inTabIndex,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenuItem',
  });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  let tabIndex = -1;

  if (!props.disabled && inTabIndex !== undefined) {
    tabIndex = inTabIndex;
  }

  return (
    <MenuItemRoot
      ref={ref}
      button
      className={clsx(className, classes.root)}
      role="menuitem"
      tabIndex={tabIndex}
      {...props}
    />
  );
}) as OverridableComponent<MenuItemTypeMap>;
