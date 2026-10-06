import { Editor, Element, Location, Range } from 'slate';

import { setElementType } from '../../../utils';
import {
  createListItemNode,
  createListNode,
  getListItemTextNodeType,
  isConvertibleToListTextNode,
  isListItemNode,
} from '../checks';
import { pickSubtreesRoots } from '../utils';

/**
 * Wraps the top level blocks within the location into a single list of the given type.
 *
 * Only blocks the schema reports as convertible through `isConvertibleToListTextNode` become list
 * items. Blocks nested inside another structure — a quote, a table cell — are left alone on purpose:
 * a list there would belong to that structure, not to the document.
 */
export const wrapInList = (editor: Editor, type: string, at: Location | null = editor.selection) => {
  if (!at) {
    return;
  }

  const candidates = pickSubtreesRoots(
    Array.from(
      editor.nodes<Element>({
        at: Range.isRange(at) ? Editor.unhangRange(editor, at) : at,
        match: (node, path) => {
          return path.length === 1 && isConvertibleToListTextNode(editor, node);
        },
      })
    )
  );

  if (!candidates.length) {
    return;
  }

  editor.withoutNormalizing(() => {
    // Wrapping a top level block keeps its index, so these paths stay valid throughout.
    for (const [, path] of candidates) {
      setElementType(editor, getListItemTextNodeType(editor), { at: path });
      editor.wrapNodes(createListItemNode(editor, { children: [] }), { at: path });
    }

    const [, firstPath] = candidates[0];
    const [, lastPath] = candidates[candidates.length - 1];

    editor.wrapNodes(createListNode(editor, type, { children: [] }), {
      at: { anchor: Editor.start(editor, firstPath), focus: Editor.end(editor, lastPath) },
      match: (node) => {
        return isListItemNode(editor, node);
      },
    });
  });
};
