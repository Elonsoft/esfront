import { Editor, Element, Node, NodeEntry } from 'slate';

import { setElementType } from '../../../utils';
import { BaseEditor } from '../../base';
import { createListItemNode, getListItemTextNodeType, isListItemNode, isListNode } from '../checks';
import { moveListToListItem } from '../transforms';

/**
 * A list may only contain list items.
 *
 * An empty list is removed. A child that is itself a list becomes the nested list of the previous
 * list item. Anything else is wrapped in a list item.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeListChildren = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListNode(editor, node)) {
    return false;
  }

  if (node.children.length === 0) {
    editor.removeNodes({ at: path });
    return true;
  }

  for (const [child, childPath] of Array.from(Node.children(editor, path))) {
    if (isListItemNode(editor, child)) {
      continue;
    }

    if (Element.isElement(child) && isListNode(editor, child)) {
      const previous = BaseEditor.getPrevSibling(editor, childPath);

      if (previous && isListItemNode(editor, previous[0])) {
        moveListToListItem(editor, { at: childPath, to: previous[1] });
        return true;
      }
    }

    // Anything else becomes the text of a new list item.
    editor.withoutNormalizing(() => {
      if (Element.isElement(child)) {
        setElementType(editor, getListItemTextNodeType(editor), { at: childPath });
      }

      editor.wrapNodes(createListItemNode(editor, { children: [] }), { at: childPath });
    });

    return true;
  }

  return false;
};
