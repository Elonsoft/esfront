import { RefObject, useEffect } from 'react';

import { useLatest } from '../useLatest';

/**
 * The hook that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
 * @param element A reference to an Element to be observed.
 * @param callback The function called when the percentage of the target element is visible crosses a threshold.
 * @param options An options object allowing you to set options for the observation.
 */
export const useIntersectionObserver = (
  element: RefObject<Element>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const latestCallback = useLatest(callback);

  useEffect(() => {
    if (element.current) {
      const intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        latestCallback.current(entries);
      }, options);

      intersectionObserver.observe(element.current);

      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [element.current]);
};
