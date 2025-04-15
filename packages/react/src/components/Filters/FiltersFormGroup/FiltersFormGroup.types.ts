import { ReactNode } from 'react';

import { FiltersFormGroupClasses } from './FiltersFormGroup.classes';

import { SxProps, Theme } from '@mui/material';

export interface FiltersFormGroupProps {
  children?: ReactNode;
  header?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<FiltersFormGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  maxLines?: number;

  /** Text for the hide button. */
  labelHide?: string;
  /** Text for the show button. */
  labelShow?: string;
}
