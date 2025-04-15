import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FiltersClassKey = keyof FiltersClasses;

export function getFiltersUtilityClass(slot: string): string {
  return generateUtilityClass('ESFilters', slot);
}

export const filtersClasses: FiltersClasses = generateUtilityClasses('ESFilters', ['root']);
