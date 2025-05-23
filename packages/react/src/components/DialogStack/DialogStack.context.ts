'use client';

import { createContext, ReactElement, useContext } from 'react';

import { DialogStackProviderComponentInterface } from './DialogStackProvider.types';

/**
 * @deprecated Use `DialogStackValue` instead.
 */
export interface DialogStackContextValue {
  /**
   * Opens a dialog.
   * @returns The object with `id` property, `close` method and `afterClose` promise that resolves with an argument passed to the `close` method.
   */
  open: (
    dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackProviderComponentInterface>,
    params?: { id?: string }
  ) => {
    id: number | string;
    close: (data?: any) => void;
    afterClosed: Promise<any>;
  };

  /**
   * Closes the dialog.
   */
  close: (id: number | string) => void;
}

/**
 * @deprecated The `DialogStack` component keeps its dialogs in the `dialogStackState` store instead of a context.
 */
export const DialogStackContext = createContext<DialogStackContextValue | null>(null);

/**
 * @deprecated Use the `dialogStackState` store directly, or `useDialogStackV2` inside a component.
 */
export const useDialogStackContext = () => {
  const value = useContext(DialogStackContext);

  if (value === null) {
    throw new Error('No provider for DialogStackContext.');
  }

  return value;
};
