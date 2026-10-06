import { Editor, Location } from 'slate';

import { BaseEditor } from '../../plugins/base';
import { ListsEditor } from '../../plugins/lists';
import { setElementType } from '../../utils';

const isListType = (editor: Editor, type: string) => {
  if (!ListsEditor.isListsEnabled(editor)) {
    return false;
  }

  return type === ListsEditor.getOrderedListNodeType(editor) || type === ListsEditor.getUnorderedListNodeType(editor);
};

/**
 * Converts the blocks within the location to the given type, whichever side of the list divide the
 * two types are on.
 *
 * This is the "turn this block into that" primitive a block menu is built from. Lists are not a type
 * a block can simply be set to — they are a structure the block has to be wrapped in or lifted out
 * of — so the conversion routes through the lists transforms in both directions.
 *
 * Converting to or out of a list needs `withLists`: the lists schema is the only thing that knows
 * which types are lists. Without it every type is treated as a plain block type, so asking for a list
 * sets the type literally and leaves a list node holding text instead of list items.
 */
export const setBlock = (editor: Editor, type: string, at?: Location) => {
  const location = at ?? editor.selection;

  if (!location) {
    return;
  }

  editor.withoutNormalizing(() => {
    if (isListType(editor, type)) {
      if (ListsEditor.getSelectedLists(editor, location).length) {
        ListsEditor.setListType(editor, type, location);
      } else {
        ListsEditor.wrapInList(editor, type, location);
      }

      return;
    }

    if (ListsEditor.isListsEnabled(editor) && ListsEditor.getSelectedLists(editor, location).length) {
      // Out of the list first: that turns its items into default text nodes, which can then take the
      // requested type like any other block.
      ListsEditor.unwrapList(editor, at);
    }

    // Re-read the location: the unwrap above moved the blocks that are about to be converted.
    for (const [, path] of BaseEditor.getTextBlocks(editor, at ?? editor.selection)) {
      setElementType(editor, type, { at: path });
    }
  });
};
