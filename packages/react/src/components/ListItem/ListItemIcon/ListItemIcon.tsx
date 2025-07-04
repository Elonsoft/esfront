import { ListItemIconProps } from './ListItemIcon.types';

import clsx from 'clsx';
import { getListItemIconUtilityClass } from './ListItemIcon.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

type ListItemIconOwnerState = {
  classes?: ListItemIconProps['classes'];
};

const useUtilityClasses = (ownerState: ListItemIconOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getListItemIconUtilityClass, classes);
};

const ListItemIconRoot = styled('div', {
  name: 'ESListItemIcon',
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    return [styles.root];
  },
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
  display: 'inline-flex',
  flexShrink: 0,
  // minWidth: 56,
}));

export const ListItemIcon = (inProps: ListItemIconProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESListItemIcon',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ListItemIconRoot className={clsx(className, classes.root)} sx={sx}>
      {children}
    </ListItemIconRoot>
  );
};
