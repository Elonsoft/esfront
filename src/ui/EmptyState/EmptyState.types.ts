import React from 'react';
import { ESEmptyStateClasses } from './EmptyState.styles';
export interface ESEmptyStateProps {
  classes?: Partial<ESEmptyStateClasses>;
  className?: string;
  icon?: React.ReactNode;
  iconText?: string;
  heading?: string;
  subheading?: string;
}
