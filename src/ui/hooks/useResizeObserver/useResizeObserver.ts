import { RefObject, useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * @param element A reference to an Element to be observed.
 * @param callback The function called whenever an observed resize occurs.
 * @param options An options object allowing you to set options for the observation.
 */
export const useResizeObserver = (
  element: RefObject<Element>,
  callback: (entries: ResizeObserverEntry[]) => void,
  options?: ResizeObserverOptions
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (element.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        latestCallback.current(entries);
      });

      resizeObserver.observe(element.current, options);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [element.current]);
};
