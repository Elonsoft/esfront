/* eslint-disable @typescript-eslint/no-empty-object-type */

import { CSSProperties, MouseEvent, ReactNode } from 'react';

import { OverridableStringUnion } from '../../types';

export interface ToggleButtonGroupPropsSizeOverrides {}

export interface ToggleButtonGroupProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The currently selected value within the group or an array of selected values when `exclusive` is `false`.
   */
  value?: string | string[] | null;

  /**
   * If `true`, only one of the child ToggleButton values can be selected.
   * @default false
   */
  exclusive?: boolean;

  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The screen width at which the buttons are ordered in a row.
   * @default '0'
   */
  breakpoint?: string | null;

  /**
   * If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button group will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The size of the component.
   * @default '500'
   */
  size?: OverridableStringUnion<'400' | '500' | '600' | '700', ToggleButtonGroupPropsSizeOverrides>;

  /**
   * Callback fired when the value changes.
   */
  onChange?: (event: MouseEvent, value: string | string[] | null) => void;
}
