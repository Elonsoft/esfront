import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderNavigationClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
};
export type HeaderNavigationClassKey = keyof HeaderNavigationClasses;

export function getHeaderNavigationUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeaderNavigation', slot);
}

export const headerNavigationClasses: HeaderNavigationClasses = generateUtilityClasses('ESHeaderNavigation', [
  'root',
  'button',
]);
