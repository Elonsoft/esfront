import { Editor, Element, Node, Text } from 'slate';
import { DOMEditor } from 'slate-dom';

import * as Registry from './links.registry';
import type { LinksSchema } from './links.types';
import { wrapLink } from './transforms';
import { isValidHttpUrl, linkifyBeforeCursor } from './utils';

import { BaseEditor } from '../base';

/**
 * Links are inlines, and pasting one relies on `insertData`, so the plugin expects an editor that
 * is attached to the DOM.
 */
export const withLinks =
  (schema: LinksSchema) =>
  <T extends Editor & Pick<DOMEditor, 'insertData'>>(editor: T) => {
    Registry.register(editor, schema);

    const { insertData, insertText, isInline, normalizeNode } = editor;

    editor.isInline = (element) => schema.isLinkNode(element) || isInline(element);

    editor.insertText = (text, options) => {
      insertText(text, options);

      if (/\s/.test(text)) {
        linkifyBeforeCursor(editor);
      }
    };

    editor.insertData = (data) => {
      const text = data.getData('text/plain');

      if (text && isValidHttpUrl(text)) {
        wrapLink(editor, text);
        return;
      }

      insertData(data);
    };

    editor.normalizeNode = (entry, options) => {
      const [node, path] = entry;

      if (Element.isElement(node) && BaseEditor.isDefaultTextNode(editor, node)) {
        const children = Array.from(Node.children(editor, path));

        for (const [child, childPath] of children) {
          if (!Element.isElement(child) || !schema.isLinkNode(child)) {
            continue;
          }

          const [first] = child.children;

          // Remove link nodes whose text value is an empty string. Empty text links happen when you
          // move from a link to the next line or delete a link line.
          if (Text.isText(first) && first.text === '') {
            if (children.length === 1) {
              editor.removeNodes({ at: path });
              editor.insertNodes(BaseEditor.createDefaultTextNode(editor));
            } else {
              editor.removeNodes({ at: childPath });
            }

            return;
          }
        }
      }

      normalizeNode(entry, options);
    };

    return editor;
  };
