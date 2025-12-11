import { CSSProperties, ReactNode } from 'react';

export interface SidebarToggleProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** Icon for the button. */
  icon?: ReactNode;
  /** Text for the button aria-label. */
  labelOpen?: string;
  /** Text for the button aria-label. */
  labelHide?: string;
  /** Callback fired when the button is clicked. */
  onClick?: () => void;
}
