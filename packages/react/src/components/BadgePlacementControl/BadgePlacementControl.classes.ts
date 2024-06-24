import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type BadgePlacementControlClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the badge `span` element if `overlap="rectangular"`. */
  overlapRectangular: string;
  /** Styles applied to the badge `span` element if `overlap="circular"`. */
  overlapCircular: string;
  /** Styles applied if 'placement="top-right"'. */
  placementTopRight: string;
  /** Styles applied if 'placement="top-left"'. */
  placementTopLeft: string;
  /** Styles applied if 'placement="bottom-right"'. */
  placementBottomRight: string;
  /** Styles applied if 'placement="bottom-left"'. */
  placementBottomLeft: string;
  /** Styles applied to the badge wrapper element. */
  wrapper: string;
};
export type BadgePlacementControlClassKey = keyof BadgePlacementControlClasses;

export function getBadgePlacementControlUtilityClass(slot: string): string {
  return generateUtilityClass('ESBadgePlacementControl', slot);
}

export const badgePlacementControlClasses: BadgePlacementControlClasses = generateUtilityClasses(
  'ESBadgePlacementControl',
  [
    'root',
    'overlapRectangular',
    'overlapCircular',
    'placementTopRight',
    'placementTopLeft',
    'placementBottomRight',
    'placementBottomLeft',
    'wrapper',
  ]
);
