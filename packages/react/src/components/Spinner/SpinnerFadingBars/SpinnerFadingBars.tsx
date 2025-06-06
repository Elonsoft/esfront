import { SpinnerFadingBarsProps } from './SpinnerFadingBars.types';

import clsx from 'clsx';
import { getSpinnerFadingBarsUtilityClass } from './SpinnerFadingBars.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { generateDelayedOpacityAnimationStyles, generateStyleColorVariants, opacityKeyframe } from '../Spinner.utils';

type SpinnerFadingBarsOwnerState = {
  classes?: SpinnerFadingBarsProps['classes'];
  color: string;
};

const useUtilityClasses = (ownerState: SpinnerFadingBarsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerFadingBarsUtilityClass, classes);
};

const SpinnerFadingBarsRoot = styled('svg', {
  name: 'ESSpinnerFadingBars',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerFadingBarsOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  '& > rect': {
    fill: 'currentColor',
    height: '10px',
    width: '4px',

    animation: `${opacityKeyframe} 1000ms linear infinite`,
    ...generateDelayedOpacityAnimationStyles(),
  },
}));

export const SpinnerFadingBars = (inProps: SpinnerFadingBarsProps) => {
  const {
    className,
    sx,
    size = 40,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingBars',
  });

  const ownerState = { ...props, color };
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
