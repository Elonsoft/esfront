import { SnackbarCloseProps } from './SnackbarClose.types';

import clsx from 'clsx';
import { getSnackbarCloseUtilityClass } from './SnackbarClose.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconCloseW350 } from '../../../icons';
import { Button } from '../../Button';

type SnackbarCloseOwnerState = {
  classes?: SnackbarCloseProps['classes'];
};

const useUtilityClasses = (ownerState: SnackbarCloseOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    progress: ['progress'],
  };

  return composeClasses(slots, getSnackbarCloseUtilityClass, classes);
};

const SnackbarCloseRoot = styled('div', {
  name: 'ESSnackbarClose',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',
});

const SnackbarCloseButton = styled(Button, {
  name: 'ESSnackbarClose',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.button,
})({
  zIndex: 1,
});

const SnackbarCloseProgress = styled('div', {
  name: 'ESSnackbarClose',
  slot: 'Progress',
  overridesResolver: (_props, styles) => styles.progress,
})(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: 'var(--ESSnackbar-progress, 100%)',
  transition: 'var(--ESSnackbar-transition, none)',
  backgroundColor: theme.vars.palette.monoB.A200,
  zIndex: 0,
}));

export const SnackbarClose = (inProps: SnackbarCloseProps) => {
  const {
    className,
    label,
    icon = <IconCloseW350 />,
    sx,
    size = '400',
    progress,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSnackbarClose',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SnackbarCloseRoot className={clsx(classes.root, className)}>
      <SnackbarCloseButton
        aria-label={label}
        className={classes.button}
        color="monoB"
        size={size}
        sx={sx}
        onClick={onClick}
      >
        {icon}
      </SnackbarCloseButton>
      {progress && <SnackbarCloseProgress className={classes.progress} />}
    </SnackbarCloseRoot>
  );
};
