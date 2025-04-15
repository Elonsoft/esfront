import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersContentClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FiltersContentClassKey = keyof FiltersContentClasses;

export function getFiltersContentUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersContent', slot);
}

export const filtersContentClasses: FiltersContentClasses = generateUtilityClasses('ESFiltersContent', ['root']);
