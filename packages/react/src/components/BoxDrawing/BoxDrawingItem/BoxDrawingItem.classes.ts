import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BoxDrawingItemClasses = {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the root element if clickable={true}. */
  clickable: string;

  /** Styles applied to the point element. */
  point: string;
};
export type BoxDrawingItemClassKey = keyof BoxDrawingItemClasses;

export function getBoxDrawingItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESBoxDrawingItem', slot);
}

export const boxDrawingItemClasses: BoxDrawingItemClasses = generateUtilityClasses('ESBoxDrawingItem', [
  'root',
  'clickable',
  'point'
]);
