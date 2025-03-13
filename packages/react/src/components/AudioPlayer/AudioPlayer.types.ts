import { Ref } from 'react';

import { AudioPlayerClasses } from './AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

import { TooltipProps } from '../Tooltip';

export interface AudioPlayerProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Audio source. */
  src: string;
  /**
   * Possible playback rates for the audio.
   * @default [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
   */
  rates?: number[];
  /**
   * The granularity with which the current time slider can step through values when controlled via keyboard.
   * @default 10
   */
  step?: number;
  /** Whether the audio player will automatically seek back to the start upon reaching the end of the audio. */
  loop?: boolean;
  /** Whether the current playback time should be counted backwards. */
  reverse?: boolean;
  /** A ref for audio element. */
  audioRef?: Ref<HTMLAudioElement>;
  /** Callback fired when user clicks on download button. */
  onDownloadClick?: () => void;

  /** Callback fired when the resource was not fully loaded, but not as the result of an error. */
  onAbort?: (event: Event) => void;
  /** Callback fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content. */
  onCanPlay?: (event: Event) => void;
  /** Callback fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content. */
  onCanPlayThrough?: (event: Event) => void;
  /** Callback fired when the duration attribute has been updated. */
  onDurationChange?: (event: Event) => void;
  /** Callback fired when the media has become empty; for example, when the media has already been loaded (or partially loaded), and the `load()` method is called to reload it. */
  onEmptied?: (event: Event) => void;
  /** Callback fired when playback stops when end of the media is reached or because no further data is available. */
  onEnded?: (event: Event) => void;
  /** Callback fired when the resource could not be loaded due to an error. */
  onError?: (event: Event) => void;
  /** Callback fired when the first frame of the media has finished loading. */
  onLoadedData?: (event: Event) => void;
  /** Callback fired when the metadata has been loaded. */
  onLoadedMetadata?: (event: Event) => void;
  /** Callback fired when the browser has started to load a resource. */
  onLoadStart?: (event: Event) => void;
  /** Callback fired when a request to pause play is handled and the activity has entered its paused state. */
  onPause?: (event: Event) => void;
  /** Callback fired when the paused property is changed from `true` to `false`. */
  onPlay?: (event: Event) => void;
  /** Callback fired when playback is ready to start after having been paused or delayed due to lack of data. */
  onPlaying?: (event: Event) => void;
  /** Callback fired periodically as the browser loads a resource. */
  onProgress?: (event: Event) => void;
  /** Callback fired when the playback rate has changed. */
  onRateChange?: (event: Event) => void;
  /** Callback fired when a seek operation completes. */
  onSeeked?: () => void;
  /** Callback fired when a seek operation begins. */
  onSeeking?: () => void;
  /** Callback fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming. */
  onStalled?: (event: Event) => void;
  /** Callback fired when the media data loading has been suspended. */
  onSuspend?: (event: Event) => void;
  /** Callback fired when the time indicated by the `currentTime` attribute has been updated. */
  onTimeUpdate?: (event: Event) => void;
  /** Callback fired when the volume has changed. */
  onVolumeChange?: (event: Event) => void;
  /** Callback fired when playback has stopped because of a temporary lack of data. */
  onWaiting?: (event: Event) => void;

  /** Text for the menu back button label. */
  labelBack?: string;
  /** Text for the current playback time slider label. */
  labelCurrent?: string;
  /** Text for the download button label. */
  labelDownload?: string;
  /** Text for the mute button aria-label. */
  labelMute?: string;
  /** Text for the options button aria-label. */
  labelOptions?: string;
  /** Text for the pause button aria-label. */
  labelPause?: string;
  /** Text for the play button aria-label. */
  labelPlay?: string;
  /** Text for the rate button label. */
  labelRate?: string;
  /** Text for the normal rate (1x) button label. */
  labelRateNormal?: string;
  /** Text for the unmute button aria-label. */
  labelUnmute?: string;
  /** Text for the volume slider label. */
  labelVolume?: string;

  /** Icon for the menu back button. */
  iconBack?: React.ReactNode;
  /** Icon for the download button. */
  iconDownload?: React.ReactNode;
  /** Icon for the high volume button. */
  iconVolumeHigh?: React.ReactNode;
  /** Icon for the low volume button. */
  iconVolumeLow?: React.ReactNode;
  /** Icon for the off volume button. */
  iconVolumeOff?: React.ReactNode;
  /** Icon for the options button. */
  iconOptions?: React.ReactNode;
  /** Icon for the pause button. */
  iconPause?: React.ReactNode;
  /** Icon for the play button. */
  iconPlay?: React.ReactNode;
  /** Icon for the rate button. */
  iconRate?: React.ReactNode;
  /** Icon for the arrow in rate button. */
  iconRateOpen?: React.ReactNode;
  /** Icon for the checked rate item. */
  iconRateCheck?: React.ReactNode;

  /** Props applied to the Tooltip components. */
  TooltipProps?: Partial<TooltipProps>;
}
