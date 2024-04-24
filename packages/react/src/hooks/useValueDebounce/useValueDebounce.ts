import { useEffect, useRef, useState } from 'react';

/**
 * The hook that debounces a given value.
 * @param value The value to debounce.
 * @param delay The number of milliseconds to delay.
 * @param options The options object.
 * @param options.leading Specify updating on the leading edge of the timeout.
 * @param options.trailing Specify updating on the trailing edge of the timeout.
 * @returns The debounced value.
 */
export const useValueDebounce = <T>(
  value: T,
  delay: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
) => {
  const { leading = false, trailing = true } = options;

  const isLeading = useRef(true);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (isLeading.current) {
      isLeading.current = false;

      if (leading) {
        setDebouncedValue(value);
      }
    }

    const id = setTimeout(() => {
      isLeading.current = true;

      if (trailing) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay, leading, trailing]);

  return debouncedValue;
};
