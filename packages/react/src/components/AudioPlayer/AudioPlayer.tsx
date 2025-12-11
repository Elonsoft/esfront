import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

import { AudioPlayerProps } from './AudioPlayer.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import MenuList from '@mui/material/MenuList';
import Slider, { sliderClasses } from '@mui/material/Slider';
import TrapFocus from '@mui/material/Unstable_TrapFocus';

import { useAudioPlayerContext } from './AudioPlayer.context';

import { useLatest, useWindowEventListener } from '../../hooks';
import {
  IconArrowLeftLineW500,
  IconCheckLineW400,
  IconChevronRightLineW400,
  IconDotsVerticalLineW400,
  IconDownloadLineW400,
  IconPauseFillW400,
  IconPlayFillW400,
  IconSpeedometerLineW500,
  IconVolumeHighFillW500,
  IconVolumeLowFillW500,
  IconVolumeMuteFillW500,
} from '../../icons';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { ListItemIcon, ListItemText } from '../ListItem';
import { MenuItem } from '../MenuItem';
import { Tooltip } from '../Tooltip';

import { Instance } from '@popperjs/core';

const DEFAULT_RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const getTimeValue = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const AudioPlayerTimeValue = ({ time }: { time: number }) => {
  return <>{getTimeValue(time)}</>;
};

/**
 * This component is used to embed sound content in documents.
 */
