import { DialogArrowProps } from './DialogArrow.types';

import clsx from 'clsx';
import { getDialogArrowUtilityClass } from './DialogArrow.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { IconArrowLeftLineW500, IconArrowRightLineW500 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';

type DialogArrowOwnerState = {
  classes?: DialogArrowProps['classes'];
  direction?: DialogArrowProps['direction'];
};

const useUtilityClasses = (ownerState: DialogArrowOwnerState) => {
  const { classes, direction } = ownerState;

  const slots = {
    root: ['root', direction],
    button: ['button'],
  };

  return composeClasses(slots, getDialogArrowUtilityClass, classes);
};

const DialogArrowRoot = styled('div', {
  name: 'ESDialogArrow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { direction },
    } = props;
    return [styles.root, styles[direction]];
  },
})<{ ownerState: DialogArrowOwnerState }>(({ theme }) => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  height: '100%',

  [theme.breakpoints.up('tabletXS')]: {
    display: 'block',
  },

  variants: [
    {
      props: {
        direction: 'prev',
      },
      style: {
        left: '0',
      },
    },
    {
      props: {
        direction: 'next',
      },
      style: {
        right: '0',
      },
    },
  ],
}));

const DialogArrowButton = styled(Button, {
  name: 'ESDialogArrow',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button,
})(({ theme }) => ({
  position: 'sticky',
  top: 0,

  [`&.${buttonClasses.root}`]: {
    borderRadius: 0,
    padding: 8,
    width: 72,
    height: '100vh',
    '--icon': theme.vars.palette.white.A700,

    '&:not(:disabled):hover, &:focus-visible': {
      '--icon': theme.vars.palette.white.A900,
    },
    '&:not(:disabled):active': {
      '--icon': theme.vars.palette.white[500],
    },
  },
}));

export const DialogArrow = (inProps: DialogArrowProps) => {
  const {
    className,
    sx,
    direction,
    onClick,
    labelPrev,
    labelNext,
    iconPrev = <IconArrowLeftLineW500 />,
    iconNext = <IconArrowRightLineW500 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESDialogArrow',
  });

  const ownerState = { ...props, direction };
  const classes = useUtilityClasses(ownerState);

  return (
    <DialogArrowRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <DialogArrowButton
        aria-label={direction === 'prev' ? labelPrev : labelNext}
        className={classes.button}
        color="white"
        variant="text"
        onClick={onClick}
      >
        {direction === 'prev' ? iconPrev : iconNext}
      </DialogArrowButton>
    </DialogArrowRoot>
  );
};
