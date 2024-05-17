import { KeyboardEvent, KeyboardEventHandler } from 'react';

import { Editor, Element, Node, Transforms } from 'slate';

import { BaseEditor } from './base.editor';

export const onBaseKeyDown = (editor: Editor, func: KeyboardEventHandler<HTMLElement>) => {
  return (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        event.preventDefault();
        editor.insertText('\n');
        return;
      }

      if (editor.selection) {
        const descendant = Node.descendant(editor, editor.selection.anchor.path.slice(0, -1));

        if (Element.isElement(descendant)) {
          event.preventDefault();
          const leaf = Node.descendant(editor, editor.selection.anchor.path);

          if (leaf.text.length === editor.selection.anchor.offset) {
            Transforms.insertNodes(editor, BaseEditor.createDefaultTextNode(editor));
          } else {
            Transforms.splitNodes(editor);
            Transforms.setNodes(editor, { type: BaseEditor.getDefaultTextNodeType(editor) });
          }

          return;
        }
      }
    }

    func(event);
  };
};
