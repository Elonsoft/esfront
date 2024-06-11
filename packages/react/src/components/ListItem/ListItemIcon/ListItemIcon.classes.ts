import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ListItemIconClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ListItemIconClassKey = keyof ListItemIconClasses;

export function getListItemIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESListItemIcon', slot);
}

export const listItemIconClasses: ListItemIconClasses = generateUtilityClasses('ESListItemIcon', ['root']);
