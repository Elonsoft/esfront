import { DialogCloseProps } from './DialogClose.types';

import clsx from 'clsx';
import { getDialogCloseUtilityClass } from './DialogClose.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';

import { IconClose } from '../../../icons';

type DialogCloseOwnerState = {
  classes?: DialogCloseProps['classes'];
};

const useUtilityClasses = (ownerState: DialogCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button']
  };

  return composeClasses(slots, getDialogCloseUtilityClass, classes);
};

const DialogCloseRoot = styled('div', {
  name: 'ESDialogClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  zIndex: 1,
  display: 'flex',
  justifyContent: 'flex-end',

  [theme.breakpoints.up('tabletXS')]: {
    position: 'sticky',
    top: 16
  }
}));

const DialogCloseButton = styled(IconButton, {
  name: 'ESDialogClose',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  marginBottom: '16px',

  [theme.breakpoints.up('tabletXS')]: {
    position: 'absolute',
    left: 'calc(100% + 16px)',
    top: 0,
    marginBottom: 0
  },
  [`&.${iconButtonClasses.root}`]: {
    backdropFilter: 'blur(10px)',
    borderRadius: 4,
    padding: 8,
    width: 32,
    height: 32,

    [theme.breakpoints.up('tabletXS')]: {
      width: 40,
      height: 40
    },

    ...theme.mixins.button({
      background: theme.palette.white.A200,
      color: theme.palette.white[500],
      hover: theme.palette.white.A50,
      focus: theme.palette.white.A200,
      active: theme.palette.white.A150
    })
  }
}));

export const DialogClose = (inProps: DialogCloseProps) => {
  const {
    className,
    sx,
    onClick,
    label,
    icon = <IconClose />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDialogClose'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogCloseRoot className={clsx(classes.root, className)} sx={sx}>
      <DialogCloseButton aria-label={label} className={classes.button} color="white" onClick={onClick}>
        {icon}
      </DialogCloseButton>
    </DialogCloseRoot>
  );
};
