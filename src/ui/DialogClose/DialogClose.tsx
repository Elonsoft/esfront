import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/core';
import { getDialogCloseUtilityClass } from './DialogClose.classes';

import { DialogCloseProps } from './DialogClose.types';

import IconButton from '@mui/material/IconButton';
import { CloseIcon } from '../icons';

type DialogCloseOwnerState = {
  classes?: DialogCloseProps['classes'];
};

const useUtilityClasses = (ownerState: DialogCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDialogCloseUtilityClass, classes);
};

const DialogCloseRoot = styled(IconButton, {
  name: 'ESDialogClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  position: 'absolute',
  bottom: 'calc(100% + 16px)',
  right: 0,
  [theme.breakpoints.up('tabletXS')]: {
    bottom: 'auto',
    right: 'auto',
    left: 'calc(100% + 16px)',
    top: 0
  },
  '&.MuiIconButton-root': {
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.palette.white.A200,
    borderRadius: 4,
    color: theme.palette.white[500],
    padding: 8,
    '& .MuiTouchRipple-root': {
      color: theme.palette.white.A150
    },
    '&:hover': {
      backgroundColor: theme.palette.white.A200,
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.white.A50
      }
    },
    '&:focus-visible': {
      '& .MuiTouchRipple-root': {
        color: theme.palette.white.A200
      }
    }
  }
}));

export const DialogClose = (inProps: DialogCloseProps) => {
  const { className, onClick, label, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDialogClose'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogCloseRoot className={clsx(classes.root, className)} onClick={onClick} aria-label={label}>
      <CloseIcon />
    </DialogCloseRoot>
  );
};
