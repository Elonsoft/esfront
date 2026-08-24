import { ElementType, HTMLAttributes, ReactNode, Ref } from 'react';

import { MenuListProps as MenuListComponentProps } from './MenuList';

import { BackdropProps } from '../Backdrop';
import { GrowProps } from '../Grow';
import { PopoverProps } from '../Popover';

export interface MenuProps extends Omit<PopoverProps, 'children' | 'onClose' | 'slots' | 'slotProps'> {
  /**
   * If `true`, the `[role="menu"]` is focused when no focusable child is found. Disabled children are not focusable.
   * Setting this to `false` places the focus on the parent modal container, which has severe accessibility
   * implications and should only be considered when the focus is managed otherwise.
   * @default true
   */
  autoFocus?: boolean;
  /** The content of the menu, normally `MenuItem`s. */
  children?: ReactNode;
  /**
   * When opening the menu the active item is not focused but the `[role="menu"]` is, unless `autoFocus` is also
   * `false`. Not using the default means not following the WAI-ARIA authoring practices.
   * @default false
   */
  disableAutoFocusItem?: boolean;
  /**
   * The props of the list slot.
   * @default {}
   */
  MenuListProps?: Partial<MenuListComponentProps>;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose?: {
    bivarianceHack(event: object, reason: 'backdropClick' | 'escapeKeyDown' | 'tabKeyDown'): void;
  }['bivarianceHack'];
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant?: 'menu' | 'selectedMenu';
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    paper?: ElementType;
    transition?: ElementType;
    backdrop?: ElementType;
    list?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
    paper?: HTMLAttributes<HTMLDivElement> & { ref?: Ref<HTMLDivElement> };
    transition?: Partial<GrowProps>;
    backdrop?: Partial<BackdropProps>;
    list?: Partial<MenuListComponentProps>;
  };
}
