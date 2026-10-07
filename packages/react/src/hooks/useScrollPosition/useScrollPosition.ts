'use client';

import { RefObject, useEffect, useState } from 'react';

import { useEvent } from '../useEvent';
import { useMutationObserver } from '../useMutationObserver';
import { useResizeObserver } from '../useResizeObserver';

export type UseScrollPositionOptions = {
  /** The tolerance in pixels used when deciding whether a scroll edge has been reached. */
  threshold?: number;
};

export type UseScrollPositionResult = {
  /** Whether the element overflows horizontally. */
  isScrollableX: boolean;
  /** Whether the element overflows vertically. */
  isScrollableY: boolean;
  /** Whether the element is scrolled to its left edge. `true` when the element does not overflow horizontally. */
  isAtLeft: boolean;
  /** Whether the element is scrolled to its right edge. `true` when the element does not overflow horizontally. */
  isAtRight: boolean;
  /** Whether the element is scrolled to its top edge. `true` when the element does not overflow vertically. */
  isAtTop: boolean;
  /** Whether the element is scrolled to its bottom edge. `true` when the element does not overflow vertically. */
  isAtBottom: boolean;
};

const MUTATION_OBSERVER_OPTIONS: MutationObserverInit = { childList: true, subtree: true };

const INITIAL_RESULT: UseScrollPositionResult = {
  isScrollableX: false,
  isScrollableY: false,
  isAtLeft: true,
  isAtRight: true,
  isAtTop: true,
  isAtBottom: true,
};

const getScrollPosition = (element: HTMLElement, threshold: number): UseScrollPositionResult => {
  const { clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth } = element;

  const maxScrollLeft = scrollWidth - clientWidth;
  const maxScrollTop = scrollHeight - clientHeight;

  return {
    isScrollableX: maxScrollLeft > threshold,
    isScrollableY: maxScrollTop > threshold,
    isAtLeft: scrollLeft <= threshold,
    isAtRight: scrollLeft >= maxScrollLeft - threshold,
    isAtTop: scrollTop <= threshold,
    isAtBottom: scrollTop >= maxScrollTop - threshold,
  };
};

/**
 * The hook that tracks whether an element overflows and whether it has reached its scroll edges. Useful for rendering
 * scroll shadows or fade masks. The position is recalculated on scroll, on resize of the element and on changes to its
 * content.
 * @param element A reference to an element whose scroll position should be tracked.
 * @param options The options object.
 * @param [options.threshold] The tolerance in pixels used when deciding whether a scroll edge has been reached.
 * @returns The `isScrollableX`, `isScrollableY`, `isAtLeft`, `isAtRight`, `isAtTop` and `isAtBottom` flags.
 */
export const useScrollPosition = (
  element: RefObject<HTMLElement | null>,
  options?: UseScrollPositionOptions
): UseScrollPositionResult => {
  const { threshold = 1 } = options || {};

  const [result, setResult] = useState(INITIAL_RESULT);

  const update = useEvent(() => {
    if (element.current) {
      const next = getScrollPosition(element.current, threshold);

      setResult((prev) => {
        const isEqual = (Object.keys(next) as Array<keyof UseScrollPositionResult>).every(
          (key) => prev[key] === next[key]
        );

        return isEqual ? prev : next;
      });
    }
  });

  useResizeObserver(element, update);
  useMutationObserver(element, update, MUTATION_OBSERVER_OPTIONS);

  useEffect(() => {
    update();

    const target = element.current;

    if (target) {
      target.addEventListener('scroll', update, { passive: true });

      return () => {
        target.removeEventListener('scroll', update);
      };
    }
  }, [element.current, threshold]);

  return result;
};
