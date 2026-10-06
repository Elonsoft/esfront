import { Editor, Element, Node, NodeEntry, Path } from 'slate';

import { isListItemNode, isListNode } from '../checks';

/**
 * A list item only ever lives inside a list.
 *
 * One that ended up elsewhere — typically after a paste — is unwrapped, leaving its text behind for
 * {@link normalizeOrphanListItemText} to turn back into a plain text block.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeOrphanListItem = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListItemNode(editor, node)) {
    return false;
  }

  if (path.length === 0) {
    return false;
  }

  const parent = Node.get(editor, Path.parent(path));

  if (Element.isElement(parent) && isListNode(editor, parent)) {
    return false;
  }

  editor.unwrapNodes({ at: path });

  return true;
};
