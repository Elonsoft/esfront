'use client';

import { RefAttributes } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import { OverlayScrollbarsComponentRef } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useRefState, useScrollPosition } from '../../../hooks';
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

  // The viewport is published from `onInitialized` rather than read off the ref during render, which
  // would have made the observed element depend on a value that cannot trigger a re-render.
  const [viewport, setViewport] = useRefState<HTMLElement>();

  const { isScrollableY, isAtTop, isAtBottom } = useScrollPosition(viewport);

  const onInitialized = (instance: NonNullable<ReturnType<OverlayScrollbarsComponentRef['osInstance']>>) => {
    setViewport(instance.elements().viewport ?? null);
  };

  return (
    <>
      {isScrollableY && beforeScroll}
      <OverlayScrollbars
        ref={inRef}
        className={clsx(
          'es-sidebar-scrollable',
          isScrollableY && 'es-sidebar-scrollable--scrollable',
          !isAtTop && 'es-sidebar-scrollable--scroll-before',
          !isAtBottom && 'es-sidebar-scrollable--scroll-after',
          className
        )}
        color="mono-a"
        events={{
          initialized: onInitialized,
        }}
        style={style}
        tabIndex={-1}
      >
        {children}
      </OverlayScrollbars>
      {isScrollableY && afterScroll}
    </>
  );
};
