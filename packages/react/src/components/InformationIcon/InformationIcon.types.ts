import { ReactNode } from 'react';

import { InformationIconClasses } from './InformationIcon.classes';

import { SxProps, Theme } from '@mui/material';

import { SvgIconProps } from '../SvgIcon';

export interface InformationIconProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<InformationIconClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The icon displayed. */
  icon?: ReactNode;
  /**
   * The variant of the alert. This defines the color and icon used.
   * @default 'info'
   */
  variant?: 'info' | 'question';
  /** Props applied to the icon component. */
  SvgIconProps?: Partial<SvgIconProps>;
  /** Callback fired when the icon is clicked.*/
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /** Whether the icon is active. */
  isActive?: boolean;
}