export const AudioPlayer = (inProps: AudioPlayerProps) => {
  const {
    className,
    style,
    src,
    rates = DEFAULT_RATES,
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

    iconBack = <IconArrowLeftLineW500 />,
    iconDownload = <IconDownloadLineW400 />,
    iconOptions = <IconDotsVerticalLineW400 />,
    iconPause = <IconPauseFillW400 />,
    iconPlay = <IconPlayFillW400 />,
    iconRate = <IconSpeedometerLineW500 />,
    iconRateOpen = <IconChevronRightLineW400 />,
    iconRateCheck = <IconCheckLineW400 />,
    iconVolumeHigh = <IconVolumeHighFillW500 />,
    iconVolumeLow = <IconVolumeLowFillW500 />,
    iconVolumeOff = <IconVolumeMuteFillW500 />,

    TooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAudioPlayer',
  });

  const { volume, setVolume } = useAudioPlayerContext();

  const [audio] = useState(new Audio());

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio]);

  useImperativeHandle(audioRef, () => audio, [audio]);

  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);

  const [isFocused, setFocused] = useState(false);

  const [isCurrentVisible, setCurrentVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState<number>(1);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isRateMenuOpen, setRateMenuOpen] = useState(false);
  const [rate, setRate] = useState(1);

  const [isChanging, setChanging] = useState(false);
  const [currentChanging, setCurrentChanging] = useState(0);

  const [isOverRail, setOverRail] = useState(false);
  const [isOverThumb, setOverThumb] = useState(false);

  const positionRef = useRef({
    x: 0,
    y: 0,
  });

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sliderRef = useRef<HTMLElement | null>(null);
  const popperRef = useRef<Instance | null>(null);

  const onFocus = () => {
    requestAnimationFrame(() => {
      if (sliderRef.current) {
        const focusedThumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}.${sliderClasses.focusVisible}`);
        setFocused(!!focusedThumb);
      }
    });
  };

  const onBlur = () => {
    setFocused(false);
  };

  const onPointerMove = (event: React.PointerEvent | PointerEvent) => {
    if (sliderRef.current) {
      const { left, right, top, bottom } = sliderRef.current.getBoundingClientRect();
      const clientX = Math.min(right, Math.max(left, event.clientX));
      setHover((clientX - left) / (right - left));

      if (popperRef.current) {
        positionRef.current = { x: clientX, y: (top + bottom) / 2 };
        popperRef.current.update();
      }
    }
  };

  const onPointerEnter = (event: React.PointerEvent) => {
    setOverRail(true);

    requestAnimationFrame(() => {
      onPointerMove(event);
    });
  };

  const onPointerLeave = () => {
    setOverRail(false);
  };

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onMenuClose = (e: Event | React.SyntheticEvent<Element, Event>) => {
    // Workaround for blur event right after menu button click.
    if (e.type !== 'blur' || e.target !== menuButtonRef.current) {
      setMenuOpen(false);
    }
  };

  const onMenuExited = () => {
    setRateMenuOpen(false);
  };

  const onRateMenuClick = () => {
    setRateMenuOpen(!isRateMenuOpen);
  };

  const onRateMenuClose = () => {
    setRateMenuOpen(false);
  };

  const onRateMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setRateMenuOpen(true);
    }

    if (event.key === 'ArrowLeft') {
      setRateMenuOpen(false);
    }
  };

  const onTogglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const onToggleMute = () => {
    if (audio.muted || volume === 0) {
      if (volume === 0) {
        audio.volume = 1;
      }

      audio.muted = false;
    } else {
      audio.muted = true;
    }
  };

  const onTimeChange = (event: Event, value: number | number[]) => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    if (onSeeking && !isChanging) {
      onSeeking();
    }

    if (event.type === 'input') {
      setCurrentChanging(value as number);
    } else {
      setCurrentChanging(duration * hover);
    }

    setChanging(true);
  };

  const onTimeChangeCommitted = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    if (onSeeked) {
      onSeeked();
    }

    audio.currentTime = event.type === 'change' ? (value as number) : currentChanging;
    setChanging(false);
    setCurrent(audio.currentTime);
    setCurrentVisible(true);
  };

  const onVolumeInputChange = (_: unknown, value: number | number[]) => {
    audio.muted = false;
    audio.volume = (value as number) / 100;
  };

  const onRateInputChange = (value: number) => () => {
    audio.playbackRate = value;
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onAbortLatest = useLatest((event: Event) => {
    if (onAbort) {
      onAbort(event);
    }
  });

  const onCanPlayLatest = useLatest((event: Event) => {
    if (onCanPlay) {
      onCanPlay(event);
    }
  });

  const onCanPlayThroughLatest = useLatest((event: Event) => {
    if (onCanPlayThrough) {
      onCanPlayThrough(event);
    }
  });

  const onDurationChangeLatest = useLatest((event: Event) => {
    const { duration } = event.target as HTMLAudioElement;
    setDuration(duration);

    if (onDurationChange) {
      onDurationChange(event);
    }
  });

  const onEmptiedLatest = useLatest((event: Event) => {
    if (onEmptied) {
      onEmptied(event);
    }
  });

  const onEndedLatest = useLatest((event: Event) => {
    audio.currentTime = 0;
    setPlaying(false);
    setCurrentVisible(false);

    if (onEnded) {
      onEnded(event);
    }
  });

  const onErrorLatest = useLatest((event: Event) => {
    if (onError) {
      onError(event);
    }
  });

  const onLoadedDataLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);

    if (onLoadedData) {
      onLoadedData(event);
    }
  });

  const onLoadedMetadataLatest = useLatest((event: Event) => {
    if (onLoadedMetadata) {
      onLoadedMetadata(event);
    }
  });

  const onLoadStartLatest = useLatest((event: Event) => {
    if (onLoadStart) {
      onLoadStart(event);
    }
  });

  const onPauseLatest = useLatest((event: Event) => {
    setPlaying(false);

    if (onPause) {
      onPause(event);
    }
  });

  const onPlayLatest = useLatest((event: Event) => {
    setPlaying(true);
    setCurrentVisible(true);

    if (onPlay) {
      onPlay(event);
    }
  });

  const onPlayingLatest = useLatest((event: Event) => {
    if (onPlaying) {
      onPlaying(event);
    }
  });

  const onProgressLatest = useLatest((event: Event) => {
    if (onProgress) {
      onProgress(event);
    }
  });

  const onRateChangeLatest = useLatest((event: Event) => {
    const { playbackRate } = event.target as HTMLAudioElement;
    setRate(playbackRate);

    if (onRateChange) {
      onRateChange(event);
    }
  });

  const onStalledLatest = useLatest((event: Event) => {
    if (onStalled) {
      onStalled(event);
    }
  });

  const onSuspendLatest = useLatest((event: Event) => {
    if (onSuspend) {
      onSuspend(event);
    }
  });

  const onTimeUpdateLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);

    if (onTimeUpdate) {
      onTimeUpdate(event);
    }
  });

  const onVolumeChangeLatest = useLatest((event: Event) => {
    const { volume, muted } = event.target as HTMLAudioElement;
    setVolume(Math.round(volume * 100));
    setMuted(muted);

    if (onVolumeChange) {
      onVolumeChange(event);
    }
  });

  const onWaitingLatest = useLatest((event: Event) => {
    if (onWaiting) {
      onWaiting(event);
    }
  });

  useEffect(() => {
    const onAudioAbort = (event: Event) => {
      onAbortLatest.current(event);
    };

    const onAudioCanPlay = (event: Event) => {
      onCanPlayLatest.current(event);
    };

    const onAudioCanPlayThrough = (event: Event) => {
      onCanPlayThroughLatest.current(event);
    };

    const onAudioDurationChange = (event: Event) => {
      onDurationChangeLatest.current(event);
    };

    const onAudioEmptied = (event: Event) => {
      onEmptiedLatest.current(event);
    };

    const onAudioEnded = (event: Event) => {
      onEndedLatest.current(event);
    };

    const onAudioError = (event: Event) => {
      onErrorLatest.current(event);
    };

    const onAudioLoadedData = (event: Event) => {
      onLoadedDataLatest.current(event);
    };

    const onAudioLoadedMetadata = (event: Event) => {
      onLoadedMetadataLatest.current(event);
    };

    const onAudioLoadStart = (event: Event) => {
      onLoadStartLatest.current(event);
    };

    const onAudioPause = (event: Event) => {
      onPauseLatest.current(event);
    };

    const onAudioPlay = (event: Event) => {
      onPlayLatest.current(event);
    };

    const onAudioPlaying = (event: Event) => {
      onPlayingLatest.current(event);
    };

    const onAudioProgress = (event: Event) => {
      onProgressLatest.current(event);
    };

    const onAudioRateChange = (event: Event) => {
      onRateChangeLatest.current(event);
    };

    const onAudioStalled = (event: Event) => {
      onStalledLatest.current(event);
    };

    const onAudioSuspend = (event: Event) => {
      onSuspendLatest.current(event);
    };

    const onAudioTimeUpdate = (event: Event) => {
      onTimeUpdateLatest.current(event);
    };

    const onAudioVolumeChange = (event: Event) => {
      onVolumeChangeLatest.current(event);
    };

    const onAudioWaiting = (event: Event) => {
      onWaitingLatest.current(event);
    };

    audio.addEventListener('abort', onAudioAbort);
    audio.addEventListener('canplay', onAudioCanPlay);
    audio.addEventListener('canplaythrough', onAudioCanPlayThrough);
    audio.addEventListener('durationchange', onAudioDurationChange);
    audio.addEventListener('emptied', onAudioEmptied);
    audio.addEventListener('ended', onAudioEnded);
    audio.addEventListener('error', onAudioError);
    audio.addEventListener('loadeddata', onAudioLoadedData);
    audio.addEventListener('loadedmetadata', onAudioLoadedMetadata);
    audio.addEventListener('loadstart', onAudioLoadStart);
    audio.addEventListener('pause', onAudioPause);
    audio.addEventListener('play', onAudioPlay);
    audio.addEventListener('playing', onAudioPlaying);
    audio.addEventListener('progress', onAudioProgress);
    audio.addEventListener('ratechange', onAudioRateChange);
    audio.addEventListener('stalled', onAudioStalled);
    audio.addEventListener('suspend', onAudioSuspend);
    audio.addEventListener('timeupdate', onAudioTimeUpdate);
    audio.addEventListener('volumechange', onAudioVolumeChange);
    audio.addEventListener('waiting', onAudioWaiting);

    return () => {
      audio.removeEventListener('abort', onAudioAbort);
      audio.removeEventListener('canplay', onAudioCanPlay);
      audio.removeEventListener('canplaythrough', onAudioCanPlayThrough);
      audio.removeEventListener('durationchange', onAudioDurationChange);
      audio.removeEventListener('emptied', onAudioEmptied);
      audio.removeEventListener('ended', onAudioEnded);
      audio.removeEventListener('error', onAudioError);
      audio.removeEventListener('loadeddata', onAudioLoadedData);
      audio.removeEventListener('loadedmetadata', onAudioLoadedMetadata);
      audio.removeEventListener('loadstart', onAudioLoadStart);
      audio.removeEventListener('pause', onAudioPause);
      audio.removeEventListener('play', onAudioPlay);
      audio.removeEventListener('playing', onAudioPlaying);
      audio.removeEventListener('progress', onAudioProgress);
      audio.removeEventListener('ratechange', onAudioRateChange);
      audio.removeEventListener('stalled', onAudioStalled);
      audio.removeEventListener('suspend', onAudioSuspend);
      audio.removeEventListener('timeupdate', onAudioTimeUpdate);
      audio.removeEventListener('volumechange', onAudioVolumeChange);
      audio.removeEventListener('waiting', onAudioWaiting);
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio, volume]);

  useEffect(() => {
    audio.src = src;
  }, [audio, src]);

  useEffect(() => {
    audio.loop = !!loop;
  }, [audio, loop]);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  useEffect(() => {
    let handle: number | null = null;

    const animation = () => {
      if (sliderRef.current && popperRef.current) {
        const thumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}`);

        if (thumb) {
          const { top, bottom } = sliderRef.current.getBoundingClientRect();
          const { left, right } = thumb.getBoundingClientRect();
          positionRef.current = { x: (left + right) / 2, y: (top + bottom) / 2 };
          popperRef.current.update();
        }
      }

      handle = requestAnimationFrame(animation);
    };

    if (isFocused && !isOverRail && sliderRef.current) {
      animation();
    }

    return () => {
      if (handle) {
        cancelAnimationFrame(handle);
      }
    };
  }, [isFocused, isOverRail]);

  useEffect(() => {
    if (sliderRef.current) {
      const thumb = sliderRef.current.querySelector(`.${sliderClasses.thumb}`);

      if (thumb) {
        const onMouseEnter = () => {
          setOverThumb(true);
        };

        const onMouseLeave = () => {
          setOverThumb(false);
        };

        thumb.addEventListener('mouseenter', onMouseEnter);
        thumb.addEventListener('mouseleave', onMouseLeave);

        return () => {
          thumb.removeEventListener('mouseenter', onMouseEnter);
          thumb.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    }
  }, [sliderRef.current]);

  useWindowEventListener('pointermove', onPointerMove);

  const isOverTrack = duration * hover < current;

  return (
    <div className={clsx('es-audio-player', className)} style={style}>
      <Button
        aria-label={isPlaying ? labelPause : labelPlay}
        className="es-audio-player__icon-button"
        size="400"
        onClick={onTogglePlay}
      >
        {isPlaying ? iconPause : iconPlay}
      </Button>
      <div className="es-audio-player__time caption">
        <AudioPlayerTimeValue time={isCurrentVisible ? (reverse ? duration - current : current) : duration} />
      </div>
      <div className="es-audio-player__current">
        <Tooltip
          arrow
          disableInteractive
          PopperProps={{
            className: clsx(
              'es-audio-player__current-tooltip',
              isPlaying && 'es-audio-player__current-tooltip--playing',
              !isPlaying && 'es-audio-player__current-tooltip--paused',
              isOverTrack && 'es-audio-player__current-tooltip--over-track',
              isOverThumb && 'es-audio-player__current-tooltip--over-thumb'
            ),
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(positionRef.current.x, positionRef.current.y, 0, 0);
              },
            },
          }}
          distance={8}
          open={isFocused || isOverRail}
          placement="top"
          title={<AudioPlayerTimeValue time={isChanging ? currentChanging : isOverRail ? duration * hover : current} />}
        >
          <Slider
            ref={sliderRef}
            aria-label={labelCurrent}
            className={clsx(
              'es-audio-player__current-slider',
              isPlaying && 'es-audio-player__current-slider--playing',
              !isPlaying && 'es-audio-player__current-slider--paused'
            )}
            color="primary"
            max={duration}
            min={0}
            step={step}
            value={isChanging ? currentChanging : current}
            onBlur={onBlur}
            onChange={onTimeChange}
            onChangeCommitted={onTimeChangeCommitted}
            onFocus={onFocus}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
          />
        </Tooltip>
      </div>
      <Tooltip
        arrow
        disableFocusListener
        disableTouchListener
        arrowSize="8"
        distance={8}
        followCursor={undefined}
        title={
          <div className="es-audio-player__volume">
            <Slider
              aria-label={labelVolume}
              className="es-audio-player__volume-slider"
              color="primary"
              max={100}
              min={0}
              orientation="vertical"
              value={isMuted ? 0 : volume}
              onChange={onVolumeInputChange}
            />
            <span className="body100">{isMuted ? 0 : volume}</span>
          </div>
        }
        {...TooltipProps}
        placement="top"
        slotProps={{
          ...TooltipProps?.slotProps,
          popper: {
            ...TooltipProps?.slotProps?.popper,
            className: clsx('es-audio-player__tooltip', TooltipProps?.slotProps?.popper?.className),
          },
        }}
      >
        <Button
          aria-label={isMuted || volume === 0 ? labelUnmute : labelMute}
          className="es-audio-player__icon-button es-audio-player__volume-button"
          size="400"
          onClick={onToggleMute}
        >
          {isMuted || volume === 0 ? iconVolumeOff : volume <= 50 ? iconVolumeLow : iconVolumeHigh}
        </Button>
      </Tooltip>
      <Tooltip
        arrow
        disableHoverListener
        disableTouchListener
        TransitionProps={{ onExited: onMenuExited }}
        arrowSize="8"
        distance={8}
        open={isMenuOpen}
        placement="top"
        title={
          isRateMenuOpen ? (
            <TrapFocus open={isMenuOpen}>
              <div style={{ outline: 'none' }} tabIndex={-1} onKeyDown={onRateMenuKeyDown} onMouseDown={onMouseDown}>
                <MenuList className="es-audio-player__menu-list">
                  <MenuItem autoFocus className="es-audio-player__menu-item" size="100" onClick={onRateMenuClose}>
                    <ListItemIcon className="es-audio-player__list-item-icon">{iconBack}</ListItemIcon>
                    <ListItemText className="es-audio-player__list-item-text" primary={labelBack} />
                  </MenuItem>
                  <Divider className="es-audio-player__list-divider" />
                  {rates.map((r) => (
                    <MenuItem
                      key={r}
                      className="es-audio-player__menu-item"
                      selected={r === rate}
                      size="100"
                      onClick={onRateInputChange(r)}
                    >
                      <ListItemText
                        className="es-audio-player__list-item-text"
                        primary={r === 1 ? labelRateNormal : r}
                      />
                      {r === rate && <div className="es-audio-player__rate-check">{iconRateCheck}</div>}
                    </MenuItem>
                  ))}
                </MenuList>
              </div>
            </TrapFocus>
          ) : (
            <TrapFocus open={isMenuOpen}>
              <MenuList className="es-audio-player__menu-list" tabIndex={-1} onMouseDown={onMouseDown}>
                <MenuItem
                  autoFocus
                  className="es-audio-player__menu-item s-audio-player__main-menu-item"
                  size="300"
                  onClick={onRateMenuClick}
                  onKeyDown={onRateMenuKeyDown}
                >
                  <ListItemIcon className="es-audio-player__list-item-icon">{iconRate}</ListItemIcon>
                  <ListItemText
                    className="es-audio-player__list-item-text"
                    primary={labelRate}
                    secondary={rate === 1 ? labelRateNormal : rate}
                  />
                  <div className="es-audio-player__rate-open">{iconRateOpen}</div>
                </MenuItem>
                {!!onDownloadClick && (
                  <MenuItem
                    className="es-audio-player__menu-item s-audio-player__main-menu-item"
                    size="300"
                    onClick={onDownloadClick}
                  >
                    <ListItemIcon className="es-audio-player__list-item-icon">{iconDownload}</ListItemIcon>
                    <ListItemText className="es-audio-player__list-item-text" primary={labelDownload} />
                  </MenuItem>
                )}
              </MenuList>
            </TrapFocus>
          )
        }
        onClose={onMenuClose}
        {...TooltipProps}
        slotProps={{
          ...TooltipProps?.slotProps,
          popper: {
            ...TooltipProps?.slotProps?.popper,
            className: clsx('es-audio-player__menu', TooltipProps?.slotProps?.popper?.className),
          },
        }}
      >
        <Button
          ref={menuButtonRef}
          aria-label={labelOptions}
          className="es-audio-player__icon-button"
          size="400"
          onClick={onMenuClick}
        >
          {iconOptions}
        </Button>
      </Tooltip>
    </div>
  );
};
