'use client';

import { RefObject, useEffect, useState } from 'react';

import { useEvent } from '../useEvent';
import { useMutationObserver } from '../useMutationObserver';
import { useResizeObserver } from '../useResizeObserver';

export type UseOverflowOptions = {
  /** The tolerance in pixels used when deciding whether the content overflows. */
  threshold?: number;
};

export type UseOverflowResult = {
  /** Whether the content is wider than the element. */
  isOverflowX: boolean;
  /** Whether the content is taller than the element. */
  isOverflowY: boolean;
};

const MUTATION_OBSERVER_OPTIONS: MutationObserverInit = { childList: true, subtree: true, characterData: true };

const INITIAL_RESULT: UseOverflowResult = {
  isOverflowX: false,
  isOverflowY: false,
};

const getOverflow = (element: HTMLElement, threshold: number): UseOverflowResult => {
  const { clientHeight, clientWidth, scrollHeight, scrollWidth } = element;

  return {
    isOverflowX: scrollWidth - clientWidth > threshold,
    isOverflowY: scrollHeight - clientHeight > threshold,
  };
};

/**
 * The hook that tracks whether the content of an element overflows it, for example because it is clamped with an
 * ellipsis. Useful for showing a tooltip or an expand button only when the content does not fit. The result is
 * recalculated on resize of the element and on changes to its content.
 * @param element A reference to an element to be measured.
 * @param options The options object.
 * @param [options.threshold] The tolerance in pixels used when deciding whether the content overflows.
 * @returns The `isOverflowX` and `isOverflowY` flags.
 */
export const useOverflow = (
  element: RefObject<HTMLElement | null>,
  options?: UseOverflowOptions
): UseOverflowResult => {
  const { threshold = 1 } = options || {};

  const [result, setResult] = useState(INITIAL_RESULT);

  const update = useEvent(() => {
    if (element.current) {
      const next = getOverflow(element.current, threshold);

      setResult((prev) =>
        prev.isOverflowX === next.isOverflowX && prev.isOverflowY === next.isOverflowY ? prev : next
      );
    }
  });

  useResizeObserver(element, update);
  useMutationObserver(element, update, MUTATION_OBSERVER_OPTIONS);

  useEffect(() => {
    update();
  }, [element.current, threshold]);

  return result;
};
