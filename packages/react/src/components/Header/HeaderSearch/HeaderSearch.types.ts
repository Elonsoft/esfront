import { TextFieldProps } from '@mui/material';

export type HeaderSearchProps = {
  /**
   * The variant of the component.
   * @default 'outlined'
   */
  variant?: 'borderless' | 'outlined';
} & Omit<TextFieldProps, 'variant'>;
