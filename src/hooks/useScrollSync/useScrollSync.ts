import { useLayoutEffect, useRef } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that sync scroll position between multiple elements.
 * @param ...refs The refs of the elements.
 */
export const useScrollSync = (...refs: Array<{ current?: HTMLElement | null }>) => {
  const ignoreScroll = useRef(false);

  const onScrollLatest = useLatest((event: Event) => {
    const ignore = ignoreScroll.current;
    ignoreScroll.current = false;
    if (ignore) return;
    ignoreScroll.current = true;

    const syncedRefs = refs.filter((ref) => ref.current !== event.target);
    const targetScrollLeft = (event.target as HTMLElement).scrollLeft;

    syncedRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.scrollLeft = targetScrollLeft;
      }
    });
  });

  useLayoutEffect(() => {
    const onScroll = (event: Event) => {
      onScrollLatest.current(event);
    };

    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener('scroll', onScroll);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('scroll', onScroll);
        }
      });
    };
  }, refs);
};
