'use client';

import {
  ChangeEvent,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  RefObject,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  SliderAxis,
  SliderMark,
  UseSliderHiddenInputProps,
  UseSliderParameters,
  UseSliderReturnValue,
  UseSliderRootSlotProps,
  UseSliderThumbSlotProps,
} from './useSlider.types';

import { useControlled, useEnhancedEffect, useEvent, useForkRef } from '../../hooks';
import { clamp, EventHandlers, extractEventHandlers, isFocusVisible, ownerDocument, visuallyHidden } from '../../utils';

const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

function getNewValue(currentValue: number, step: number, direction: 1 | -1, min: number, max: number): number {
  return direction === 1 ? Math.min(currentValue + step, max) : Math.max(currentValue - step, min);
}

function asc(a: number, b: number) {
  return a - b;
}

function findClosest(values: number[], currentValue: number) {
  const { index: closestIndex } =
    values.reduce<{ distance: number; index: number } | null>((acc, value: number, index: number) => {
      const distance = Math.abs(currentValue - value);

      if (acc === null || distance < acc.distance || distance === acc.distance) {
        return { distance, index };
      }

      return acc;
    }, null) ?? {};

  return closestIndex;
}

function trackFinger(event: TouchEvent | MouseEvent | ReactMouseEvent, touchId: RefObject<number | undefined>) {
  // The event is TouchEvent.
  if (touchId.current !== undefined && (event as TouchEvent).changedTouches) {
    const touchEvent = event as TouchEvent;

    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return { x: touch.clientX, y: touch.clientY };
      }
    }

    return false;
  }

  // The event is MouseEvent.
  return { x: (event as MouseEvent).clientX, y: (event as MouseEvent).clientY };
}

export function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num: number) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const mantissaDecimalPart = parts[0].split('.')[1];
    return (mantissaDecimalPart ? mantissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value: number, step: number, min: number) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex({ values, newValue, index }: { values: number[]; newValue: number; index: number }) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}

function focusThumb({
  sliderRef,
  activeIndex,
  setActive,
}: {
  sliderRef: RefObject<HTMLSpanElement | null>;
  activeIndex: number;
  setActive?: (num: number) => void;
}) {
  const doc = ownerDocument(sliderRef.current);

  if (
    !sliderRef.current?.contains(doc.activeElement) ||
    Number(doc?.activeElement?.getAttribute('data-index')) !== activeIndex
  ) {
    sliderRef.current?.querySelector<HTMLElement>(`[type="range"][data-index="${activeIndex}"]`)?.focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

function areArraysEqual(array1: ReadonlyArray<number>, array2: ReadonlyArray<number>) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

function areValuesEqual(newValue: number | ReadonlyArray<number>, oldValue: number | ReadonlyArray<number>): boolean {
  if (typeof newValue === 'number' && typeof oldValue === 'number') {
    return newValue === oldValue;
  }

  if (typeof newValue === 'object' && typeof oldValue === 'object') {
    return areArraysEqual(newValue, oldValue);
  }

  return false;
}

const axisProps = {
  horizontal: {
    offset: (percent: number) => ({ left: `${percent}%` }),
    leap: (percent: number) => ({ width: `${percent}%` }),
  },
  vertical: {
    offset: (percent: number) => ({ bottom: `${percent}%` }),
    leap: (percent: number) => ({ height: `${percent}%` }),
  },
};

export const identity = (x: any) => x;

// Safari, on iOS, supports touch action since v13. Utilizing the CSS.supports method to check if touch-action is
// supported. Since CSS.supports is supported everywhere touch-action is not, a missing CSS.supports means that
// touch-action is supported.
let cachedSupportsTouchActionNone: boolean | undefined;

function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }

  return cachedSupportsTouchActionNone;
}

/**
 * The hook that implements the behaviour of the Slider: value derivation, keyboard interaction, pointer and touch
 * dragging, and the props of every slot.
 */
