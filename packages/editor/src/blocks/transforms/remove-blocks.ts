import { Editor, Location } from 'slate';

import { BaseEditor } from '../../plugins/base';
import { getBlocks } from '../checks';

/**
 * Removes the blocks within the location, defaulting to the current selection.
 *
 * A document always needs at least one block to put the caret in, so an empty editor gets a default
 * text node back.
 *
 * @returns True, if the editor state has been changed.
 */
export const removeBlocks = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const blocks = getBlocks(editor, at);

  if (!blocks.length) {
    return false;
  }

  editor.withoutNormalizing(() => {
    const refs = blocks.map(([, path]) => editor.pathRef(path));

    for (const ref of refs) {
      if (ref.current) {
        editor.removeNodes({ at: ref.current });
      }
    }

    refs.forEach((ref) => ref.unref());

    BaseEditor.addNodeForEmptyEditor(editor);
  });

  return true;
};
