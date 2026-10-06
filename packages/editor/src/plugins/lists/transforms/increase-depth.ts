import { Editor, Location } from 'slate';

import { increaseListItemDepth } from './increase-list-item-depth';

import { forEachPath } from '../../../utils';
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
    forEachPath(editor, listItems, (path) => {
      changed = increaseListItemDepth(editor, path) || changed;
    });
  });

  return changed;
};
