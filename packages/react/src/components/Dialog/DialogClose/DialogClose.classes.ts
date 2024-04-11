import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DialogCloseClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the button element. */
  button: string;
  /** Styles applied to the escape key text element. */
  escapeKey: string;
};
export type DialogCloseClassKey = keyof DialogCloseClasses;

export function getDialogCloseUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogClose', slot);
}

export const dialogCloseClasses: DialogCloseClasses = generateUtilityClasses('ESDialogClose', [
  'root',
  'button',
  'escapeKey'
]);
