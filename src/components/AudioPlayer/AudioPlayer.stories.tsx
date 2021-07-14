import { useRef } from 'react';

import { AudioPlayerProps } from './AudioPlayer.types';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';

import { AudioPlayer } from './AudioPlayer';
import { AudioPlayerProvider } from './AudioPlayerProvider';

export const Demo: Story<AudioPlayerProps> = (args) => {
  return (
    <Box paddingTop="16px">
      <AudioPlayerProvider>
        <AudioPlayer {...args} />
      </AudioPlayerProvider>
    </Box>
  );
};

export const ImperativeActions: Story = () => {
  const firstAudioRef = useRef<HTMLAudioElement | null>(null);
  const secondAudioRef = useRef<HTMLAudioElement | null>(null);

  const onFirstPlay = () => {
    if (secondAudioRef.current) {
      secondAudioRef.current.pause();
    }
  };

  const onFirstEnded = () => {
    if (secondAudioRef.current) {
      secondAudioRef.current.play();
    }
  };

  const onSecondPlay = () => {
    if (firstAudioRef.current) {
      firstAudioRef.current.pause();
    }
  };

  return (
    <Box paddingTop="16px">
      <AudioPlayerProvider>
        <AudioPlayer
          src="https://www.fesliyanstudios.com/musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3"
          audioRef={firstAudioRef}
          onPlay={onFirstPlay}
          onEnded={onFirstEnded}
        />
        <br />
        <AudioPlayer
          src="https://www.fesliyanstudios.com/musicfiles/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda.mp3"
          audioRef={secondAudioRef}
          onPlay={onSecondPlay}
        />
      </AudioPlayerProvider>
    </Box>
  );
};
