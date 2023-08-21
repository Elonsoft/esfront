import { cloneElement, Fragment, isValidElement, ReactElement, useMemo, useState } from 'react';

import { DialogStackProviderComponentInterface, DialogStackProviderProps } from './DialogStackProvider.types';

import { DialogStackContext } from './DialogStack.context';
import { DialogStackStateContext } from './DialogStackState.context';

export const DialogStackProvider = ({ children }: DialogStackProviderProps) => {
  const [dialogs, setDialogs] = useState<
    Array<{
      id: number;
      open: boolean;
      onExited: () => void;
      component: ReactElement<DialogStackProviderComponentInterface>;
    }>
  >([]);

  const value = useMemo(() => {
    return {
      open: (
        dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackProviderComponentInterface>
      ) => {
        const id = DialogStackProvider.dialogId++;
        let close: (data?: any) => void;

        const afterClosed = new Promise<any>((resolve) => {
          close = (data?: any) => {
            setDialogs((prev) => {
              const newValue = prev.slice();
              const index = newValue.findIndex((e) => e.id === id);
              if (index !== -1) {
                newValue[index].open = false;
              }
              return newValue;
            });
            resolve(data);
          };

          const onExited = () => {
            setDialogs((prev) => prev.filter((dialog) => dialog.id !== id));
          };

          setDialogs((prev) => [...prev, { id, open: true, onExited, component: dialog({ close }) }]);
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { id, close, afterClosed };
      }
    };
  }, []);

  const stateValue = useMemo(() => {
    return {
      size: dialogs.length
    };
  }, [dialogs.length]);

  return (
    <DialogStackContext.Provider value={value}>
      <DialogStackStateContext.Provider value={stateValue}>
        {children}
        {dialogs.map((dialog, index) => {
          if (!isValidElement(dialog.component)) {
            return null;
          }

          return (
            <Fragment key={dialog.id}>
              {cloneElement(dialog.component, {
                open: dialog.open,
                hideBackdrop: dialog.component.props.hideBackdrop ?? index < dialogs.length - 1,
                TransitionProps: {
                  ...dialog.component.props.TransitionProps,
                  onExited: (node: HTMLElement) => {
                    if (dialog.component.props.TransitionProps?.onExited) {
                      dialog.component.props.TransitionProps.onExited(node);
                    }
                    dialog.onExited();
                  }
                }
              } as never)}
            </Fragment>
          );
        })}
      </DialogStackStateContext.Provider>
    </DialogStackContext.Provider>
  );
};

DialogStackProvider.dialogId = 0;
