import { CSSProperties, ReactNode } from 'react';

export interface EmptyStateProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
