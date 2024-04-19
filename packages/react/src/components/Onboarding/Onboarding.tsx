import { useEffect, useState } from 'react';

import { OnboardingProps } from './Onboarding.types';

import { styled, useThemeProps } from '@mui/material/styles';
import { Backdrop, Portal } from '@mui/material';

import { OnboardingSpotlight } from './OnboardingSpotlight';

import { useDebounce } from '../../hooks';

type OnboardingOwnerState = {
  currentStep?: OnboardingProps['currentStep'];
  isOpen?: OnboardingProps['isOpen'];
  steps?: OnboardingProps['steps'];
  padding?: OnboardingProps['padding'];
};

const useUtilityClasses = (ownerState: OnboardingOwnerState) => {
  const { isOpen, currentStep } = ownerState;

  const classes = {
    root: 'onboarding-root',
    backdrop: 'onboarding-backdrop',
    spotlight: 'onboarding-spotlight'
  };

  if (isOpen) {
    classes.root += ' onboarding-open';
    classes.backdrop += ' onboarding-backdrop-open';
  }

  if (currentStep !== undefined && currentStep > 0) {
    classes.spotlight += ' onboarding-spotlight-step-' + currentStep;
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
  const { steps, padding } = useThemeProps({
    props: inProps,
    name: 'ESOnboarding'
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const step = steps?.[currentStep];
  const element = step && step.element ? step.element() : null;
  const [rect, setRect] = useState<DOMRect | null>(null);
  const currentPopper = steps?.[currentStep].popper;

  const onPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onNext = () => {
    if (steps && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [element, isOpen]);

  useDebounce(
    () => {
      if (element) {
        setRect(element.getBoundingClientRect());
      } else {
        onNext();
      }
    },
    500,
    [element]
  );

  const classes = useUtilityClasses({ steps, padding, isOpen });

  return (
    <>
      <Portal>
        <OnboardingBackdrop className={classes.root} open={isOpen} ownerState={inProps}>
          <OnboardingSpotlight padding={padding} rect={rect} />
        </OnboardingBackdrop>
      </Portal>
      {isOpen && currentPopper && currentPopper({ onNext, currentStep, steps, setIsOpen, onPrev })}
    </>
  );
};
