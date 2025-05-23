'use client';

import { cloneElement, Fragment, isValidElement, useSyncExternalStore } from 'react';

import { dialogStackState } from './DialogStack.state';

export const DialogStack = () => {
  const dialogs = useSyncExternalStore(
    dialogStackState.subscribe,
    dialogStackState.getSnapshot,
    dialogStackState.getServerSnapshot
  );

  const openCount = dialogs.filter((dialog) => dialog.open).length;

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
                ...dialog.component.props.BackdropProps,
                style: {
                  opacity: index < openCount - 1 ? '0' : '',
                  ...dialog.component.props.BackdropProps?.style,
                },
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
