import { DependencyList, useEffect, useRef } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that debounces invoking a given callback.
 * @param callback The callback to call.
 * @param delay The number of milliseconds to delay.
 * @param dependencies Debounce will activate if the values in the list change.
 * @param options The options object.
 * @param options.leading Specify updating on the leading edge of the timeout.
 * @param options.trailing Specify updating on the trailing edge of the timeout.
 */
export const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: DependencyList,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
) => {
  const { leading = false, trailing = true } = options;

  const isLeading = useRef(true);
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (isLeading.current) {
      isLeading.current = false;
      if (leading) {
        latestCallback.current();
      }
    }

    const id = setTimeout(() => {
      isLeading.current = true;
      if (trailing) {
        latestCallback.current();
      }
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, dependencies);
};
