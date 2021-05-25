import { ESEmptyStateClasses } from './EmptyState.styles';
export interface ESEmptyStateProps {
  classes?: Partial<ESEmptyStateClasses>;
  className?: string;
  /**
   * Heading text.
   */
  heading?: string;
  /**
   * Subheading text.
   */
  subheading?: string;
}
