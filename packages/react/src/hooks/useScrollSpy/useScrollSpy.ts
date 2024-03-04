import { useEffect, useState } from 'react';

import { useCallbackThrottle } from '../useCallbackThrottle';
import { useEvent } from '../useEvent';

/**
 * The hook that observes the intersection of elements with an ancestor or viewport and determines the active one.
 * @param items An array of ids of elements to be observed.
 * @param options An options object allowing you to set options for the observation.
 * @param throttleDelay The time in milliseconds used to throttle the observation.
 */
export const useScrollSpy = (items: string[], options?: IntersectionObserverInit, throttleDelay = 0): string => {
  const [activeElementId, setActiveElementId] = useState('');

  const callback = useEvent(
    useCallbackThrottle((entries: IntersectionObserverEntry[]) => {
      entries.forEach((e) => e.isIntersecting && setActiveElementId(e.target.id));
    }, throttleDelay)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    items.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return activeElementId;
};
