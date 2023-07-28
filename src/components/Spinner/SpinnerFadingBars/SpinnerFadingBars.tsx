import { SpinnerFadingBarsProps } from './SpinnerFadingBars.types';

import clsx from 'clsx';
import { getSpinnerFadingBarsUtilityClass } from './SpinnerFadingBars.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { spinnerOpacityAnimation } from '../Spinner.animations';
import { useSpinnerColor } from '../useSpinnerColor';

type SpinnerFadingBarsOwnerState = {
  classes?: SpinnerFadingBarsProps['classes'];
  color: string;
  spinnerColor: string;
  duration: number;
  ease: string;
};

const useUtilityClasses = (ownerState: SpinnerFadingBarsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color]
  };

  return composeClasses(slots, getSpinnerFadingBarsUtilityClass, classes);
};

const SpinnerFadingBarsRoot = styled('svg', {
  name: 'ESSpinnerFadingBars',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color }
    } = props;
    return [styles.root, styles[color]];
  }
})<{ ownerState: SpinnerFadingBarsOwnerState }>(
  ({ ownerState }) => ({
    color: ownerState.spinnerColor,
    '& > *': {
      fill: 'currentColor',
      height: '10px',
      width: '4px'
    }
  }),
  ({ ownerState }) => ({
    ...spinnerOpacityAnimation('& > *', ownerState.duration, ownerState.ease)
  })
);

export const SpinnerFadingBars = (inProps: SpinnerFadingBarsProps) => {
  const {
    className,
    sx,
    size = 40,
    color = 'primary',
    duration = 1000,
    ease = 'linear',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinnerFadingBars'
  });

  const spinnerColor = useSpinnerColor(color);
  const ownerState = { ...props, color, spinnerColor, duration, ease };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingBarsRoot
      className={clsx(classes.root, className)}
      data-testid="svg"
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 40 40"
      width={size}
    >
      <rect rx="2" x="18" />
      <rect rx="2" transform="rotate(45 32.7285 4.44336)" x="32.7285" y="4.44336" />
      <rect rx="2" transform="rotate(90 40 18)" x="40" y="18" />
      <rect rx="2" transform="rotate(135 35.5566 32.7275)" x="35.5566" y="32.7275" />
      <rect rx="2" transform="rotate(-180 22 40)" x="22" y="40" />
      <rect rx="2" transform="rotate(-135 7.27148 35.5566)" x="7.27148" y="35.5566" />
      <rect rx="2" transform="rotate(-90 0 22)" y="22" />
      <rect rx="2" transform="rotate(-45 4.44336 7.27246)" x="4.44336" y="7.27246" />
    </SpinnerFadingBarsRoot>
  );
};
