import { CSSProperties, ReactNode } from 'react';

export interface TabScrollButtonProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The direction the button should indicate.
   */
  direction: 'left' | 'right';
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The height of the list of tabs.
   */
  tabListHeight?: number;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    StartScrollButtonIcon?: ReactNode;
    EndScrollButtonIcon?: ReactNode;
  };
}
