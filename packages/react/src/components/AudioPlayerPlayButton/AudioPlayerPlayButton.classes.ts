import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerPlayButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AudioPlayerPlayButtonClassKey = keyof AudioPlayerPlayButtonClasses;

export function getAudioPlayerPlayButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerPlayButton', slot);
}

export const audioPlayerPlayButtonClasses: AudioPlayerPlayButtonClasses = generateUtilityClasses(
  'ESAudioPlayerPlayButton',
  ['root']
);
