import { useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * @param type A case-sensitive string representing the event type to listen for.
 * @param callback The function that receives a notification when an event of the specified type occurs.
 * @param options An object that specifies characteristics about the event listener.
 */
export const useDocumentEventListener = <K extends keyof DocumentEventMap>(
  type: K,
  callback: (event: DocumentEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    const onEvent = (event: DocumentEventMap[K]) => {
      return latestCallback.current(event);
    };

    document.addEventListener(type, onEvent, options);

    return () => {
      document.removeEventListener(type, onEvent);
    };
  }, []);
};
