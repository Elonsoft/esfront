import { ReactElement } from 'react';

import { DialogProps } from '../Dialog';

export type DialogStackComponentInterface = Pick<DialogProps, 'open' | 'BackdropProps' | 'TransitionProps'>;

export type DialogData = {
  id: number | string;
  open: boolean;
  onExited: () => void;
  component: ReactElement<DialogStackComponentInterface>;
};

export interface DialogStackValue {
  /**
   * Opens a dialog. Throws if a dialog with the same `id` is already open.
   * @returns The object with `id` property, `close` method and `afterClosed` promise that resolves with an argument passed to the `close` method.
   */
  open: (
    dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackComponentInterface>,
    params?: { id?: number | string }
  ) => {
    id: number | string;
    close: (data?: any) => void;
    afterClosed: Promise<any>;
  };

  /**
   * Closes the dialog and resolves its `afterClosed` promise with `data`.
   */
  close: (id: number | string, data?: any) => void;
}

export interface DialogStackStateValue {
  /** The currently opened dialogs. */
  dialogs: Array<{ id: number | string; open: boolean }>;
  /** The number of opened dialogs in the stack. */
  size: number;
}
