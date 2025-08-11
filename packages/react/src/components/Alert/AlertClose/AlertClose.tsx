import { AlertCloseProps } from './AlertClose.types';

import clsx from 'clsx';
import { getAlertCloseUtilityClass } from './AlertClose.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { IconCloseW500 } from '../../../icons';
import { Button } from '../../Button';

type AlertCloseOwnerState = {
  classes?: AlertCloseProps['classes'];
};

const useUtilityClasses = (ownerState: AlertCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAlertCloseUtilityClass, classes);
};

const AlertCloseRoot = styled(Button, {
  name: 'ESAlertClose',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  '--icon': theme.vars.palette.monoA.A500,
}));

export const AlertClose = (inProps: AlertCloseProps) => {
  const {
    className,
    sx,
    label,
    icon = <IconCloseW500 container containerSize="20px" />,
    onClick,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESAlertClose',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const Icon = icon as any;

  return (
    <AlertCloseRoot
      aria-label={label}
      className={clsx(classes.root, className)}
      color="tertiary"
      size="300"
      sx={sx}
      onClick={onClick}
    >
      {Icon}
    </AlertCloseRoot>
  );
};
