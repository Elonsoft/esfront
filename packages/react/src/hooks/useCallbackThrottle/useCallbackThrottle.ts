import { useCallback, useEffect, useRef } from 'react';

import { useLatest } from '../useLatest';
/**
 * TThe hook that creates a throttled function.
 * @param callback The callback to call.
 * @param delay The number of milliseconds to delay.
 * @returns The throttled callback.
 */

export const useCallbackThrottle = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  const lastRun = useRef(Date.now());
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const callbackRef = useLatest((...args: T) => {
    callback(...args);
  });

  const throttledCallback = useCallback(
    (...args: T) => {
      const diff = Date.now() - lastRun.current;

      if (diff >= delay) {
        lastRun.current = Date.now();
        callbackRef.current(...args);
      } else {
        timeout.current = setTimeout(() => {
          lastRun.current = Date.now();
          callbackRef.current(...args);
        }, delay - diff);
      }
    },
    [delay]
  );

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return throttledCallback;
};
