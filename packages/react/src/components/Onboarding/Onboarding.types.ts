import { OnboardingClasses } from './Onboarding.classes';

import { PopperProps } from '@mui/material';

export interface OnboardingProps {
  classes?: Partial<OnboardingClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Padding applied to the Onboarding component. */
  padding?: number;
  /** The index of the current step in the Onboarding process. */
  currentStep?: number | undefined;
  /** Function to set the state indicating whether the Onboarding component is open or not. */
  setIsOpen?: (isOpen: boolean) => void;
  /** Boolean indicating whether the Onboarding component is open or not. */
  isOpen?: boolean;
  /** Title text for the Onboarding component. */
  title?: string;
  /** Subtitle text for the Onboarding component. */
  subtitle?: string;
  /** Function called when the user clicks the "Next" button in the Onboarding process. */
  onNext?: () => void;
  /** Function called when the user clicks the "Previous" button in the Onboarding process. */
  onPrev?: () => void;
  /** An array of steps for the Onboarding process. Each step may contain a popper element and an associated element to anchor the popper to. */
  steps?: {
    popper?: (props: any) => JSX.Element;
    element?: () => Element | null;
  }[];

  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl?: PopperProps['anchorEl'];
}
