import { useEffect, useRef } from 'react';

import { DialogStackContextValue, useDialogStackContext } from './DialogStack.context';

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
