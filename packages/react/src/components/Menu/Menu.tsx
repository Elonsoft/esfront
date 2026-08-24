import { Children, forwardRef, isValidElement, KeyboardEvent, useRef } from 'react';

import { MenuProps } from './Menu.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { MenuList, MenuListActions } from './MenuList';

import { Popover, PopoverOrigin } from '../Popover';

const ANCHOR_ORIGIN: PopoverOrigin = { vertical: 'bottom', horizontal: 'left' };
const TRANSFORM_ORIGIN: PopoverOrigin = { vertical: 'top', horizontal: 'left' };

/**
 * The Menu displays a list of choices on a temporary surface, anchored to an element.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(inProps, ref) {
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    TransitionProps = {},
    variant = 'selectedMenu',
    slots = {},
    slotProps = {},
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenu',
  });

  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;

  const menuListActionsRef = useRef<MenuListActions | null>(null);

  const transitionProps = { ...TransitionProps, ...slotProps.transition };
  const listProps = { ...MenuListProps, ...slotProps.list };

  const onEntering = (node: HTMLElement, isAppearing: boolean) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(node);
    }

    transitionProps.onEntering?.(node, isAppearing);
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      onClose?.(event, 'tabKeyDown');
    }

    listProps.onKeyDown?.(event);
  };

  /**
   * The index of the item that should receive focus. In a `variant="selectedMenu"` it is the first `selected` item,
   * otherwise it is the very first item.
   */
  let activeItemIndex = -1;

  // Since we inject focus related props into children we have to do a lookahead to check if there is a `selected` item.
  Children.forEach(children, (child, index) => {
    if (!isValidElement(child)) {
      return;
    }

    const childProps = child.props as { disabled?: boolean; selected?: boolean };

    if (!childProps.disabled) {
      if (variant === 'selectedMenu' && childProps.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });

  const List = slots.list || MenuList;

  return (
    <Popover
      anchorOrigin={ANCHOR_ORIGIN}
      transformOrigin={TRANSFORM_ORIGIN}
      {...props}
      ref={ref}
      className={clsx(className, 'es-menu')}
      open={open}
      slotProps={{
        root: slotProps.root,
        backdrop: slotProps.backdrop,
        paper: {
          ...slotProps.paper,
          className: clsx('es-menu__paper', slotProps.paper?.className),
        },
        transition: { ...transitionProps, onEntering },
      }}
      slots={{
        root: slots.root,
        paper: slots.paper,
        transition: slots.transition,
        backdrop: slots.backdrop,
      }}
      onClose={onClose}
    >
      <List
        actions={menuListActionsRef}
        autoFocus={autoFocus && (activeItemIndex === -1 || disableAutoFocusItem)}
        autoFocusItem={autoFocusItem}
        variant={variant}
        {...listProps}
        className={clsx('es-menu__list', listProps.className)}
        onKeyDown={onListKeyDown}
      >
        {children}
      </List>
    </Popover>
  );
});
