import { useState } from 'react';

import { AudioPlayerProps } from './AudioPlayer.types';

import clsx from 'clsx';
import { getAudioPlayerUtilityClass } from './AudioPlayer.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { sliderClasses } from '@mui/material';

import { useAudioPlayer } from '../../hooks';
import {
  IconArrowLeftW500,
  IconCheckW400,
  IconChevronRightW400,
  IconDotsVerticalW400,
  IconDownloadW400,
  IconPauseW400,
  IconPlayW400,
  IconSpeedometer,
  IconVolumeHigh,
  IconVolumeLow,
  IconVolumeMute
} from '../../icons';
import { AudioPlayerMenu } from '../AudioPlayerMenu';
import { AudioPlayerPlayButton } from '../AudioPlayerPlayButton';
import { AudioPlayerProgressBar } from '../AudioPlayerProgressBar';
import { AudioPlayerTime } from '../AudioPlayerTime';
import { AudioPlayerVolume } from '../AudioPlayerVolume';

type AudioPlayerOwnerState = {
  classes?: AudioPlayerProps['classes'];
};

const useUtilityClasses = (ownerState: AudioPlayerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAudioPlayerUtilityClass, classes);
};

const AudioPlayerRoot = styled('div', {
  name: 'ESAudioPlayer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.monoA.A50,
  borderRadius: 44,
  display: 'flex',
  padding: '0 4px',

  '&:hover': {
    [`& .${sliderClasses.thumb}`]: {
      opacity: 1
    }
  }
}));

/**
 * This component is used to embed sound content in documents.
 */
export const AudioPlayer = (inProps: AudioPlayerProps) => {
  const {
    className,
    sx,
    src,
    rates,
    step = 10,
    loop,
    reverse,
    audioRef,
    onDownloadClick,
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onDurationChange,
    onEmptied,
    onEnded,
    onError,
    onLoadedData,
    onLoadedMetadata,
    onLoadStart,
    onPause,
    onPlay,
    onPlaying,
    onProgress,
    onRateChange,
    onSeeked,
    onSeeking,
    onStalled,
    onSuspend,
    onTimeUpdate,
    onVolumeChange,
    onWaiting,

    labelBack,
    labelDownload,
    labelMute,
    labelOptions,
    labelPause,
    labelPlay,
    labelRate,
    labelRateNormal,
    labelUnmute,
    labelCurrent,
    labelVolume,

    iconBack = <IconArrowLeftW500 container containerWidth="16px" />,
    iconDownload = <IconDownloadW400 />,
    iconOptions = <IconDotsVerticalW400 />,
    iconPause = <IconPauseW400 />,
    iconPlay = <IconPlayW400 />,
    iconRate = <IconSpeedometer />,
    iconRateOpen = <IconChevronRightW400 />,
    iconRateCheck = <IconCheckW400 />,
    iconVolumeHigh = <IconVolumeHigh />,
    iconVolumeLow = <IconVolumeLow />,
    iconVolumeOff = <IconVolumeMute />,

    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayer'
  });

  const [hover, setHover] = useState<number>(1);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const {
    duration,
    isMuted,
    isCurrentVisible,
    isPlaying,
    current,
    rate,
    volume,
    isChanging,
    currentChanging,
    onTogglePlay,
    onToggleMute,
    onVolumeInputChange,
    onRateInputChange,
    onTimeChange,
    onTimeChangeCommitted
  } = useAudioPlayer({
    src,
    loop,
    hover,
    audioRef,
    onAbort,
    onCanPlay,
    onCanPlayThrough,
    onDurationChange,
    onEmptied,
    onEnded,
    onError,
    onLoadedData,
    onLoadedMetadata,
    onLoadStart,
    onPause,
    onPlay,
    onPlaying,
    onProgress,
    onRateChange,
    onSeeked,
    onSeeking,
    onStalled,
    onSuspend,
    onTimeUpdate,
    onVolumeChange,
    onWaiting
  });

  const onUITimeChange = (event: Event, value: number | number[]) => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    onTimeChange(event, value);
  };

  const ownerState = {
    ...props
  };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerRoot className={clsx(classes.root, className)} sx={sx}>
      <AudioPlayerPlayButton
        iconPause={iconPause}
        iconPlay={iconPlay}
        isPlaying={isPlaying}
        labelPause={labelPause}
        labelPlay={labelPlay}
        onTogglePlay={onTogglePlay}
      />
      <AudioPlayerTime current={current} duration={duration} isCurrentVisible={isCurrentVisible} reverse={reverse} />
      <AudioPlayerProgressBar
        current={current}
        currentChanging={currentChanging}
        duration={duration}
        hover={hover}
        isChanging={isChanging}
        isCurrentVisible={isCurrentVisible}
        isPlaying={isPlaying}
        labelCurrent={labelCurrent}
        reverse={reverse}
        setHover={setHover}
        step={step}
        onTimeChange={onUITimeChange}
        onTimeChangeCommitted={onTimeChangeCommitted}
      />
      <AudioPlayerVolume
        TooltipProps={TooltipProps}
        iconVolumeHigh={iconVolumeHigh}
        iconVolumeLow={iconVolumeLow}
        iconVolumeOff={iconVolumeOff}
        isMuted={isMuted}
        labelMute={labelMute}
        labelUnmute={labelUnmute}
        labelVolume={labelVolume}
        volume={volume}
        onChange={onVolumeInputChange}
        onToggleMute={onToggleMute}
      />
      <AudioPlayerMenu
        TooltipProps={TooltipProps}
        iconBack={iconBack}
        iconDownload={iconDownload}
        iconOptions={iconOptions}
        iconRate={iconRate}
        iconRateCheck={iconRateCheck}
        iconRateOpen={iconRateOpen}
        isMenuOpen={isMenuOpen}
        labelBack={labelBack}
        labelDownload={labelDownload}
        labelOptions={labelOptions}
        labelRate={labelRate}
        labelRateNormal={labelRateNormal}
        rate={rate}
        rates={rates}
        setMenuOpen={setMenuOpen}
        onDownloadClick={onDownloadClick}
        onRateInputChange={onRateInputChange}
      />
    </AudioPlayerRoot>
  );
};
