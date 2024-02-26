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

  const closeDialogById = (id: number) => {
    setDialogs((prev) => {
      const newValue = prev.slice();
      const index = newValue.findIndex((e) => e.id === id);
      if (index !== -1) {
        newValue[index].open = false;
      }
      return newValue;
    });
  };

  const value = useMemo(() => {
    return {
      open: (
        dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackProviderComponentInterface>
      ) => {
        const id = DialogStackProvider.dialogId++;
        let close: (data?: any) => void;

        const afterClosed = new Promise<any>((resolve) => {
          close = (data?: any) => {
            closeDialogById(id);
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
      },
      close: closeDialogById
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
                BackdropProps: {
                  style: {
                    opacity: index < dialogs.filter((dialog) => dialog.open).length - 1 ? '0' : '',
                    ...dialog.component.props.BackdropProps?.style
                  },
                  ...dialog.component.props.BackdropProps
                },
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
