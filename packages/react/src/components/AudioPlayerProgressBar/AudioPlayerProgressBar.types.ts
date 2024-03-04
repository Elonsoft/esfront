import { ReactNode } from 'react';

import { AudioPlayerProgressBarClasses } from './AudioPlayerProgressBar.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerProgressBarProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerProgressBarClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  isCurrentVisible: boolean;
  /** Whether the current playback time should be counted backwards. */
  reverse?: boolean;
  duration: number;
  current: number;
  setHover: React.Dispatch<React.SetStateAction<number>>;
  isChanging?: boolean;
  isPlaying: boolean;
  currentChanging: number;
  hover: number;
  labelCurrent?: string;
  step: number;
  onTimeChangeCommitted: (event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void;
  onTimeChange: (event: Event, value: number | number[]) => void;
}
