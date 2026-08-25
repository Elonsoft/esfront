import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';

import { TransitionProps } from '../../transitions';
import { BackdropProps } from '../Backdrop';
import { ModalProps } from '../Modal';
import { SlideProps } from '../Slide';

export type DrawerAnchor = 'left' | 'top' | 'right' | 'bottom';

export type DrawerVariant = 'temporary' | 'persistent';

export interface DrawerProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** The content of the component. */
  children?: ReactNode;
  /** The id(s) of the element(s) that describe the drawer. */
  'aria-describedby'?: string;
  /** The id(s) of the element(s) that label the drawer. */
  'aria-labelledby'?: string;
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor?: DrawerAnchor;
  /**
   * If `true`, the backdrop is not rendered. Only applies to the `temporary` variant.
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * Callback fired when the component requests to be closed. Only fired by the `temporary` variant.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: ModalProps['onClose'];
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open?: boolean;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  transitionDuration?: TransitionProps['timeout'];
  /**
   * The variant to use. The `temporary` variant renders inside a modal, the `persistent` one is docked into the
   * regular document flow.
   * @default 'temporary'
   */
  variant?: DrawerVariant;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    docked?: ElementType;
    paper?: ElementType;
    transition?: ElementType;
    backdrop?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    root?: Partial<ModalProps>;
    docked?: HTMLAttributes<HTMLDivElement>;
    paper?: HTMLAttributes<HTMLDivElement>;
    transition?: Partial<SlideProps>;
    backdrop?: Partial<BackdropProps>;
  };
}
