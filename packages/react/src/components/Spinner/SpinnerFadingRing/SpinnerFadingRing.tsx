import { useMemo } from 'react';

import { SpinnerFadingRingProps } from './SpinnerFadingRing.types';

import clsx from 'clsx';
import { getSpinnerFadingRingUtilityClass } from './SpinnerFadingRing.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { generateStyleColorVariants, rotateKeyframe } from '../Spinner.utils';

type SpinnerFadingRingOwnerState = {
  classes?: SpinnerFadingRingProps['classes'];
  color: string;
  size: number;
};

const useUtilityClasses = (ownerState: SpinnerFadingRingOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerFadingRingUtilityClass, classes);
};

const SpinnerFadingRingRoot = styled('svg', {
  name: 'ESSpinnerFadingRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerFadingRingOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  transformOrigin: 'center',
  animation: `${rotateKeyframe} 1000ms linear infinite`,

  '& > foreignObject > div': {
    width: '100%',
    height: '100%',
    background: `conic-gradient(from 187deg, rgba(255, 255, 255, 0) 17%, currentColor 100%)`,
  },
}));

export const SpinnerFadingRing = (inProps: SpinnerFadingRingProps) => {
  const {
    className,

    size = 40,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingRing',
  });

  const id = useMemo(() => `SpinnerFadingRing-${SpinnerFadingRing.count++}`, []);
  const ownerState = { ...props, color, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingRingRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      viewBox="0 0 40 40"
      width={size}
    >
      <clipPath id={id}>
        <path
          clipRule="evenodd"
          d="M20 4C11.1634 4 4 11.1634 4 20C4 27.5387 9.21559 33.8641 16.2376 35.5556L15.3009 39.4444C6.52338 37.33 0 29.4292 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C18.8954 40 18 39.1046 18 38C18 36.8954 18.8954 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z"
          fillRule="evenodd"
        />
      </clipPath>
      <foreignObject clipPath={`url(#${id})`} height="40" width="40">
        <div />
      </foreignObject>
    </SpinnerFadingRingRoot>
  );
};

SpinnerFadingRing.count = 0;
