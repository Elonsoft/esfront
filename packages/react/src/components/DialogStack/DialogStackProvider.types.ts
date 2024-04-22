import { ReactNode } from 'react';

import { DialogProps } from '../Dialog';

export type DialogStackProviderComponentInterface = Pick<DialogProps, 'open' | 'BackdropProps' | 'TransitionProps'>;

export interface DialogStackProviderProps {
  children?: ReactNode;
  enableHistoryOverride?: boolean;
}
