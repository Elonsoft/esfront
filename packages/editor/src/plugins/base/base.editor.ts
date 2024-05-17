import { Editor, Element, Node, NodeEntry, Path, Point, Range, Span, Transforms } from 'slate';

import * as Registry from './base.registry';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const BaseEditor = {
  // BaseEditor schema availability

  isBaseEnabled: (editor: Editor) => {
    return Registry.has(editor);
  },
  getBaseSchema: (editor: Editor) => {
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
    } catch (error) {
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
    } catch (error) {
      // Unable to calculate `Path.prev`, which means there is no next sibling.
      return null;
    }

    if (Node.has(editor, prevSiblingPath)) {
      return [Node.get(editor, prevSiblingPath), prevSiblingPath];
    }

    return null;
  },

  // Transformations

  addNodeForEmptyEditor: (editor: Editor) => {
    if (Editor.last(editor, [])[1].length === 0) {
      Transforms.insertNodes(editor, schema(editor).createDefaultTextNode());
    }
  }
};
