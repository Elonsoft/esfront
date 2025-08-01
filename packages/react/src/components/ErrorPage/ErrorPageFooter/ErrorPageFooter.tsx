import { ErrorPageFooterProps } from './ErrorPageFooter.types';

import clsx from 'clsx';
import { getErrorPageFooterUtilityClass } from './ErrorPageFooter.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

type ErrorPageFooterOwnerState = {
  classes?: ErrorPageFooterProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getErrorPageFooterUtilityClass, classes);
};

export const ErrorPageFooterRoot = styled(Typography, {
  name: 'ESErrorPageFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  alignSelf: 'flex-end',
  color: theme.vars.palette.monoA.A500,
  gridArea: 'footer',
  paddingTop: '64px',
}));

export const ErrorPageFooter = (inProps: ErrorPageFooterProps) => {
  const { children, className, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageFooter',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageFooterRoot className={clsx(classes.root, className)} sx={sx} variant="body100">
      {children}
    </ErrorPageFooterRoot>
  );
};
