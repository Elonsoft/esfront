import { ReactNode } from 'react';

import { GalleryClasses } from './Gallery.classes';

import { SxProps, Theme } from '@mui/material';
import { ModalProps } from '@mui/material/Modal';
import { TransitionProps } from '@mui/material/transitions';

export interface GalleryProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

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
