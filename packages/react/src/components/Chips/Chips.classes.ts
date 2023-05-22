import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ChipsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
};

export type ChipsClassKey = keyof ChipsClasses;

export function getChipsUtilityClass(slot: string): string {
  return generateUtilityClass('ESChips', slot);
}

export const chipsClasses: ChipsClasses = generateUtilityClasses('ESChips', ['root', 'button']);
