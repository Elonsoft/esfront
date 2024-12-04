import { ReactNode } from 'react';

import { FormControlLabelClasses } from './FormControlLabel.classes';

import { SxProps, Theme, TypographyProps } from '@mui/material';

export interface FormControlLabelProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FormControlLabelClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** A control element. For instance, it can be a Radio or a Checkbox. */
  control: ReactNode;
  /** A text or an element to be used in an enclosing label element. */
  label?: ReactNode;

  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';

  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    typography?: Partial<TypographyProps>;
  };
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    typography?: React.ElementType;
  };
}
