import { SpinnerDashRingProps } from './SpinnerDashRing.types';

import clsx from 'clsx';
import { getSpinnerDashRingUtilityClass } from './SpinnerDashRing.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { generateStyleColorVariants, rotateKeyframe, strokeArrayKeyframe } from '../Spinner.utils';

type SpinnerDashRingOwnerState = {
  classes?: SpinnerDashRingProps['classes'];
  color: string;
};

const useUtilityClasses = (ownerState: SpinnerDashRingOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerDashRingUtilityClass, classes);
};

const SpinnerDashRingRoot = styled('svg', {
  name: 'ESSpinnerDashRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerDashRingOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  '& > circle': {
    stroke: 'currentColor',

    '&:nth-of-type(2)': {
      animation: `${strokeArrayKeyframe} 1400ms ease-in-out infinite, ${rotateKeyframe} 1400ms linear infinite`,
      transformOrigin: 'center',
    },
  },
}));

export const SpinnerDashRing = (inProps: SpinnerDashRingProps) => {
  const {
    className,
    sx,
    size = 40,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerDashRing',
  });

  const ownerState = { ...props, color };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerDashRingRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="20" cy="20" opacity="0.3" r="18" strokeWidth="4" />
      <circle cx="20" cy="20" r="18" strokeWidth="4" />
    </SpinnerDashRingRoot>
  );
};
