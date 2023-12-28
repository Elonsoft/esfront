import { AlertTitleProps } from './AlertTitle.types';

import clsx from 'clsx';
import { getAlertTitleUtilityClass } from './AlertTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type AlertTitleOwnerState = {
  classes?: AlertTitleProps['classes'];
};

const useUtilityClasses = (ownerState: AlertTitleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAlertTitleUtilityClass, classes);
};

const AlertTitleRoot = styled(Typography, {
  name: 'ESAlertTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({}));

export const AlertTitle = (inProps: AlertTitleProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAlertTitle'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AlertTitleRoot className={clsx(classes.root, className)} color="monoA.A800" sx={sx} variant="body100W50">
      {children}
    </AlertTitleRoot>
  );
};
