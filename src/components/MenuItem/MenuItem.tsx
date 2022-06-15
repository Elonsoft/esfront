import { MenuItemProps } from './MenuItem.types';

import clsx from 'clsx';
import { getMenuItemUtilityClass } from './MenuItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import MuiMenuItem from '@mui/material/MenuItem';

type MenuItemOwnerState = {
  classes?: MenuItemProps['classes'];
  color?: MenuItemProps['color'];
};

const useUtilityClasses = (ownerState: MenuItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getMenuItemUtilityClass, classes);
};

const MenuItemRoot = styled(MuiMenuItem, {
  name: 'ESMenuItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: MenuItemOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.color === 'error' && {
    '&.MuiMenuItem-root': {
      '& .MuiTouchRipple-root': {
        color: theme.palette.error.A150
      },
      '&:hover': {
        '& .MuiTouchRipple-root': {
          backgroundColor: theme.palette.error.A50
        }
      },
      '&.Mui-focusVisible': {
        '& .MuiTouchRipple-root': {
          backgroundColor: theme.palette.error.A200
        }
      }
    },
    '& .MuiListItemText-root, & .MuiListItemIcon-root': {
      color: theme.palette.error[300]
    }
  })
}));

/**
 * Wrapper aroud MenuItem from MUI with color prop.
 */
export const MenuItem = (inProps: MenuItemProps) => {
  const { className, color, ...props } = useThemeProps({
    props: inProps,
    name: 'ESMenuItem'
  });

  const ownerState = { color };
  const classes = useUtilityClasses(ownerState);

  return <MenuItemRoot className={clsx(className, classes.root)} ownerState={ownerState} {...props} />;
};
