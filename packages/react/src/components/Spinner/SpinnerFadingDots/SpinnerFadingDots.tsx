import { SpinnerFadingDotsProps } from './SpinnerFadingDots.types';

import clsx from 'clsx';
import { getSpinnerFadingDotsUtilityClass } from './SpinnerFadingDots.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { generateDelayedOpacityAnimationStyles, generateStyleColorVariants, opacityKeyframe } from '../Spinner.utils';

type SpinnerFadingDotsOwnerState = {
  classes?: SpinnerFadingDotsProps['classes'];
  color: string;
};

const useUtilityClasses = (ownerState: SpinnerFadingDotsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerFadingDotsUtilityClass, classes);
};

const SpinnerFadingDotsRoot = styled('svg', {
  name: 'ESSpinnerFadingDots',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerFadingDotsOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  '& > circle': {
    fill: 'currentColor',
    height: '10px',
    width: '4px',

    animation: `${opacityKeyframe} 1000ms linear infinite`,
    ...generateDelayedOpacityAnimationStyles(),
  },
}));

export const SpinnerFadingDots = (inProps: SpinnerFadingDotsProps) => {
  const {
    className,
    sx,
    size = 40,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingDots',
  });

  const ownerState = { ...props, color };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingDotsRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="19" cy="3" r="3" />
      <circle cx="30.3145" cy="7.68652" r="3" />
      <circle cx="35" cy="19" r="3" />
      <circle cx="30.3145" cy="30.3135" r="3" />
      <circle cx="19" cy="35" r="3" />
      <circle cx="7.68555" cy="30.3135" r="3" />
      <circle cx="3" cy="19" r="3" />
      <circle cx="7.68555" cy="7.68652" r="3" />
    </SpinnerFadingDotsRoot>
  );
};
