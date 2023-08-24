import { useEffect, useMemo, useState } from 'react';

import { useScrollSync } from '../../hooks';

/**
 * @internal
 * The hook that sync scroll position between head, body and scrollbar elements.
 */
export const useTableScrollSync = () => {
  const [bodyRef, setBodyRef] = useState<HTMLDivElement | null>(null);
  const [headRef, setHeadRef] = useState<HTMLDivElement | null>(null);

  const [scrollbarRef, setScrollbarRef] = useState<HTMLDivElement | null>(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const bodyContextValue = useMemo(() => {
    return { ref: bodyRef, setRef: setBodyRef };
  }, [bodyRef]);

  const headContextValue = useMemo(() => {
    return { ref: headRef, setRef: setHeadRef };
  }, [headRef]);

  const scrollbarContextValue = useMemo(() => {
    return { width: scrollbarWidth, setWidth: setScrollbarWidth, ref: scrollbarRef, setRef: setScrollbarRef };
  }, [scrollbarRef, scrollbarWidth]);

  useEffect(() => {
    if (bodyRef) {
      const resizeObserver = new ResizeObserver((entries) => {
        setScrollbarWidth(entries[0].target.scrollWidth);
      });

      resizeObserver.observe(bodyRef.firstChild as HTMLElement);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [bodyRef]);

  useScrollSync({ current: bodyRef }, { current: headRef }, { current: scrollbarRef });

  return { bodyContextValue, headContextValue, scrollbarContextValue };
};
