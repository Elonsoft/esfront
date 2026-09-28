'use client';

import { DependencyList, useEffect, useRef } from 'react';

import { useLatest } from '../useLatest';
/**
 * The hook that throttles invoking a given callback.
 * @param callback The callback to call.
 * @param delay The number of milliseconds to delay.
 * @param dependencies Throttle will activate if the values in the list change.
 */

export const useThrottle = (callback: () => void, delay: number, dependencies: DependencyList) => {
  // Seeded with the mount time so the first run is throttled relative to mount. "Time of mount" is not
  // obtainable without reading the clock during render; deferring the seed to an effect would let the
  // first invocation fire immediately, which is a different contract.
  // eslint-disable-next-line react-hooks/purity
  const lastRun = useRef(Date.now());

  const latestCallback = useLatest(callback);

  useEffect(() => {
    const diff = Date.now() - lastRun.current;

    if (diff >= delay) {
      lastRun.current = Date.now();
      latestCallback.current();
    } else {
      const timerId = setTimeout(() => {
        lastRun.current = Date.now();
        latestCallback.current();
      }, delay - diff);

      return () => clearTimeout(timerId);
    }
  }, dependencies);
};
