'use client';

import { useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import { OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useResizeObserver } from '../../../hooks';
import { useDefaultProps } from '../../../theming';
import { OverlayScrollbars } from '../..//OverlayScrollbars';

export const SidebarScrollable = (inProps: SidebarScrollableProps) => {
  const { className, style, beforeScroll, afterScroll, children } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarScrollable',
  });

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<OverlayScrollbarsComponentRef | null>(null);
  const current = ref.current?.osInstance()?.elements().viewport || null;

  useResizeObserver({ current }, () => {
    if (current) {
      setScrollable(current?.scrollHeight > current?.clientHeight);
    }
  });

  const onInitialized = (instance: NonNullable<ReturnType<OverlayScrollbarsComponentRef['osInstance']>>) => {
    const viewport = instance.elements().viewport;

    if (viewport) {
      setScrollable(viewport.scrollHeight > viewport.clientHeight);
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
        ref={ref}
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
