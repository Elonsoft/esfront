import { ReactNode } from 'react';

import { FiltersFilterClasses } from './FiltersFilter.classes';

import { SxProps, Theme } from '@mui/material';

import { TooltipProps } from '../../Tooltip';

export interface FiltersFilterProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FiltersFilterClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

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
