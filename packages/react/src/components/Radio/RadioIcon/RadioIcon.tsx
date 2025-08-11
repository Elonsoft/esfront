import React from 'react';

import { RadioIconProps } from './RadioIcon.types';

import clsx from 'clsx';
import { getRadioIconUtilityClass } from './RadioIcon.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type RadioIconOwnerState = {
  classes?: RadioIconProps['classes'];
};

const useUtilityClasses = (ownerState: RadioIconOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    circle: ['circle'],
  };

  return composeClasses(slots, getRadioIconUtilityClass, classes);
};

const RadioIconRoot = styled('div', {
  name: 'ESRadioIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: RadioIconOwnerState }>(({ theme }) => ({
  boxShadow: `inset 0 0 0 2px ${theme.vars.palette.monoA.A600}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  width: '24px',
}));

const RadioIconCircle = styled('div', {
  name: 'ESRadioIcon',
  slot: 'Circle',
  overridesResolver: (props, styles) => styles.circle,
})<{ ownerState: RadioIconOwnerState }>(() => ({
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  width: '7px',
  height: '7px',
}));

export const RadioIcon = (inProps: RadioIconProps) => {
  const { className, sx, ...props } = useDefaultProps({ props: inProps, name: 'ESRadioIcon' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <RadioIconRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} {...props}>
      <RadioIconCircle className={classes.circle} ownerState={ownerState} />
    </RadioIconRoot>
  );
};
