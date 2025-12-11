import { CSSProperties, ReactNode } from 'react';

export interface BreadcrumbsProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Icon for the button more. */
  iconButtonMore?: ReactNode;
  /** Text for the button more aria-label. */
  labelButtonMore?: string;
}
