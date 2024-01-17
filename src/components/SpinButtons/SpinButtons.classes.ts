import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SpinButtonsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the divider container element. */
  divider: string;
  /** Styles applied to the button element. */
  button: string;
};
export type SpinButtonsClassKey = keyof SpinButtonsClasses;

export function getSpinButtonsUtilityClass(slot: string): string {
  return generateUtilityClass('ESSpinButtons', slot);
}

export const spinButtonsClasses: SpinButtonsClasses = generateUtilityClasses('ESSpinButtons', [
  'root',
  'button',
  'divider'
]);
