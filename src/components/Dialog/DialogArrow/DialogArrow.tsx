import { DialogArrowProps } from './DialogArrow.types';

import clsx from 'clsx';
import { getDialogArrowUtilityClass } from './DialogArrow.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';

import { IconArrowLeft, IconArrowRight } from '../../../icons';

type DialogArrowOwnerState = {
  classes?: DialogArrowProps['classes'];
  direction?: DialogArrowProps['direction'];
};

const useUtilityClasses = (ownerState: DialogArrowOwnerState) => {
  const { classes, direction } = ownerState;

  const slots = {
    root: ['root', direction],
    button: ['button']
  };

  return composeClasses(slots, getDialogArrowUtilityClass, classes);
};

const DialogArrowRoot = styled('div', {
  name: 'ESDialogArrow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { direction }
    } = props;
    return [styles.root, styles[direction]];
  }
})<{ ownerState: DialogArrowOwnerState }>(({ theme, ownerState }) => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  height: '100%',

  ...(ownerState.direction === 'prev' && {
    left: '0'
  }),
  ...(ownerState.direction === 'next' && {
    right: '0'
  }),

  [theme.breakpoints.up('tabletXS')]: {
    display: 'block'
  }
}));

const DialogArrowButton = styled(Button, {
  name: 'ESDialogArrow',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  position: 'sticky',
  top: 0,

  [`&.${buttonClasses.root}`]: {
    borderRadius: 0,
    color: theme.palette.white.A700,
    padding: 8,
    width: 72,
    height: '100vh',

    [`&:not(:disabled):hover, &.${buttonClasses.focusVisible}`]: {
      color: theme.palette.white.A900
    },
    '&:not(:disabled):active': {
      color: theme.palette.white[500]
    }
  }
}));

export const DialogArrow = (inProps: DialogArrowProps) => {
  const {
    className,
    sx,
    direction,
    onClick,
    labelPrev,
    labelNext,
    iconPrev = <IconArrowLeft />,
    iconNext = <IconArrowRight />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDialogArrow'
  });

  const ownerState = { ...props, direction };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogArrowRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <DialogArrowButton
        className={classes.button}
        onClick={onClick}
        aria-label={direction === 'prev' ? labelPrev : labelNext}
        variant="text"
        color="white"
      >
        {direction === 'prev' ? iconPrev : iconNext}
      </DialogArrowButton>
    </DialogArrowRoot>
  );
};
