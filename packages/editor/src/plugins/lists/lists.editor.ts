import { BaseSelection, Editor, Element, Node, NodeEntry, Path, Point, Range, Span, Transforms } from 'slate';

import { NESTED_LIST_PATH_INDEX, TEXT_PATH_INDEX } from './lists.constants';
import * as Registry from './lists.registry';

import { BaseEditor } from '..';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const ListsEditor = {
  // ListsEditor schema availability

  isListsEnabled: (editor: Editor) => {
    return Registry.has(editor);
  },
  getListsSchema: (editor: Editor) => {
    return Registry.has(editor) ? Registry.get(editor) : undefined;
  },

  // Schema proxies

  isOrderedListNode: (editor: Editor, node: Node) => {
    return schema(editor).isOrderedListNode(node);
  },
  isUnorderedListNode: (editor: Editor, node: Node) => {
    return schema(editor).isUnorderedListNode(node);
  },
  isListItemNode: (editor: Editor, node: Node) => {
    return schema(editor).isListItemNode(node);
  },
  isListItemTextNode: (editor: Editor, node: Node) => {
    return schema(editor).isListItemTextNode(node);
  },
  getOrderedListNodeType: (editor: Editor) => {
    return schema(editor).getOrderedListNodeType();
  },
  getUnorderedListNodeType: (editor: Editor) => {
    return schema(editor).getOrderedListNodeType();
  },
  getListItemNodeType: (editor: Editor) => {
    return schema(editor).getListItemNodeType();
  },
  getListItemTextNodeType: (editor: Editor) => {
    return schema(editor).getListItemTextNodeType();
  },
  createOrderedListNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createOrderedListNode(props);
  },
  createUnorderedListNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createUnorderedListNode(props);
  },
  createListItemNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createListItemNode(props);
  },
  createListItemTextNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createListItemTextNode(props);
  },

  // Checks & Getters

  isListNode: (editor: Editor, node: Node) => {
    return ListsEditor.isOrderedListNode(editor, node) || ListsEditor.isUnorderedListNode(editor, node);
  },
  getLists: (editor: Editor) => {
    const { selection } = editor;

    if (!selection) {
      return [];
    }

    return Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (node) => ListsEditor.isListNode(editor, node)
      })
    );
  },
  getListItems: (editor: Editor) => {
    const { selection } = editor;

    if (!selection) {
      return [];
    }

    return Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: schema(editor).isListItemNode
      })
    );
  },

  // Transformations

  /**
   * Collapses the current selection (by removing everything in it) and if the cursor
   * ends up in a "list-item" node, it will break that "list-item" into 2 nodes, splitting
   * the text at the cursor location.
   *
   * @returns True, if the editor state has been changed.
   */
  splitListItem: (editor: Editor, at: Location | null = editor.selection): boolean => {
    if (!at) {
      return false;
    }

    // If selection *is* expanded, we take the leading point. It should be safe,
    // because we're deleted everything within the range below, effectively collapsing it.
    const cursorPoint = BaseEditor.getCursorPosition(editor, Range.isRange(at) ? Range.start(at) : at);

    if (!cursorPoint) {
      return false;
    }

    if (Range.isRange(at) && Range.isExpanded(at)) {
      // Remove everything in selection (this will collapse the selection).
      Transforms.delete(editor);
    }

    const listItemsInSelection = ListsEditor.getListItems(editor);

    if (listItemsInSelection.length !== 1) {
      // Selection is collapsed, so there should be either 0 or 1 "list-item" in selection.
      // When no "list-items" are selected - there's no "list-item" to split.
      return false;
    }

    const [[listItemNode, listItemPath]] = listItemsInSelection;
    const listItemTextPath = [...listItemPath, TEXT_PATH_INDEX];
    const { isEnd, isStart } = BaseEditor.getCursorPositionInNode(editor, cursorPoint, listItemTextPath);

    if (isStart) {
      const newListItem = ListsEditor.createListItemNode(editor, {
        children: [ListsEditor.createListItemTextNode(editor)]
      });
      Transforms.insertNodes(editor, newListItem, { at: listItemPath });
      return true;
    }

    const newListItemPath = Path.next(listItemPath);
    const newListItemTextPath = Path.next(listItemTextPath);
    // listItemNode.children.length > 1
    const hasNestedList = Node.has(listItemNode, [NESTED_LIST_PATH_INDEX]);

    Editor.withoutNormalizing(editor, () => {
      if (isEnd) {
        const newListItem = ListsEditor.createListItemNode(editor, {
          children: [ListsEditor.createListItemTextNode(editor)]
        });
        Transforms.insertNodes(editor, newListItem, { at: newListItemPath });
        // Move the cursor to the new "list-item".
        Transforms.select(editor, newListItemPath);
      } else {
        // Split current "list-item-text" element into 2.
        Transforms.splitNodes(editor);

        // The current "list-item-text" has a parent "list-item", the new one needs its own.
        Transforms.wrapNodes(editor, ListsEditor.createListItemNode(editor), { at: newListItemTextPath });

        // Move the new "list-item" up to be a sibling of the original "list-item".
        Transforms.moveNodes(editor, {
          at: newListItemTextPath,
          to: newListItemPath
        });
      }

      // If there was a "list" in the "list-item" move it to the new "list-item".
      if (hasNestedList) {
        Transforms.moveNodes(editor, {
          at: Path.next(listItemTextPath),
          to: [...newListItemPath, NESTED_LIST_PATH_INDEX]
        });
      }
    });

    return true;
  }
};
