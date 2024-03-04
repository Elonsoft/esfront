import { ReactNode } from 'react';

import { AudioPlayerTimeClasses } from './AudioPlayerTime.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerTimeProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerTimeClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  isCurrentVisible: boolean;
  /** Whether the current playback time should be counted backwards. */
  reverse?: boolean;
  duration: number;
  current: number;
}
