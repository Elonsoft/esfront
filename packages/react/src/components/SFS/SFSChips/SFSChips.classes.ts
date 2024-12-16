import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SFSChipsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
};

export type SFSChipsClassKey = keyof SFSChipsClasses;

export function getSFSChipsUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSChips', slot);
}

export const sfsChipsClasses: SFSChipsClasses = generateUtilityClasses('ESSFSChips', ['root', 'button']);
