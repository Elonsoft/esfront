import { CSSProperties } from 'react';

export interface SwitchProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** If `true`, the component is checked. */
  checked?: boolean;
  /** Callback fired when the state is changed. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /** If `true`, the component appears indeterminate. */
  indeterminate?: boolean;

  /**
   * The color of the component.
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  /**
   * If 'button', hitting enter will toggle the switch.
   * @default 'checkbox'
   */
  type?: 'checkbox' | 'button';

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** The default checked state. Use when the component is not controlled. */
  defaultChecked?: boolean;
  /** If `true`, the `input` element is focused during the first mount. */
  autoFocus?: boolean;
  /** The id of the `input` element. */
  id?: string;
  /** The name of the `input` element. */
  name?: string;
  /** It prevents the user from changing the value of the field */
  readOnly?: boolean;
  /** The value of the component. The DOM API casts this to a string. */
  value?: any;
}
