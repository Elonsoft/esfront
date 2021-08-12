import { generateUtilityClass, generateUtilityClasses } from '@material-ui/unstyled';

export type EmptyStateClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the heading element. */
  heading: string;
  /** Styles applied to the subheading element. */
  subheading: string;
};
export type EmptyStateClassKey = keyof EmptyStateClasses;

export function getEmptyStateUtilityClass(slot: string): string {
  return generateUtilityClass('ESEmptyState', slot);
}

export const emptyStateClasses: EmptyStateClasses = generateUtilityClasses('ESEmptyState', [
  'root',
  'icon',
  'text',
  'heading',
  'subheading'
]);
