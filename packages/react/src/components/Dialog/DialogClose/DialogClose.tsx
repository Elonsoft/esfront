import { DialogCloseProps } from './DialogClose.types';

import clsx from 'clsx';
import { getDialogCloseUtilityClass } from './DialogClose.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

import { IconCloseW600 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';

type DialogCloseOwnerState = {
  classes?: DialogCloseProps['classes'];
};

const useUtilityClasses = (ownerState: DialogCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    escapeKey: ['escapeKey'],
  };

  return composeClasses(slots, getDialogCloseUtilityClass, classes);
};

const DialogCloseRoot = styled('div', {
  name: 'ESDialogClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  zIndex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row-reverse',

  [theme.breakpoints.up('tabletXS')]: {
    position: 'sticky',
    top: 16,
  },
}));

const DialogCloseButton = styled(Button, {
  name: 'ESDialogClose',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button,
})(({ theme }) => ({
  marginBottom: '16px',

  [theme.breakpoints.up('tabletXS')]: {
    position: 'absolute',
    left: 'calc(100% + 16px)',
    top: 0,
    marginBottom: 0,
  },

  [`&.${buttonClasses.root}`]: {
    backdropFilter: 'blur(10px)',
    borderRadius: 4,
    padding: 8,
    width: 32,
    height: 32,

    [`&.${buttonClasses.variantText}.${buttonClasses.colorWhite}`]: {
      '--background': theme.vars.palette.white.A200,
    },

    [theme.breakpoints.up('tabletXS')]: {
      width: 40,
      height: 40,
    },
  },
}));

const DialogCloseEscapeKey = styled(Typography, {
  name: 'ESDialogClose',
  slot: 'EscapeKey',
  overridesResolver: (props, styles) => styles.escapeKey,
})(({ theme }) => ({
  color: theme.vars.palette.white.A800,
  pointerEvents: 'none',
  position: 'absolute',
  right: 'calc(100% + 8px)',

  [theme.breakpoints.up('tabletXS')]: {
    right: 'unset',
    top: 'calc(100% + 8px)',
  },
}));

export const DialogClose = (inProps: DialogCloseProps) => {
  const {
    className,
    sx,
    onClick,
    label,
    labelEscapeKey,
    icon = <IconCloseW600 />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDialogClose',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogCloseRoot className={clsx(classes.root, className)} sx={sx}>
      <DialogCloseButton aria-label={label} className={classes.button} color="white" onClick={onClick}>
        {icon}
        <DialogCloseEscapeKey className={classes.escapeKey} variant="caption">
          {labelEscapeKey}
        </DialogCloseEscapeKey>
      </DialogCloseButton>
    </DialogCloseRoot>
  );
};
