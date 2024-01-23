import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSSortingClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the open button. */
  button: string;
  /** Styles applied to the open button badge. */
  buttonBadge: string;
};

export type SFSSortingClassKey = keyof SFSSortingClasses;

export function getSFSSortingUtilityClass(slot: string) {
  return generateUtilityClass('ESSFSSorting', slot);
}

export const sfsSortingClasses: SFSSortingClasses = generateUtilityClasses('ESSFSSorting', [
  'root',
  'button',
  'buttonBadge'
]);
