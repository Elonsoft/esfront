import { Editor, Element, Location, Node, NodeEntry } from 'slate';

import { getEntityStore, isEntityNode } from './schema';

import { normalizeLocation } from '../../../utils';
import type { EntityState } from '../entities.types';

/**
 * Returns the id of the entity the node carries, or `undefined` when it carries none.
 *
 * Read through this helper rather than off the node, so that an application does not have to declare
 * `entityId` on element types it never inspects itself.
 */
export const getEntityId = (node: Node): string | undefined => {
  const { entityId } = node as Node & Record<'entityId', unknown>;

  return typeof entityId === 'string' ? entityId : undefined;
};

/**
 * Returns the entity ids carried by the node and everything inside it.
 *
 * Operations arrive as whole subtrees, so a block holding entities reaches the plugin as one node
 * rather than one per entity.
 */
export const getEntityIdsIn = (editor: Editor, node: Node): string[] => {
  const ids: string[] = [];

  // Includes the node itself when it is an element, and yields nothing at all for a text node.
  for (const [element] of Node.elements(node)) {
    if (!isEntityNode(editor, element)) {
      continue;
    }

    const entityId = getEntityId(element);

    if (entityId !== undefined) {
      ids.push(entityId);
    }
  }

  return ids;
};

/**
 * Returns every entity node within the location, defaulting to the whole document.
 */
export const getEntityNodes = (editor: Editor, at: Location = []): NodeEntry<Element>[] => {
  return Array.from(
    editor.nodes<Element>({
      at: normalizeLocation(editor, at),
      match: (node) => isEntityNode(editor, node),
    })
  );
};

/**
 * Returns the node carrying the given entity id.
 *
 * An upload finishes long after it started, by which time the node may have moved or gone, so the
 * result has to be looked up by id at that moment rather than through a path captured earlier.
 */
export const findEntityNode = (editor: Editor, entityId: string): NodeEntry<Element> | null => {
  for (const entry of getEntityNodes(editor)) {
    if (getEntityId(entry[0]) === entityId) {
      return entry;
    }
  }

  return null;
};

/**
 * Returns the state held for the given entity id.
 */
export const getEntity = <T>(editor: Editor, entityId: string): T | undefined => {
  return getEntityStore<T>(editor).get(entityId);
};

/**
 * Returns the ids held in the store that no node in the document carries any more.
 *
 * Removing a node leaves its entity behind on purpose, because undo has to be able to bring the node
 * back to something that still exists. Reconciling the leftovers — deleting uploaded files, say — is
 * the application's call, at a point where undo is no longer a possibility.
 */
export const getOrphanEntityIds = (editor: Editor): string[] => {
  const live = new Set<string>();

  for (const [node] of getEntityNodes(editor)) {
    const entityId = getEntityId(node);

    if (entityId !== undefined) {
      live.add(entityId);
    }
  }

  return Array.from(getEntityStore(editor).getSnapshot().keys()).filter((id) => !live.has(id));
};

/**
 * Returns what the orphaned entities uploaded, minus anything an entity still in the document uploaded.
 *
 * This, not {@link getOrphanEntityIds}, is what cleaning up should go by: duplicating a block gives the
 * copy its own entity id while both keep pointing at the one upload, so an orphaned id on its own is no
 * evidence that what it uploaded is unused.
 *
 * Payloads are compared by identity. A duplicate shares the original's object, so that holds within a
 * session; across a reload, where payloads are rebuilt from the document, compare by whatever identifies
 * one for you instead.
 */
export const getOrphanPayloads = <TPayload>(editor: Editor): TPayload[] => {
  const store = getEntityStore<EntityState<TPayload>>(editor);
  const orphaned = new Set(getOrphanEntityIds(editor));
  const live = new Set<TPayload>();

  for (const [entityId, state] of store.getSnapshot()) {
    if (!orphaned.has(entityId) && state.payload !== null) {
      live.add(state.payload);
    }
  }

  const payloads = new Set<TPayload>();

  for (const entityId of orphaned) {
    const payload = store.get(entityId)?.payload;

    if (payload !== null && payload !== undefined && !live.has(payload)) {
      payloads.add(payload);
    }
  }

  return Array.from(payloads);
};
