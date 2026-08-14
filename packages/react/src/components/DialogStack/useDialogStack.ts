'use client';

import { useEffect, useRef } from 'react';

import { DialogStackContextValue, useDialogStackContext } from './DialogStack.context';

/**
 * Opens and closes the dialogs of the stack, closing the ones the calling component opened once it unmounts.
 * @deprecated Use `useDialogStackV2` instead.
 */
export const useDialogStack = (): DialogStackContextValue => {
  const context = useDialogStackContext();
  const dialogs = useRef<Array<number | string>>([]);

  useEffect(() => {
    return () => {
      dialogs.current.forEach((id) => {
        context.close(id);
      });
    };
  }, []);

  return {
    ...context,
    open: (dialog, params) => {
      const result = context.open(dialog, params);
      dialogs.current.push(result.id);

      result.afterClosed.then(() => {
        dialogs.current = dialogs.current.filter((id) => id !== result.id);
      });

      return result;
    },
  };
};
