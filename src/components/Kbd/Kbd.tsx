import { FC } from 'react';

import { KbdProps } from './Kbd.types';

import clsx from 'clsx';
import { getKbdUtilityClass } from './Kbd.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type KbdOwnerState = {
  classes?: KbdProps['classes'];
  variant: 'raised' | 'contained' | 'outlined';
};

const useUtilityClasses = (ownerState: KbdOwnerState) => {
  const { classes, variant } = ownerState;

  const slots = {
    root: ['root', variant]
  };

  return composeClasses(slots, getKbdUtilityClass, classes);
};

const KbdRoot = styled('kbd', {
  name: 'ESKbdRoot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant }
    } = props;
    return [styles.root, styles[variant]];
  }
})<{ ownerState: KbdOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.body100,

  color: theme.palette.monoA.A900,
  padding: '0 4px',
  display: 'inline-block',
  borderRadius: '4px',
  fontFamily: 'inherit',

  ...(ownerState.variant === 'raised' && {
    background: theme.palette.monoA.A50,
    boxShadow: `0 1px 0 1px ${theme.palette.monoA.A300}`
  }),
  ...(ownerState.variant === 'contained' && {
    background: theme.palette.monoA.A50,
    boxShadow: `0 1px 0 ${theme.palette.monoA.A300}, inset 0 0 0 1px ${theme.palette.monoA.A75}`
  }),
  ...(ownerState.variant === 'outlined' && {
    background: theme.palette.monoB[500],
    boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A200}`
  })
}));

/**
 * Display keyboard button or keys combination.
 */
export const Kbd: FC<KbdProps> = (inProps) => {
  const { children, className, sx, variant = 'raised', ...props } = useThemeProps({ props: inProps, name: 'ESKbd' });

  const ownerState = { ...props, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <KbdRoot ownerState={ownerState} className={clsx(classes.root, className)} sx={sx}>
      {children}
    </KbdRoot>
  );
};
