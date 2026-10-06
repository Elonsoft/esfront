import { Editor, Element, Node, NodeEntry, Point, Range } from 'slate';

import * as Registry from './links.registry';
import type { LinkProps, LinksSchema } from './links.types';

// `unwrapLink` splits a link node whenever the selection covers part of it and restarts, so the
// loop below is bounded to keep a transform that fails to make progress from hanging the editor.
const MAX_UNWRAP_ITERATIONS = 1000;

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const LinksEditor = {
  // LinksEditor schema availability

  isLinksEnabled: (editor: Editor) => {
    return Registry.has(editor);
  },
  getLinksSchema: (editor: Editor): LinksSchema | undefined => {
    return Registry.has(editor) ? Registry.get(editor) : undefined;
  },

  // Schema proxies

  isLinkNode: (editor: Editor, node: Node) => {
    return schema(editor).isLinkNode(node);
  },
  createLinkNode: (editor: Editor, props?: Partial<Element & LinkProps>) => {
    return schema(editor).createLinkNode(props);
  },

  // Checks & Getters

  isLinkMatches: (editor: Editor, node: Node) => {
    return !Editor.isEditor(node) && Element.isElement(node) && LinksEditor.isLinkNode(editor, node);
  },

  /**
   * Returns the first link within the current selection, or `null` when there is none.
   */
  getLink: (editor: Editor): NodeEntry<Element> | null => {
    const { selection } = editor;

    if (!selection) {
      return null;
    }

    const [match] = Array.from(
      editor.nodes<Element>({
        at: Editor.unhangRange(editor, selection),
        match: (node) => {
          return LinksEditor.isLinkMatches(editor, node);
        },
      })
    );

    return match ?? null;
  },

  // Transformations

  insertLink: (editor: Editor, url: string) => {
    if (editor.selection) {
      LinksEditor.wrapLink(editor, url);
    }
  },
  insertLinkText: (editor: Editor, url: string, text: string) => {
    const link = LinksEditor.createLinkNode(editor, { children: [{ text }], url });
    editor.insertNodes(link, { select: true });
  },

  /**
   * Wraps the given range into a link node, defaulting to the current selection. A collapsed
   * selection gets a link whose text is the url itself.
   */
  wrapLink: (editor: Editor, url: string, at?: Range) => {
    if (at) {
      editor.wrapNodes(LinksEditor.createLinkNode(editor, { children: [], url }), { at, split: true });
      return;
    }

    if (LinksEditor.getLink(editor)) {
      LinksEditor.unwrapLink(editor);
    }

    const { selection } = editor;
    const isCollapsed = !!selection && Range.isCollapsed(selection);
    const link = LinksEditor.createLinkNode(editor, { children: isCollapsed ? [{ text: url }] : [], url });

    if (isCollapsed) {
      editor.insertNodes(link);
    } else {
      editor.wrapNodes(link, { split: true });
      editor.collapse({ edge: 'end' });
    }
  },
  unwrapLink: (editor: Editor) => {
    const { selection: initialSelection } = editor;

    if (!initialSelection) {
      return;
    }

    if (Range.isCollapsed(initialSelection)) {
      editor.unwrapNodes({
        match: (node) => {
          return LinksEditor.isLinkMatches(editor, node);
        },
      });

      return;
    }

    for (let iteration = 0; iteration < MAX_UNWRAP_ITERATIONS; iteration++) {
      const { selection: editorSelection } = editor;

      if (!editorSelection) {
        return;
      }

      const matches = Array.from(
        editor.nodes({
          at: Editor.unhangRange(editor, editorSelection),
          match: (node) => {
            return LinksEditor.isLinkMatches(editor, node);
          },
        })
      );

      const match = matches[0];

      if (!match) {
        return;
      }

      const selection = Range.isForward(editorSelection)
        ? editorSelection
        : { anchor: editorSelection.focus, focus: editorSelection.anchor };

      const range = { anchor: Editor.start(editor, match[1]), focus: Editor.end(editor, match[1]) };
      const intersection = Range.intersection(range, selection);

      if (!intersection) {
        return;
      }

      if (Point.equals(selection.focus, range.anchor) || Point.equals(selection.anchor, range.focus)) {
        return;
      }

      if (Range.equals(range, intersection)) {
        editor.unwrapNodes({
          at: range,
          match: (node) => {
            return LinksEditor.isLinkMatches(editor, node);
          },
        });

        if (matches.length === 1) {
          return;
        }

        continue;
      }

      // The selection covers part of the link, so it is split and the loop retries on the part
      // that now lines up with the selection.
      if (!Point.equals(range.anchor, intersection.anchor)) {
        editor.splitNodes({
          at: { anchor: intersection.anchor, focus: intersection.anchor },
          match: (node) => {
            return LinksEditor.isLinkMatches(editor, node);
          },
        });

        continue;
      }

      if (!Point.equals(range.focus, intersection.focus)) {
        editor.splitNodes({
          at: { anchor: intersection.focus, focus: intersection.focus },
          match: (node) => {
            return LinksEditor.isLinkMatches(editor, node);
          },
        });

        continue;
      }

      // Neither branch above could make progress, so there is nothing left to unwrap.
      return;
    }
  },
  setLinkUrl: (editor: Editor, url: string) => {
    if (!editor.selection) {
      return;
    }

    editor.setNodes<Element & LinkProps>(
      { url },
      {
        match: (node) => {
          return LinksEditor.isLinkMatches(editor, node);
        },
      }
    );
  },
};
