import { ReactNode } from 'react';

import { TextFieldProps } from '@mui/material';
import { TooltipProps } from '@mui/material/Tooltip';

export type PasswordFieldProps = {
  /** If true, the password is visible. */
  visible?: boolean;
  /** Callback fired when user changes password visibility.*/
  onVisibilityChange?: (visible: boolean) => void;

  /** Text for the toggle button aria-label when password is visible. */
  labelHidePassword?: string;
  /** Text for the toggle button aria-label when password is hidden. */
  labelShowPassword?: string;

  /** Icon for the toggle button when password is visible. */
  iconHidePassword?: ReactNode;
  /** Icon for the toggle button when password is hidden. */
  iconShowPassword?: ReactNode;

  /** Props applied to the Tooltip components. */
  TooltipProps?: Partial<TooltipProps>;
} & TextFieldProps;
