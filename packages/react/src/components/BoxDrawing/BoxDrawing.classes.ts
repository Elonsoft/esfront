import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BoxDrawingClasses = {
  /** Styles applied to the root element. */
  root: string;

  /** Styles applied to the container element. */
  container: string;
};
export type BoxDrawingClassKey = keyof BoxDrawingClasses;

export function getBoxDrawingUtilityClass(slot: string): string {
  return generateUtilityClass('ESBoxDrawing', slot);
}

export const boxDrawingClasses: BoxDrawingClasses = generateUtilityClasses('ESBoxDrawing', ['root', 'container']);
