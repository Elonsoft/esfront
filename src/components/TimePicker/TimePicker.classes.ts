import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type TimePickerClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the layout element. */
  layout: string;
};
export type TimePickerClassKey = keyof TimePickerClasses;

export function getTimePickerUtilityClass(slot: string): string {
  return generateUtilityClass('ESTimePicker', slot);
}

export const timePickerClasses: TimePickerClasses = generateUtilityClasses('ESTimePicker', ['root', 'layout']);
