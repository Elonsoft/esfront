'use client';

import { useEffect, useState } from 'react';

import { NoSsrProps } from './NoSsr.types';

import { useEnhancedEffect } from '../../hooks';
import { useDefaultProps } from '../../theming';

/**
 * Removes its children from server-side rendering, so they are only rendered in the browser. Use it for the content
 * that depends on browser APIs or that would otherwise cause a hydration mismatch.
 */
export const NoSsr = (inProps: NoSsrProps) => {
  const {
    children,
    defer = false,
    fallback = null,
  } = useDefaultProps({
    props: inProps,
    name: 'ESNoSsr',
  });

  const [isMounted, setMounted] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMounted(true);
    }
  }, [defer]);

  useEffect(() => {
    if (defer) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
    }
  }, [defer]);

  return isMounted ? children : fallback;
};
