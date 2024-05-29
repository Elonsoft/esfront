import { ReactNode } from 'react';

import { StoreBadgeClasses } from './StoreBadge.classes';

import { SxProps, Theme } from '@mui/material';

export interface StoreBadgeProps {
  children: ReactNode;

  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<StoreBadgeClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** If `true`, the component is checked. */
  checked?: boolean;
  /** Callback fired when the state is changed. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The color of the component.
   * @default 'monoA'
   */
  color?: 'monoA' | 'monoB';

  startIcon?: ReactNode;

  variant?: 'filled' | 'outlined';

  upperText?: string;

  /** If `true`, the component is disabled. */
  disabled?: boolean;
}
