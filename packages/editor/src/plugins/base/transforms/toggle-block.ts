import { Editor, Location } from 'slate';

import { setElementType } from '../../../utils';
import { getDefaultTextNodeType, getTextBlocks, isBlockActive } from '../checks';

/**
 * Changes the type of every top level text block within the location to the given type, or back to
 * the default text node type when they already are of that type.
 */
export const toggleBlock = (editor: Editor, type: string, at: Location | null = editor.selection) => {
  const blocks = getTextBlocks(editor, at);

  if (!blocks.length) {
    return;
  }

  const nextType = isBlockActive(editor, type, at) ? getDefaultTextNodeType(editor) : type;

  editor.withoutNormalizing(() => {
    for (const [, path] of blocks) {
      setElementType(editor, nextType, { at: path });
    }
  });
};
