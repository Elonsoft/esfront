import { ReactElement, useEffect, useRef } from 'react';

import { DialogStackComponentInterface, dialogStackState } from './DialogStack.state';

export const useDialogStackV2 = () => {
  const dialogs = useRef<Array<number | string>>([]);

  useEffect(() => {
    return () => {
      dialogs.current.forEach((id) => {
        dialogStackState.closeDialogById(id);
      });
    };
  }, []);

  return {
    close: dialogStackState.closeDialogById,
    open: (
      dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackComponentInterface>,
      params?: { id?: string }
    ) => {
      const result = dialogStackState.open(dialog, params);
      dialogs.current.push(result.id);

      result.afterClosed.then(() => {
        dialogs.current = dialogs.current.filter((id) => id !== result.id);
      });

      return result;
    },
  };
};
