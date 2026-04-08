import { OptionSwatchClasses } from './OptionSwatch.classes';

import { SxProps, Theme } from '@mui/material';

export interface OptionSwatchProps {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<OptionSwatchClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The id of the `input` element.
   */
  id?: string;

  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name?: string;

  /**
   * [Attributes] applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: string | number | readonly string[];

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
