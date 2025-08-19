import { SpinnerFadingDotsProps } from './SpinnerFadingDots.types';

import clsx from 'clsx';
import { getSpinnerFadingDotsUtilityClass } from './SpinnerFadingDots.classes';

import { styled } from '@mui/material/styles';
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
    size = 32,
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
      viewBox="0 0 32 32"
      width={size}
    >
      <circle cx="16" cy="29.5" r="2.5" />
      <circle cx="6.49957" cy="25.5" opacity="0.125" r="2.5" />
      <circle cx="2.49957" cy="16" opacity="0.25" r="2.5" />
      <circle cx="6.49957" cy="6.5" opacity="0.375" r="2.5" />
      <circle cx="16" cy="2.5" opacity="0.5" r="2.5" />
      <circle cx="25.4996" cy="6.5" opacity="0.625" r="2.5" />
      <circle cx="29.4996" cy="16" opacity="0.75" r="2.5" />
      <circle cx="25.4996" cy="25.5" opacity="0.875" r="2.5" />
    </SpinnerFadingDotsRoot>
  );
};
