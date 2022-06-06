import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimePickerMenuItemClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the typography element. */
  typography: string;
};
export type TimePickerMenuItemClassKey = keyof TimePickerMenuItemClasses;

export function getTimePickerMenuItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimePickerMenuItem', slot);
}

export const timePickerMenuItemClasses: TimePickerMenuItemClasses = generateUtilityClasses('ESTimePickerMenuItem', [
  'root',
  'typography'
]);
