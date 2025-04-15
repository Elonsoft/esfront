import { ReactNode } from 'react';

import { FiltersHeaderClasses } from './FiltersHeader.classes';

import { SxProps, Theme } from '@mui/material';

export interface FiltersHeaderProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<FiltersHeaderClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Callback fired when the clear button is clicked. If prop is passed clear button will appear. */
  onClear?: () => void;

  /** Text for the header content. */
  labelFilters?: string;
  /** Text for the reset button. */
  labelReset?: string;
}
