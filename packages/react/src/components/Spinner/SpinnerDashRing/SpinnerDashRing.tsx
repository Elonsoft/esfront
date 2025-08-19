import { useMemo } from 'react';

import { SpinnerDashRingProps } from './SpinnerDashRing.types';

import clsx from 'clsx';
import { getSpinnerDashRingUtilityClass } from './SpinnerDashRing.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { generateStyleColorVariants, rotateKeyframe } from '../Spinner.utils';

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
  animation: `${rotateKeyframe} 1400ms linear infinite`,

  '& > g > g foreignObject': {
    height: '2679.16px',
    width: '2679.16px',
    x: '-1339.58px',
    y: '-1339.58px',

    '& > div': {
      width: '100%',
      height: '100%',
      background: `conic-gradient(from 90deg,rgba(109, 47, 255, 0) 0deg,rgba(109, 47, 255, 0) 48.7883deg,
              rgba(109, 47, 255, 0) 60.3659deg, currentColor 240.373deg,rgba(109, 47, 255, 0) 240.411deg,
              rgba(109, 47, 255, 0) 360deg)`,
    },
  },
}));

export const SpinnerDashRing = (inProps: SpinnerDashRingProps) => {
  const {
    className,
    sx,
    size = 32,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerDashRing',
  });

  const id = useMemo(() => `SpinnerDashRing-${SpinnerDashRing.count++}`, []);
  const ownerState = { ...props, color };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerDashRingRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 32 32"
      width={size}
    >
      <path
        d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="currentColor"
        opacity="0.3"
      />

      <g clipPath={`url(#${id})`}>
        <g transform="matrix(0 0.0142761 -0.0144 0 16.002 15.8761)">
          <foreignObject>
            <div />
          </foreignObject>
        </g>
      </g>

      <clipPath id={id}>
        <path d="M3.8776 23C2.92101 23.5523 1.68491 23.228 1.25618 22.21C-0.116103 18.9517 -0.377619 15.3101 0.54714 11.8589C1.64543 7.76003 4.327 4.26533 8.00195 2.14359C11.6769 0.0218623 16.0442 -0.553102 20.1431 0.545186C23.5943 1.46994 26.6172 3.51719 28.7529 6.33478C29.4201 7.21506 29.0829 8.44771 28.1263 9C27.1697 9.55228 25.9582 9.2107 25.2549 8.359C23.6767 6.44794 21.5333 5.0588 19.1078 4.40889C16.0336 3.58517 12.7582 4.0164 10.002 5.6077C7.24574 7.19899 5.23456 9.82002 4.41084 12.8942C3.76093 15.3197 3.89225 17.8705 4.7582 20.1928C5.14413 21.2277 4.83418 22.4477 3.8776 23Z" />
      </clipPath>
    </SpinnerDashRingRoot>
  );
};

SpinnerDashRing.count = 0;
