import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type OptionSwatchClasses = {
  /** Class name applied to the root element. */
  root: string;
  /** State class applied to the root element if `checked={true}`. */
  checked: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
};
export type OptionSwatchClassKey = keyof OptionSwatchClasses;

export function getOptionSwatchUtilityClass(slot: string): string {
  return generateUtilityClass('ESOptionSwatch', slot);
}

export const optionSwatchClasses: OptionSwatchClasses = generateUtilityClasses('ESOptionSwatch', [
  'root',
  'checked',
  'disabled',
]);
