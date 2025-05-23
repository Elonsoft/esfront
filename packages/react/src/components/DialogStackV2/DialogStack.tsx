import { cloneElement, Fragment, isValidElement, useEffect, useState } from 'react';

import { DialogData, dialogStackState } from './DialogStack.state';

export const DialogStack = () => {
  const [dialogs, setDialogs] = useState<DialogData[]>([]);

  useEffect(() => {
    const unsubscribe = dialogStackState.subscribe(setDialogs);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
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
                  ...dialog.component.props.BackdropProps?.style,
                },
                ...dialog.component.props.BackdropProps,
              },
              TransitionProps: {
                ...dialog.component.props.TransitionProps,
                onExited: (node: HTMLElement) => {
                  if (dialog.component.props.TransitionProps?.onExited) {
                    dialog.component.props.TransitionProps.onExited(node);
                  }

                  dialog.onExited();
                },
              },
            } as never)}
          </Fragment>
        );
      })}
    </>
  );
};

DialogStack.dialogId = 1;
