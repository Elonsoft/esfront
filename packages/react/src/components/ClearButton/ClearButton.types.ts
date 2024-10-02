import { ReactNode } from 'react';

import { ClearButtonClasses } from './ClearButton.classes';

import { SxProps, Theme } from '@mui/material/styles';

import { OverridableStringUnion } from '@mui/types';

export interface ButtonPropsSizeOverrides {}

export interface ClearButtonProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ClearButtonClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The icon displayed before the message. */
  icon?: ReactNode;
  /** Text for the button aria-label. */
  ariaLabel?: string;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default '300'
   */
  size?: OverridableStringUnion<'100' | '200' | '300' | '400' | '500' | '600' | '700', ButtonPropsSizeOverrides>;

  onClick?: (() => void) | undefined;
}
