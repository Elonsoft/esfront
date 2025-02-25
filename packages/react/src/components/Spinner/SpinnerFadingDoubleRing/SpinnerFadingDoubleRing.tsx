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

  transformOrigin: 'center',
  animation: `${rotateKeyframe} 1000ms linear infinite`,

  '& > foreignObject': {
    '& > div': {
      width: '100%',
      height: '100%',
    },

    '&:nth-of-type(1) > div': {
      background: `conic-gradient(from 179deg, rgba(255, 255, 255, 0) 69%, currentColor 100%)`,
    },
    '&:nth-of-type(2) > div': {
      background: `conic-gradient(from 359deg, rgba(255, 255, 255, 0) 69%, currentColor 100%)`,
    },
  },
}));

export const SpinnerFadingDoubleRing = (inProps: SpinnerFadingDoubleRingProps) => {
  const {
    className,
    sx,
    size = 40,
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
      viewBox="0 0 40 40"
      width={size}
    >
      <clipPath id={id}>
        <path d="M35.5886 11.0002C36.5452 10.4479 37.7785 10.7724 38.2325 11.7794C39.3801 14.3245 39.9852 17.0889 39.9999 19.8955C40.0181 23.3707 39.1305 26.7906 37.4245 29.8183C35.7185 32.8459 33.253 35.3768 30.271 37.1615C27.8627 38.6028 25.1847 39.5173 22.4132 39.8541C21.3167 39.9874 20.4003 39.1006 20.3772 37.9962C20.354 36.8919 21.2342 35.9907 22.3271 35.8301C24.403 35.525 26.4053 34.8134 28.2169 33.7292C30.6024 32.3015 32.5748 30.2768 33.9396 27.8547C35.3044 25.4325 36.0145 22.6966 36 19.9164C35.9889 17.8052 35.5603 15.7239 34.7459 13.7902C34.3172 12.7722 34.6321 11.5525 35.5886 11.0002Z" />
      </clipPath>
      <clipPath id={`${id}s`}>
        <path d="M4.41174 29.0002C3.45515 29.5525 2.22189 29.228 1.76786 28.221C0.620274 25.6759 0.0151645 22.9115 0.000468903 20.1049C-0.0177268 16.6297 0.869917 13.2098 2.57592 10.1821C4.28192 7.15445 6.7474 4.62357 9.72937 2.8389C12.1377 1.39757 14.8157 0.483132 17.5872 0.14629C18.6837 0.0130243 19.6001 0.899817 19.6232 2.00414C19.6464 3.10847 18.7662 4.00965 17.6733 4.17029C15.5974 4.47543 13.5951 5.18696 11.7835 6.27116C9.39796 7.69889 7.42558 9.7236 6.06077 12.1457C4.69597 14.5679 3.98586 17.3038 4.00041 20.084C4.01147 22.1952 4.44012 24.2765 5.25448 26.2102C5.68319 27.2282 5.36832 28.4479 4.41174 29.0002Z" />
      </clipPath>
      <foreignObject clipPath={`url(#${id})`} height="40" width="40">
        <div />
      </foreignObject>
      <foreignObject clipPath={`url(#${id}s)`} height="40" width="40">
        <div />
      </foreignObject>
    </SpinnerFadingDoubleRingSpinnerRoot>
  );
};

SpinnerFadingDoubleRing.count = 0;
