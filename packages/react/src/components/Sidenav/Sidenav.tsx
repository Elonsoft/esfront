import React, { useEffect, useMemo, useRef, useState } from 'react';

import { SidenavProps } from './Sidenav.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { SidenavContext } from './Sidenav.context';

import { useLatest, useMenuAim, useWindowEventListener } from '../../hooks';

/**
 * The Sidenav component is a fixed-position toggleable slide out box.
 */
export const Sidenav = (inProps: SidenavProps) => {
  const { className, style, children, open, disableEscapeKeyDown, disableItemHover, onClose } = useDefaultProps({
    props: inProps,
    name: 'ESSidenav',
  });

  const [hover, setHover] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [isMouseDown, setMouseDown] = useState(false);

  const root = useRef<HTMLDivElement | null>(null);
  const sidenavRef = useRef<HTMLDivElement | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onCloseLatest = useLatest(() => {
    if (onClose) {
      onClose();
    }
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onCloseLatest.current();
      }
    };

    if (open && onClose && !disableEscapeKeyDown) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, disableEscapeKeyDown]);

  const onHoverItem = (id?: string) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      if (id) {
        setItemId(id);

        if (!open) {
          setHover(true);
        }
      }
    }, 90);
  };

  const onMouseLeaveSidenav = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    const activeItem = document.activeElement;
    const sidenavDrawer = document.querySelector(`.es-sidenav__drawer`);
    const isContainsActiveItems = sidenavDrawer?.contains(activeItem);

    if (!isContainsActiveItems || activeItem?.tagName !== 'INPUT') {
      if (!isMouseDown) {
        setHover(false);
      }
    }
  };

  const activate = (target: HTMLElement) => {
    if (open && disableItemHover) {
      return;
    }

    const item = target.closest('.es-sidenav-item__wrapper') as HTMLElement | null;

    if (item && item.dataset.id) {
      onHoverItem(item.dataset.id);
    } else if (
      target.className.toString().includes('es-sidebar-menu') ||
      target.className.toString().includes('es-sidebar__content')
    ) {
      onHoverItem();
    } else {
      onMouseLeaveSidenav();

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }
  };

  const onCloseSidenav = () => {
    onClose?.();
    setHover(false);
    setMouseDown(false);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (root.current && event.key === 'ArrowLeft') {
      const element = root.current.querySelector(`.es-sidenav-item[data-id="${itemId}"]`) as HTMLElement | null;

      if (element) {
        element.focus();
      }
    }
  };

  useWindowEventListener('resize', () => open && onClose && onClose());

  const { onMouseMove, onMouseOver, onMouseLeave } = useMenuAim(root, 'left', hover, activate);

  const value = useMemo(() => {
    return { open, hover, setHover, setItemId, itemId, disableItemHover, onClose };
  }, [open, hover, setHover, setItemId, itemId, disableItemHover]);

  return (
    <SidenavContext.Provider value={value}>
      <div className={clsx('es-sidenav', className)} style={style}>
        <div className="es-sidenav__container" onMouseLeave={onMouseLeaveSidenav}>
          {React.Children.map(children as React.ReactElement[], (child, idx: number) => {
            if (idx) {
              return (
                <div
                  ref={sidenavRef}
                  className={clsx(
                    'es-sidenav__drawer',
                    open && 'es-sidenav__drawer--open',
                    hover && 'es-sidenav__drawer--hover'
                  )}
                  onKeyDown={onKeyDown}
                  onMouseDown={() => setMouseDown(true)}
                  onMouseUp={() => setMouseDown(false)}
                >
                  {React.cloneElement(child, { open: open || hover, hover })}
                </div>
              );
            }

            return (
              <div
                ref={root}
                className="es-sidenav__rail"
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onMouseOver={onMouseOver}
              >
                {child}
              </div>
            );
          })}
        </div>
        {!open && hover && (
          <div
            className={clsx(
              'es-sidenav__overlay',
              open && 'es-sidenav__overlay--open',
              hover && 'es-sidenav__overlay--hover'
            )}
            onClick={onCloseSidenav}
          />
        )}
      </div>
    </SidenavContext.Provider>
  );
};
