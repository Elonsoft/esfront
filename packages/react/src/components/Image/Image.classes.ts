import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ImageClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type ImageClassKey = keyof ImageClasses;

export function getImageUtilityClass(slot: string): string {
  return generateUtilityClass('ESImage', slot);
}

export const imageClasses: ImageClasses = generateUtilityClasses('ESImage', ['root']);
