import { RefObject, useEffect } from 'react';

import { useLatest } from '../useLatest';

export const useIntersectionObserver = (
  element: RefObject<Element>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (element.current) {
      const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        latestCallback.current(entries);
      }, options);

      intersectionObserver.observe(element.current);

      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [element.current]);
};
