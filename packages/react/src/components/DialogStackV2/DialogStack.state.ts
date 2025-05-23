import { ReactElement } from 'react';

import { DialogProps } from '../Dialog';

export type DialogStackComponentInterface = Pick<DialogProps, 'open' | 'BackdropProps' | 'TransitionProps'>;

export type DialogData = {
  id: number | string;
  open: boolean;
  onExited: () => void;
  component: ReactElement<DialogStackComponentInterface>;
};

export class DialogStackState {
  private _dialogs: DialogData[] = [];

  private subscribers: Array<(data: DialogData[]) => void> = [];
  private dialogId = 0;

  public subscribe = (callback: (data: DialogData[]) => void) => {
    this.subscribers.push(callback);

    return () => {
      this.subscribers = this.subscribers.filter((s) => s !== callback);
    };
  };

  public get dialogs() {
    return this._dialogs;
  }

  public set dialogs(value: DialogData[]) {
    this._dialogs = value;

    for (const s of this.subscribers) {
      s(this._dialogs);
    }
  }

  public closeDialogById = (id: number | string) => {
    const index = this.dialogs.findIndex((e) => e.id === id);

    if (index !== -1) {
      const newValue = this.dialogs.slice();
      newValue[index].open = false;
      this.dialogs = newValue;
    }
  };

  public open = (
    dialog: (props: { close: (data?: any) => void }) => ReactElement<DialogStackComponentInterface>,
    params?: { id?: string }
  ) => {
    const dialogId = params?.id || this.dialogId++;
    let close: (data?: any) => void;

    const afterClosed = new Promise<any>((resolve) => {
      close = (data?: any) => {
        const index = this.dialogs.findIndex((e) => e.id === dialogId);

        if (index !== -1 && this.dialogs[index].open) {
          this.closeDialogById(dialogId);
          resolve(data);
        }
      };

      const onExited = () => {
        this.dialogs = this.dialogs.filter((dialog) => dialog.id !== dialogId);
      };

      this.dialogs = [...this.dialogs, { id: dialogId, open: true, onExited, component: dialog({ close }) }];
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { id: dialogId, close, afterClosed };
  };
}

export const dialogStackState = new DialogStackState();
