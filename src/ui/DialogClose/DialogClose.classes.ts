import { generateUtilityClass, generateUtilityClasses } from '@mui/core';

export type DialogCloseClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type DialogCloseClassKey = keyof DialogCloseClasses;

export function getDialogCloseUtilityClass(slot: string): string {
  return generateUtilityClass('ESDialogClose', slot);
}

export const dialogCloseClasses: DialogCloseClasses = generateUtilityClasses('ESDialogClose', ['root']);
