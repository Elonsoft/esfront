import { ReactNode } from 'react';

import { SpinButtonsClasses } from './SpinButtons.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SpinButtonsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SpinButtonsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The size of the component.
   * @default '32'
   */
  size?: '52' | '48' | '40' | '32';

  /** Icon to decrement. */
  iconMinus?: ReactNode;
  /** Icon to increment. */
  iconPlus?: ReactNode;
  /**
   * If `true`, hitting escape will not fire the `onDecrement` | `onIncrement` callback.
   * @default false
   */
  disabled?: boolean;
  /** Callback fired when the button is clicked. */
  onDecrement: () => void;
  /** Callback fired when the button is clicked. */
  onIncrement: () => void;
  /** Label to decrement. */
  labelDecrement?: string;
  /** Label to increment. */
  labelIncrement?: string;
}
