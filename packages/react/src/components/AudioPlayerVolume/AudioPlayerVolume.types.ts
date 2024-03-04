import { ReactNode } from 'react';

import { AudioPlayerVolumeClasses } from './AudioPlayerVolume.classes';

import { SxProps, Theme, TooltipProps } from '@mui/material';

export interface AudioPlayerVolumeProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerVolumeClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  // isCurrentVisible: boolean;
  /** Whether the current playback time should be counted backwards. */
  // reverse?: boolean;
  // duration: number;
  // current: number;
  labelVolume?: string;
  isMuted: boolean;
  volume: number;
  onChange: (_: unknown, value: number | number[]) => void;
  TooltipProps?: Partial<TooltipProps>;
  labelMute?: string;
  labelUnmute?: string;
  iconVolumeHigh: ReactNode;
  iconVolumeLow: ReactNode;
  iconVolumeOff: ReactNode;
  onToggleMute: () => void;
}
