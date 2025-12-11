import { CSSProperties, ReactNode } from 'react';

import { TooltipProps } from '../../Tooltip';

export interface FiltersFilterProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The title content. */
  title?: ReactNode;
  /** Element placed after the title. */
  endAdornment?: ReactNode;

  /** Text for the hide button aria-label. */
  labelHide?: string;
  /** Text for the show button aria-label. */
  labelShow?: string;

  /** Icon for the hide button. */
  iconHide?: ReactNode;
  /** Icon for the show button. */
  iconShow?: ReactNode;

  /** Props applied to the Tooltip component. */
  TooltipProps?: Omit<TooltipProps, 'children'>;
}
