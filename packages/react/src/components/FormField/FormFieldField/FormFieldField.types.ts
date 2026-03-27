import { CSSProperties, KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react';

export interface FormFieldFieldProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;

  /** If `true`, the field grows with its content instead of keeping the height of its size. */
  multiline?: boolean;

  /**
   * If `true`, the outline is notched to make room for the label. Defaults to whether the field is focused or filled,
   * pass it to take over, e.g. to keep the notch open while a menu is shown.
   */
  shrink?: boolean;

  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}
