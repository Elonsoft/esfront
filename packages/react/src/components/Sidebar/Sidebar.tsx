import React, { useMemo, useRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { SidebarContext } from './Sidebar.context';

import { useDocumentEventListener, useLatest, useWindowEventListener } from '../../hooks';

/**
 * The Sidebar component is a fixed-position toggleable slide out box.
 */
export const Sidebar = (inProps: SidebarProps) => {
  const {
    className,
    style,
    children,
    open,
    color = 'default',
    width = 280,
    minWidth = 220,
    maxWidth = 400,
    onWidthChange,
    onWidthChangeCommit,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidebar',
  });

  const [isMouseMove, setMouseMove] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);

  const value = useMemo(() => {
    return { open, color };
  }, [open, color]);

  const screenX = useRef<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isActive = useRef<boolean | null>(null);
  const onMouseMove = useRef<((event: any) => void) | null>(null);

  const onWidthChangeLatest = useLatest((value: number) => {
    if (onWidthChange) {
      onWidthChange(value);
    }
  });

  const onWidthChangeCommitLatest = useLatest(() => {
    if (onWidthChangeCommit && ref.current) {
      if (screenX.current !== null) {
        onWidthChangeCommit(Math.ceil(ref.current.getBoundingClientRect().width));
      }
    }
  });

  const onTouchStart = (event: React.TouchEvent) => {
    if (open) {
      screenX.current = event.touches[0].screenX;
      setMouseDown(true);
      isActive.current = true;

      onMouseMove.current = (event: React.TouchEvent) => {
        if (ref.current && screenX.current !== null) {
          const width = ref.current.getBoundingClientRect().width + (event.touches[0].screenX - screenX.current);
          ref.current.style.width = `${Math.min(maxWidth, Math.max(width, minWidth))}px`;
          onWidthChangeLatest.current(width);
          screenX.current = event.touches[0].screenX;
        }

        setMouseMove(true);
      };

      document.addEventListener('touchmove', onMouseMove.current);
    }
  };

  useDocumentEventListener('touchend', () => {
    if (onMouseMove.current) {
      onWidthChangeCommitLatest.current();
      setMouseMove(false);
      setMouseDown(false);

      document.removeEventListener('touchmove', onMouseMove.current);
      onMouseMove.current = null;
      isActive.current = null;
    }
  });

  const onMouseDown = (event: React.MouseEvent) => {
    if (event.button === 0 && open) {
      screenX.current = event.screenX;
      setMouseDown(true);
      isActive.current = true;

      onMouseMove.current = (event: MouseEvent) => {
        if (ref.current && screenX.current !== null) {
          const width = ref.current.getBoundingClientRect().width + (event.screenX - screenX.current);
          ref.current.style.width = `${Math.min(maxWidth, Math.max(width, minWidth))}px`;
          onWidthChangeLatest.current(width);
          screenX.current = event.screenX;
        }

        setMouseMove(true);
      };

      document.addEventListener('mousemove', onMouseMove.current);
    }
  };

  useDocumentEventListener('mouseup', () => {
    if (onMouseMove.current) {
      onWidthChangeCommitLatest.current();
      setMouseMove(false);
      setMouseDown(false);

      document.removeEventListener('mousemove', onMouseMove.current);
      onMouseMove.current = null;
      isActive.current = null;
    }
  });

  useWindowEventListener('selectstart', (e) => isActive.current && e.preventDefault());

  return (
    <SidebarContext.Provider value={value}>
      <div
        className={clsx(
          'es-sidebar',
          open && 'es-sidebar--open',
          isMouseMove && 'es-sidebar--is-mouse-move',
          className
        )}
        style={style}
      >
        {(onWidthChange || onWidthChangeCommitLatest) && (
          <div
            className={clsx(
              'es-sidebar__handler',
              open && 'es-sidebar__handler--open',
              isMouseDown && 'es-sidebar__handler--is-mouse-down'
            )}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <div className="es-sidebar__handler-line" />
          </div>
        )}

        <aside
          ref={ref}
          className={clsx(
            'es-sidebar__content',
            open && 'es-sidebar__content--open',
            isMouseMove && 'es-sidebar__content--is-mouse-move',
            `es-sidebar__content--color--${color}`
          )}
          style={{
            ...({
              '--es-sidebar-content-width': `${width}px`,
              '--es-sidebar-content-min-width': `${minWidth}px`,
              '--es-sidebar-content-max-width': `${maxWidth}px`,
            } as React.CSSProperties),

            width: open ? `${width}px` : undefined,
          }}
        >
          {children}
        </aside>
      </div>
    </SidebarContext.Provider>
  );
};
