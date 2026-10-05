'use client';

import { RefAttributes, useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import { OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useForkRef, useResizeObserver } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { OverlayScrollbars } from '../..//OverlayScrollbars';

/**
 * @see `Sidebar`
 */
export const SidebarScrollable = ({
  ref: inRef,
  ...inProps
}: SidebarScrollableProps & RefAttributes<OverlayScrollbarsComponentRef>) => {
  const { className, style, beforeScroll, afterScroll, children } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarScrollable',
  });

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<OverlayScrollbarsComponentRef | null>(null);
  const rootRef = useForkRef(ref, inRef);

  // The viewport is published from `onInitialized` rather than read off the ref during render, which
  // would have made the observed element depend on a value that cannot trigger a re-render.
  const [viewport, setViewport] = useState<HTMLElement | null>(null);

  useResizeObserver({ current: viewport }, () => {
    if (viewport) {
      setScrollable(viewport.scrollHeight > viewport.clientHeight);
    }
  });

  const onInitialized = (instance: NonNullable<ReturnType<OverlayScrollbarsComponentRef['osInstance']>>) => {
    const element = instance.elements().viewport;

    setViewport(element ?? null);

    if (element) {
      setScrollable(element.scrollHeight > element.clientHeight);
    }
  };

  const onScroll = () => {
    if (!ref.current) {
      return;
    }

    const element = ref.current.osInstance()?.elements().viewport;

    if (!element) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = element;
    setBeforeScroll(scrollTop > 0);
    setAfterScroll(!(scrollTop >= scrollHeight - clientHeight));
  };

  return (
    <>
      {isScrollable && beforeScroll}
      <OverlayScrollbars
        ref={rootRef}
        className={clsx(
          'es-sidebar-scrollable',
          isScrollable && 'es-sidebar-scrollable--scrollable',
          isBeforeScroll && 'es-sidebar-scrollable--scroll-before',
          isAfterScroll && 'es-sidebar-scrollable--scroll-after',
          className
        )}
        color="mono-a"
        events={{
          initialized: onInitialized,
          scroll: onScroll,
        }}
        style={style}
        tabIndex={-1}
      >
        {children}
      </OverlayScrollbars>
      {isScrollable && afterScroll}
    </>
  );
};
