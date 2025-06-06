import { KbdProps } from './Kbd.types';

import clsx from 'clsx';
import { getKbdUtilityClass } from './Kbd.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type KbdOwnerState = {
  classes?: KbdProps['classes'];
  variant: 'raised' | 'contained' | 'outlined';
};

const useUtilityClasses = (ownerState: KbdOwnerState) => {
  const { classes, variant } = ownerState;

  const slots = {
    root: ['root', variant],
  };

  return composeClasses(slots, getKbdUtilityClass, classes);
};

const KbdRoot = styled('kbd', {
  name: 'ESKbd',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant },
    } = props;
    return [styles.root, styles[variant]];
  },
})<{ ownerState: KbdOwnerState }>(({ theme }) => ({
  ...theme.typography.body100,

  color: theme.vars.palette.monoA.A900,
  padding: '0 4px',
  display: 'inline-block',
  borderRadius: '4px',
  fontFamily: 'inherit',

  variants: [
    {
      props: {
        variant: 'raised',
      },
      style: {
        backgroundColor: theme.vars.palette.monoA.A75,
        boxShadow: `0 1px 0 1px ${theme.vars.palette.monoA.A300}`,
      },
    },
    {
      props: {
        variant: 'contained',
      },
      style: {
        backgroundColor: theme.vars.palette.monoA.A75,
        boxShadow: `0 1px 0 ${theme.vars.palette.monoA.A300}, inset 0 0 0 1px ${theme.vars.palette.monoA.A50}`,
      },
    },
    {
      props: {
        variant: 'outlined',
      },
      style: {
        boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A200}`,
      },
    },
  ],
}));

/**
 * Display keyboard button or keys combination.
 */
export const Kbd = (inProps: KbdProps) => {
  const { children, className, sx, variant = 'raised', ...props } = useDefaultProps({ props: inProps, name: 'ESKbd' });

  const ownerState = { ...props, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <KbdRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {children}
    </KbdRoot>
  );
};
