import { useEffect, useLayoutEffect } from 'react';

/**
 * A version of `useLayoutEffect` that does not warn when server-side rendering.
 *
 * Before using it, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85.
 */
export const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
