import { MenuItemProps, MenuItemTypeMap } from './MenuItem.types';

import clsx from 'clsx';
import { getMenuItemUtilityClass } from './MenuItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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

export const MenuItem: OverridableComponent<MenuItemTypeMap> = (inProps: MenuItemProps) => {
  const {
    className,
    classes: inClasses,
    tabIndex: inTabIndex,
    ...props
  } = useThemeProps({
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
    <MenuItemRoot button className={clsx(className, classes.root)} role="menuitem" tabIndex={tabIndex} {...props} />
  );
};
