import { CSSProperties, ReactNode } from 'react';

export interface ListItemTextProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
   * This class will be forwarded to the primary typography component (as long as disableTypography is not `true`).
   */
  primaryTypographyClassName?: string;

  /**
   * The secondary content element.
   */
  secondary?: ReactNode;

  /**
   * This class will be forwarded to the secondary typography component (as long as disableTypography is not `true`).
   * @default 'caption'
   */
  secondaryTypographyClassName?: string;
}
