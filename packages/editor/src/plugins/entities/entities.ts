import { Editor } from 'slate';
import { DOMEditor } from 'slate-dom';

import { getEntityIdsIn } from './checks';
import * as Registry from './entities.registry';
import type { EntitiesOptions } from './entities.types';
import { abortEntityUpload, enqueueEntityUpload } from './entities.upload';
import { insertEntityNode, remapDuplicateEntities } from './transforms';

/**
 * Associates an {@link EntitiesSchema} and an {@link EntityStore} with the editor, marks the nodes the
 * schema reports as entity nodes void, and turns dropped or pasted files into entity nodes.
 *
 * An entity node holds nothing but a reference: its payload is uploaded separately and lives in the
 * store, keyed by the `entityId` the node carries. Neither the file being uploaded nor the progress of
 * the upload belongs in the document — one cannot be serialized, and the other would land in the undo
 * history and in whatever the document is saved as.
 *
 * Handling dropped files relies on `insertData`, so the plugin expects an editor that is attached to
 * the DOM. Unlike the other plugins it takes an options object rather than a bare schema, because it
 * needs the store alongside it.
 */
export const withEntities =
  <TPayload>(options: EntitiesOptions<TPayload>) =>
  <E extends Editor & Pick<DOMEditor, 'insertData'>>(editor: E) => {
    Registry.register(editor, options);

    const { apply, insertData, isVoid } = editor;

    editor.apply = (operation) => {
      // Before the node goes, so that a finished upload has nothing left to write to. A whole subtree
      // arrives as one operation, so a block holding entities is covered too.
      if (operation.type === 'remove_node') {
        for (const entityId of getEntityIdsIn(editor, operation.node)) {
          abortEntityUpload(editor, entityId);
        }
      }

      if (operation.type !== 'insert_node') {
        apply(operation);
        return;
      }

      // A copy would otherwise carry the id of the original, so clashing ids are replaced before the
      // node lands — and the ids to queue are then read off the node that actually went in.
      const node = remapDuplicateEntities(editor, operation.node);

      apply(node === operation.node ? operation : { ...operation, node });

      // After the insert, so the node is there to be found. This covers an undo putting one back as
      // well as the original insertion, which is why `insertEntityNode` queues nothing itself.
      for (const entityId of getEntityIdsIn(editor, node)) {
        enqueueEntityUpload(editor, entityId);
      }
    };

    // Voidness follows from the schema, so that the one declaration of what an entity node is governs
    // both what the plugin acts on and how slate treats it.
    editor.isVoid = (element) => options.schema.isEntityNode(element) || isVoid(element);

    editor.insertData = (data) => {
      const accept = options.accept ?? (() => true);
      const accepted = Array.from(data.files ?? []).filter(accept);

      if (accepted.length) {
        // The same paste usually also carries a markup fallback for the file, which would land in the
        // document alongside the node, so it is dropped rather than passed on.
        editor.withoutNormalizing(() => {
          for (const file of accepted) {
            insertEntityNode(editor, file);
          }
        });

        return;
      }

      insertData(data);
    };

    return editor;
  };
