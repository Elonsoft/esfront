import { RefObject, useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that provides a way to watch for changes being made to the DOM tree.
 * @param element A reference to an Element to be watched.
 * @param callback The function called whenever a DOM element changes.
 * @param options An options object allowing you to set options for the observation.
 */
export const useMutationObserver = (
  element: RefObject<Element>,
  callback: (entries: MutationRecord[]) => void,
  options?: MutationObserverInit
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (element.current) {
      const mutationObserver = new MutationObserver((entries: MutationRecord[]) => {
        latestCallback.current(entries);
      });

      mutationObserver.observe(element.current, options);

      return () => {
        mutationObserver.disconnect();
      };
    }
  }, [element.current, options]);
};
