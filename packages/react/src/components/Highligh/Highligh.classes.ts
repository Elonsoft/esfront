import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type HighlighClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type HighlighClassKey = keyof HighlighClasses;

export function getHighlighUtilityClass(slot: string): string {
  return generateUtilityClass('ESHighligh', slot);
}

export const highlighClasses: HighlighClasses = generateUtilityClasses('ESHighligh', ['root']);
