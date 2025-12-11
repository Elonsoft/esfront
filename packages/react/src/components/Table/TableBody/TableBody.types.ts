import { CSSProperties, ReactNode } from 'react';

export interface TableBodyProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** If `true`, the table row dividers are shown.
   * @default true
   */
  rowDividers?: boolean;
  /** If `true`, the table col dividers are shown.
   * @default false
   */
  colDividers?: boolean;
  /** If `true`, the table has zebra-striping variant.
   * @default false
   */
  striped?: boolean;
}
