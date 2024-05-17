import { Editor, Element } from 'slate';

import { getNodeId } from './utils';

export const withNodeId = (editor: Editor) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    if (operation.type === 'insert_node') {
      if (Element.isElement(operation.node) && !Editor.isInline(editor, operation.node)) {
        (operation.node as any).id = getNodeId();
      }

      return apply(operation);
    }

    if (operation.type === 'split_node' && (operation.properties as any)?.id) {
      (operation.properties as any).id = getNodeId();
      return apply(operation);
    }

    return apply(operation);
  };

  return editor;
};
