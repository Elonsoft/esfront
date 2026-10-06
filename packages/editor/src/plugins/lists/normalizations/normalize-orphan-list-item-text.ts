import { Editor, Element, Node, NodeEntry, Path } from 'slate';

import { setElementType } from '../../../utils';
import { BaseEditor } from '../../base';
import { isListItemNode, isListItemTextNode } from '../checks';

/**
 * A list item text only ever lives inside a list item.
 *
 * One that ended up elsewhere becomes a default text node, which is what it is outside of a list.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeOrphanListItemText = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListItemTextNode(editor, node)) {
    return false;
  }

  if (path.length === 0) {
    return false;
  }

  const parent = Node.get(editor, Path.parent(path));

  if (Element.isElement(parent) && isListItemNode(editor, parent)) {
    return false;
  }

  setElementType(editor, BaseEditor.getDefaultTextNodeType(editor), { at: path });

  return true;
};
