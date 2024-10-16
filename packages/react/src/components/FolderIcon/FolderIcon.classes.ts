import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FolderIconClasses = {
  /** Styles applied to the root element. */
  root: string;

  filled: string;

  variantOutlined: string;
  variantContained: string;
  variantColored: string;
  variantDefault: string;

  /** Styles applied to the icon element. */
  icon: string;
};
export type FolderIconClassKey = keyof FolderIconClasses;

export function getFolderIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESFolderIcon', slot);
}

export const folderIconClasses: FolderIconClasses = generateUtilityClasses('ESFolderIcon', [
  'root',
  'filled',
  'variantOutlined',
  'variantContained',
  'variantColored',
  'variantDefault',
  'icon',
]);
