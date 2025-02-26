import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type InformationIconClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if variant="info". */
  info: string;
  /** Styles applied to the root element if variant="question". */
  question: string;
};
export type InformationIconClassKey = keyof InformationIconClasses;

export function getInformationIconUtilityClass(slot: string): string {
  return generateUtilityClass('ESInformationIcon', slot);
}

export const informationIconClasses: InformationIconClasses = generateUtilityClasses('ESInformationIcon', [
  'root',
  'info',
  'question',
]);
