import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerProgressBarClasses = {
  /** Styles applied to the root element. */
  root: string;
  tooltip: string;
  slider: string;
};
export type AudioPlayerProgressBarClassKey = keyof AudioPlayerProgressBarClasses;

export function getAudioPlayerProgressBarUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerProgressBar', slot);
}

export const audioPlayerProgressBarClasses: AudioPlayerProgressBarClasses = generateUtilityClasses(
  'ESAudioPlayerProgressBar',
  ['root', 'tooltip', 'slider']
);
