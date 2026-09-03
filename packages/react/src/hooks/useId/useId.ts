'use client';

import { useId as useReactId } from 'react';

/**
 * Returns a unique id, unless one is provided.
 * @example <div id={useId()} />
 */
export const useId = (idOverride?: string): string => {
  const reactId = useReactId();

  return idOverride ?? reactId;
};
