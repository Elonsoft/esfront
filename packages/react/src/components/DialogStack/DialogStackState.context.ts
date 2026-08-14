import { createContext, useContext } from 'react';

export interface DialogStackStateContextValue {
  /** The currently opened dialogs. */
  dialogs: Array<{ id: number | string; open: boolean }>;
  /** The number of opened dialogs in the stack. */
  size: number;
}

export const DialogStackStateContext = createContext<DialogStackStateContextValue | null>(null);

/**
 * The hook that returns the currently opened dialogs and their number. Throws when used outside of
 * `DialogStackProvider`.
 */
export const useDialogStackState = () => {
  const value = useContext(DialogStackStateContext);

  if (value === null) {
    throw new Error('No provider for DialogStackStateContext.');
  }

  return value;
};
