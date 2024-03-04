import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerMenuClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AudioPlayerMenuClassKey = keyof AudioPlayerMenuClasses;

export function getAudioPlayerMenuUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerMenu', slot);
}

export const audioPlayerMenuClasses: AudioPlayerMenuClasses = generateUtilityClasses('ESAudioPlayerMenu', ['root']);
