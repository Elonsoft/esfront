import { ReactNode } from 'react';

import { TextFieldGroupClasses } from './TextFieldGroup.classes';

import { Breakpoint, SxProps, Theme } from '@mui/material/styles';

export interface TextFieldGroupProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TextFieldGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  breakpoint?: number | Breakpoint;
}
