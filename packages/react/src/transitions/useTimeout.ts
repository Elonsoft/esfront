import { useEffect, useMemo, useRef } from 'react';

/** A timeout that is automatically cleared when the component unmounts. */
export const useTimeout = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const timeout = useMemo(
    () => ({
      clear: () => {
        clearTimeout(timeoutRef.current);
      },
      start: (delay: number, callback: () => void) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(callback, delay);
      },
    }),
    []
  );

  useEffect(() => timeout.clear, [timeout]);

  return timeout;
};
