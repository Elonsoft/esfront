import { Editor, Location } from 'slate';

import { increaseListItemDepth } from './increase-list-item-depth';

import { getSelectedListItems } from '../checks';

/**
 * Increases the nesting depth of every list item within the location, defaulting to the current
 * selection.
 *
 * Only the outermost list items of the location are moved: moving one already carries its nested
 * list along, so moving its descendants too would move the same content twice.
 *
 * @returns True, if the editor state has been changed.
 */
export const increaseDepth = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const listItems = getSelectedListItems(editor, at);

  if (!listItems.length) {
    return false;
  }

  let changed = false;

  editor.withoutNormalizing(() => {
    // Moving one list item shifts the paths of the ones after it, so each is tracked by a ref.
    const refs = listItems.map(([, path]) => editor.pathRef(path));

    for (const ref of refs) {
      if (ref.current && increaseListItemDepth(editor, ref.current)) {
        changed = true;
      }
    }

    refs.forEach((ref) => ref.unref());
  });

  return changed;
};
