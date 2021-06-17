import { useEffect } from 'react';
import { useLatest } from './useLatest';

export const useDocumentEventListener = <K extends keyof DocumentEventMap>(
  type: K,
  callback: (event: DocumentEventMap[K]) => any
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    const onEvent = (event: DocumentEventMap[K]) => {
      return latestCallback.current(event);
    };

    document.addEventListener(type, onEvent);

    return () => {
      document.removeEventListener(type, onEvent);
    };
  }, []);
};
