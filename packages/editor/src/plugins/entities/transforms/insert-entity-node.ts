import { Editor, Location, Path } from 'slate';

import { createNodeId } from '../../ids';
import { createEntityNode, getEntityStore } from '../checks';

/**
 * Returns the slot after the top level block the caret sits in, which is where a file dropped onto a
 * paragraph belongs.
 *
 * Not `BlocksEditor.getPositionAfterBlocks`, which would have a plugin depend on the layer above it.
 */
const getInsertPosition = (editor: Editor): Path | undefined => {
  const { selection } = editor;

  return selection ? Path.next([selection.anchor.path[0]]) : undefined;
};

/**
 * Inserts a node for the given file and seeds the state its upload will report into.
 *
 * The id tying the two together is minted here rather than by the caller, because a node whose id the
 * store does not know — or the reverse — is the one way this indirection goes wrong.
 *
 * @returns The entity id, or `null` when there was nowhere to insert.
 */
export const insertEntityNode = (editor: Editor, file: File, at?: Location): string | null => {
  const target = at ?? getInsertPosition(editor);

  if (!target) {
    return null;
  }

  const entityId = createNodeId();
  const store = getEntityStore(editor);

  store.set(entityId, { file, status: 'pending', progress: null, error: null, payload: null });

  editor.insertNodes(createEntityNode(editor, entityId), { at: target, select: true });

  return entityId;
};
