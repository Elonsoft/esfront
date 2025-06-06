import React, { useMemo, useRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';

import clsx from 'clsx';
import { getSidebarUtilityClass, sidebarClasses } from './Sidebar.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { SidebarContext } from './Sidebar.context';

import { useDocumentEventListener, useLatest, useWindowEventListener } from '../../hooks';

type SidebarOwnerState = {
  color?: 'default' | 'primary' | 'secondary';
  open?: boolean;
  isMouseMove?: boolean;
  isMouseDown?: boolean;
  classes?: SidebarProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarOwnerState) => {
  const { classes, open } = ownerState;

  const slots = {
    root: ['root', open && 'rootOpen'],
    content: ['content'],
    handler: ['handler'],
    handlerLine: ['handlerLine'],
  };

  return composeClasses(slots, getSidebarUtilityClass, classes);
};

const SidebarRoot = styled('div', {
  name: 'ESSidebar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { open },
    } = props;
    return [styles.root, open && styles.rootOpen];
  },
})<{ ownerState: SidebarOwnerState }>(() => ({
  display: 'flex',
  height: '100%',

  variants: [
    {
      props: {
        isMouseMove: true,
        open: true,
      },
      style: {
        cursor: 'col-resize',
      },
    },
  ],
}));

const SidebarContent = styled('aside', {
  name: 'ESSidebar',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})<{ ownerState: SidebarOwnerState }>(({ theme }) => ({
  display: 'flex',
  order: '1',
  flexDirection: 'column',
  width: '57px',
  backgroundColor: theme.vars.palette.surface.background,
  borderRight: `1px solid ${theme.vars.palette.monoA.A100}`,
  maxWidth: 'var(--ESSidebarContent-maxWidth)',
  transition: 'width 0.2s',

  variants: [
    {
      props: {
        color: 'primary',
      },
      style: {
        backgroundColor: theme.vars.palette.primary[300],
      },
    },
    {
      props: {
        color: 'secondary',
      },
      style: {
        backgroundColor: theme.vars.palette.surface.background2,
      },
    },
    {
      props: {
        open: true,
      },
      style: {
        width: 'var(--ESSidebarContent-width)',
      },
    },
    {
      props: {
        open: true,
        isMouseMove: true,
      },
      style: {
        transition: 'none',
        userSelect: 'none',
        pointerEvents: 'none',
        minWidth: 'var(--ESSidebarContent-minWidth)',
      },
    },
  ],
}));

const SidebarHandler = styled('div', {
  name: 'ESSidebar',
  slot: 'Handler',
  overridesResolver: (props, styles) => styles.handler,
})<{ ownerState: SidebarOwnerState }>(({ theme }) => ({
  order: '2',
  height: '100%',
  width: '9px',
  marginLeft: '-5px',
  zIndex: 8,
  display: 'flex',
  justifyContent: 'center',

  variants: [
    {
      props: {
        open: true,
      },
      style: {
        transition: 'background-color 0.3s',
        cursor: 'col-resize',

        '&:hover': {
          backgroundColor: theme.vars.palette.monoA.A50,

          [`& .${sidebarClasses.handlerLine}`]: {
            backgroundColor: theme.vars.palette.monoA.A150,
          },
        },
      },
    },
    {
      props: {
        open: true,
        isMouseDown: true,
      },
      style: {
        backgroundColor: 'transparent !important',

        [`& + .${sidebarClasses.content}`]: {
          borderColor: 'transparent',
        },

        [`& .${sidebarClasses.handlerLine}`]: {
          width: '3px',
          backgroundColor: `${theme.vars.palette.info.A600} !important`,
          backdropFilter: 'blur(20px)',
        },
      },
    },
  ],
}));

const SidebarHandlerLine = styled('div', {
  name: 'ESSidebar',
  slot: 'HandlerLine',
  overridesResolver: (props, styles) => styles.handlerLine,
})(() => ({
  height: '100%',
  width: '1px',
  transition: 'background-color 0.3s',
}));

/**
 * The Sidebar component is a fixed-position toggleable slide out box.
 */
export const Sidebar = (inProps: SidebarProps) => {
  const {
    className,
    children,
    sx,
    open,
    color = 'default',
    width = 280,
    minWidth = 220,
    maxWidth = 400,
    onWidthChange,
    onWidthChangeCommit,
    ...props
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

  const ownerState = { color, open, isMouseMove, isMouseDown, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarContext.Provider value={value}>
      <SidebarRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        {(onWidthChange || onWidthChangeCommitLatest) && (
          <SidebarHandler
            className={clsx(classes.handler)}
            ownerState={ownerState}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <SidebarHandlerLine className={clsx(classes.handlerLine)} />
          </SidebarHandler>
        )}

        <SidebarContent
          ref={ref}
          className={clsx(classes.content)}
          ownerState={ownerState}
          style={{
            ...({
              '--ESSidebarContent-width': `${width}px`,
              '--ESSidebarContent-minWidth': `${minWidth}px`,
              '--ESSidebarContent-maxWidth': `${maxWidth}px`,
            } as React.CSSProperties),

            width: open ? `${width}px` : undefined,
          }}
        >
          {children}
        </SidebarContent>
      </SidebarRoot>
    </SidebarContext.Provider>
  );
};
