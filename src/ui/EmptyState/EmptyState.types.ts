import { ReactNode } from 'react';
import { EmptyStateClasses } from './EmptyState.styles';

export interface EmptyStateProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<EmptyStateClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Icon to display above the text. */
  icon?: ReactNode;
  /** Heading text. */
  heading?: string;
  /** Subheading text. */
  subheading?: string;
}
