import { generateUtilityClass, generateUtilityClasses } from '@mui/core';

export type SwiperButtonClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type SwiperButtonClassKey = keyof SwiperButtonClasses;

export function getSwiperButtonUtilityClass(slot: string): string {
  return generateUtilityClass('ESSwiperButton', slot);
}

export const swiperButtonClasses: SwiperButtonClasses = generateUtilityClasses('ESSwiperButton', ['root']);
