import { ReactNode } from 'react';

import { DialogProps } from '../Dialog';

/**
 * @deprecated Use `DialogStackComponentInterface` instead.
 */
export type DialogStackProviderComponentInterface = Pick<DialogProps, 'open' | 'BackdropProps' | 'TransitionProps'>;

/**
 * @deprecated The `DialogStack` component takes no props.
 */
export interface DialogStackProviderProps {
  children?: ReactNode;
  enableHistoryOverride?: boolean;
}
