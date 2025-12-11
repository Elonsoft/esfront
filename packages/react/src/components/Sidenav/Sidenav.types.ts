import { CSSProperties, ReactNode } from 'react';

export interface SidenavProps {
  children?: [ReactNode, ReactNode];

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** If true, hitting escape will not fire the onClose callback. */
  disableEscapeKeyDown?: boolean;
  /** If true, hovering over `SidenavItem` won't change the selected element when open=true. */
  disableItemHover?: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
}
