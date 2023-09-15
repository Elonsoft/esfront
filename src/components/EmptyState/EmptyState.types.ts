import { ReactNode } from 'react';

import { EmptyStateClasses } from './EmptyState.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface EmptyStateProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<EmptyStateClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'medium' | 'small';

  /** Icon to display above the text. */
  icon?: ReactNode;
  /** Heading text. */
  heading?: ReactNode;
  /** Subheading text. */
  subheading?: ReactNode;
}
