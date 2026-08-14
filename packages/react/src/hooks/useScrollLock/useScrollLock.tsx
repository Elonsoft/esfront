'use client';

import { lockScroll } from '../../utils';
import { useEnhancedEffect } from '../useEnhancedEffect';

/**
 * The hook that blocks the scrolling of a container while it is locked, compensating for the width of the scrollbar to
 * avoid a layout shift.
 * @param lock If `true`, the scrolling is blocked.
 * @param container The element to lock.
 */
export const useScrollLock = (lock: boolean, container: HTMLElement) => {
  useEnhancedEffect(() => {
    if (lock) {
      return lockScroll(container);
    }
  }, [lock]);
};
