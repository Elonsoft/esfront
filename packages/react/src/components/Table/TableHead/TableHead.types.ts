import { CSSProperties, ReactNode } from 'react';

export interface TableHeadProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** If present, makes element sticky and specifies a threshold for sticky positioning. */
  sticky?: number;
  /** If `true`, the table row dividers are shown.
   * @default true
   */
  rowDividers?: boolean;
  /** If `true`, the table col dividers are shown.
   * @default false
   */
  colDividers?: boolean;
}
