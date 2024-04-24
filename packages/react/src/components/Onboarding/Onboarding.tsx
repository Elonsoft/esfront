import { useEffect, useState } from 'react';

import { OnboardingProps } from './Onboarding.types';

import { styled, useThemeProps } from '@mui/material/styles';
import { Backdrop, Portal } from '@mui/material';

import { OnboardingSpotlight } from './OnboardingSpotlight';

import { useDebounce } from '../../hooks';

type OnboardingOwnerState = {
  steps?: OnboardingProps['steps'];
  step?: OnboardingProps['step'];
  padding?: OnboardingProps['padding'];
};

const useUtilityClasses = (ownerState: OnboardingOwnerState) => {
  const { step, steps } = ownerState;

  const classes = {
    root: 'onboarding-root',
    backdrop: 'onboarding-backdrop',
    spotlight: 'onboarding-spotlight'
  };

  if (step !== null && steps) {
    classes.root += ' onboarding-open';
    classes.backdrop += ' onboarding-backdrop-open';
  }

  return classes;
};

const OnboardingBackdrop = styled(Backdrop, {
  name: 'ESOnboardingBackdrop',
  slot: 'Backdrop',
  overridesResolver: (styles) => styles.backdrop
})<{ ownerState: OnboardingProps }>(() => ({
  mixBlendMode: 'hard-light'
}));

/**
 * The onboarding component allows you to create a reliable adaptation system for your web application
 */
export const Onboarding = (inProps: OnboardingProps) => {
  const { steps, padding, step, onStepChange } = useThemeProps({
    props: inProps,
    name: 'ESOnboarding'
  });
  const [rect, setRect] = useState<DOMRect | null>(null);
  const currentStep = step ?? 0;
  const currentPopper = steps?.[currentStep].popper;

  const stepCurrent = steps?.[currentStep];
  const element = stepCurrent && stepCurrent.element ? stepCurrent.element() : null;

  useDebounce(
    () => {
      if (typeof step === 'number' && Array.isArray(steps)) {
        const stepElement = steps[step].element && steps[step].element();
        if (stepElement) {
          setRect(stepElement.getBoundingClientRect());
        } else {
          onStepChange?.(step + 1);
        }
      }
    },
    500,
    [step, steps]
  );

  useEffect(() => {
    if (step !== null && steps) {
      const stepElement = steps[step]?.element();
      if (stepElement) {
        setRect(stepElement.getBoundingClientRect());
      }
    }
  }, [step, steps]);

  useEffect(() => {
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (step !== null && steps) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [element, step]);

  const classes = useUtilityClasses({ steps, padding, step });

  return (
    <>
      {step !== null && (
        <Portal>
          <OnboardingBackdrop open className={classes.root} ownerState={inProps}>
            <OnboardingSpotlight padding={padding} rect={rect} />
          </OnboardingBackdrop>
        </Portal>
      )}
      {step !== null && currentPopper && currentPopper({ currentStep, steps, step, onStepChange })}
    </>
  );
};
