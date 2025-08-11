import { ErrorPageHeadingProps } from './ErrorPageHeading.types';

import clsx from 'clsx';
import { getErrorPageHeadingUtilityClass } from './ErrorPageHeading.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import composeClasses from '@mui/utils/composeClasses';

type ErrorPageHeadingOwnerState = {
  classes?: ErrorPageHeadingProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageHeadingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getErrorPageHeadingUtilityClass, classes);
};

export const ErrorPageHeadingRoot = styled(Typography, {
  name: 'ESErrorPageHeading',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
  gridArea: 'heading',
  marginTop: '24px',
})) as typeof Typography;

export const ErrorPageHeading = (inProps: ErrorPageHeadingProps) => {
  const { children, className, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageHeading',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ErrorPageHeadingRoot className={clsx(classes.root, className)} component="h1" sx={sx} variant="h2">
      {children}
    </ErrorPageHeadingRoot>
  );
};
