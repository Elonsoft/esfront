import { ESEmptyStateClasses } from './EmptyState.styles';
export interface ESEmptyStateProps {
  classes?: Partial<ESEmptyStateClasses>;
  className?: string;
  heading?: string;
  subheading?: string;
  labelImage?: string;
}
