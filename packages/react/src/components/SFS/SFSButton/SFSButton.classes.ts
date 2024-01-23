import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SFSButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if active=true. */
  active: string;
};
export type SFSButtonClassKey = keyof SFSButtonClasses;

export function getSFSButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESSFSButton', slot);
}

export const sfsButtonClasses: SFSButtonClasses = generateUtilityClasses('ESSFSButton', ['root', 'active']);
