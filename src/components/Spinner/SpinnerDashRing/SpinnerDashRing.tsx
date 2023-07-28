import { SpinnerDashRingProps } from './SpinnerDashRing.types';

import clsx from 'clsx';
import { getSpinnerDashRingUtilityClass } from './SpinnerDashRing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { spinnerDashAnimation } from '../Spinner.animations';
import { useSpinnerColor } from '../useSpinnerColor';

type SpinnerDashRingOwnerState = {
  classes?: SpinnerDashRingProps['classes'];
  color: string;
  spinnerColor: string;
  duration: number;
  ease: string;
  dashEase: string;
};

const useUtilityClasses = (ownerState: SpinnerDashRingOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
    circle: ['circle']
  };

  return composeClasses(slots, getSpinnerDashRingUtilityClass, classes);
};

const SpinnerDashRingRoot = styled('svg', {
  name: 'ESSpinnerDashRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color }
    } = props;
    return [styles.root, styles[color]];
  }
})<{ ownerState: SpinnerDashRingOwnerState }>(({ ownerState }) => ({
  color: ownerState.spinnerColor,
  '& > path': {
    fill: 'currentColor'
  },
  '& > circle': {
    stroke: 'currentColor'
  }
}));

const SpinnerDashRingCircle = styled('circle', {
  name: 'ESSpinnerDashRing',
  slot: 'Circle',
  overridesResolver: (props, styles) => styles.circle
})<{ ownerState: SpinnerDashRingOwnerState }>(({ ownerState }) =>
  spinnerDashAnimation(ownerState.duration, ownerState.ease, ownerState.dashEase)
);

export const SpinnerDashRing = (inProps: SpinnerDashRingProps) => {
  const {
    className,
    sx,
    size = 40,
    color = 'primary',
    duration = 1400,
    ease = 'linear',
    dashEase = 'ease-in-out',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinnerDashRing'
  });

  const spinnerColor = useSpinnerColor(color);
  const ownerState = { ...props, color, spinnerColor, duration, ease, dashEase };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerDashRingRoot
      className={clsx(classes.root, className)}
      data-testid="svg"
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="20" cy="20" opacity="0.3" r="18" strokeWidth="4" />
      <SpinnerDashRingCircle
        className={classes.circle}
        cx="20"
        cy="20"
        ownerState={ownerState}
        r="18"
        strokeWidth="4"
      />
    </SpinnerDashRingRoot>
  );
};
