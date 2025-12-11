import React, { useCallback, useEffect, useRef, useState } from 'react';

import { SidebarItemProps, SidebarItemTypeMap } from './SidebarItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useMediaQuery } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import MenuList from '@mui/material/MenuList';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useResizeObserver } from '../../../hooks';
import { IconChevronLeftLineW200 } from '../../../icons';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { ListItem, ListItemIcon, ListItemText } from '../../ListItem';
import { MenuItem } from '../../MenuItem';
import { Tooltip } from '../../Tooltip';
import { useSidebarContext } from '../Sidebar.context';
import { useSidebarMenuContext } from '../SidebarMenu/SidebarMenu.context';

export const SidebarItem: OverridableComponent<SidebarItemTypeMap> = (inProps: SidebarItemProps) => {
  const {
    children,
    className,
    icon,
    iconToggle = <IconChevronLeftLineW200 container containerSize="20px" />,
    inset,
    onClick,
    onKeyDown,
    onTouchStart,
    labelOpen,
    labelHide,
    text,
    id,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarItem',
  });

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const refTooltip = useRef<HTMLUListElement | null>(null);
  const refItem = useRef<HTMLLIElement | null>(null);
  const shouldSkipClick = useRef(false);

  const { color, open } = useSidebarContext();
  const { openedItems, onOpen, behaviour: inBehaviour, onClose } = useSidebarMenuContext();

  const isNestedMenuOpen = id ? openedItems.includes(id) : null;

  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
  const behaviour = isTouchDevice ? 'click' : inBehaviour;

  const component = (props as any).component as React.ElementType;

  useResizeObserver(ref, () => {
    if (ref.current && component) {
      const { clientWidth, offsetLeft } = ref.current;
      setWidth(clientWidth + offsetLeft);
    }
  });

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onTooltipOpen = () => {
    if (!open && text) {
      setTooltipOpen(true);
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipKeyDown = (event: React.KeyboardEvent) => {
    if (children && refItem.current && event.key === 'ArrowLeft') {
      refItem.current.focus();
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (children && refTooltip.current && event.key === 'ArrowRight') {
      let element = refTooltip.current.firstChild as HTMLElement;

      if (element.getAttribute('aria-disabled')) {
        element = element.nextSibling?.nextSibling as HTMLElement;
      }

      element.focus();
    }

    onKeyDown?.(event);
  };

  const onNestedMenuHover = (e: React.MouseEvent) => {
    if (behaviour === 'hover' && id) {
      if (e.type === 'mouseenter') {
        onOpen(id);
      } else {
        onClose(id);
      }
    }
  };

  const onNestedMenuClick = (e: React.MouseEvent) => {
    if (children && !isTooltipOpen) {
      e.preventDefault();
    }

    if (open && (behaviour === 'click' || e.detail === 0) && id) {
      if (isNestedMenuOpen) {
        onClose(id);
      } else {
        onOpen(id);
      }
    }
  };

  const onItemTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
    onTouchStart?.(e);

    if (!open && !isTooltipOpen && children) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      e.preventDefault();
      return;
    }

    onClick?.(e);

    if (!component) {
      onNestedMenuClick(e);
    }
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Tooltip
      arrow={!!text}
      disableInteractive={!children}
      enterDelay={100}
      enterNextDelay={200}
      enterTouchDelay={0}
      leaveDelay={120}
      leaveTouchDelay={Infinity}
      open={isTooltipOpen}
      placement={children ? 'right-start' : 'right'}
      slotProps={{
        popper: {
          className: 'es-sidebar-item__tooltip',
        },
      }}
      title={
        <MenuList
          ref={refTooltip}
          disablePadding
          className={clsx(
            'es-sidebar-item__tooltip-title',
            'scrollbar-overlay-mono-a',
            !!children && 'es-sidebar-item__tooltip-title--children'
          )}
          onKeyDown={onTooltipKeyDown}
          onMouseDown={onMouseDown}
        >
          <MenuItem
            className="es-sidebar-item__tooltip-item"
            component={component}
            disabled={!onClick}
            size="100"
            tabIndex={-1}
            onClick={onClick}
            {...props}
            selected={false}
          >
            <span className="body100">{text}</span>
          </MenuItem>

          {!!children && <Divider className="es-sidebar-item__tooltip-divider" />}
          {!!children &&
            React.Children.map(children, (child: any, idx: number) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { text, inset, ...rest } = child.props;

              return (
                <MenuItem key={idx} className="es-sidebar-item__tooltip-item" size="100" tabIndex={idx} {...rest}>
                  <span className="body100">{text}</span>
                </MenuItem>
              );
            })}
        </MenuList>
      }
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <div
        className={clsx('es-sidebar-item', className)}
        onMouseEnter={onNestedMenuHover}
        onMouseLeave={onNestedMenuHover}
      >
        <div className="es-sidebar-item__wrapper">
          <ListItem
            ref={refItem}
            button
            className={clsx('es-sidebar-item__button', `es-sidebar-item__button--color--${color}`)}
            onClick={onItemClick}
            onKeyDown={onItemKeyDown}
            onTouchStart={onItemTouchStart}
            {...props}
          >
            <div ref={ref} className="es-sidebar-item__container">
              {!!icon && <ListItemIcon>{icon}</ListItemIcon>}

              <ListItemText
                className={clsx('es-sidebar-item__text', open && 'es-sidebar-item__text--open')}
                inset={inset}
                primary={text}
                primaryTypographyClassName="body100"
              />
              {children && open && !component && (
                <ListItemIcon
                  className={clsx(
                    'es-sidebar-item__icon',
                    isNestedMenuOpen && 'es-sidebar-item__icon--is-nested-menu-open'
                  )}
                >
                  {iconToggle}
                </ListItemIcon>
              )}
            </div>
          </ListItem>

          {children && open && component && (
            <Button
              aria-label={isNestedMenuOpen ? labelHide : labelOpen}
              className={clsx(
                'es-sidebar-item__secondary-action',
                `es-sidebar-item__secondary-action--color--${color}`,
                `es-sidebar-item__secondary-action--behaviour--${behaviour}`,
                isNestedMenuOpen && 'es-sidebar-item__secondary-action--is-nested-menu-open'
              )}
              size="300"
              style={
                {
                  '--es-sidebar-item-secondary-action-width': `${width}px`,
                } as React.CSSProperties
              }
              onClick={onNestedMenuClick}
            >
              {iconToggle}
            </Button>
          )}
        </div>

        {open && !!children && (
          <Collapse unmountOnExit in={!!isNestedMenuOpen} timeout="auto">
            <div className="es-sidebar-item__nested-menu">{children}</div>
          </Collapse>
        )}
      </div>
    </Tooltip>
  );
};
