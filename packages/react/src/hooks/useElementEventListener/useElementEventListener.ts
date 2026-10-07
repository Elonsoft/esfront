'use client';

import { RefObject, useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that sets up a function that will be called whenever the specified event is delivered to an element. The
 * listener is reattached whenever the observed element changes.
 * @param element A reference to an element to listen on.
 * @param type A case-sensitive string representing the event type to listen for.
 * @param callback The function that receives a notification when an event of the specified type occurs.
 * @param options An object that specifies characteristics about the event listener.
 */
export const useElementEventListener = <K extends keyof HTMLElementEventMap>(
  element: RefObject<HTMLElement | null>,
  type: K,
  callback: (event: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    const target = element.current;

    if (target) {
      const onEvent = (event: HTMLElementEventMap[K]) => {
        return latestCallback.current(event);
      };

      target.addEventListener(type, onEvent, options);

      return () => {
        target.removeEventListener(type, onEvent);
      };
    }
  }, [element.current, type]);
};
