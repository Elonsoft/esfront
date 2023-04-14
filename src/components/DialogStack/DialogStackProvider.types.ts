import { ReactNode } from 'react';

import { DialogProps } from '../Dialog';

export type DialogStackProviderComponentInterface = Pick<DialogProps, 'open' | 'hideBackdrop' | 'TransitionProps'>;

export interface DialogStackProviderProps {
  children?: ReactNode;
}
