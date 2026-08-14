import { useEffect, useRef } from 'react';

import { DialogStackContextValue, useDialogStackContext } from './DialogStack.context';

/**
 * The hook that opens dialogs above the current page. `open` returns the dialog `id`, a `close` method and an
 * `afterClosed` promise that resolves with the argument passed to the `close` method of the dialog. The dialogs
 * opened through this hook are closed when the component that opened them unmounts. Throws when used outside of
 * `DialogStackProvider`.
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
