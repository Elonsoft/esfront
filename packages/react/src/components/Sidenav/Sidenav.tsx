import React, { useEffect, useMemo, useRef, useState } from 'react';

import { SidenavProps } from './Sidenav.types';

import clsx from 'clsx';
import { getSidenavUtilityClass, sidenavClasses } from './Sidenav.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { SidenavContext } from './Sidenav.context';
import { sidenavItemClasses } from './SidenavItem';

import { useLatest, useMenuAim, useWindowEventListener } from '../../hooks';
import { sidebarClasses, sidebarMenuClasses, sidebarToggleClasses } from '../Sidebar';

type SidenavOwnerState = {
  classes?: SidenavProps['classes'];
  hover?: boolean;
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidenavOwnerState) => {
  const { classes, hover } = ownerState;

  const slots = {
    root: ['root', hover && 'hover'],
    container: ['container'],
    rail: ['rail'],
    drawer: ['drawer'],
    overlay: ['overlay'],
  };

  return composeClasses(slots, getSidenavUtilityClass, classes);
};

const SidenavRoot = styled('div', {
  name: 'ESSidenav',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.hover && styles.hover];
  },
})<{ ownerState: SidenavOwnerState }>(() => ({
  zIndex: '100',
}));

const SidenavContainer = styled('div', {
  name: 'ESSidenav',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container,
})(() => ({
  display: 'flex',
  height: '100%',
}));

const SidenavOverlay = styled('div', {
  name: 'ESSidenav',
  slot: 'Overlay',
  overridesResolver: (props, styles) => styles.overlay,
})<{ ownerState: SidenavOwnerState }>(({ theme }) => ({
  opacity: '0',
  userSelect: 'none',
  top: '0',
  left: '0',
  position: 'fixed',
  height: '100%',
  width: '100%',
  backgroundColor: theme.vars.palette.overlay[200],
  transition: 'opacity 0.3s',

  variants: [
    {
      props: {
        hover: true,
      },
      style: {
        opacity: '1',
      },
    },
    {
      props: {
        open: true,
      },
      style: {
        [theme.breakpoints.down('desktopXS')]: {
          opacity: '1',
        },
      },
    },
  ],
}));

const SidenavRail = styled('div', {
  name: 'ESSidenav',
  slot: 'Rail',
  overridesResolver: (props, styles) => styles.rail,
})(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '57px',
  zIndex: '99',

  [`& .${sidebarClasses.handler}`]: {
    display: 'none',
  },

  [theme.breakpoints.down('desktopXS')]: {
    [`& .${sidebarToggleClasses.button}`]: {
      display: 'none',
    },
  },
}));

const SidenavDrawer = styled('div', {
  name: 'ESSidenav',
  slot: 'Drawer',
  overridesResolver: (props, styles) => styles.drawer,
})<{ ownerState: SidenavOwnerState }>(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '-57px',
  transform: 'translateX(-100%)',
  zIndex: '98',
  height: '100%',
  transition: 'all 0.2s',

  variants: [
    {
      props: {
        hover: true,
      },
      style: {
        left: '57px',
        transform: 'translateX(0)',
      },
    },
    {
      props: {
        open: true,
      },
      style: {
        left: '57px',
        transform: 'translateX(0)',

        [theme.breakpoints.down('desktopXS')]: {
          position: 'absolute',
        },
      },
    },
  ],
}));

/**
 * The Sidenav component is a fixed-position toggleable slide out box.
 */
export const Sidenav = (inProps: SidenavProps) => {
  const { className, children, open, sx, disableEscapeKeyDown, disableItemHover, onClose, ...props } = useDefaultProps({
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
    const sidenavDrawer = document.querySelector(`.${sidenavClasses.drawer}`);
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

    const item = target.closest('.ESSidenavItem-wrapper') as HTMLElement | null;

    if (item && item.dataset.id) {
      onHoverItem(item.dataset.id);
    } else if (
      target.className.toString().includes(sidebarMenuClasses.root) ||
      target.className.toString().includes(sidebarClasses.content)
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
      const element = root.current.querySelector(
        `.${sidenavItemClasses.root}[data-id="${itemId}"]`
      ) as HTMLElement | null;

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

  const ownerState = { open, hover, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidenavContext.Provider value={value}>
      <SidenavRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        <SidenavContainer className={clsx(classes.container)} onMouseLeave={onMouseLeaveSidenav}>
          {React.Children.map(children as React.ReactElement[], (child, idx: number) => {
            if (idx) {
              return (
                <SidenavDrawer
                  ref={sidenavRef}
                  className={clsx(classes.drawer)}
                  ownerState={ownerState}
                  onKeyDown={onKeyDown}
                  onMouseDown={() => setMouseDown(true)}
                  onMouseUp={() => setMouseDown(false)}
                >
                  {React.cloneElement(child, { open: open || hover, hover })}
                </SidenavDrawer>
              );
            }

            return (
              <SidenavRail
                ref={root}
                className={clsx(classes.rail)}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onMouseOver={onMouseOver}
              >
                {child}
              </SidenavRail>
            );
          })}
        </SidenavContainer>
        {!open && hover && (
          <SidenavOverlay className={clsx(classes.overlay)} ownerState={ownerState} onClick={onCloseSidenav} />
        )}
      </SidenavRoot>
    </SidenavContext.Provider>
  );
};
