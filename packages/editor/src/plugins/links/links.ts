import { LinksSchema } from './links.types';

import { Editor, Element, Node, Transforms } from 'slate';

import { LinksEditor } from './links.editor';
import * as Registry from './links.registry';
import { isValidHttpUrl } from './utils';

import { BaseEditor } from '../base';

export const withLinks = (schema: LinksSchema) => (editor: Editor) => {
  Registry.register(editor, schema);

  const { insertData, insertText, isInline, normalizeNode } = editor;

  editor.isInline = (element) => schema.isLinkNode(element) || isInline(element);

  editor.insertText = (text) => {
    if (text && isValidHttpUrl(text)) {
      LinksEditor.wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData('text/plain');

    if (text && isValidHttpUrl(text)) {
      LinksEditor.wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (Element.isElement(node) && BaseEditor.isDefaultTextNode(editor, node)) {
      const children = Array.from(Node.children(editor, path));

      for (const [child, childPath] of children) {
        // Remove link nodes whose text value is empty string.
        // Empty text links happen when you move from link to next line or delete link line.
        if (Element.isElement(child) && schema.isLinkNode(child) && child.children[0].text === '') {
          if (children.length === 1) {
            Transforms.removeNodes(editor, { at: path });
            Transforms.insertNodes(editor, BaseEditor.createDefaultTextNode(editor));
          } else {
            Transforms.removeNodes(editor, { at: childPath });
          }

          return;
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
};
