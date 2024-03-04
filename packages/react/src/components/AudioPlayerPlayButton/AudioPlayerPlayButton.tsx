import { AudioPlayerPlayButtonProps } from './AudioPlayerPlayButton.types';

import clsx from 'clsx';
import { getAudioPlayerPlayButtonUtilityClass } from './AudioPlayerPlayButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';

import { IconPauseW400, IconPlayW400 } from '../../icons';

type AudioPlayerPlayButtonOwnerState = {
  classes?: AudioPlayerPlayButtonProps['classes'];
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerPlayButtonOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAudioPlayerPlayButtonUtilityClass, classes);
};

const AudioPlayerPlayButtonRoot = styled(IconButton, {
  name: 'ESAudioPlayerPlayButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.iconButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

/**
 * The AudioPlayerPlayButton displays information and actions relating to the current screen.
 */
export const AudioPlayerPlayButton = (inProps: AudioPlayerPlayButtonProps) => {
  const {
    className,
    iconPause = <IconPauseW400 />,
    iconPlay = <IconPlayW400 />,
    isPlaying,
    labelPause,
    labelPlay,
    onTogglePlay,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerPlayButton'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerPlayButtonRoot
      aria-label={isPlaying ? labelPause : labelPlay}
      className={clsx(classes.root, className)}
      size="32"
      onClick={onTogglePlay}
    >
      {isPlaying ? iconPause : iconPlay}
    </AudioPlayerPlayButtonRoot>
  );
};
