import { Editor, Element, Location, Node, NodeEntry, Path, Point, Range, Span } from 'slate';

import * as Registry from './base.registry';
import type { BaseSchema } from './base.types';

import { isElementType, setElementType } from '../../utils';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const BaseEditor = {
  // BaseEditor schema availability

  isBaseEnabled: (editor: Editor) => {
    return Registry.has(editor);
  },
  getBaseSchema: (editor: Editor): BaseSchema | undefined => {
    return Registry.has(editor) ? Registry.get(editor) : undefined;
  },

  // Schema proxies

  isDefaultTextNode: (editor: Editor, node: Node) => {
    return schema(editor).isDefaultTextNode(node);
  },
  getDefaultTextNodeType: (editor: Editor) => {
    return schema(editor).getDefaultTextNodeType();
  },
  createDefaultTextNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createDefaultTextNode(props);
  },

  // Checks & Getters

  getCursorPosition: (editor: Editor, at: Range | Point | Span | Path | null): Point | null => {
    if (!at) {
      return null;
    }

    if (Range.isRange(at)) {
      return Range.isCollapsed(at) ? at.focus : null;
    }

    if (Span.isSpan(at)) {
      return Path.equals(at[0], at[1]) ? BaseEditor.getCursorPosition(editor, at[0]) : null;
    }

    if (Path.isPath(at)) {
      return Editor.point(editor, at, { edge: 'start' });
    }

    return at;
  },
  getCursorPositionInNode: (editor: Editor, cursorLocation: Point, nodePath: Path) => {
    const nodeStartPoint = Editor.start(editor, nodePath);
    const nodeEndPoint = Editor.end(editor, nodePath);
    const isStart = Point.equals(cursorLocation, nodeStartPoint);
    const isEnd = Point.equals(cursorLocation, nodeEndPoint);
    return { isEnd, isStart };
  },
  getNextSibling: (editor: Editor, path: Path): NodeEntry | null => {
    let nextSiblingPath: Path;

    try {
      nextSiblingPath = Path.next(path);
    } catch {
      // Unable to calculate `Path.next`, which means there is no next sibling.
      return null;
    }

    if (Node.has(editor, nextSiblingPath)) {
      return [Node.get(editor, nextSiblingPath), nextSiblingPath];
    }

    return null;
  },
  getPrevSibling: (editor: Editor, path: Path): NodeEntry | null => {
    let prevSiblingPath: Path;

    try {
      prevSiblingPath = Path.previous(path);
    } catch {
      // Unable to calculate `Path.previous`, which means there is no previous sibling.
      return null;
    }

    if (Node.has(editor, prevSiblingPath)) {
      return [Node.get(editor, prevSiblingPath), prevSiblingPath];
    }

    return null;
  },

  /**
   * Checks whether the node is a block that holds text directly, i.e. every child is either a
   * text node or an inline element. Containers such as lists and list items are not text blocks.
   */
  isTextBlock: (editor: Editor, node: Node): node is Element => {
    if (!Element.isElement(node) || editor.isInline(node) || editor.isVoid(node)) {
      return false;
    }

    return node.children.every((child) => {
      return !Element.isElement(child) || editor.isInline(child);
    });
  },

  /**
   * Returns the top level text blocks within the location, defaulting to the current selection.
   *
   * Nested text blocks, such as the text of a list item, are deliberately left out: changing
   * their type would break the structure the owning plugin expects.
   */
  getTextBlocks: (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
    if (!at) {
      return [];
    }

    return Array.from(
      editor.nodes<Element>({
        at: Range.isRange(at) ? Editor.unhangRange(editor, at) : at,
        match: (node, path) => {
          return path.length === 1 && BaseEditor.isTextBlock(editor, node);
        },
      })
    );
  },

  /**
   * Checks whether every top level text block within the location is of the given type.
   */
  isBlockActive: (editor: Editor, type: string, at: Location | null = editor.selection) => {
    const blocks = BaseEditor.getTextBlocks(editor, at);

    return (
      blocks.length > 0 &&
      blocks.every(([node]) => {
        return isElementType(node, type);
      })
    );
  },

  /**
   * Returns the value of the given mark on the text at the current selection, or `undefined` when
   * the mark is not applied.
   *
   * Marks take no location: slate resolves them against the selection alone.
   */
  getMarkValue: (editor: Editor, mark: string) => {
    // `Editor.marks(editor)`, not `editor.marks`: the latter is the stored set of marks waiting to be
    // applied to the next inserted text, which is null most of the time, while the former is the
    // marks the text at the selection actually carries.
    const marks = Editor.marks(editor);

    return marks ? (marks as Record<string, unknown>)[mark] : undefined;
  },

  /**
   * Checks whether the given mark is applied to the text at the current selection.
   *
   * A mark may hold a value rather than only be on or off — a color, for instance — in which case
   * pass the value to compare against. The default of `true` is what a plain on/off mark carries.
   */
  isMarkActive: (editor: Editor, mark: string, value: unknown = true) => {
    return BaseEditor.getMarkValue(editor, mark) === value;
  },

  // Transformations

  addNodeForEmptyEditor: (editor: Editor) => {
    if (Editor.last(editor, [])[1].length === 0) {
      editor.insertNodes(schema(editor).createDefaultTextNode());
    }
  },

  /**
   * Changes the type of every top level text block within the location to the given type, or back to
   * the default text node type when they already are of that type.
   */
  toggleBlock: (editor: Editor, type: string, at: Location | null = editor.selection) => {
    const blocks = BaseEditor.getTextBlocks(editor, at);

    if (!blocks.length) {
      return;
    }

    const nextType = BaseEditor.isBlockActive(editor, type, at) ? schema(editor).getDefaultTextNodeType() : type;

    editor.withoutNormalizing(() => {
      for (const [, path] of blocks) {
        setElementType(editor, nextType, { at: path });
      }
    });
  },

  /**
   * Applies the given mark to the text at the current selection.
   */
  setMark: (editor: Editor, mark: string, value: unknown = true) => {
    editor.addMark(mark, value);
  },

  /**
   * Removes the given mark from the text at the current selection.
   */
  removeMark: (editor: Editor, mark: string) => {
    editor.removeMark(mark);
  },

  /**
   * Applies the given mark to the text at the current selection, or removes it when that exact value
   * is already applied.
   *
   * Passing a value is how a mark that holds one — a color, for instance — is switched from one
   * value to another: only a second toggle of the same value clears it.
   */
  toggleMark: (editor: Editor, mark: string, value: unknown = true) => {
    if (BaseEditor.isMarkActive(editor, mark, value)) {
      BaseEditor.removeMark(editor, mark);
    } else {
      BaseEditor.setMark(editor, mark, value);
    }
  },
};
