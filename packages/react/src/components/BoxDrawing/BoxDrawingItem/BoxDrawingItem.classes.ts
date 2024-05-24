import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BoxDrawingItemClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type BoxDrawingItemClassKey = keyof BoxDrawingItemClasses;

export function getBoxDrawingItemUtilityClass(slot: string): string {
  return generateUtilityClass('ESBoxDrawingItem', slot);
}

export const boxDrawingItemClasses: BoxDrawingItemClasses = generateUtilityClasses('ESBoxDrawingItem', ['root']);
