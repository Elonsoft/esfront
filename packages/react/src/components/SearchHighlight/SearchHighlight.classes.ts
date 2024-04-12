import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SearchHighlightClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type SearchHighlightClassKey = keyof SearchHighlightClasses;

export function getSearchHighlightUtilityClass(slot: string): string {
  return generateUtilityClass('ESSearchHighlight', slot);
}

export const searchHighlightClasses: SearchHighlightClasses = generateUtilityClasses('ESSearchHighlight', ['root']);
