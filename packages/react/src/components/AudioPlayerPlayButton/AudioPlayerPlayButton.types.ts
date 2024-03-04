import { ReactNode } from 'react';

import { AudioPlayerPlayButtonClasses } from './AudioPlayerPlayButton.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerPlayButtonProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerPlayButtonClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** Playing state */
  isPlaying: boolean;

  /** Icon for the pause button. */
  iconPause?: React.ReactNode;
  /** Icon for the play button. */
  iconPlay?: React.ReactNode;
  /** Text for the pause button aria-label. */
  labelPause?: string;
  /** Text for the play button aria-label. */
  labelPlay?: string;
  onTogglePlay: () => void;
}
