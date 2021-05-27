import React from 'react';
import { ESEmptyStateClasses } from './EmptyState.styles';
export interface ESEmptyStateProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ESEmptyStateClasses>;
  className?: string;
  /** Icon to display above the text. */
  icon?: React.ReactNode;
  iconText?: string;
  /** Heading text. */
  heading?: string;
  /** Subheading text. */
  subheading?: string;
}
