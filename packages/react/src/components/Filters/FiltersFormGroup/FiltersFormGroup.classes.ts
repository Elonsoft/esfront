import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersFormGroupClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FiltersFormGroupClassKey = keyof FiltersFormGroupClasses;

export function getFiltersFormGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersFormGroup', slot);
}

export const filtersFormGroupClasses: FiltersFormGroupClasses = generateUtilityClasses('ESFiltersFormGroup', ['root']);
