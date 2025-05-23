import { DialogData, DialogStackStateValue, DialogStackValue } from './DialogStack.types';

const EMPTY_DIALOGS = Object.freeze([]) as unknown as DialogData[];
const EMPTY_STATE: DialogStackStateValue = Object.freeze({ dialogs: EMPTY_DIALOGS, size: 0 });

export class DialogStackState {
  private _dialogs: DialogData[] = EMPTY_DIALOGS;
  private _state: DialogStackStateValue = EMPTY_STATE;

  private subscribers = new Set<() => void>();
  private resolvers = new Map<number | string, (data?: any) => void>();
  private dialogId = 1;

  /**
   * Store contract for `useSyncExternalStore`. The callback takes no arguments,
   * consumers read the current value through `getSnapshot`.
   */
  public subscribe = (callback: () => void) => {
    this.subscribers.add(callback);

    return () => {
      this.subscribers.delete(callback);
    };
  };

  /**
   * Returns the current dialog list. The reference is stable until the list
   * actually changes, so `useSyncExternalStore` will not loop.
   */
  public getSnapshot = (): DialogData[] => this._dialogs;

  /**
   * No dialogs can be open during server rendering, so the same frozen empty
   * array is always returned for hydration.
   */
  public getServerSnapshot = (): DialogData[] => EMPTY_DIALOGS;

  /**
   * Returns the lightweight `{ id, open }` view of the stack, so components
   * that only care about the stack size do not have to depend on the dialog
   * elements themselves.
   */
  public getStateSnapshot = (): DialogStackStateValue => this._state;

  public getServerStateSnapshot = (): DialogStackStateValue => EMPTY_STATE;

  public get dialogs() {
    return this._dialogs;
  }

  public closeDialogById = (id: number | string, data?: any) => {
    const index = this._dialogs.findIndex((e) => e.id === id);

    if (index === -1 || !this._dialogs[index].open) {
      return;
    }

    const newValue = this._dialogs.slice();
    // Replace instead of mutating so that already published snapshots stay
    // immutable and per-dialog memoization keeps working.
    newValue[index] = { ...newValue[index], open: false };

    this.setDialogs(newValue);

    const resolve = this.resolvers.get(id);

    if (resolve) {
      this.resolvers.delete(id);
      resolve(data);
    }
  };

  public open: DialogStackValue['open'] = (dialog, params) => {
    const dialogId = params?.id ?? this.dialogId++;

    if (this._dialogs.some((e) => e.id === dialogId)) {
      // Duplicate ids collide on the render key and leave both dialogs
      // impossible to close independently, so fail loudly instead of
      // corrupting the stack.
      throw new Error(`DialogStack: a dialog with the id "${dialogId}" is already open.`);
    }

    const close = (data?: any) => {
      this.closeDialogById(dialogId, data);
    };

    // The executor runs synchronously, so the resolver is registered before the
    // dialog can be closed.
    const afterClosed = new Promise<any>((resolve) => {
      this.resolvers.set(dialogId, resolve);
    });

    const onExited = () => {
      const newValue = this._dialogs.filter((e) => e.id !== dialogId);

      if (newValue.length !== this._dialogs.length) {
        this.setDialogs(newValue.length === 0 ? EMPTY_DIALOGS : newValue);
      }
    };

    this.setDialogs([...this._dialogs, { id: dialogId, open: true, onExited, component: dialog({ close }) }]);

    return { id: dialogId, close, afterClosed };
  };

  /**
   * The only mutator. Keeping it private guarantees that `_dialogs` and
   * `_state` can never drift apart, and that every change notifies.
   */
  private setDialogs(value: DialogData[]) {
    if (value === this._dialogs) {
      return;
    }

    this._dialogs = value;

    this._state = value.length
      ? { dialogs: value.map(({ id, open }) => ({ id, open })), size: value.length }
      : EMPTY_STATE;

    for (const s of this.subscribers) {
      s();
    }
  }
}

export const dialogStackState = new DialogStackState();
