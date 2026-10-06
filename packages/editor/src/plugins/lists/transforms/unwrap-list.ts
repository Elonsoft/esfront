import { Editor, Location } from 'slate';

import { decreaseListItemDepth } from './decrease-list-item-depth';

import { getListItems } from '../checks';
import { MAX_LIST_ITERATIONS } from '../lists.constants';

/**
 * Lifts every list item within the location out of its list, turning its text into a default text
 * node.
 *
 * The transform runs in several passes, lifting one item at a time, so the location it works from has
 * to survive the document changing underneath it. A location passed explicitly is tracked by a range
 * ref for that reason: a path would stay a valid path while no longer denoting the list it pointed at,
 * and a plain range would shift. With `at` omitted the live selection is read on every pass.
 */
export const unwrapList = (editor: Editor, at?: Location) => {
  editor.withoutNormalizing(() => {
    const ref = at ? editor.rangeRef(Editor.range(editor, at)) : null;

    try {
      for (let iteration = 0; iteration < MAX_LIST_ITERATIONS; iteration++) {
        const location = ref ? ref.current : editor.selection;

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
    } finally {
      ref?.unref();
    }
  });
};
