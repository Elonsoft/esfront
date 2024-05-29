import React from 'react';

import { StoreBadgeProps } from './StoreBadge.types';

import clsx from 'clsx';
import { getStoreBadgeUtilityClass, storeBadgeClasses } from './StoreBadge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Button, buttonBaseClasses, Typography } from '@mui/material';

type StoreBadgeOwnerState = {
  classes?: StoreBadgeProps['classes'];
  disabled?: StoreBadgeProps['disabled'];
  color: NonNullable<StoreBadgeProps['color']>;
  variant: NonNullable<StoreBadgeProps['variant']>;
};

const useUtilityClasses = (ownerState: StoreBadgeOwnerState) => {
  const { classes, disabled } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled'],
    text: ['text']
  };

  return composeClasses(slots, getStoreBadgeUtilityClass, classes);
};

const StoreBadgeRoot = styled(Button, {
  name: 'ESStoreBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, checked, size }
    } = props;
    return [styles.root, disabled && styles.disabled, checked && styles.checked, styles[size]];
  }
})<{ ownerState: StoreBadgeOwnerState }>(({ ownerState: { color, variant }, theme }) => ({
  ...theme.typography.body100,
  border: `1px solid ${theme.vars.palette[color].A150}`,
  color: theme.vars.palette[color][500],
  textTransform: 'none',
  [`&.${buttonBaseClasses.root}`]: {
    ...(variant === 'filled' && {
      backgroundColor: theme.vars.palette[`${color === 'monoA' ? 'monoB' : 'monoA'}`].A900
    })
  },

  [`& .${storeBadgeClasses.text}`]: {
    color: theme.vars.palette[color].A700
  }
}));

const StoreBadgeText = styled(Typography, {
  name: 'ESStoreBadge',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({ theme }) => ({
  ...theme.typography.micro,
  textTransform: 'none'
})) as typeof Typography;

const StoreBadgeContainer = styled('div', {
  name: 'ESStoreBadge',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px'
}));

export const StoreBadge = (inProps: StoreBadgeProps) => {
  const {
    className,
    disabled,
    color = 'monoA',
    variant = 'filled',
    children,
    startIcon,
    upperText,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESStoreBadge'
  });

  const ownerState = { ...props, disabled, color, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <StoreBadgeRoot
      className={clsx(classes.root, className)}
      color={color}
      ownerState={ownerState}
      startIcon={startIcon}
      sx={sx}
    >
      <StoreBadgeContainer>
        <StoreBadgeText className={classes.text}>{upperText}</StoreBadgeText>
        {children}
      </StoreBadgeContainer>
    </StoreBadgeRoot>
  );
};
