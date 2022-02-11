import { PaginationRangeClasses } from './PaginationRange.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface PaginationRangeProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PaginationRangeClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Options of the rows per page select field. */
  options?: number[];

  /** Text for the items per page. */
  labelItemsPerPage?: string;
  /**  Text for the page range preposition. */
  labelOf?: string;

  /** Icon for the items per page select. */
  iconItemsPerPage?: React.ReactNode;
}
