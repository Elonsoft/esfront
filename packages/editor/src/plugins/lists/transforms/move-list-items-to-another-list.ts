import { Editor, Element, Node, Path } from 'slate';

import { isListNode } from '../checks';

/**
 * Moves every list item of the list at `at` to the end of the list at `to`.
 *
 * The source list is left in place and ends up empty; `withListsNormalization` removes it on the
 * next pass. Callers that need it gone immediately should remove it themselves.
 */
export const moveListItemsToAnotherList = (editor: Editor, { at, to }: { at: Path; to: Path }) => {
  if (Path.equals(at, to) || Path.isAncestor(at, to)) {
    return;
  }

  const source = Node.get(editor, at);
  const target = Node.get(editor, to);

  if (!Element.isElement(source) || !isListNode(editor, source)) {
    return;
  }

  if (!Element.isElement(target) || !isListNode(editor, target)) {
    return;
  }

  const count = source.children.length;

  editor.withoutNormalizing(() => {
    // The two lists may be siblings in either order, so moving items out of one can shift the path
    // of the other. The refs follow both.
    const sourceRef = editor.pathRef(at);
    const targetRef = editor.pathRef(to);

    for (let moved = 0; moved < count; moved++) {
      const sourcePath = sourceRef.current;
      const targetPath = targetRef.current;

      if (!sourcePath || !targetPath) {
        break;
      }

      const targetNode = Node.get(editor, targetPath);

      if (!Element.isElement(targetNode)) {
        break;
      }

      editor.moveNodes({ at: [...sourcePath, 0], to: [...targetPath, targetNode.children.length] });
    }

    sourceRef.unref();
    targetRef.unref();
  });
};
