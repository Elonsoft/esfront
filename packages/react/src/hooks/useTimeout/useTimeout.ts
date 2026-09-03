'use client';

import { useEffect, useRef } from 'react';

import { Timeout } from '../../utils';

/** A timeout that is automatically cleared when the component unmounts. */
export const useTimeout = (): Timeout => {
  const timeoutRef = useRef<Timeout | null>(null);

  if (timeoutRef.current === null) {
    timeoutRef.current = Timeout.create();
  }

  const timeout = timeoutRef.current;

  useEffect(timeout.disposeEffect, [timeout]);

  return timeout;
};
