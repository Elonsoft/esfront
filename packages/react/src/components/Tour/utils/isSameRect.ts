import { TourRect } from './types';

export const isSameRect = (a: TourRect | null, b: TourRect | null): boolean => {
  if (!a || !b) {
    return a === b;
  }

  return (
    a.top === b.top &&
    a.left === b.left &&
    a.width === b.width &&
    a.height === b.height &&
    a.gap.top === b.gap.top &&
    a.gap.right === b.gap.right &&
    a.gap.bottom === b.gap.bottom &&
    a.gap.left === b.gap.left &&
    a.cut.top === b.cut.top &&
    a.cut.right === b.cut.right &&
    a.cut.bottom === b.cut.bottom &&
    a.cut.left === b.cut.left
  );
};
