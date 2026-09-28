'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The hook that throttles a giver value.
 * @param value The value to throttle
 * @param delay The number of milliseconds to delay.
 * @returns The throttled value.
 */

export const useValueThrottle = <T>(value: T, delay: number) => {
  // Seeded with the mount time so the first run is throttled relative to mount. "Time of mount" is not
  // obtainable without reading the clock during render; deferring the seed to an effect would let the
  // first invocation fire immediately, which is a different contract.
  // eslint-disable-next-line react-hooks/purity
  const lastRun = useRef(Date.now());
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const diff = Date.now() - lastRun.current;

    if (diff >= delay) {
      lastRun.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastRun.current = Date.now();
        setThrottledValue(value);
      }, delay - diff);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [value, delay]);

  return throttledValue;
};
