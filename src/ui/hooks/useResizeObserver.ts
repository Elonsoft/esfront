import { useEffect, RefObject } from 'react';
import { useLatest } from './useLatest';

export const useResizeObserver = (element: RefObject<Element>, callback: (entries: ResizeObserverEntry[]) => void) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (element.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        latestCallback.current(entries);
      });

      resizeObserver.observe(element.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [element.current]);
};
