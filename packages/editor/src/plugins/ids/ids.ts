import { Editor, Element } from 'slate';

import { createNodeId } from './utils';

// `Element` carries no `id` in its base shape, so the property is attached through a cast. An
// application that wants to read the id declares it on its own element types.
const withId = <T extends object>(node: T, id: string) => {
  return { ...node, id } as T;
};

/**
 * Assigns a UUID to every block element inserted into the editor.
 *
 * The ids are part of the document and outlive the session that created them, which is why they are
 * random rather than sequential: a counter would restart on every load and reissue ids that nodes in
 * the saved document already carry.
 */
export const withNodeId = <T extends Editor>(editor: T) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    if (operation.type === 'insert_node' && Element.isElement(operation.node) && !editor.isInline(operation.node)) {
      apply({ ...operation, node: withId(operation.node, createNodeId()) });
      return;
    }

    // A split produces a second node that would otherwise carry the id of the first one.
    if (operation.type === 'split_node' && 'id' in operation.properties) {
      apply({ ...operation, properties: withId(operation.properties, createNodeId()) });
      return;
    }

    apply(operation);
  };

  return editor;
};
