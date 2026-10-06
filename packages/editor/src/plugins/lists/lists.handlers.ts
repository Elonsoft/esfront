import { KeyboardEvent, KeyboardEventHandler } from 'react';

import { Editor } from 'slate';

import { isAtEmptyListItem, isAtStartOfListItem, isDeleteBackwardAllowed, isInList, isListsEnabled } from './checks';
import { decreaseDepth, increaseDepth, splitListItem } from './transforms';

/**
 * Handles the keys a list claims:
 *
 * - `Tab` and `Shift+Tab` change the nesting depth of the selected list items.
 * - `Enter` splits the current list item, or lifts it out of the list when it is empty.
 * - `Backspace` at the start of a list item decreases its depth instead of merging it backwards,
 *   which would pull its text into the enclosing list.
 */
export const onListsKeyDown = (editor: Editor, next: KeyboardEventHandler<HTMLElement>) => {
  return (event: KeyboardEvent<HTMLElement>) => {
    // Every check below reaches for the lists schema, which throws when the plugin is not registered.
    // The handler composes into a chain, so an editor without lists has to fall through rather than
    // take the whole chain down with it.
    if (!isListsEnabled(editor) || !editor.selection || !isInList(editor)) {
      next(event);
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();

      if (event.shiftKey) {
        decreaseDepth(editor);
      } else {
        increaseDepth(editor);
      }

      return;
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (isAtEmptyListItem(editor)) {
        decreaseDepth(editor);
      } else {
        splitListItem(editor);
      }

      return;
    }

    if (event.key === 'Backspace' && !isDeleteBackwardAllowed(editor)) {
      event.preventDefault();

      // At the start of a list item there is nothing to delete that would not break the structure,
      // so the key outdents instead, which is what it does in every other editor.
      if (isAtStartOfListItem(editor)) {
        decreaseDepth(editor);
      }

      return;
    }

    next(event);
  };
};
