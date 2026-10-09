/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { OverridableStringUnion } from '../../types';
import { DialogProps } from '../Dialog';

export interface ConfirmationDialogPropsSeverityOverrides {}

export type ConfirmationDialogSeverity = OverridableStringUnion<
  'error' | 'primary',
  ConfirmationDialogPropsSeverityOverrides
>;

export interface ConfirmationDialogProps extends Omit<DialogProps, 'before' | 'after' | 'children' | 'onClose'> {
  children?: ReactNode;
  /**
   * The severity of the operation. It defines the color of the icon and of the confirm button.
   * @default 'error'
   */
  severity?: ConfirmationDialogSeverity;

  /**
   * The operation to perform when the user confirms. The dialog shows a loading state until the returned promise
   * settles, then closes with its value. A rejection keeps the dialog open and is rethrown.
   */
  action: () => Promise<unknown>;
  /** Callback fired when the dialog requests to be closed, either with the value of `action` or without a value. */
  close: (data?: unknown) => void;

  /** The title text. */
  title: ReactNode;
  /**
   * If `true`, the confirm button is disabled.
   * @default false
   */
  disabled?: boolean;

  /** The icon displayed next to the title. Pass `false` to render the title without an icon. */
  icon?: ReactNode | false;
  /** The component maps the `severity` prop to an icon. Provide your own mapping to change it. */
  iconMapping?: Partial<Record<ConfirmationDialogSeverity, ReactNode>>;

  /** The icon of the close button rendered inside the dialog on narrow screens. */
  iconClose?: ReactNode;

  /** Text for the confirm button. The button is not rendered without it. */
  labelConfirm?: ReactNode;
  /** Text for the cancel button. */
  labelCancel?: ReactNode;
  /** Text for the close button aria-label. */
  labelClose?: string;
  /** Text for the escape key hint next to the close button. */
  labelEscapeKey?: string;
}
