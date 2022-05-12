import { useEffect, useRef } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that creates a debounced function.
 * @param callback The callback to debounce.
 * @param delay The number of milliseconds to delay.
 * @param options The options object.
 * @param options.leading Specify updating on the leading edge of the timeout.
 * @param options.trailing Specify updating on the trailing edge of the timeout.
 * @returns The debounced callback.
 */
export const useCallbackDebounce = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
) => {
  const { leading = false, trailing = true } = options;

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLeading = useRef(true);

  const debouncedCallback = useLatest((...args: T) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (isLeading.current) {
      isLeading.current = false;
      if (leading) {
        callback(...args);
      }
    }

    timeout.current = setTimeout(() => {
      isLeading.current = true;
      if (trailing) {
        callback(...args);
      }
    }, delay);
  });

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return debouncedCallback.current;
};
