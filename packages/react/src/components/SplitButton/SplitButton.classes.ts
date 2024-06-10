import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface SplitButtonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="contained"`. */
  contained: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** State class applied to the child elements if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the first button in the split button. */
  firstButton: string;
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: string;
  /** Styles applied to the children. */
  split: string;
  /** Styles applied to the root element if `color="primary"` */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"` */
  colorSecondary: string;
  /** Styles applied to the root element if `color="tertiary"` */
  colorTertiary: string;
  /** Styles applied to the root element if `color="success"` */
  colorSuccess: string;
  /** Styles applied to the root element if `color="error"` */
  colorError: string;
  /** Styles applied to the root element if `color="monoA"` */
  colorMonoA: string;
  /** Styles applied to the root element if `color="monoB"` */
  colorMonoB: string;
  /** Styles applied to the root element if `color="black"` */
  colorBlack: string;
  /** Styles applied to the root element if `color="white"` */
  colorWhite: string;
  /** Styles applied to the divider element.` */
  splitButtonDivider: string;
  /** Styles applied to the children if `variant="outlined"`. */
  splitOutlined: string;
  /** Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  splitOutlinedPrimary: string;
  /** Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  splitOutlinedSecondary: string;
  /** Styles applied to the children if `variant="contained"`. */
  splitContained: string;
  /** Styles applied to the children if `variant="contained"` and `color="primary"`. */
  splitContainedPrimary: string;
  /** Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  splitContainedSecondary: string;
  /** Styles applied to the last button in the split button. */
  lastButton: string;
  /** Styles applied to buttons in the middle of the split button. */
  middleButton: string;
  /** Styles applied to the root element if `size="20"` */
  size200: string;
  /** Styles applied to the root element if `size="24"` */
  size300: string;
  /** Styles applied to the root element if `size="32"` */
  size400: string;
  /** Styles applied to the root element if `size="40"` */
  size500: string;
  /** Styles applied to the root element if `size="48"` */
  size600: string;
  /** Styles applied to the root element if `size="56"` */
  size700: string;
}

export type SplitButtonClassKey = keyof SplitButtonClasses;

export function getSplitButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESSplitButton', slot);
}

export const splitButtonClasses: SplitButtonClasses = generateUtilityClasses('ESSplitButton', [
  'root',
  'contained',
  'outlined',
  'disabled',
  'firstButton',
  'fullWidth',
  'splitButtonDivider',
  'colorPrimary',
  'colorSecondary',
  'colorTertiary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'colorMonoA',
  'colorMonoB',
  'colorBlack',
  'colorWhite',
  'split',
  'splitOutlined',
  'splitOutlinedPrimary',
  'splitOutlinedSecondary',
  'splitContained',
  'splitContainedPrimary',
  'splitContainedSecondary',
  'lastButton',
  'middleButton',
  'size200',
  'size300',
  'size400',
  'size500',
  'size600',
  'size700',
]);
