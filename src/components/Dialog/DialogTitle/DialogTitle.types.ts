import { DialogTitleClasses } from './DialogTitle.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DialogTitleProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogTitleClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Whether the title should be sticky. */
  sticky?: boolean;
}
