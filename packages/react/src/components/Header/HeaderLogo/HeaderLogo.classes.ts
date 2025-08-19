import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type HeaderLogoClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HeaderLogoClassKey = keyof HeaderLogoClasses;

export function getHeaderLogoUtilityClass(slot: string): string {
  return generateUtilityClass('ESHeaderLogo', slot);
}

export const headerLogoClasses: HeaderLogoClasses = generateUtilityClasses('ESHeaderLogo', ['root']);
