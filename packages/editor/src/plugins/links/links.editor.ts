import { Editor, Element, Node, Point, Range, Transforms } from 'slate';

import * as Registry from './links.registry';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const LinksEditor = {
  // ListsEditor schema availability

  isLinksEnabled: (editor: Editor) => {
    return Registry.has(editor);
  },
  getLinksSchema: (editor: Editor) => {
    return Registry.has(editor) ? Registry.get(editor) : undefined;
  },

  // Schema proxies

  isLinkNode: (editor: Editor, node: Node) => {
    return schema(editor).isLinkNode(node);
  },
  createLinkNode: (editor: Editor, props?: Partial<Element>) => {
    return schema(editor).createLinkNode(props);
  },

  // Checks & Getters

  isLinkMatches: (editor: Editor, node: Node) => {
    return !Editor.isEditor(node) && Element.isElement(node) && LinksEditor.isLinkNode(editor, node);
  },
  getLink: (editor: Editor) => {
    const { selection } = editor;

    if (!selection) {
      return [];
    }

    const [matches] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (node) => LinksEditor.isLinkMatches(editor, node)
      })
    );

    return matches;
  },

  // Transformations

  insertLink: (editor: Editor, url: string) => {
    if (editor.selection) {
      LinksEditor.wrapLink(editor, url);
    }
  },
  insertLinkText: (editor: Editor, url: string, text: string) => {
    const link = LinksEditor.createLinkNode(editor, { children: [{ text }], url });
    Transforms.insertNodes(editor, link, { select: true });
  },
  wrapLink: (editor: Editor, url: string) => {
    if (LinksEditor.getLink(editor)[0]) {
      LinksEditor.unwrapLink(editor);
    }

    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);

    const link = LinksEditor.createLinkNode(editor, { children: isCollapsed ? [{ text: url }] : [], url });

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: 'end' });
    }
  },
  unwrapLink: (editor: Editor) => {
    const { selection: editorSelection } = editor;

    if (!editorSelection) {
      return;
    }

    if (Range.isCollapsed(editorSelection)) {
      Transforms.unwrapNodes(editor, {
        match: (node) => LinksEditor.isLinkMatches(editor, node)
      });

      return;
    }

    while (true) {
      const { selection: editorSelection } = editor;

      if (!editorSelection) {
        return;
      }

      const matches = Array.from(
        Editor.nodes(editor, {
          at: Editor.unhangRange(editor, editorSelection),
          match: (node) => LinksEditor.isLinkMatches(editor, node)
        })
      );

      const match = matches[0];

      if (!match) {
        break;
      }

      const selection = Range.isForward(editorSelection)
        ? editorSelection
        : { anchor: editorSelection.focus, focus: editorSelection.anchor };

      const range = { anchor: Editor.start(editor, match[1]), focus: Editor.end(editor, match[1]) };
      const intersection = Range.intersection(range, selection);

      if (intersection) {
        if (Point.equals(selection.focus, range.anchor) || Point.equals(selection.anchor, range.focus)) {
          break;
        }

        if (Range.equals(range, intersection)) {
          Transforms.unwrapNodes(editor, {
            at: range,
            match: (node) => LinksEditor.isLinkMatches(editor, node)
          });

          if (matches.length === 1) {
            break;
          }
        } else {
          // Разделение ссылки на части, если выделение находится внутри.
          if (!Point.equals(range.anchor, intersection.anchor)) {
            Transforms.splitNodes(editor, {
              at: { anchor: intersection.anchor, focus: intersection.anchor },
              match: (node) => LinksEditor.isLinkMatches(editor, node)
            });

            continue;
          }

          if (!Point.equals(range.focus, intersection.focus)) {
            Transforms.splitNodes(editor, {
              at: { anchor: intersection.focus, focus: intersection.focus },
              match: (node) => LinksEditor.isLinkMatches(editor, node)
            });

            continue;
          }
        }
      }
    }
  },
  setLinkUrl: (editor: Editor, url: string) => {
    const { selection } = editor;

    if (!selection) {
      return false;
    }

    Transforms.setNodes(
      editor,
      { url },
      {
        match: (node) => LinksEditor.isLinkMatches(editor, node)
      }
    );
  }
};
