import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersFilterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FiltersFilterClassKey = keyof FiltersFilterClasses;

export function getFiltersFilterUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersFilter', slot);
}

export const filtersFilterClasses: FiltersFilterClasses = generateUtilityClasses('ESFiltersFilter', ['root']);
