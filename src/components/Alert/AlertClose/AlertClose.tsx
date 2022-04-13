import React from 'react';

import { AlertCloseProps } from './AlertClose.types';

import clsx from 'clsx';
import { getAlertCloseUtilityClass } from './AlertClose.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { IconCloseMd } from '../../../icons/IconCloseMd';

type AlertCloseOwnerState = {
  classes?: AlertCloseProps['classes'];
};

const useUtilityClasses = (ownerState: AlertCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAlertCloseUtilityClass, classes);
};

const AlertCloseRoot = styled(Button, {
  name: 'ESAlertClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '&.MuiButton-root': {
    padding: '0 4px'
  },
  '&.Mui-focusVisible .MuiTouchRipple-child': {
    borderRadius: '4px'
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.monoA.A500
  }
}));

export const AlertClose: React.FC<AlertCloseProps> = (inProps) => {
  const {
    className,
    sx,
    label,
    icon = IconCloseMd,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAlertClose'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const Icon = icon as any;

  return (
    <AlertCloseRoot
      className={clsx(classes.root, className)}
      sx={sx}
      color="monoA"
      size="24"
      onClick={onClick}
      aria-label={label}
    >
      <Icon />
    </AlertCloseRoot>
  );
};
