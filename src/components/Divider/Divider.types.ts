import { ReactNode } from 'react';

import { DividerClasses } from './Divider.classes';

import { SxProps, Theme } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export interface DividerProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DividerClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /**
   * The color of the divider.
   * @default 'monoA.A100'
   */
  color?: TypographyProps['color'];

  /**
   * The width of the divider line.
   * @default 1
   */
  width?: number;

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign?: 'center' | 'start' | 'end';

  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   */
  flexItem?: boolean;
}
