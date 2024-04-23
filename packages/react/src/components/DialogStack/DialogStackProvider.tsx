import { cloneElement, Fragment, isValidElement, ReactElement, useMemo, useState } from 'react';

import { DialogStackProviderComponentInterface, DialogStackProviderProps } from './DialogStackProvider.types';

import { DialogStackContext } from './DialogStack.context';
import { DialogStackStateContext } from './DialogStackState.context';

import { useLatest, useWindowEventListener } from '../../hooks';

export const DialogStackProvider = ({ children, enableHistoryOverride }: DialogStackProviderProps) => {
  const [dialogs, setDialogs] = useState<
    Array<{
      id: number | string;
      open: boolean;
      onExited: () => void;
      component: ReactElement<DialogStackProviderComponentInterface>;
    }>
  >([]);

  const latestDialogs = useLatest(dialogs);

  const closeDialogById = (id: number | string) => {
    setDialogs((prev) => {
      const index = prev.findIndex((e) => e.id === id);
      if (index !== -1) {
        const newValue = prev.slice();
        newValue[index].open = false;
        return newValue;
      }
      return prev;
    });
  };

  const value = useMemo(() => {
    return {
      open: (
        dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackProviderComponentInterface>,
        params?: { id?: string }
      ) => {
        const dialogId = params?.id || DialogStackProvider.dialogId++;
        let close: (data?: any) => void;

        const afterClosed = new Promise<any>((resolve) => {
          close = (data?: any) => {
            const index = latestDialogs.current.findIndex((e) => e.id === dialogId);
            if (index !== -1 && latestDialogs.current[index].open) {
              if (enableHistoryOverride) {
                history.back();
              }
              closeDialogById(dialogId);
              resolve(data);
            }
          };

          const onExited = () => {
            setDialogs((prev) => prev.filter((dialog) => dialog.id !== dialogId));
          };

          setDialogs((prev) => [...prev, { id: dialogId, open: true, onExited, component: dialog({ close }) }]);

          if (enableHistoryOverride) {
            const state = history.state;
            history.replaceState({ ...state, dialogId }, '', location.href);
            history.pushState(state, '');
          }
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return { id: dialogId, close, afterClosed };
      },
      close: closeDialogById
    };
  }, []);

  const stateValue = useMemo(() => {
    return {
      dialogs: dialogs.map(({ id, open }) => ({ id, open })),
      size: dialogs.length
    };
  }, [dialogs]);

  // TODO: Integrate with react-router's useBlocker hook.
  useWindowEventListener('popstate', (event) => {
    if (enableHistoryOverride && event.state?.dialogId) {
      const id = event.state.dialogId;
      const index = latestDialogs.current.findIndex((e) => e.id === id);
      if (index !== -1) {
        const state = event.state;
        delete state.dialogId;
        history.replaceState(state, '', location.href);
      }
      closeDialogById(id);
    }
  });

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

DialogStackProvider.dialogId = 1;
