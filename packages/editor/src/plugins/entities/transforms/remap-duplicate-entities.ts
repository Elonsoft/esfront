import { Editor, Element, Node } from 'slate';

import { createNodeId } from '../../ids';
import { findEntityNode, getEntityId, getEntityStore, isEntityNode } from '../checks';
import type { EntityState } from '../entities.types';

// `entityId` is not declared on `Element`, so the copy is assembled through a generic cast rather than
// an object literal, which would be rejected for the property the base shape does not have.
const withEntityId = <T extends object>(node: T, entityId: string): T => {
  return { ...node, entityId } as T;
};

/**
 * Returns the state a copy of an entity starts from.
 *
 * A finished upload is kept as it is, so the copy shows the same file without uploading it again. One
 * still in flight cannot be shared — the copy is not the node that upload will report to — so it starts
 * over, which is also what gets it queued.
 */
const copyState = <TPayload>(state: EntityState<TPayload>): EntityState<TPayload> => {
  return state.status === 'done' ? { ...state } : { ...state, status: 'pending', progress: null, error: null };
};

/**
 * Gives every entity in the node a fresh id if the one it carries is already in the document.
 *
 * Duplicating a block deep clones it, and a copy of an entity node would otherwise carry the id of the
 * original: two nodes reading one store entry, where removing either aborts the upload the other is
 * waiting for. Copying within the editor and pasting back lands here too.
 *
 * An id that is *not* in the document is left alone, which is what keeps an undo from renaming the
 * entity of the node it restores.
 *
 * @returns The node, or a copy of it with the clashing ids replaced.
 */
export const remapDuplicateEntities = (editor: Editor, node: Node): Node => {
  if (!Element.isElement(node)) {
    return node;
  }

  let next = node;

  if (isEntityNode(editor, node)) {
    const entityId = getEntityId(node);

    if (entityId !== undefined && findEntityNode(editor, entityId)) {
      const store = getEntityStore<EntityState<unknown>>(editor);
      const state = store.get(entityId);
      const copyId = createNodeId();

      if (state) {
        store.set(copyId, copyState(state));
      }

      next = withEntityId(node, copyId);
    }
  }

  const children = next.children.map((child) => remapDuplicateEntities(editor, child));

  if (children.some((child, index) => child !== next.children[index])) {
    next = { ...next, children } as Element;
  }

  return next;
};
