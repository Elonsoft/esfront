'use client';

import { KeyboardEventHandler, RefObject, useEffect } from 'react';

import { DateInputFormatter } from './DateInput.types';

import { DateInputSelection } from './useDateInputSelection';
import { DateInputState } from './useDateInputState';
import { isDigit } from './utils';

import { useEvent } from '../../hooks';

/** The keys the input acts on itself. Everything else is left to the browser and to the form around it. */
const CONSUMED_KEYS = new Set([
  '+',
  '-',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  'Delete',
  'Backspace',
]);

/** The step a key moves a value by, or `null` for a key that does not move it at all. */
const getKeyStep = (key: string, increment: number, incrementLeap: number) => {
  switch (key) {
    case 'ArrowUp':
    case '+':
      return increment;
    case 'ArrowDown':
    case '-':
      return -increment;
    case 'PageUp':
      return incrementLeap;
    case 'PageDown':
      return -incrementLeap;
    default:
      return null;
  }
};

export interface UseDateInputKeyboardParams {
  ref: RefObject<HTMLDivElement | null>;
  /** The registered formatters, by the token each one is written as. */
  registry: Map<string, DateInputFormatter>;
  state: DateInputState;
  selection: DateInputSelection;
  increment: number;
  incrementLeap: number;
  disabled: boolean;
  readOnly: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

/**
 * @internal
 * Turns the keys pressed on the input into edits of the date and moves of the selection. Nothing the browser would
 * write into the element is allowed through: the content is rendered from the state, and a node inserted by a key
 * press, a drop or a soft keyboard would leave it out of sync.
 */
export const useDateInputKeyboard = ({
  ref,
  registry,
  state,
  selection,
  increment,
  incrementLeap,
  disabled,
  readOnly,
  onKeyDown: onKeyDownProp,
}: UseDateInputKeyboardParams) => {
  const { values, context, setField, setDate, addDays, settle, clear } = state;
  const { getTokenElements, getAnchorElement, select, isAllSelected } = selection;

  /** The whole date is selected, so the key applies to all of it rather than to one of its parts. */
  const handleDateKey = (key: string) => {
    const step = getKeyStep(key, increment, incrementLeap);

    // With no single field to step, a step moves the date itself, by the day.
    if (step !== null) {
      addDays(step);
      return;
    }

    const tokenElements = getTokenElements();

    switch (key) {
      case 'ArrowLeft': {
        if (tokenElements.length) {
          select(tokenElements[0]);
        }

        return;
      }
      case 'ArrowRight': {
        if (tokenElements.length) {
          select(tokenElements[tokenElements.length - 1]);
        }

        return;
      }
      case 'Home': {
        setDate(context.minDate);
        return;
      }
      case 'End': {
        setDate(context.maxDate);
        return;
      }
      case 'Delete':
      case 'Backspace': {
        clear();
      }
    }
  };

  /** A single part of the date is selected, so the key applies to that field alone. */
  const handleFieldKey = (key: string, element: HTMLElement, formatter: DateInputFormatter) => {
    const field = formatter.field;
    const step = getKeyStep(key, increment, incrementLeap);

    // A step walks the field through its own range and leaves the selection where it is.
    if (step !== null) {
      const value = values[field];

      setField(field, step < 0 ? formatter.getPrev(value, -step, context) : formatter.getNext(value, step, context));
      select(element);

      return;
    }

    const tokenElements = getTokenElements();
    const index = tokenElements.indexOf(element);

    const getSibling = (offset: number) => {
      if (index === -1) {
        return null;
      }

      // The parts of a date form a loop: stepping past an end continues from the other one.
      return tokenElements[index + offset] ?? tokenElements[offset > 0 ? 0 : tokenElements.length - 1];
    };

    // The part the selection ends up on, which is this one unless the key moves away from it.
    let next: HTMLElement | null = element;

    switch (key) {
      case 'ArrowLeft': {
        next = getSibling(-1);
        break;
      }
      case 'ArrowRight': {
        next = getSibling(1);
        break;
      }
      case 'Delete': {
        setField(field, '');
        break;
      }
      case 'Backspace': {
        if (values[field]) {
          setField(field, values[field].substring(0, values[field].length - 1));
        } else {
          next = getSibling(-1);
        }

        break;
      }
      default: {
        const value = formatter.getValue(values[field], key, context);

        if (!value) {
          // TODO: Blinking?
          return;
        }

        setField(field, value.value);

        // A field that can still take another digit keeps the selection, and one that is complete hands it on to the
        // next field, which is how a whole date is typed in without ever moving the selection by hand. The last field
        // has nobody to hand it on to, and the date is finished anyway.
        if (!value.canGrow) {
          next = index === -1 ? null : tokenElements[index + 1] ?? null;
        }
      }
    }

    // A field is done being typed once the selection moves off it.
    if (next !== element) {
      settle();
    }

    if (next) {
      select(next);
    }
  };

  const handleKey = (key: string) => {
    if (disabled || !ref.current) {
      return;
    }

    // A read only field can still be walked through, but nothing in it changes.
    if (readOnly && key !== 'ArrowLeft' && key !== 'ArrowRight') {
      return;
    }

    const isDateSelected = isAllSelected();

    if (isDateSelected && !isDigit(key)) {
      handleDateKey(key);
      return;
    }

    // A digit typed while the whole date is selected starts at the first field instead of being dropped.
    const element = isDateSelected ? getTokenElements()[0] : getAnchorElement();
    const formatter = element?.dataset.token ? registry.get(element.dataset.token) : undefined;

    if (element && formatter) {
      handleFieldKey(key, element, formatter);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDownProp?.(e);

    if (e.defaultPrevented || e.key === 'Tab') {
      return;
    }

    // A soft keyboard reports no usable key. It arrives as `beforeinput` instead, which is only fired when the key
    // press is left alone.
    if (e.key === 'Unidentified' || e.keyCode === 229) {
      return;
    }

    // Shortcuts belong to the browser: copying the date or reloading the page is not the field's to swallow.
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    // So does every key the input does not act on: `Enter` still submits the form and `Escape` still closes what the
    // field is rendered in. What such a key would write into the element is stopped as an input instead.
    if (!CONSUMED_KEYS.has(e.key) && !isDigit(e.key)) {
      return;
    }

    e.preventDefault();

    handleKey(e.key);
  };

  // A single character is handled as a key press: on a phone this is the only report of typing there is.
  const onBeforeInput = useEvent((e: InputEvent) => {
    e.preventDefault();

    if (e.inputType === 'insertText' && e.data?.length === 1) {
      handleKey(e.data);
      return;
    }

    if (e.inputType === 'deleteContentBackward') {
      handleKey('Backspace');
      return;
    }

    if (e.inputType === 'deleteContentForward') {
      handleKey('Delete');
    }
  });

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('beforeinput', onBeforeInput);

    return () => {
      node.removeEventListener('beforeinput', onBeforeInput);
    };
  }, [onBeforeInput]);

  return { onKeyDown };
};
