import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ImageZoomClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the transform element. */
  transform: string;
};
export type ImageZoomClassKey = keyof ImageZoomClasses;

export function getImageZoomUtilityClass(slot: string): string {
  return generateUtilityClass('ESImageZoom', slot);
}

export const imageZoomClasses: ImageZoomClasses = generateUtilityClasses('ESImageZoom', ['root', 'transform']);
