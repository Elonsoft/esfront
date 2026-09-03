'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * The hook that tracks whether the document matches a media query.
 * @param query The media query, e.g. `(min-width: 640px)`.
 * @returns Whether the media query currently matches.
 */
export const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQueryList = window.matchMedia(query);

      mediaQueryList.addEventListener('change', onStoreChange);

      return () => {
        mediaQueryList.removeEventListener('change', onStoreChange);
      };
    },
    [query]
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
