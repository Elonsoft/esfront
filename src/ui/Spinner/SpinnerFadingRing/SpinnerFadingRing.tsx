import { useMemo } from 'react';

import { SpinnerFadingRingProps } from './SpinnerFadingRing.types';

import clsx from 'clsx';
import { getSpinnerFadingRingUtilityClass } from './SpinnerFadingRing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { spinnerRotateAnimation } from '../Spinner.animations';
import { isSafari, setGradient } from '../Spinner.utils';
import { useSpinnerColor } from '../useSpinnerColor';

type SpinnerFadingRingOwnerState = {
  classes?: SpinnerFadingRingProps['classes'];
  color: string;
  spinnerColor: string;
  duration: number;
  ease: string;
  size: number;
};

const useUtilityClasses = (ownerState: SpinnerFadingRingOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
    circle: ['circle']
  };

  return composeClasses(slots, getSpinnerFadingRingUtilityClass, classes);
};

const SpinnerFadingRingRoot = styled('svg', {
  name: 'ESSpinnerFadingRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color }
    } = props;
    return [styles.root, styles[color]];
  }
})<{ ownerState: SpinnerFadingRingOwnerState }>(
  ({ ownerState }) => ({
    '& > *': {
      fill: 'currentColor'
    },

    color: ownerState.spinnerColor
  }),
  ({ ownerState }) =>
    spinnerRotateAnimation(isSafari() ? '&' : '& > foreignObject', ownerState.duration, ownerState.ease)
);

const SpinnerFadingRingCircle = styled('div', {
  name: 'ESSpinnerFadingRing',
  slot: 'Circle',
  overridesResolver: (props, styles) => styles.circle
})<{ ownerState: SpinnerFadingRingOwnerState }>(({ theme, ownerState }) => ({
  width: '100%',
  height: '100%',
  background: `conic-gradient(from 187deg at 50% 50%, rgba(255, 255, 255, ${setGradient(
    theme.palette.mode,
    0.5
  )}) 61deg, ${ownerState.spinnerColor} 360deg)`
}));

export const SpinnerFadingRing: React.FC<SpinnerFadingRingProps> & { count: number } = (inProps) => {
  const {
    size = 40,
    color = 'primary',
    duration = 1000,
    ease = 'linear',
    className,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinnerFadingRing'
  });

  const id = useMemo(() => `SpinnerFadingRing-${SpinnerFadingRing.count++}`, []);
  const spinnerColor = useSpinnerColor(color);
  const ownerState = { ...props, color, spinnerColor, duration, ease, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingRingRoot
      data-testid="svg"
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <clipPath id={id}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4C11.1634 4 4 11.1634 4 20C4 27.5387 9.21559 33.8641 16.2376 35.5556L15.3009 39.4444C6.52338 37.33 0 29.4292 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C18.8954 40 18 39.1046 18 38C18 36.8954 18.8954 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z"
        />
      </clipPath>
      <foreignObject width="40" height="40" clipPath={`url(#${id})`}>
        <SpinnerFadingRingCircle className={classes.circle} ownerState={ownerState} />
      </foreignObject>
    </SpinnerFadingRingRoot>
  );
};

SpinnerFadingRing.count = 0;
