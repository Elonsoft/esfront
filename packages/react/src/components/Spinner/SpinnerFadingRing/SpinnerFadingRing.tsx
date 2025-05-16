import { useMemo } from 'react';

import { SpinnerFadingRingProps } from './SpinnerFadingRing.types';

import clsx from 'clsx';
import { getSpinnerFadingRingUtilityClass } from './SpinnerFadingRing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

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
    background: `conic-gradient(from 190deg, rgba(255, 255, 255, 0) 17%, currentColor 100%)`,
  },
}));

export const SpinnerFadingRing = (inProps: SpinnerFadingRingProps) => {
  const {
    className,
    sx,
    size = 32,
    color = 'primary',
    ...props
  } = useThemeProps({
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
      sx={sx}
      viewBox="0 0 32 32"
      width={size}
    >
      <clipPath id={id}>
        <path
          clipRule="evenodd"
          d="M16 4C9.37258 4 4 9.37258 4 16C4 21.1789 7.28177 25.5964 11.8857 27.2767C12.9233 27.6554 13.4575 28.8035 13.0788 29.8412C12.7001 30.8788 11.5519 31.413 10.5143 31.0343C4.38262 28.7964 0 22.9126 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C14.8954 32 14 31.1046 14 30C14 28.8954 14.8954 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4Z"
          fillRule="evenodd"
        />
      </clipPath>
      <foreignObject clipPath={`url(#${id})`} height="32" width="32">
        <div />
      </foreignObject>
    </SpinnerFadingRingRoot>
  );
};

SpinnerFadingRing.count = 0;
