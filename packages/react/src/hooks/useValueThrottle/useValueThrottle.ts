import { useEffect, useRef, useState } from 'react';

/**
 * The hook that throttles a giver value.
 * @param value The value to throttle
 * @param delay The number of milliseconds to delay.
 * @returns The throttled value.
 */

export const useValueThrottle = <T>(value: T, delay: number) => {
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
