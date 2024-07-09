'use client';

import { RefObject, useState } from 'react';

export interface UseDateInputSelectionParams {
  ref: RefObject<HTMLDivElement | null>;
}

/** The part of the date the selection of the document sits on. */
export interface DateInputSelection {
  /** The id of the selected part, or `null` when the selection is not on one. */
  activeId: string | null;
  /** The parts of the date that can be edited, in the order they are written in. */
  getTokenElements: () => HTMLElement[];
  /** The part of the date the selection sits in, or the one a pointer landed on. */
  getAnchorElement: (target?: HTMLElement) => HTMLElement | null;
  select: (element: HTMLElement) => void;
  /** Selects the whole of the date, which is the state a just focused field is in. */
  selectAll: () => void;
  clear: () => void;
  /** Whether the selection covers the whole of the date rather than one of its parts. */
  isAllSelected: () => boolean;
}

/**
 * @internal
 * Moves the selection of the document from one part of the date to another. A `contenteditable` element has no notion
 * of a selected field, so the field the caret sits in is the one the whole selection is put on.
 */
export const useDateInputSelection = ({ ref }: UseDateInputSelectionParams): DateInputSelection => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const getTokenElements = () => {
    return Array.from(ref.current?.querySelectorAll('span[data-token]') ?? []) as HTMLElement[];
  };

  const getAnchorElement = (target?: HTMLElement): HTMLElement | null => {
    const selection = window.getSelection();

    if (!ref.current || !selection) {
      return null;
    }

    let node = target || (selection.anchorNode as HTMLElement | null | undefined);

    if (!ref.current.contains(node || null)) {
      return null;
    }

    // TEXT_NODE
    if (node?.nodeType === 3) {
      node = node.parentElement;
    }

    const element = node?.closest('span[data-node]');

    if (!element) {
      return null;
    }

    if (element instanceof HTMLElement && element.dataset.token) {
      return element;
    }

    // A part that is only written out has nothing to edit, so the nearer of the two parts around it takes the caret.
    const isNearStart = selection.anchorOffset < (selection.anchorNode?.textContent?.length || 0) / 2;

    return (isNearStart ? element.previousElementSibling : element.nextElementSibling) as HTMLElement | null;
  };

  const select = (element: HTMLElement) => {
    // The element is the one this render is about to replace, so the move waits for the frame the new content is
    // painted in, and then a tick more: a range set in the same task as the content is dropped along with its node.
    requestAnimationFrame(() => {
      const selection = window.getSelection();

      if (!ref.current || !selection) {
        return;
      }

      setActiveId(element.dataset.token ? element.id : null);

      setTimeout(() => {
        const range = document.createRange();
        range.selectNodeContents(element);

        selection.removeAllRanges();
        selection.addRange(range);
      }, 1);
    });
  };

  const selectAll = () => {
    if (ref.current) {
      select(ref.current);
    }
  };

  const clear = () => {
    setActiveId(null);

    requestAnimationFrame(() => {
      const selection = window.getSelection();

      if (ref.current && selection && ref.current.contains(selection.anchorNode)) {
        selection.removeAllRanges();
      }
    });
  };

  const isAllSelected = () => {
    return ref.current === window.getSelection()?.anchorNode;
  };

  return { activeId, getTokenElements, getAnchorElement, select, selectAll, clear, isAllSelected };
};
