import { PaginationRangeClasses } from './PaginationRange.classes';

export interface PaginationRangeProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PaginationRangeClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Options of the rows per page select field. */
  options?: number[];
  /** Text for the items per page. */
  labelItemsPerPage?: string;
  /**  Text for the page range preposition. */
  labelOf?: string;
}
