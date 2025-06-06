import { AlertActionsProps } from './AlertActions.types';

import clsx from 'clsx';
import { getAlertActionsUtilityClass } from './AlertActions.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type AlertActionsOwnerState = {
  classes?: AlertActionsProps['classes'];
};

const useUtilityClasses = (ownerState: AlertActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAlertActionsUtilityClass, classes);
};

const AlertActionsRoot = styled('div', {
  name: 'ESAlertActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  padding: '4px 0',
});

export const AlertActions = (inProps: AlertActionsProps) => {
  const { className, children, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESAlertActions',
  });
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);
  return (
    <AlertActionsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AlertActionsRoot>
  );
};
