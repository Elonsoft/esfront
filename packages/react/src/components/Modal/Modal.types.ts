import { ElementType, HTMLAttributes, ReactElement } from 'react';

import { BackdropProps } from '../Backdrop';
import { PortalProps } from '../Portal';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** A single child content element. */
  children: ReactElement<any, any>;
  /** If `true`, the component is shown. */
  open: boolean;
  /**
   * An HTML element or function that returns one. The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a react layout effect. This lets you set the container from a
   * ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object, so it's simply `document.body` most of the time.
   */
  container?: PortalProps['container'];
  /**
   * When set to `true` the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition?: boolean;
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and replace it to the last
   * focused element when it closes. This also works correctly with any modal children that have the `disableAutoFocus`
   * prop.
   *
   * Generally this should never be set to `true` as it makes the modal less accessible to assistive technologies, like
   * screen readers.
   * @default false
   */
  disableAutoFocus?: boolean;
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less accessible to assistive technologies, like
   * screen readers.
   * @default false
   */
  disableEnforceFocus?: boolean;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal?: boolean;
  /**
   * If `true`, the modal will not restore focus to the previously focused element once the modal is hidden or
   * unmounted.
   * @default false
   */
  disableRestoreFocus?: boolean;
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock?: boolean;
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * Always keep the children in the DOM. This prop can be useful in SEO situations or when you want to maximize the
   * responsiveness of the Modal.
   * @default false
   */
  keepMounted?: boolean;
  /**
   * Callback fired when the component requests to be closed. The `reason` parameter can optionally be used to control
   * the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: {
    bivarianceHack(event: object, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  /** A function called when a transition enters. */
  onTransitionEnter?: () => void;
  /** A function called when a transition has exited. */
  onTransitionExited?: () => void;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    backdrop?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
    backdrop?: Partial<BackdropProps>;
  };
}
