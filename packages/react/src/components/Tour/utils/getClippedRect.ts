import { TourRect } from './types';

/**
 * The bounding box of `element`, clipped to the viewport. Returns `null` when nothing of it is on screen.
 *
 * Edges the viewport cut report no free space, since padding there would only be drawn off screen anyway.
 */
export const getClippedRect = (element: Element): TourRect | null => {
  const window = element.ownerDocument.defaultView;

  if (!window) {
    return null;
  }

  const rect = element.getBoundingClientRect();

  const top = Math.max(rect.top, 0);
  const left = Math.max(rect.left, 0);
  const bottom = Math.min(rect.bottom, window.innerHeight);
  const right = Math.min(rect.right, window.innerWidth);

  if (bottom <= top || right <= left) {
    return null;
  }

  return {
    top,
    left,
    width: right - left,
    height: bottom - top,
    gap: {
      top: rect.top < top ? 0 : null,
      right: rect.right > right ? 0 : null,
      bottom: rect.bottom > bottom ? 0 : null,
      left: rect.left < left ? 0 : null,
    },
    cut: {
      top: rect.top < top,
      right: rect.right > right,
      bottom: rect.bottom > bottom,
      left: rect.left < left,
    },
  };
};
