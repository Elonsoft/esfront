import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HeaderActionsClassKey = keyof HeaderActionsClasses;

export function getHeaderActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeaderActions', slot);
}

export const headerActionsClasses: HeaderActionsClasses = generateUtilityClasses('ESHeaderActions', ['root']);
