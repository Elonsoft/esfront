import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/core';

import { SpinnerFadingDotsProps } from './SpinnerFadingDots.types';
import { getSpinnerFadingDotsUtilityClass } from './SpinnerFadingDots.classes';
import { spinnerOpacityAnimation } from '../Spinner.animations';
import { useSpinnerColor } from '../useSpinnerColor';

type SpinnerFadingDotsOwnerState = {
  classes?: SpinnerFadingDotsProps['classes'];
  color: string;
  spinnerColor: string;
  duration: number;
  ease: string;
};

const useUtilityClasses = (ownerState: SpinnerFadingDotsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color]
  };

  return composeClasses(slots, getSpinnerFadingDotsUtilityClass, classes);
};

const SpinnerFadingDotsRoot = styled('svg', {
  name: 'ESSpinnerFadingDots',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color }
    } = props;
    return [styles.root, styles[color]];
  }
})<{ ownerState: SpinnerFadingDotsOwnerState }>(
  ({ ownerState }) => ({
    color: ownerState.spinnerColor,
    '& > *': {
      fill: 'currentColor',
      width: '4px',
      height: '10px'
    }
  }),
  ({ ownerState }) => ({
    ...spinnerOpacityAnimation('& > *', ownerState.duration, ownerState.ease)
  })
);

export const SpinnerFadingDots: React.FC<SpinnerFadingDotsProps> = (inProps) => {
  const {
    size = 40,
    color = 'primary',
    duration = 1000,
    ease = 'linear',
    className,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinnerFadingDots'
  });

  const spinnerColor = useSpinnerColor(color);
  const ownerState = { ...props, color, spinnerColor, duration, ease };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingDotsRoot
      data-testid="svg"
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="19" cy="3" r="3" />
      <circle cx="30.3145" cy="7.68652" r="3" />
      <ellipse cx="35" cy="19" rx="3" ry="3" />
      <ellipse cx="30.3145" cy="30.3135" rx="3" ry="3" />
      <circle cx="19" cy="35" r="3" />
      <circle cx="7.68555" cy="30.3135" r="3" />
      <ellipse cx="3" cy="19" rx="3" ry="3" />
      <ellipse cx="7.68555" cy="7.68652" rx="3" ry="3" />
    </SpinnerFadingDotsRoot>
  );
};
