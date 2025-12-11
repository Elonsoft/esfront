import { CSSProperties, ReactNode } from 'react';

export interface ChipsProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The amount of visible lines.
   * @default 1
   */
  maxLines?: number;

  /** Text for the hide button. */
  labelHide?: ReactNode;
  /** Text for the show button aria-label. */
  labelShow?: string;

  /** Icon for the hide button. */
  iconHide?: ReactNode;
  /** Icon for the show button. */
  iconShow?: ReactNode;
}
