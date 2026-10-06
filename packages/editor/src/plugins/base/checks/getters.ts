import { Editor, Element, Location, Node, NodeEntry, Path, Point, Range, Span } from 'slate';

import { isElementType, normalizeLocation } from '../../../utils';

/**
 * Reduces a location to the single point a cursor sits at, or `null` when it denotes no single point.
 *
 * An expanded range has no cursor position; a path resolves to its start.
 */
export const getCursorPosition = (editor: Editor, at: Range | Point | Span | Path | null): Point | null => {
  if (!at) {
    return null;
  }

  if (Range.isRange(at)) {
    return Range.isCollapsed(at) ? at.focus : null;
  }

  if (Span.isSpan(at)) {
    return Path.equals(at[0], at[1]) ? getCursorPosition(editor, at[0]) : null;
  }

  if (Path.isPath(at)) {
    return Editor.point(editor, at, { edge: 'start' });
  }

  return at;
};

/**
 * Reports whether the given point sits at the start or at the end of the node at the given path.
 */
export const getCursorPositionInNode = (editor: Editor, cursorLocation: Point, nodePath: Path) => {
  const nodeStartPoint = Editor.start(editor, nodePath);
  const nodeEndPoint = Editor.end(editor, nodePath);
  const isStart = Point.equals(cursorLocation, nodeStartPoint);
  const isEnd = Point.equals(cursorLocation, nodeEndPoint);
  return { isEnd, isStart };
};

/**
 * Returns the node right after the given path under the same parent, or `null` when there is none.
 */
export const getNextSibling = (editor: Editor, path: Path): NodeEntry | null => {
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
};

/**
 * Returns the node right before the given path under the same parent, or `null` when there is none.
 */
export const getPrevSibling = (editor: Editor, path: Path): NodeEntry | null => {
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
};

/**
 * Checks whether the node is a block that holds text directly, i.e. every child is either a
 * text node or an inline element. Containers such as lists and list items are not text blocks.
 */
export const isTextBlock = (editor: Editor, node: Node): node is Element => {
  if (!Element.isElement(node) || editor.isInline(node) || editor.isVoid(node)) {
    return false;
  }

  return node.children.every((child) => {
    return !Element.isElement(child) || editor.isInline(child);
  });
};

/**
 * Returns the top level text blocks within the location, defaulting to the current selection.
 *
 * Nested text blocks, such as the text of a list item, are deliberately left out: changing
 * their type would break the structure the owning plugin expects.
 */
export const getTextBlocks = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  if (!at) {
    return [];
  }

  return Array.from(
    editor.nodes<Element>({
      at: normalizeLocation(editor, at),
      match: (node, path) => {
        return path.length === 1 && isTextBlock(editor, node);
      },
    })
  );
};

/**
 * Checks whether every top level text block within the location is of the given type.
 */
export const isBlockActive = (editor: Editor, type: string, at: Location | null = editor.selection) => {
  const blocks = getTextBlocks(editor, at);

  return (
    blocks.length > 0 &&
    blocks.every(([node]) => {
      return isElementType(node, type);
    })
  );
};

/**
 * Returns the value of the given mark on the text at the current selection, or `undefined` when
 * the mark is not applied.
 *
 * Marks take no location: slate resolves them against the selection alone.
 */
export const getMarkValue = (editor: Editor, mark: string) => {
  // `Editor.marks(editor)`, not `editor.marks`: the latter is the stored set of marks waiting to be
  // applied to the next inserted text, which is null most of the time, while the former is the
  // marks the text at the selection actually carries.
  const marks = Editor.marks(editor);

  return marks ? (marks as Record<string, unknown>)[mark] : undefined;
};

/**
 * Checks whether the given mark is applied to the text at the current selection.
 *
 * A mark may hold a value rather than only be on or off — a color, for instance — in which case
 * pass the value to compare against. The default of `true` is what a plain on/off mark carries.
 */
export const isMarkActive = (editor: Editor, mark: string, value: unknown = true) => {
  return getMarkValue(editor, mark) === value;
};
