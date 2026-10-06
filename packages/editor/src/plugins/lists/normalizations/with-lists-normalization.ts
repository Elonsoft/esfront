import { Editor } from 'slate';

import { normalizeListChildren } from './normalize-list-children';
import { normalizeListItemChildren } from './normalize-list-item-children';
import { normalizeListItemTextChildren } from './normalize-list-item-text-children';
import { normalizeOrphanListItem } from './normalize-orphan-list-item';
import { normalizeOrphanListItemText } from './normalize-orphan-list-item-text';
import { normalizeOrphanNestedList } from './normalize-orphan-nested-list';
import { normalizeSiblingLists } from './normalize-sibling-lists';

// Misplaced nodes are put back where they belong before the rules that inspect children run, so the
// latter do not act on a structure that is about to move anyway.
const NORMALIZATIONS = [
  normalizeOrphanListItem,
  normalizeOrphanListItemText,
  normalizeOrphanNestedList,
  normalizeListChildren,
  normalizeListItemChildren,
  normalizeListItemTextChildren,
  normalizeSiblingLists,
];

/**
 * Enforces the structure the lists transforms rely on: a list contains list items, a list item
 * contains its text and at most one nested list, and none of the three appears outside its parent.
 *
 * Each rule performs one change and returns, letting slate re-normalize, which is how a badly
 * nested subtree is recovered over several passes rather than in one go.
 */
export const withListsNormalization = <T extends Editor>(editor: T) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry, options) => {
    for (const normalization of NORMALIZATIONS) {
      if (normalization(editor, entry)) {
        return;
      }
    }

    normalizeNode(entry, options);
  };

  return editor;
};
