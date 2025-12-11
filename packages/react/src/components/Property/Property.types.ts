import { CSSProperties, ReactNode } from 'react';

import { OverridableStringUnion } from '@mui/types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PropertyPropsSizeOverrides {}

export interface PropertyProps {
  name?: ReactNode;
  value?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * Size of the component.
   * @default 'm'
   */
  size?: OverridableStringUnion<'s' | 'm', PropertyPropsSizeOverrides>;
}
