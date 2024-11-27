import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DropzoneCompactClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if drag is over the component. */
  dragOver: string;
};

export type DropzoneCompactClassKey = keyof DropzoneCompactClasses;

export function getDropzoneCompactUtilityClass(slot: string): string {
  return generateUtilityClass('ESDropzoneCompact', slot);
}

export const dropzoneCompactClasses: DropzoneCompactClasses = generateUtilityClasses('ESDropzoneCompact', [
  'root',
  'dragOver',
]);
