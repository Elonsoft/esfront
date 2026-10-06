import { Editor, Location } from 'slate';

import { decreaseListItemDepth } from './decrease-list-item-depth';

import { getSelectedListItems } from '../checks';

/**
 * Decreases the nesting depth of every list item within the location, defaulting to the current
 * selection. List items of the outermost list are lifted out of the list entirely.
 *
 * Only the outermost list items of the location are moved, for the same reason as in
 * {@link increaseDepth}.
 *
 * @returns True, if the editor state has been changed.
 */
export const decreaseDepth = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const listItems = getSelectedListItems(editor, at);

  if (!listItems.length) {
    return false;
  }

  let changed = false;

  editor.withoutNormalizing(() => {
    const refs = listItems.map(([, path]) => editor.pathRef(path));

    for (const ref of refs) {
      if (ref.current && decreaseListItemDepth(editor, ref.current)) {
        changed = true;
      }
    }

    refs.forEach((ref) => ref.unref());
  });

  return changed;
};
