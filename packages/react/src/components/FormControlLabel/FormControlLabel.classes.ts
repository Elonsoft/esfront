import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type FormControlLabelClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the label element. */
  label: string;
  /** Styles applied to the root element if labelPlacement="bottom". */
  labelPlacementBottom: string;
  /** Styles applied to the root element if labelPlacement="end". */
  labelPlacementEnd: string;
  /** Styles applied to the root element if labelPlacement="start". */
  labelPlacementStart: string;
  /** Styles applied to the root element if labelPlacement="top". */
  labelPlacementTop: string;
};

export type FormControlLabelClassKey = keyof FormControlLabelClasses;

export function getFormControlLabelUtilityClass(slot: string): string {
  return generateUtilityClass('ESFormControlLabel', slot);
}

export const formControlLabelClasses: FormControlLabelClasses = generateUtilityClasses('ESFormControlLabel', [
  'root',
  'label',
  'labelPlacementBottom',
  'labelPlacementEnd',
  'labelPlacementStart',
  'labelPlacementTop',
]);
