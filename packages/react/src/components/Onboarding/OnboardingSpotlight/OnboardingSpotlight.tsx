import { OnboardingSpotlightProps } from './OnboardingSpotlight.types';

import clsx from 'clsx';
import { getOnboardingSpotlightUtilityClass } from './OnboardingSpotlight.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type OnboardingSpotlightOwnerState = {
  classes?: OnboardingSpotlightProps['classes'];
};

const useUtilityClasses = (ownerState: OnboardingSpotlightOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getOnboardingSpotlightUtilityClass, classes);
};

const SpotlightRoot = styled('div', {
  name: 'OnboardingSpotlight',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})<OnboardingSpotlightProps>(({ rect, padding = 5 }) => ({
  position: 'absolute',
  background: 'grey',
  borderRadius: '4px',
  top: rect ? rect.top - padding : 'auto',
  left: rect ? rect.left - padding : 'auto',
  width: rect ? rect.width + padding * 2 : 'auto',
  height: rect ? rect.height + padding * 2 : 'auto'
}));

export const OnboardingSpotlight = (inProps: OnboardingSpotlightProps) => {
  const { className, rect, padding, ...props } = useThemeProps({
    props: inProps,
    name: 'ESOnboardingSpotlight'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  if (!rect) {
    return null;
  }

  return (
    <SpotlightRoot
      key="OnboardingSpotlight"
      className={clsx(classes.root, className)}
      data-onboarding-id="spotlight"
      padding={padding}
      rect={rect}
    />
  );
};
