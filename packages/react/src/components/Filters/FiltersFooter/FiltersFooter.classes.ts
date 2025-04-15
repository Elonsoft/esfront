import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FiltersFooterClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type FiltersFooterClassKey = keyof FiltersFooterClasses;

export function getFiltersFooterUtilityClass(slot: string): string {
  return generateUtilityClass('ESFiltersFooter', slot);
}

export const filtersFooterClasses: FiltersFooterClasses = generateUtilityClasses('ESFiltersFooter', ['root']);
