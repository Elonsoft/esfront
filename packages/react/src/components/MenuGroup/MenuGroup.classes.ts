import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type MenuGroupClasses = {
  /** Styles applied to the root element. */
  root: string;

  paddingBottomS: string;
  paddingBottomM: string;
  paddingBottomL: string;
  sticky: string;
};
export type MenuGroupClassKey = keyof MenuGroupClasses;

export function getMenuGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESMenuGroup', slot);
}

export const menuGroupClasses: MenuGroupClasses = generateUtilityClasses('ESMenuGroup', [
  'root',
  'paddingBottomS',
  'paddingBottomM',
  'paddingBottomL',
  'sticky',
]);
