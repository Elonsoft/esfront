import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type InformationIconClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant="info". */
  info: string;
  /** Styles applied to the root element if variant="question". */
  question: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the active icon element. */
  activeIcon: string;
};
export type InformationIconClassKey = keyof InformationIconClasses;

export function getInformationIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESInformationIcon', slot);
}

export const informationIconClasses: InformationIconClasses = generateUtilityClasses('ESInformationIcon', [
  'root',
  'info',
  'question',
  'icon',
  'activeIcon',
]);
