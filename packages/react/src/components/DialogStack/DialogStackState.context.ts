'use client';

import { createContext, useContext } from 'react';

/**
 * @deprecated Use `DialogStackStateValue` instead.
 */
export interface DialogStackStateContextValue {
  /** The currently opened dialogs. */
  dialogs: Array<{ id: number | string; open: boolean }>;
  /** The number of opened dialogs in the stack. */
  size: number;
}

/**
 * @deprecated The `DialogStack` component keeps its dialogs in the `dialogStackState` store instead of a context.
 */
export const DialogStackStateContext = createContext<DialogStackStateContextValue | null>(null);

/**
 * @deprecated Use `useDialogStackStateV2` instead.
 */
export const useDialogStackState = () => {
  const value = useContext(DialogStackStateContext);

  if (value === null) {
    throw new Error('No provider for DialogStackStateContext.');
  }

  return value;
};
