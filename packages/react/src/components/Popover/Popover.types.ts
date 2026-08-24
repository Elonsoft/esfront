import { ElementType, HTMLAttributes, ReactNode, Ref } from 'react';

import { BackdropProps } from '../Backdrop';
import { GrowProps } from '../Grow';
import { ModalProps } from '../Modal';

export interface PopoverActions {
  /** Recomputes the position of the popover. Useful when its content changed size. */
  updatePosition: () => void;
}

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}

export interface PopoverPosition {
  top: number;
  left: number;
}

export type PopoverReference = 'anchorEl' | 'anchorPosition' | 'none';

/** An object mimicking an element, used to position the popover next to a point rather than a node. */
export interface PopoverVirtualElement {
  getBoundingClientRect: () => DOMRect;
  nodeType: Node['ELEMENT_NODE'];
}

export type PopoverAnchorEl = Element | PopoverVirtualElement | (() => Element | PopoverVirtualElement | null) | null;

export interface PopoverProps extends Omit<ModalProps, 'children' | 'slots' | 'slotProps'> {
  /** A ref giving imperative access to the popover. */
  action?: Ref<PopoverActions | null>;
  /** An element, a virtual element, or a function returning either. Used to position the popover. */
  anchorEl?: PopoverAnchorEl;
  /**
   * The point on the anchor the popover attaches to. Not used when `anchorReference` is `'anchorPosition'`.
   * @default { vertical: 'top', horizontal: 'left' }
   */
  anchorOrigin?: PopoverOrigin;
  /** The position the popover attaches to, relative to the client area. Used with `anchorReference="anchorPosition"`. */
  anchorPosition?: PopoverPosition;
  /**
   * Determines which anchor prop is used to position the popover.
   * @default 'anchorEl'
   */
  anchorReference?: PopoverReference;
  /** The content of the popover. */
  children?: ReactNode;
  /**
   * The minimal distance, in pixels, kept between the popover and the edges of the window. Pass `null` to disable it.
   * @default 16
   */
  marginThreshold?: number | null;
  /**
   * The point on the popover aligned with the anchor. It is also used as the transform origin of the transition.
   * @default { vertical: 'top', horizontal: 'left' }
   */
  transformOrigin?: PopoverOrigin;
  /**
   * The length of the transition, in milliseconds. Set to `'auto'` to calculate it from the height of the popover.
   * @default 'auto'
   */
  transitionDuration?: GrowProps['timeout'];
  /**
   * The props of the transition slot.
   * @default {}
   */
  TransitionProps?: Partial<GrowProps>;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    paper?: ElementType;
    transition?: ElementType;
    backdrop?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   *
   * `slotProps.paper.style` is merged over the styles computed by the positioning logic, so setting `top`, `left` or
   * `transformOrigin` there breaks the positioning.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
    paper?: HTMLAttributes<HTMLDivElement> & { ref?: Ref<HTMLDivElement> };
    transition?: Partial<GrowProps>;
    backdrop?: Partial<BackdropProps>;
  };
}
