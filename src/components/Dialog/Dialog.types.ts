import { DialogClasses } from './Dialog.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';

export interface DialogProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Dialog children, usually the included sub-components. */
  children?: React.ReactNode;
  /** Content inserted before the paper element. */
  before?: React.ReactNode;
  /** Content inserted after the paper element. */
  after?: React.ReactNode;
  /** The id(s) of the element(s) that describe the dialog. */
  'aria-describedby'?: string;
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby'?: string;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen?: boolean;
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * @default '100%'
   */
  maxWidth?: string;
  /**
   * Dialog vertical alignment.
   * @default 'center'
   */
  align?: 'center' | 'flex-start' | 'flex-end';
  /** Callback fired when the backdrop is clicked. */
  onBackdropClick?: ModalProps['onBackdropClick'];
  /** If true, the backdrop is not rendered. */
  hideBackdrop?: ModalProps['hideBackdrop'];
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose?: ModalProps['onClose'];
  /**
   * If `true`, the component is shown.
   */
  open?: ModalProps['open'];
  /** The component used for the transition. */
  TransitionComponent?: React.JSXElementConstructor<TransitionProps & { children: React.ReactElement<any, any> }>;
  /** Props applied to the transition element. */
  TransitionProps?: TransitionProps;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  transitionDuration?: TransitionProps['timeout'];
}
