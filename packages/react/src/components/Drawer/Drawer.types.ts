import { CSSProperties } from 'react';

import { ModalProps } from '@mui/material/Modal';
import { SlideProps } from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export interface DrawerProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** The content of the drawer. */
  children?: React.ReactNode;
  /** The id(s) of the element(s) that describe the drawer. */
  'aria-describedby'?: string;
  /** The id(s) of the element(s) that label the drawer. */
  'aria-labelledby'?: string;
  /**
   * Side from which the drawer will appear.
   * @default 'right'
   */
  anchor?: 'left' | 'right';
  /**
   * The variant to use.
   *
   * `temporary` renders the drawer above the content in a modal with a backdrop.
   * `persistent` renders the drawer inline, pushing the content aside, and collapses it when closed.
   * `permanent` renders the drawer inline and always open, ignoring the `open` prop.
   * @default 'temporary'
   */
  variant?: 'temporary' | 'persistent' | 'permanent';
  /**
   * The width of the drawer paper, any CSS length.
   * @default '400px'
   */
  width?: string;
  /**
   * If `true`, the component is shown. Ignored when `variant="permanent"`.
   * @default false
   */
  open?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   *
   * Only fired when `variant="temporary"`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: ModalProps['onClose'];
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   *
   * Only applies when `variant="temporary"`.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * If `true`, the backdrop is not rendered.
   *
   * Only applies when `variant="temporary"`.
   * @default false
   */
  hideBackdrop?: ModalProps['hideBackdrop'];
  /**
   * Props applied to the backdrop element.
   *
   * Only applies when `variant="temporary"`.
   */
  BackdropProps?: ModalProps['BackdropProps'];
  /**
   * Props applied to the transition element.
   *
   * Only applies when `variant="temporary"`. The transition is always `Slide`, its direction is
   * derived from `anchor`.
   */
  TransitionProps?: Omit<SlideProps, 'children' | 'in' | 'direction' | 'timeout'>;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  transitionDuration?: TransitionProps['timeout'];
}
