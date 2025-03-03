import { ErrorPageStatusProps } from './ErrorPageStatus.types';

import clsx from 'clsx';
import { getErrorPageStatusUtilityClass } from './ErrorPageStatus.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type ErrorPageStatusOwnerState = {
  classes?: ErrorPageStatusProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageStatusOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getErrorPageStatusUtilityClass, classes);
};

export const ErrorPageStatusRoot = styled('div', {
  name: 'ESErrorPageStatus',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
  gridArea: 'status',
  height: '64px',

  [theme.breakpoints.up('tabletXS')]: {
    height: '78px',
  },
}));

export const ErrorPageStatus = (inProps: ErrorPageStatusProps) => {
  const { children, className, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageStatus',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <ErrorPageStatusRoot className={clsx(classes.root, className)}>{children}</ErrorPageStatusRoot>;
};
