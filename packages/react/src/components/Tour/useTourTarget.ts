'use client';

import { useState } from 'react';

import { getClippedRect, getVisibleRect, isSameRect, TourRect } from './utils';

import { useEnhancedEffect } from '../../hooks';

import { autoUpdate } from '@floating-ui/react-dom';

export interface UseTourTargetProps {
  /** The highlighted element, or `null` when the step has no selector. */
  element: Element | null;
  /** The root of the tour. Its subtree is ignored while measuring, and it is watched for resizes. */
  overlay: HTMLElement | null;
  /** If `true`, the whole bounding box is returned instead of the part of it that is on screen. */
  disableOcclusionTracking?: boolean;
}

/**
 * Tracks the rectangle the cutout should cover, in viewport coordinates, keeping it in sync with scrolling, resizes
 * and layout shifts. Returns `null` while the element is off screen or fully covered.
 */
export const useTourTarget = ({ element, overlay, disableOcclusionTracking }: UseTourTargetProps): TourRect | null => {
  const [rect, setRect] = useState<TourRect | null>(null);

  useEnhancedEffect(() => {
    if (!element || !overlay) {
      setRect(null);
      return;
    }

    let frame = 0;
    let isFirstUpdate = true;

    const measure = () => {
      const next = disableOcclusionTracking ? getClippedRect(element) : getVisibleRect(element, overlay);

      setRect((previous) => (isSameRect(previous, next) ? previous : next));
    };

    const update = () => {
      const window = element.ownerDocument.defaultView;

      if (!window) {
        return;
      }

      // `autoUpdate` runs the callback once on setup. That measurement has to land before the browser paints: until it
      // does there is no cutout to position the card against, and the card would show up against the element itself
      // for a frame and then jump.
      if (isFirstUpdate) {
        isFirstUpdate = false;
        measure();
        return;
      }

      // Measuring hit-tests the document, so every update after that is coalesced into a frame rather than run for
      // every scroll event.
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measure);
    };

    const cleanup = autoUpdate(element, overlay, update);

    return () => {
      element.ownerDocument.defaultView?.cancelAnimationFrame(frame);
      cleanup();
    };
  }, [element, overlay, disableOcclusionTracking]);

  return rect;
};
