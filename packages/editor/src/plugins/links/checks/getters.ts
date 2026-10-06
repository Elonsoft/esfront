import { Editor, Element, Node, NodeEntry } from 'slate';

import { isLinkNode } from './schema';

/**
 * Checks whether the node is a link, excluding the editor itself, which is the form a node query needs.
 */
export const isLinkMatches = (editor: Editor, node: Node) => {
  return !Editor.isEditor(node) && Element.isElement(node) && isLinkNode(editor, node);
};

/**
 * Returns the first link within the current selection, or `null` when there is none.
 */
export const getLink = (editor: Editor): NodeEntry<Element> | null => {
  const { selection } = editor;

  if (!selection) {
    return null;
  }

  const [match] = Array.from(
    editor.nodes<Element>({
      at: Editor.unhangRange(editor, selection),
      match: (node) => {
        return isLinkMatches(editor, node);
      },
    })
  );

  return match ?? null;
};
