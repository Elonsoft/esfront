import { SpinnerRingProps } from './SpinnerRing.types';

import clsx from 'clsx';
import { getSpinnerRingUtilityClass } from './SpinnerRing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

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
    sx,
    size = 32,
    color = 'primary',
    ...props
  } = useThemeProps({
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
      sx={sx}
      viewBox="0 0 32 32"
      width={size}
    >
      <circle cx="16" cy="16" opacity="0.3" r="14" strokeWidth="4" />
      <path d="M14 2C14 0.895431 14.8954 0 16 0C18.1011 0 20.1817 0.413852 22.1229 1.21793C24.0641 2.022 25.828 3.20055 27.3137 4.68629C28.7994 6.17203 29.978 7.93586 30.7821 9.87706C31.5861 11.8183 32 13.8989 32 16C32 17.1046 31.1046 18 30 18C28.8954 18 28 17.1046 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.8954 4 14 3.10457 14 2Z" />
    </SpinnerRingRoot>
  );
};
