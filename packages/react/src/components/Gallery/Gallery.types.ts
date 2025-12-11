import { CSSProperties, ReactNode } from 'react';

import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';

export interface GalleryProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Array of items of any shape to be rendered inside of the gallery. */
  items: any[];
  /** Whether the `Gallery` is open. */
  open?: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;

  /** Props applied to the backdrop element. */
  BackdropProps?: ModalProps['BackdropProps'];
  /** Props applied to the transition element. */
  TransitionProps?: TransitionProps;
}
