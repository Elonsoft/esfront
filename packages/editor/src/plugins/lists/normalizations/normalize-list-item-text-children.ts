import { Editor, Element, Node, NodeEntry, Path } from 'slate';

import { isListItemTextNode, isListNode } from '../checks';
import { NESTED_LIST_PATH_INDEX } from '../lists.constants';

/**
 * A list item text holds text and inlines only, the same as any other text block.
 *
 * A list that ended up inside one is moved out to the nested list slot of the owning list item. Any
 * other block child is unwrapped, so that its content joins the text.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeListItemTextChildren = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListItemTextNode(editor, node)) {
    return false;
  }

  for (const [child, childPath] of Array.from(Node.children(editor, path))) {
    if (!Element.isElement(child) || editor.isInline(child)) {
      continue;
    }

    if (isListNode(editor, child)) {
      // The list belongs to the owning list item, as its nested list.
      editor.moveNodes({ at: childPath, to: [...Path.parent(path), NESTED_LIST_PATH_INDEX] });
      return true;
    }

    // Any other block is flattened into the text.
    editor.unwrapNodes({ at: childPath });

    return true;
  }

  return false;
};
