'use client';

import { useSyncExternalStore } from 'react';

import { DialogStackStateValue } from './DialogStack.types';

import { dialogStackState } from './DialogStack.state';

/**
 * Subscribes to the ids and the open state of the dialogs in the stack.
 * @returns The object with the `dialogs` array and the `size` of the stack.
 */
export const useDialogStackStateV2 = (): DialogStackStateValue => {
  return useSyncExternalStore(
    dialogStackState.subscribe,
    dialogStackState.getStateSnapshot,
    dialogStackState.getServerStateSnapshot
  );
};
