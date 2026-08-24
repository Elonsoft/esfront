import { CSSProperties, ElementType, HTMLAttributes, ReactElement, ReactNode, SyntheticEvent } from 'react';

import { SliderMark } from './useSlider.types';

export interface SliderValueLabelProps {
  /** The thumb the label is attached to. */
  children: ReactElement<{ className?: string; children?: ReactNode }>;
  /** Class applied to the label element. */
  className?: string;
  /** If `true`, the label is shown. */
  open: boolean;
  /** The index of the thumb the label is attached to. */
  index: number;
  /** The formatted value of the thumb. */
  value: ReactNode;
}

export interface SliderProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'children' | 'color' | 'defaultValue' | 'onChange'> {
  /** The label of the slider. Use `getAriaLabel` for a range slider. */
  'aria-label'?: string;
  /** The id of the element containing a label for the slider. */
  'aria-labelledby'?: string;
  /** A string value that provides a user-friendly name for the current value of the slider. Use `getAriaValueText` for a range slider. */
  'aria-valuetext'?: string;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The color of the component.
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /** The value of the slider. For ranged sliders, provide an array with two values. */
  value?: number | ReadonlyArray<number>;
  /** The default value. Use when the component is not controlled. */
  defaultValue?: number | ReadonlyArray<number>;
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   * @default 0
   */
  min?: number;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   * @default 100
   */
  max?: number;
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step?: number | null;
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep?: number;
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks?: boolean | ReadonlyArray<SliderMark>;
  /**
   * The track presentation:
   *
   * - `normal` the track renders a bar representing the slider value.
   * - `inverted` the track renders a bar representing the remaining slider value.
   * - `false` the track renders without a bar.
   * @default 'normal'
   */
  track?: 'normal' | 'inverted' | false;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale?: (value: number) => number;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap?: boolean;

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label is displayed when the thumb is hovered or focused.
   * - `on` the value label is displayed persistently.
   * - `off` the value label is never displayed.
   * @default 'off'
   */
  valueLabelDisplay?: 'auto' | 'off' | 'on';
  /**
   * The format function of the value label's value.
   * @default (x) => x
   */
  valueLabelFormat?: string | ((value: number, index: number) => ReactNode);

  /** Name attribute of the hidden `input` element. */
  name?: string;
  /** Tab index attribute of the hidden `input` element. */
  tabIndex?: number;

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param value The new value.
   * @param activeThumb Index of the currently moved thumb.
   */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param value The new value.
   */
  onChangeCommitted?: (event: SyntheticEvent | Event, value: number | number[]) => void;

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the
   * slider. This is important for screen reader users.
   */
  getAriaLabel?: (index: number) => string;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the
   * slider. This is important for screen reader users.
   */
  getAriaValueText?: (value: number, index: number) => string;

  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    rail?: ElementType;
    track?: ElementType;
    thumb?: ElementType;
    mark?: ElementType;
    markLabel?: ElementType;
    valueLabel?: ElementType;
    input?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   *
   * `slotProps.track.style` and `slotProps.thumb.style` are merged over the styles computed by the positioning logic,
   * so setting `left`, `right`, `bottom`, `width` or `height` there breaks the positioning.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLSpanElement>;
    rail?: HTMLAttributes<HTMLSpanElement>;
    track?: HTMLAttributes<HTMLSpanElement>;
    thumb?: HTMLAttributes<HTMLSpanElement>;
    mark?: HTMLAttributes<HTMLSpanElement>;
    markLabel?: HTMLAttributes<HTMLSpanElement>;
    valueLabel?: Partial<Omit<SliderValueLabelProps, 'children'>>;
    input?: HTMLAttributes<HTMLInputElement>;
  };
}
