import { CSSProperties, ElementType, HTMLAttributes, ReactNode, Ref } from 'react';

import { PortalProps } from '../Portal';

import { Middleware, MiddlewareData, Placement, Strategy, VirtualElement } from '@floating-ui/react-dom';

export type PopperPlacement = Placement;

export type PopperAnchorEl = Element | VirtualElement | (() => Element | VirtualElement | null) | null;

export interface PopperActions {
  /** Recomputes the position of the popper. Useful when the anchor is a virtual element that moved. */
  update: () => void;
}

export interface PopperTransitionProps {
  in: boolean;
  onEnter: () => void;
  onExited: () => void;
}

export interface PopperChildrenProps {
  /** The placement in effect after the middleware ran. May differ from the `placement` prop if `flip` was used. */
  placement: PopperPlacement;
  /** Data returned by the middleware, e.g. `middlewareData.arrow` holds the arrow coordinates. */
  middlewareData: MiddlewareData;
  /** Only present when the `transition` prop is `true`. */
  TransitionProps?: PopperTransitionProps;
}

export interface PopperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * An element, a [virtual element](https://floating-ui.com/docs/virtual-elements), or a function returning either.
   * Used to position the popper.
   */
  anchorEl?: PopperAnchorEl;
  /** The content of the popper, or a function receiving the resolved placement and middleware data. */
  children?: ReactNode | ((props: PopperChildrenProps) => ReactNode);
  /**
   * An element or a function that returns one. The `container` will have the portal children appended to it.
   * Defaults to the body of the document owning `anchorEl`.
   */
  container?: PortalProps['container'];
  /**
   * If `true`, the position is not recomputed on scroll, resize or layout shifts.
   * @default false
   */
  disableAutoUpdate?: boolean;
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   *
   * Note that the overflow boundary used by `flip` and `shift` is always the clipping ancestors of the popper itself,
   * so with `disablePortal` the popper is kept inside its own scroll container rather than the anchor's. Pass
   * `altBoundary: true` to the relevant middleware if you need the anchor's boundary instead.
   * @default false
   */
  disablePortal?: boolean;
  /**
   * Always keep the children in the DOM.
   * @default false
   */
  keepMounted?: boolean;
  /**
   * The [middleware](https://floating-ui.com/docs/middleware) used to position the popper. Passing this replaces the
   * defaults instead of merging with them.
   *
   * The root element carries `data-es-reference-hidden` while the anchor is hidden by its clipping container, but only
   * if the array includes floating-ui's `hide()` — the default below does not.
   * @default [flip(), shift({ limiter: limitShift() })]
   */
  middleware?: Array<Middleware | null | undefined | false>;
  /** If `true`, the component is shown. */
  open: boolean;
  /**
   * The placement of the popper relative to the anchor.
   *
   * The placement actually in effect after the middleware ran is exposed on the root element as `data-es-placement`.
   * @default 'bottom'
   */
  placement?: PopperPlacement;
  /** A ref giving imperative access to the popper. */
  popperRef?: Ref<PopperActions>;
  /**
   * The CSS position strategy.
   * @default 'absolute'
   */
  strategy?: Strategy;
  /**
   * The inline styles of the root element.
   *
   * They are merged over the styles computed by floating-ui, so setting `position`, `top`, `left` or `transform` here
   * breaks the positioning.
   */
  style?: CSSProperties;
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition?: boolean;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   *
   * `slotProps.root.style` is merged over the styles computed by floating-ui, so setting `position`, `top`, `left` or
   * `transform` there breaks the positioning.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
  };
}
