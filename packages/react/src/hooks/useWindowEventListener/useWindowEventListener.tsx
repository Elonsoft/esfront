import { useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that sets up a function that will be called whenever the specified event is delivered to the `window`.
 * @param type A case-sensitive string representing the event type to listen for.
 * @param callback The function that receives a notification when an event of the specified type occurs.
 * @param options An object that specifies characteristics about the event listener.
 */
export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  callback: (event: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    const onEvent = (event: WindowEventMap[K]) => {
      return latestCallback.current(event);
    };

    window.addEventListener(type, onEvent, options);

    return () => {
      window.removeEventListener(type, onEvent);
    };
  }, []);
};
