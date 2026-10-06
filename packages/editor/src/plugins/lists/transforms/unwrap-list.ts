import { Editor, Location } from 'slate';

import { decreaseListItemDepth } from './decrease-list-item-depth';

import { getListItems } from '../checks';
import { MAX_LIST_ITERATIONS } from '../lists.constants';

/**
 * Lifts every list item within the location out of its list, turning its text into a default text
 * node.
 *
 * Pass a `Path` rather than a `Range` when passing `at` explicitly: the transform runs in several
 * passes, and a range captured beforehand goes stale as the document changes. With `at` omitted the
 * live selection is re-read on every pass.
 */
export const unwrapList = (editor: Editor, at?: Location) => {
  editor.withoutNormalizing(() => {
    for (let iteration = 0; iteration < MAX_LIST_ITERATIONS; iteration++) {
      const location = at ?? editor.selection;

      if (!location) {
        return;
      }

      const listItems = getListItems(editor, location);

      if (!listItems.length) {
        return;
      }

      // Deepest first: an item nested inside another has to come out before its ancestor does.
      const deepest = listItems.reduce((deepestSoFar, entry) => {
        return entry[1].length > deepestSoFar[1].length ? entry : deepestSoFar;
      });

      if (!decreaseListItemDepth(editor, deepest[1])) {
        return;
      }
    }
  });
};
