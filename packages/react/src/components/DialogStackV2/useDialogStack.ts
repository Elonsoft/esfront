'use client';

import { useEffect, useMemo, useRef } from 'react';

import { DialogStackValue } from './DialogStack.types';

import { dialogStackState } from './DialogStack.state';

/**
 * Opens dialogs in the stack rendered by the `DialogStack` component. Every
 * dialog opened through this hook is closed when the component unmounts.
 */
export const useDialogStackV2 = (): DialogStackValue => {
  const dialogs = useRef<Array<number | string>>([]);

  useEffect(() => {
    return () => {
      dialogs.current.forEach((id) => {
        dialogStackState.closeDialogById(id);
      });
    };
  }, []);

  return useMemo<DialogStackValue>(
    () => ({
      close: dialogStackState.closeDialogById,
      open: (dialog, params) => {
        const result = dialogStackState.open(dialog, params);
        dialogs.current.push(result.id);

        result.afterClosed.then(() => {
          dialogs.current = dialogs.current.filter((id) => id !== result.id);
        });

        return result;
      },
    }),
    []
  );
};
