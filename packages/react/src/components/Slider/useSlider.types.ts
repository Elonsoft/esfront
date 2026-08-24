import {
  AriaAttributes,
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  Ref,
  RefCallback,
  SyntheticEvent,
} from 'react';

export interface SliderMark {
  /** The value of the mark. */
  value: number;
  /** The label of the mark. */
  label?: ReactNode;
}

export interface UseSliderParameters {
  /** The id of the element containing a label for the slider. */
  'aria-labelledby'?: string;
  /** The default value. Use when the component is not controlled. */
  defaultValue?: number | ReadonlyArray<number>;
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
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks?: boolean | ReadonlyArray<SliderMark>;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   * @default 100
   */
  max?: number;
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   * @default 0
   */
  min?: number;
  /** Name attribute of the hidden `input` element. */
  name?: string;
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
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** The ref attached to the root of the slider. */
  rootRef?: Ref<HTMLSpanElement>;
  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale?: (value: number) => number;
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep?: number;
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step?: number | null;
  /** Tab index attribute of the hidden `input` element. */
  tabIndex?: number;
  /** The value of the slider. For ranged sliders, provide an array with two values. */
  value?: number | ReadonlyArray<number>;
}

export type UseSliderRootSlotOwnProps = {
  onMouseDown: MouseEventHandler;
  ref: RefCallback<HTMLSpanElement> | null;
};

export type UseSliderRootSlotProps<ExternalProps = Record<string, never>> = Omit<
  ExternalProps,
  keyof UseSliderRootSlotOwnProps
> &
  UseSliderRootSlotOwnProps;

export type UseSliderThumbSlotOwnProps = {
  onMouseLeave: MouseEventHandler;
  onMouseOver: MouseEventHandler;
};

export type UseSliderThumbSlotProps<ExternalProps = Record<string, never>> = Omit<
  ExternalProps,
  keyof UseSliderThumbSlotOwnProps
> &
  UseSliderThumbSlotOwnProps;

export type UseSliderHiddenInputOwnProps = {
  'aria-labelledby'?: string;
  'aria-orientation'?: AriaAttributes['aria-orientation'];
  'aria-valuemax'?: AriaAttributes['aria-valuemax'];
  'aria-valuemin'?: AriaAttributes['aria-valuemin'];
  disabled: boolean;
  name?: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  step?: number | 'any';
  style: CSSProperties;
  tabIndex?: number;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

export type UseSliderHiddenInputProps<ExternalProps = Record<string, never>> = Omit<
  ExternalProps,
  keyof UseSliderHiddenInputOwnProps
> &
  UseSliderHiddenInputOwnProps;

export type SliderAxis = 'horizontal' | 'vertical';

export interface SliderAxisProps<T extends SliderAxis> {
  offset: (percent: number) => T extends 'horizontal' ? { left: string } : { bottom: string };
  leap: (percent: number) => T extends 'horizontal' ? { width: string } : { height: string };
}

export interface UseSliderReturnValue {
  /** The active index of the slider. */
  active: number;
  /** The orientation of the slider. */
  axis: SliderAxis;
  /** Returns the `offset` and `leap` methods to calculate the positioning styles based on the slider axis. */
  axisProps: { [key in SliderAxis]: SliderAxisProps<key> };
  /** If `true`, the slider is being dragged. */
  dragging: boolean;
  /** The index of the thumb which is focused on the slider. */
  focusedThumbIndex: number;
  /** Resolver for the hidden input slot's props. */
  getHiddenInputProps: <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps?: ExternalProps
  ) => UseSliderHiddenInputProps<ExternalProps>;
  /** Resolver for the root slot's props. */
  getRootProps: <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps?: ExternalProps
  ) => UseSliderRootSlotProps<ExternalProps>;
  /** Resolver for the thumb slot's props. */
  getThumbProps: <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps?: ExternalProps
  ) => UseSliderThumbSlotProps<ExternalProps>;
  /** Resolver for the thumb slot's style prop. */
  getThumbStyle: (index: number) => object;
  /** The marks of the slider. Marks indicate predetermined values to which the user can move the slider. */
  marks: readonly SliderMark[];
  /** The thumb index for the current value when in hover state. */
  open: number;
  /** If `true`, the slider is a range slider when the `value` prop passed is an array. */
  range: boolean;
  /** Ref to the root slot's DOM node. */
  rootRef: RefCallback<HTMLSpanElement> | null;
  /** The track leap for the current value of the slider. */
  trackLeap: number;
  /** The track offset for the current value of the slider. */
  trackOffset: number;
  /** The possible values of the slider. */
  values: number[];
}
