import { CSSProperties } from 'react';

export interface PaginationRangeProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Options of the rows per page select field. */
  options?: number[];

  /** Text for the items per page. */
  labelItemsPerPage?: string;
  /**  Text for the page range preposition. */
  labelOf?: string;

  /** Icon for the items per page select. */
  iconItemsPerPage?: React.ReactNode;
}
