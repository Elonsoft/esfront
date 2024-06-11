import { ReactNode } from 'react';

import { ListItemTextClasses } from './ListItemText.classes';

import { SxProps, Theme, TypographyProps } from '@mui/material';

export interface ListItemTextProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ListItemTextClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * @default false
   */
  disableTypography?: boolean;

  /**
   * If `true`, the children are indented. This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset?: boolean;

  /**
   * The main content element.
   */
  primary?: ReactNode;

  /**
   * These props will be forwarded to the primary typography component (as long as disableTypography is not `true`).
   */
  primaryTypographyProps?: TypographyProps;

  /**
   * The secondary content element.
   */
  secondary?: ReactNode;

  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps?: TypographyProps;
}
