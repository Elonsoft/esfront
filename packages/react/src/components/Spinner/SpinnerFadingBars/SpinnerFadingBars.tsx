import { SpinnerFadingBarsProps } from './SpinnerFadingBars.types';

import clsx from 'clsx';
import { getSpinnerFadingBarsUtilityClass } from './SpinnerFadingBars.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { generateDelayedOpacityAnimationStyles, generateStyleColorVariants, opacityKeyframe } from '../Spinner.utils';

type SpinnerFadingBarsOwnerState = {
  classes?: SpinnerFadingBarsProps['classes'];
  color: string;
};

const useUtilityClasses = (ownerState: SpinnerFadingBarsOwnerState) => {
  const { classes, color } = ownerState;

  const slots = {
    root: ['root', color],
  };

  return composeClasses(slots, getSpinnerFadingBarsUtilityClass, classes);
};

const SpinnerFadingBarsRoot = styled('svg', {
  name: 'ESSpinnerFadingBars',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color },
    } = props;
    return [styles.root, styles[color]];
  },
})<{ ownerState: SpinnerFadingBarsOwnerState }>(({ theme }) => ({
  variants: generateStyleColorVariants(theme),

  '& > path': {
    fill: 'currentColor',

    animation: `${opacityKeyframe} 1000ms linear infinite`,
    ...generateDelayedOpacityAnimationStyles(),
  },
}));

export const SpinnerFadingBars = (inProps: SpinnerFadingBarsProps) => {
  const {
    className,
    sx,
    size = 32,
    color = 'primary',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSpinnerFadingBars',
  });

  const ownerState = { ...props, color };
  const classes = useUtilityClasses(ownerState);

  return (
    <SpinnerFadingBarsRoot
      className={clsx(classes.root, className)}
      data-testid="svg"
      fill="none"
      height={size}
      ownerState={ownerState}
      sx={sx}
      viewBox="0 0 32 32"
      width={size}
    >
      <path d="M7.51578 27.3143C6.73473 28.0954 5.4684 28.0954 4.68735 27.3143C3.9063 26.5333 3.9063 25.2669 4.68735 24.4859L7.51578 21.6574C8.29682 20.8764 9.56315 20.8764 10.3442 21.6574C11.1253 22.4385 11.1253 23.7048 10.3442 24.4859L7.51578 27.3143Z" />
      <path d="M2 18C0.895431 18 -3.91405e-08 17.1046 -8.74228e-08 16C-1.35705e-07 14.8954 0.89543 14 2 14L6 14C7.10457 14 8 14.8954 8 16C8 17.1046 7.10457 18 6 18L2 18Z" />
      <path d="M4.6857 7.5148C3.90465 6.73375 3.90465 5.46742 4.6857 4.68637C5.46675 3.90532 6.73308 3.90532 7.51412 4.68637L10.3426 7.5148C11.1236 8.29585 11.1236 9.56218 10.3426 10.3432C9.5615 11.1243 8.29517 11.1243 7.51412 10.3432L4.6857 7.5148Z" />
      <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2V6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6V2Z" />
      <path d="M24.4842 4.6857C25.2653 3.90465 26.5316 3.90465 27.3127 4.6857C28.0937 5.46675 28.0937 6.73308 27.3127 7.51412L24.4842 10.3426C23.7032 11.1236 22.4368 11.1236 21.6558 10.3426C20.8747 9.5615 20.8747 8.29517 21.6558 7.51412L24.4842 4.6857Z" />
      <path d="M30 14C31.1046 14 32 14.8954 32 16C32 17.1046 31.1046 18 30 18L26 18C24.8954 18 24 17.1046 24 16C24 14.8954 24.8954 14 26 14L30 14Z" />
      <path d="M27.3143 24.4852C28.0954 25.2662 28.0954 26.5326 27.3143 27.3136C26.5333 28.0947 25.2669 28.0947 24.4859 27.3136L21.6574 24.4852C20.8764 23.7042 20.8764 22.4378 21.6574 21.6568C22.4385 20.8757 23.7048 20.8757 24.4859 21.6568L27.3143 24.4852Z" />
      <path d="M14 26C14 24.8954 14.8954 24 16 24C17.1046 24 18 24.8954 18 26V30C18 31.1046 17.1046 32 16 32C14.8954 32 14 31.1046 14 30V26Z" />
    </SpinnerFadingBarsRoot>
  );
};
