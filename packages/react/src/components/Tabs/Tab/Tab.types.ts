import { CSSProperties, FocusEvent, MouseEvent, ReactElement, ReactNode } from 'react';

export interface TabProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default true
   */
  disableFocusRipple?: boolean;
  /**
   * The label element.
   */
  label?: ReactNode;
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value?: any;
  /**
   * If 'true' the component will be smaller and have rounded corners.
   */
  rounded?: boolean;
  /**
   * The indicator element for the current tab.
   */
  indicator?: ReactElement;
  /**
   * If `true`, the component will take up the full available width.
   */
  fullWidth?: boolean;
  /**
   * Event handler for tab selection change. Accepts parameters: event and tab value.
   */
  onChange?: (event: MouseEvent | FocusEvent, value: any) => void;
  /**
   * Event handler for tab click. Accepts parameter: click event.
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Event handler for tab focus. Accepts parameter: focus event.
   */
  onFocus?: (event: FocusEvent) => void;
  /**
   * Determines whether the tab should be selected when focused. If `true`, selection will change when the tab is focused.
   */
  selectionFollowsFocus?: boolean;
  /**
   * If `true`, the tab will be selected.
   */
  selected?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: ReactNode;
}
