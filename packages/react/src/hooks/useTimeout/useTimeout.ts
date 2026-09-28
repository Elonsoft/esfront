'use client';

import { useEffect, useState } from 'react';

import { Timeout } from '../../utils';

/** A timeout that is automatically cleared when the component unmounts. */
export const useTimeout = (): Timeout => {
  const [timeout] = useState(() => Timeout.create());

  useEffect(timeout.disposeEffect, [timeout]);

  return timeout;
};
