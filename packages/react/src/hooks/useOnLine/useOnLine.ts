import { useState } from 'react';

import { useWindowEventListener } from '../useWindowEventListener';

/**
 * The hook that watches the online status of the browser.
 * @returns The online status of the browser.
 */
export const useOnLine = () => {
  const [isOnLine, setOnLine] = useState(navigator.onLine);

  useWindowEventListener('online', () => {
    setOnLine(navigator.onLine);
  });

  useWindowEventListener('offline', () => {
    setOnLine(navigator.onLine);
  });

  return isOnLine;
};
