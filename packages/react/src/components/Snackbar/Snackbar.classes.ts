import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type SnackbarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the progress element. */
  progress: string;
  /** Styles applied to the content element. */
  content: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the message element. */
  message: string;
  /** Styles applied to the actions element. */
  actions: string;

  /** Styles applied to the root element if severity="success". */
  severitySuccess: string;
  /** Styles applied to the root element if severity="warning". */
  severityWarning: string;
  /** Styles applied to the root element if severity="error". */
  severityError: string;
  /** Styles applied to the root element if severity="info". */
  severityInfo: string;
  /** Styles applied to the root element if severity="default". */
  severityDefault: string;

  /** Styles applied to the root element if severity="success" or color="success". */
  colorSuccess: string;
  /** Styles applied to the root element if severity="warning" or color="warning". */
  colorWarning: string;
  /** Styles applied to the root element if severity="error" or color="error". */
  colorError: string;
  /** Styles applied to the root element if severity="info" or color="info". */
  colorInfo: string;
  /** Styles applied to the root element if severity="default" or color="monoA". */
  colorMonoA: string;

  /** Styles applied to the root element if size="s". */
  sizeS: string;
  /** Styles applied to the root element if size="m". */
  sizeM: string;
  /** Styles applied to the root element if size="l". */
  sizeL: string;
  /** Styles applied to the root element if size="xl". */
  sizeXl: string;
};

export type SnackbarClassKey = keyof SnackbarClasses;

export function getSnackbarUtilityClass(slot: string): string {
  return generateUtilityClass('ESSnackbar', slot);
}

export const snackbarClasses: SnackbarClasses = generateUtilityClasses('ESSnackbar', [
  'root',
  'progress',
  'content',
  'icon',
  'heading',
  'message',
  'actions',

  'severitySuccess',
  'severityWarning',
  'severityError',
  'severityInfo',
  'severityDefault',

  'colorSuccess',
  'colorWarning',
  'colorError',
  'colorInfo',
  'colorMonoA',

  'sizeS',
  'sizeM',
  'sizeL',
  'sizeXl',
]);
