import { CSSProperties, ReactNode } from 'react';

export interface FiltersFormGroupProps {
  children?: ReactNode;
  header?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  maxLines?: number;

  /** Text for the hide button. */
  labelHide?: string;
  /** Text for the show button. */
  labelShow?: string;
}
