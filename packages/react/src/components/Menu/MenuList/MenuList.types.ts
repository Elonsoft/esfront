import { HTMLAttributes, ReactNode, Ref } from 'react';

export interface MenuListActions {
  /**
   * Adds a padding compensating the scrollbar of the container, so the items are not shifted when it appears.
   * Ignored when the list has an explicit width.
   */
  adjustStyleForScrollbar: (containerElement: HTMLElement) => HTMLElement | null;
}

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  /** A ref giving imperative access to the list. */
  actions?: Ref<MenuListActions | null>;
  /**
   * If `true`, the `[role="menu"]` container is focused and moved into the tab order.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * If `true`, the first item is focused if `variant="menu"`, or the selected item if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem?: boolean;
  /** The content of the list, normally `MenuItem`s. */
  children?: ReactNode;
  /**
   * If `true`, focus is allowed on disabled items.
   * @default false
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true`, the focus does not wrap around the items.
   * @default false
   */
  disableListWrap?: boolean;
  /**
   * If `true`, the vertical padding is removed.
   * @default false
   */
  disablePadding?: boolean;
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant?: 'menu' | 'selectedMenu';
}
