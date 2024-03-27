import { BottomSheetClasses } from './BottomSheet.classes';

import { SxProps, Theme } from '@mui/material';
import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';

export interface BottomSheetProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BottomSheetClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Bottom sheet children, usually the included sub-components. */
  children?: React.ReactNode;
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
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * @default '100%'
   */
  maxWidth?: string;
  /**
   * Dialog vertical alignment.
   * @default 'flex-end'
   */
  align?: 'flex-end' | 'stretch';
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
  open: ModalProps['open'];

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

  /**
   * The points of the sheet to snap to. Points should be sorted from bottom to top.
   *
   * `point` The height of the sheet.
   * `dragThresholds` Amount of pixels sheet has to move in order to expand or collapse / close.
   * `activeWhen` Points are filtered according to the specified rules.
   * `activeWhen.screen` The point is active when screen size matches given restraints.
   * `activeWhen.paperOverflow` The point is active when paper element scroll height is higher than screen.
   * `activeWhen.fn` The point is active when function returns a truthy value.
   */
  snapPoints?: Array<{
    point: string;
    dragThresholds: { up: string; down: string };
    activeWhen?: {
      screen?: {
        maxHeight?: number;
        minHeight?: number;
        maxWidth?: number;
        minWidth?: number;
      };
      paperOverflow?: boolean;
      fn?: () => boolean;
    };
  }>;
}
