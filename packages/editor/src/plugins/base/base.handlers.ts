import { KeyboardEvent, KeyboardEventHandler } from 'react';

import { Editor, Element, Path, Range } from 'slate';

import { createDefaultTextNode, getDefaultTextNodeType, isTextBlock } from './checks';

import { setElementType } from '../../utils';

/**
 * Handles `Enter` within a text block: `Shift+Enter` inserts a soft break, `Enter` starts a new
 * default text node, so that pressing it at the end of a heading does not produce another heading.
 */
export const onBaseKeyDown = (editor: Editor, next: KeyboardEventHandler<HTMLElement>) => {
  return (event: KeyboardEvent<HTMLElement>) => {
    const { selection } = editor;

    if (event.key === 'Enter' && selection && Range.isCollapsed(selection)) {
      if (event.shiftKey) {
        event.preventDefault();
        editor.insertText('\n');
        return;
      }

      const block = editor.above<Element>({
        match: (node) => {
          return isTextBlock(editor, node);
        },
      });

      if (block) {
        const [, blockPath] = block;

        event.preventDefault();

        if (Editor.isEnd(editor, selection.anchor, blockPath)) {
          editor.insertNodes(createDefaultTextNode(editor));
        } else {
          editor.splitNodes({
            at: selection.anchor,
            match: (node) => {
              return isTextBlock(editor, node);
            },
          });

          setElementType(editor, getDefaultTextNodeType(editor), { at: Path.next(blockPath) });
        }

        return;
      }
    }

    next(event);
  };
};
