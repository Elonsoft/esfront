import { ErrorPageLogoProps } from './ErrorPageLogo.types';

import clsx from 'clsx';
import { getErrorPageLogoUtilityClass } from './ErrorPageLogo.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type ErrorPageLogoOwnerState = {
  classes?: ErrorPageLogoProps['classes'];
};

const useUtilityClasses = (ownerState: ErrorPageLogoOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getErrorPageLogoUtilityClass, classes);
};

export const ErrorPageLogoRoot = styled('div', {
  name: 'ESErrorPageLogo',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  alignSelf: 'flex-start',
  gridArea: 'logo',
  paddingBottom: '64px',
}));

export const ErrorPageLogo = (inProps: ErrorPageLogoProps) => {
  const { children, className, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageLogo',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <ErrorPageLogoRoot className={clsx(classes.root, className)}>{children}</ErrorPageLogoRoot>;
};