export function useSlider(parameters: UseSliderParameters): UseSliderReturnValue {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    rootRef: ref,
    scale = identity,
    step = 1,
    shiftStep = 10,
    tabIndex,
    value: valueProp,
  } = parameters;

  const touchId = useRef<number | undefined>(undefined);
  // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inverting a range slider.
  const [active, setActive] = useState(-1);
  const [open, setOpen] = useState(-1);
  const [dragging, setDragging] = useState(false);
  const moveCount = useRef(0);
  // lastChangedValue is updated whenever onChange is triggered.
  const lastChangedValue = useRef<number | number[] | null>(null);

  const [valueDerived, setValueState] = useControlled<number | ReadonlyArray<number>>(defaultValue ?? min, valueProp);

  const handleChange =
    onChange &&
    ((event: Event | SyntheticEvent, value: number | number[], thumbIndex: number) => {
      // Redefine target to allow name and value to be read. This allows seamless integration with the most popular
      // form libraries. Clone the event to not override `target` of the original event.
      const nativeEvent = (event as SyntheticEvent).nativeEvent || event;
      // @ts-expect-error The nativeEvent is a function, not an object.
      const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);

      Object.defineProperty(clonedEvent, 'target', {
        writable: true,
        value: { value, name },
      });

      lastChangedValue.current = value;
      onChange(clonedEvent, value, thumbIndex);
    });

  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived as number];
  values = values.map((value) => (value === undefined || value === null ? min : clamp(value, min, max)));

  const marks =
    marksProp === true && step !== null
      ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({ value: min + step * index }))
      : marksProp || [];

  const marksValues = (marks as readonly SliderMark[]).map((mark) => mark.value);

  const [focusedThumbIndex, setFocusedThumbIndex] = useState(-1);

  const sliderRef = useRef<HTMLSpanElement>(null);
  const handleRef = useForkRef(ref, sliderRef);

  const createHandleHiddenInputFocus = (otherHandlers: EventHandlers) => (event: ReactFocusEvent) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));

    if (isFocusVisible(event.target)) {
      setFocusedThumbIndex(index);
    }

    setOpen(index);
    otherHandlers?.onFocus?.(event);
  };

  const createHandleHiddenInputBlur = (otherHandlers: EventHandlers) => (event: ReactFocusEvent) => {
    if (!isFocusVisible(event.target)) {
      setFocusedThumbIndex(-1);
    }

    setOpen(-1);
    otherHandlers?.onBlur?.(event);
  };

  const changeValue = (event: ReactKeyboardEvent | ChangeEvent, valueInput: number) => {
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);

    let newValue: number | number[] = valueInput;

    if (marks && step === null) {
      const maxMarksValue = marksValues[marksValues.length - 1];

      if (newValue >= maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue <= marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      // Bound the new value to the thumb's neighbors.
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({ values, newValue, index });

      let activeIndex = index;

      // Potentially swap the index if needed.
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }

      focusThumb({ sliderRef, activeIndex });
    }

    setValueState(newValue);
    setFocusedThumbIndex(index);

    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, lastChangedValue.current ?? newValue);
    }
  };

  const createHandleHiddenInputKeyDown =
    (otherHandlers: EventHandlers) => (event: ReactKeyboardEvent<HTMLInputElement>) => {
      if (
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'].includes(event.key)
      ) {
        event.preventDefault();

        const index = Number(event.currentTarget.getAttribute('data-index'));
        const value = values[index];

        let newValue: number | null = null;

        // Keys actions that change the value by more than the most granular `step` value are only applied if the step
        // is not `null`. When step is `null`, the `marks` prop is used instead to define valid values.
        if (step !== null) {
          const stepSize = event.shiftKey ? shiftStep : step;

          switch (event.key) {
            case 'ArrowUp':
              newValue = getNewValue(value, stepSize, 1, min, max);
              break;
            case 'ArrowRight':
              newValue = getNewValue(value, stepSize, 1, min, max);
              break;
            case 'ArrowDown':
              newValue = getNewValue(value, stepSize, -1, min, max);
              break;
            case 'ArrowLeft':
              newValue = getNewValue(value, stepSize, -1, min, max);
              break;
            case 'PageUp':
              newValue = getNewValue(value, shiftStep, 1, min, max);
              break;
            case 'PageDown':
              newValue = getNewValue(value, shiftStep, -1, min, max);
              break;
            case 'Home':
              newValue = min;
              break;
            case 'End':
              newValue = max;
              break;
            default:
              break;
          }
        } else if (marks) {
          const maxMarksValue = marksValues[marksValues.length - 1];
          const currentMarkIndex = marksValues.indexOf(value);

          const decrementKeys = ['ArrowLeft', 'ArrowDown', 'PageDown', 'Home'];
          const incrementKeys = ['ArrowRight', 'ArrowUp', 'PageUp', 'End'];

          if (decrementKeys.includes(event.key)) {
            newValue = currentMarkIndex === 0 ? marksValues[0] : marksValues[currentMarkIndex - 1];
          } else if (incrementKeys.includes(event.key)) {
            newValue = currentMarkIndex === marksValues.length - 1 ? maxMarksValue : marksValues[currentMarkIndex + 1];
          }
        }

        if (newValue !== null) {
          changeValue(event, newValue);
        }
      }

      otherHandlers?.onKeyDown?.(event);
    };

  useEnhancedEffect(() => {
    if (disabled && sliderRef.current?.contains(document.activeElement)) {
      // This is necessary because Firefox and Safari will keep focus on a disabled element.
      (document.activeElement as HTMLElement | null)?.blur();
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }

  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }

  const createHandleHiddenInputChange = (otherHandlers: EventHandlers) => (event: ChangeEvent<HTMLInputElement>) => {
    otherHandlers.onChange?.(event);
    // This handles value change by pointer or touch events.
    changeValue(event, event.target.valueAsNumber);
  };

  const previousIndex = useRef<number | undefined>(undefined);

  const axis: SliderAxis = orientation;

  const getFingerNewValue = ({ finger, move = false }: { finger: { x: number; y: number }; move?: boolean }) => {
    const { current: slider } = sliderRef;
    const { width, height, bottom, left } = slider!.getBoundingClientRect();

    const percent = axis === 'vertical' ? (bottom - finger.y) / height : (finger.x - left) / width;

    let newValue: number | number[];
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex as number];
    }

    newValue = clamp(newValue, min, max);

    let activeIndex = 0;

    if (range) {
      activeIndex = move ? (previousIndex.current as number) : (findClosest(values, newValue) as number);

      // Bound the new value to the thumb's neighbors.
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }

      const previousValue = newValue;
      newValue = setValueIndex({ values, newValue, index: activeIndex });

      // Potentially swap the index if needed.
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }

    return { newValue, activeIndex };
  };

  const handleTouchMove = useEvent((nativeEvent: TouchEvent | MouseEvent) => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    moveCount.current += 1;

    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    if (nativeEvent.type === 'mousemove' && (nativeEvent as MouseEvent).buttons === 0) {
      // eslint-disable-next-line no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    const { newValue, activeIndex } = getFingerNewValue({ finger, move: true });

    focusThumb({ sliderRef, activeIndex, setActive });
    setValueState(newValue);

    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }

    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });

  const handleTouchEnd = useEvent((nativeEvent: TouchEvent | MouseEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);

    if (!finger) {
      return;
    }

    const { newValue } = getFingerNewValue({ finger, move: true });

    setActive(-1);

    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, lastChangedValue.current ?? newValue);
    }

    touchId.current = undefined;

    // eslint-disable-next-line no-use-before-define
    stopListening();
  });

  const handleTouchStart = useEvent((nativeEvent: TouchEvent) => {
    if (disabled) {
      return;
    }

    // If touch-action: none; is not supported we need to prevent the scroll manually.
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }

    const touch = nativeEvent.changedTouches[0];

    if (touch !== undefined) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    const finger = trackFinger(nativeEvent, touchId);

    if (finger !== false) {
      const { newValue, activeIndex } = getFingerNewValue({ finger });
      focusThumb({ sliderRef, activeIndex, setActive });

      setValueState(newValue);

      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }

    moveCount.current = 0;

    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove, { passive: true });
    doc.addEventListener('touchend', handleTouchEnd, { passive: true });
  });

  const stopListening = useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);

  useEffect(() => {
    const { current: slider } = sliderRef;
    slider!.addEventListener('touchstart', handleTouchStart, { passive: doesSupportTouchActionNone() });

    return () => {
      slider!.removeEventListener('touchstart', handleTouchStart);

      stopListening();
    };
  }, [stopListening, handleTouchStart]);

  useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);

  const createHandleMouseDown = (otherHandlers: EventHandlers) => (event: ReactMouseEvent<HTMLSpanElement>) => {
    otherHandlers.onMouseDown?.(event);

    if (disabled || event.defaultPrevented) {
      return;
    }

    // Only handle left clicks.
    if (event.button !== 0) {
      return;
    }

    // Avoid text selection.
    event.preventDefault();

    const finger = trackFinger(event, touchId);

    if (finger !== false) {
      const { newValue, activeIndex } = getFingerNewValue({ finger });
      focusThumb({ sliderRef, activeIndex, setActive });

      setValueState(newValue);

      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }

    moveCount.current = 0;

    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove, { passive: true });
    doc.addEventListener('mouseup', handleTouchEnd);
  };

  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  const getRootProps = <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps: ExternalProps = {} as ExternalProps
  ): UseSliderRootSlotProps<ExternalProps> => {
    const externalHandlers = extractEventHandlers(externalProps);

    return {
      ...externalProps,
      ref: handleRef,
      ...externalHandlers,
      onMouseDown: createHandleMouseDown(externalHandlers),
    };
  };

  const createHandleMouseOver = (otherHandlers: EventHandlers) => (event: ReactMouseEvent<HTMLSpanElement>) => {
    otherHandlers.onMouseOver?.(event);

    setOpen(Number(event.currentTarget.getAttribute('data-index')));
  };

  const createHandleMouseLeave = (otherHandlers: EventHandlers) => (event: ReactMouseEvent<HTMLSpanElement>) => {
    otherHandlers.onMouseLeave?.(event);

    setOpen(-1);
  };

  const getThumbProps = <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps: ExternalProps = {} as ExternalProps
  ): UseSliderThumbSlotProps<ExternalProps> => {
    const externalHandlers = extractEventHandlers(externalProps);

    return {
      ...externalProps,
      ...externalHandlers,
      onMouseOver: createHandleMouseOver(externalHandlers),
      onMouseLeave: createHandleMouseLeave(externalHandlers),
    };
  };

  const getThumbStyle = (index: number) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? 'none' : undefined,
    };
  };

  const cssWritingMode = orientation === 'vertical' ? 'vertical-lr' : undefined;

  const getHiddenInputProps = <ExternalProps extends Record<string, unknown> = Record<string, never>>(
    externalProps: ExternalProps = {} as ExternalProps
  ): UseSliderHiddenInputProps<ExternalProps> => {
    const externalHandlers = extractEventHandlers(externalProps);

    return {
      tabIndex,
      'aria-labelledby': ariaLabelledby,
      'aria-orientation': orientation,
      'aria-valuemax': scale(max),
      'aria-valuemin': scale(min),
      name,
      type: 'range',
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? 'any' : parameters.step ?? undefined,
      disabled,
      ...externalProps,
      ...externalHandlers,
      onChange: createHandleHiddenInputChange(externalHandlers),
      onFocus: createHandleHiddenInputFocus(externalHandlers),
      onBlur: createHandleHiddenInputBlur(externalHandlers),
      onKeyDown: createHandleHiddenInputKeyDown(externalHandlers),
      style: {
        ...visuallyHidden,
        // So that VoiceOver's focus indicator matches the thumb's dimensions.
        width: '100%',
        height: '100%',
        writingMode: cssWritingMode,
      },
    };
  };

  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    getThumbStyle,
    marks: marks as readonly SliderMark[],
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
  };
}
