import { useMemo } from 'react';

import { SpinnerFadingDoubleRingProps } from './SpinnerFadingDoubleRing.types';

import clsx from 'clsx';
import { getSpinnerFadingDoubleRingUtilityClass } from './SpinnerFadingDoubleRing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { generateStyleColorVariants, rotateKeyframe } from '../Spinner.utils';

type SpinnerFadingDoubleRingPropsOwnerState = {
  classes?: SpinnerFadingDoubleRingProps['classes'];
  color: string;
  size: number;
};

const useUtilityClasses = (ownerState: SpinnerFadingDoubleRingPropsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerFadingDoubleRingUtilityClass, classes);
};

const SpinnerFadingDoubleRingSpinnerRoot = styled('svg', {
  name: 'ESSpinnerFadingDoubleRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerFadingDoubleRingPropsOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),
  animation: `${rotateKeyframe} 1000ms linear infinite`,

  '& > g > g foreignObject': {
    height: '2679.16px',
    width: '2679.16px',
    x: '-1339.58px',
    y: '-1339.58px',

    '& > div': {
      width: '100%',
      height: '100%',
      opacity: 1,
      background: `conic-gradient(from 90deg, currentColor 0deg,rgba(109, 47, 255, 0) 90.5269deg,
              currentColor 209.099deg, currentColor 360deg)`,
    },
  },
}));

export const SpinnerFadingDoubleRing = (inProps: SpinnerFadingDoubleRingProps) => {
  const {
    className,
    sx,
    size = 32,
    color = 'primary',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSpinnerFadingDoubleRing',
  });

  const id = useMemo(() => `SpinnerFadingDoubleRing-${SpinnerFadingDoubleRing.count++}`, []);
  const ownerState = { ...props, color, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingDoubleRingSpinnerRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 32 32"
      width={size}
    >
      <clipPath id={id}>
        <path d="M2.00195 16C0.897384 16 -0.0109262 15.1011 0.12679 14.0052C0.388391 11.9233 1.05783 9.90652 2.10385 8.07266C3.48132 5.65771 5.46427 3.64335 7.85729 2.22813C10.2503 0.812899 12.9708 0.0456425 15.7506 0.00197383C17.8616 -0.0311872 19.9514 0.353781 21.9018 1.12747C22.9285 1.53477 23.2786 2.76377 22.7465 3.73171C22.2144 4.69965 21.0012 5.03514 19.9584 4.67097C18.6317 4.20766 17.2289 3.97925 15.8135 4.00148C13.7286 4.03423 11.6882 4.60967 9.89346 5.67109C8.09869 6.73252 6.61147 8.24328 5.57838 10.0545C4.877 11.2841 4.40137 12.6234 4.16824 14.0092C3.98499 15.0985 3.10652 16 2.00195 16Z" />
      </clipPath>

      <clipPath id={`${id}s`}>
        <path d="M30.002 16C31.1065 16 32.0148 16.8989 31.8771 17.9948C31.6155 20.0767 30.9461 22.0935 29.9001 23.9273C28.5226 26.3423 26.5396 28.3566 24.1466 29.7719C21.7536 31.1871 19.0331 31.9544 16.2533 31.998C14.1423 32.0312 12.0525 31.6462 10.1021 30.8725C9.07538 30.4652 8.72527 29.2362 9.2574 28.2683C9.78953 27.3003 11.0027 26.9649 12.0456 27.329C13.3722 27.7923 14.775 28.0208 16.1904 27.9985C18.2753 27.9658 20.3157 27.3903 22.1104 26.3289C23.9052 25.2675 25.3924 23.7567 26.4255 21.9455C27.1269 20.7159 27.6025 19.3766 27.8357 17.9908C28.0189 16.9015 28.8974 16 30.002 16Z" />
      </clipPath>

      <g clipPath={`url(#${id})`}>
        <g transform="matrix(0 0.0142761 -0.0144 0 16.002 15.8761)">
          <foreignObject>
            <div />
          </foreignObject>
        </g>
      </g>

      <g clipPath={`url(#${id}s)`}>
        <g transform="matrix(1.24805e-09 -0.0142761 0.0144 1.25889e-09 16.002 16.1239)">
          <foreignObject>
            <div />
          </foreignObject>
        </g>
      </g>
    </SpinnerFadingDoubleRingSpinnerRoot>
  );
};

SpinnerFadingDoubleRing.count = 0;
