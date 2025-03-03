import { SpinnerRingProps } from './SpinnerRing.types';

import clsx from 'clsx';
import { getSpinnerRingUtilityClass } from './SpinnerRing.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { generateStyleColorVariants, rotateKeyframe } from '../Spinner.utils';

type SpinnerRingOwnerState = {
  classes?: SpinnerRingProps['classes'];
  color: string;
};

const useUtilityClasses = (ownerState: SpinnerRingOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerRingUtilityClass, classes);
};

const SpinnerRingRoot = styled('svg', {
  name: 'ESSpinnerRing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerRingOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  '& > circle': {
    stroke: 'currentColor',
  },
  '& > path': {
    fill: 'currentColor',
    transformOrigin: 'center',
    animation: `${rotateKeyframe} 1000ms linear infinite`,
  },
}));

export const SpinnerRing = (inProps: SpinnerRingProps) => {
  const {
    className,

    size = 40,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerRing',
  });

  const ownerState = { ...props, color };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerRingRoot
      className={clsx(classes.root, className)}
      fill="none"
      height={size}
      ownerState={ownerState}
      viewBox="0 0 40 40"
      width={size}
    >
      <circle cx="20" cy="20" opacity="0.3" r="18" strokeWidth="4" />
      <path d="M20 2C20 0.89543 20.8977 -0.0103805 21.9967 0.0998606C26.5677 0.558357 30.865 2.58075 34.1421 5.85786C37.4192 9.13498 39.4416 13.4323 39.9001 18.0033C40.0104 19.1023 39.1046 20 38 20C36.8954 20 36.0129 19.1011 35.8752 18.0051C35.4345 14.4972 33.8402 11.2128 31.3137 8.68629C28.7872 6.1598 25.5028 4.56551 21.9949 4.12478C20.8989 3.98709 20 3.10457 20 2Z" />
    </SpinnerRingRoot>
  );
};
