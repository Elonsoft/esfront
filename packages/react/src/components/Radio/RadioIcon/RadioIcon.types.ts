import { RadioIconClasses } from './RadioIcon.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface RadioIconProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<RadioIconClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
