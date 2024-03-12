import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export interface SwitchBaseClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component checked. */
  checked: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the input element. */
  input: string;
  /** Styles applied to the edgeStart element. */
  edgeStart: string;
  /** Styles applied to the edgeStart element. */
  edgeEnd: string;
}

export type SwitchBaseClassKey = keyof SwitchBaseClasses;

export function getSwitchBaseUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwitchBase', slot);
}

export const switchBaseClasses: SwitchBaseClasses = generateUtilityClasses('ESSwitchBase', [
  'root',
  'checked',
  'disabled',
  'input',
  'edgeStart',
  'edgeEnd',
]);
