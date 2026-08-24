import { forwardRef, Fragment } from 'react';

import { SliderProps } from './Slider.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { SliderValueLabel } from './SliderValueLabel';
import { identity, useSlider, valueToPercent } from './useSlider';

const asRecord = (props?: object): Record<string, unknown> => ({ ...props });

/** Sliders allow the user to select a value or a range of values from a given range. */
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(inProps, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-valuetext': ariaValuetext,
    className,
    color = 'secondary',
    defaultValue,
    disabled = false,
    disableSwap = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    scale = identity,
    shiftStep = 10,
    size = 'medium',
    slotProps = {},
    slots = {},
    step = 1,
    tabIndex,
    track = 'normal',
    value: valueProp,
    valueLabelDisplay = 'off',
    valueLabelFormat = identity,
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESSlider',
  });

  const {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    getThumbStyle,
    marks,
    open,
    range,
    trackLeap,
    trackOffset,
    values,
  } = useSlider({
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled,
    disableSwap,
    marks: marksProp,
    max,
    min,
    name,
    onChange,
    onChangeCommitted,
    orientation,
    rootRef: ref,
    scale,
    shiftStep,
    step,
    tabIndex,
    value: valueProp,
  });

  const marked = marks.length > 0 && marks.some((mark) => mark.label);

  const RootSlot = slots.root || 'span';
  const RailSlot = slots.rail || 'span';
  const TrackSlot = slots.track || 'span';
  const ThumbSlot = slots.thumb || 'span';
  const MarkSlot = slots.mark || 'span';
  const MarkLabelSlot = slots.markLabel || 'span';
  const ValueLabelSlot = slots.valueLabel || SliderValueLabel;
  const InputSlot = slots.input || 'input';

  const rootProps = getRootProps({ ...asRecord(other), ...asRecord(slotProps.root) });
  const thumbProps = getThumbProps(asRecord(slotProps.thumb));
  const inputProps = getHiddenInputProps(asRecord(slotProps.input));

  return (
    <RootSlot
      {...rootProps}
      className={clsx(
        'es-slider',
        `es-slider--color--${color}`,
        `es-slider--size--${size}`,
        `es-slider--orientation--${orientation}`,
        `es-slider--track--${track === false ? 'false' : track}`,
        marked && 'es-slider--marked',
        disabled && 'es-slider--disabled',
        dragging && 'es-slider--dragging',
        className,
        slotProps.root?.className
      )}
    >
      <RailSlot {...slotProps.rail} className={clsx('es-slider__rail', slotProps.rail?.className)} />
      <TrackSlot
        {...slotProps.track}
        className={clsx('es-slider__track', slotProps.track?.className)}
        style={{
          ...axisProps[axis].offset(trackOffset),
          ...axisProps[axis].leap(trackLeap),
          ...slotProps.track?.style,
        }}
      />
      {marks
        .filter((mark) => mark.value >= min && mark.value <= max)
        .map((mark, index) => {
          const style = axisProps[axis].offset(valueToPercent(mark.value, min, max));

          let markActive: boolean;

          if (track === false) {
            markActive = values.includes(mark.value);
          } else {
            markActive =
              (track === 'normal' &&
                (range
                  ? mark.value >= values[0] && mark.value <= values[values.length - 1]
                  : mark.value <= values[0])) ||
              (track === 'inverted' &&
                (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]));
          }

          return (
            <Fragment key={index}>
              <MarkSlot
                data-index={index}
                {...slotProps.mark}
                className={clsx('es-slider__mark', markActive && 'es-slider__mark--active', slotProps.mark?.className)}
                style={{ ...style, ...slotProps.mark?.style }}
              />
              {mark.label === undefined || mark.label === null ? null : (
                <MarkLabelSlot
                  aria-hidden
                  data-index={index}
                  {...slotProps.markLabel}
                  className={clsx(
                    'es-slider__mark-label',
                    'caption',
                    markActive && 'es-slider__mark-label--active',
                    slotProps.markLabel?.className
                  )}
                  style={{ ...style, ...slotProps.markLabel?.style }}
                >
                  {mark.label}
                </MarkLabelSlot>
              )}
            </Fragment>
          );
        })}
      {values.map((value, index) => {
        const style = axisProps[axis].offset(valueToPercent(value, min, max));

        const thumb = (
          <ThumbSlot
            data-index={index}
            {...thumbProps}
            className={clsx(
              'es-slider__thumb',
              active === index && 'es-slider__thumb--active',
              focusedThumbIndex === index && 'es-slider__thumb--focus-visible',
              disabled && 'es-slider__thumb--disabled',
              slotProps.thumb?.className
            )}
            style={{ ...style, ...getThumbStyle(index), ...slotProps.thumb?.style }}
          >
            <InputSlot
              aria-label={getAriaLabel ? getAriaLabel(index) : ariaLabel}
              aria-labelledby={ariaLabelledby}
              aria-valuenow={scale(value)}
              aria-valuetext={getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext}
              className="es-slider__input"
              data-index={index}
              value={values[index]}
              {...inputProps}
            />
          </ThumbSlot>
        );

        if (valueLabelDisplay === 'off') {
          return <Fragment key={index}>{thumb}</Fragment>;
        }

        const isOpen = open === index || active === index || valueLabelDisplay === 'on';

        return (
          <ValueLabelSlot
            key={index}
            {...slotProps.valueLabel}
            className={clsx(
              'es-slider__value-label',
              'caption',
              isOpen && 'es-slider__value-label--open',
              slotProps.valueLabel?.className
            )}
            index={index}
            open={isOpen}
            value={typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat}
          >
            {thumb}
          </ValueLabelSlot>
        );
      })}
    </RootSlot>
  );
});
