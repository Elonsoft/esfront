// Based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js

import { FocusEvent, MutableRefObject, RefCallback, useCallback, useRef } from 'react';

import { Timeout } from '../../utils';

let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;

const hadFocusVisibleRecentlyTimeout = new Timeout();

const INPUT_TYPES_WHITELIST: Record<string, boolean> = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true,
};

/**
 * Computes whether the given element should automatically trigger the focus visible state, i.e. whether it should
 * always match `:focus-visible` when focused.
 */
const focusTriggersKeyboardModality = (node: Element) => {
  const { type, tagName, readOnly } = node as HTMLInputElement;

  if (tagName === 'INPUT' && INPUT_TYPES_WHITELIST[type] && !readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !readOnly) {
    return true;
  }

  return (node as HTMLElement).isContentEditable;
};

/**
 * Keeps track of the keyboard modality state. If the most recent user interaction was via the keyboard, and the key
 * press did not include a meta, alt/option, or control key, then the modality is keyboard.
 */
const onKeyDown = (event: KeyboardEvent) => {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
};

/**
 * If at any point a user clicks with a pointing device, the modality moves away from keyboard. This avoids the
 * situation where a user presses a key on an already focused element, and then clicks on a different element.
 */
const onPointerDown = () => {
  hadKeyboardEvent = false;
};

function onVisibilityChange(this: Document) {
  // If the tab becomes active again, the browser handles calling focus on the element. If this tab change caused a
  // blur on an element with focus visible, re-apply the state when the user switches back to the tab.
  if (this.visibilityState === 'hidden' && hadFocusVisibleRecently) {
    hadKeyboardEvent = true;
  }
}

const prepare = (doc: Document) => {
  doc.addEventListener('keydown', onKeyDown, true);
  doc.addEventListener('mousedown', onPointerDown, true);
  doc.addEventListener('pointerdown', onPointerDown, true);
  doc.addEventListener('touchstart', onPointerDown, true);
  doc.addEventListener('visibilitychange', onVisibilityChange, true);
};

export const teardown = (doc: Document) => {
  doc.removeEventListener('keydown', onKeyDown, true);
  doc.removeEventListener('mousedown', onPointerDown, true);
  doc.removeEventListener('pointerdown', onPointerDown, true);
  doc.removeEventListener('touchstart', onPointerDown, true);
  doc.removeEventListener('visibilitychange', onVisibilityChange, true);
};

const isEventFocusVisible = (event: FocusEvent): boolean => {
  const { target } = event;

  try {
    return target.matches(':focus-visible');
  } catch {
    // Browsers not implementing `:focus-visible` throw a SyntaxError, fall back to our own heuristic for those.
  }

  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
};

export interface UseIsFocusVisibleResult {
  isFocusVisibleRef: MutableRefObject<boolean>;
  onBlur: (event: FocusEvent<any>) => boolean;
  onFocus: (event: FocusEvent<any>) => boolean;
  ref: RefCallback<Element>;
}

/**
 * Tracks whether an element is focused by the keyboard. The returned `onFocus` and `onBlur` handlers report whether
 * the focus visible state has changed, and `ref` must be attached to the element.
 */
export const useIsFocusVisible = (): UseIsFocusVisibleResult => {
  const ref = useCallback((node: Element | null) => {
    if (node !== null) {
      prepare(node.ownerDocument);
    }
  }, []);

  const isFocusVisibleRef = useRef(false);

  /** Should be called when a blur event is fired. */
  const onBlur = () => {
    // Checking against a potential state variable does not suffice if we focus and blur synchronously, React wouldn't
    // have time to trigger a re-render so the state would be stale.
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed rapidly by a visibility change. If we don't
      // see a visibility change within 100ms, it's probably a regular focus change.
      hadFocusVisibleRecently = true;

      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });

      isFocusVisibleRef.current = false;

      return true;
    }

    return false;
  };

  /** Should be called when a focus event is fired. */
  const onFocus = (event: FocusEvent) => {
    if (isEventFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  };

  return { isFocusVisibleRef, onBlur, onFocus, ref };
};
