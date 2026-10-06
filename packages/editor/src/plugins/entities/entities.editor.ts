import * as checks from './checks';
import * as upload from './entities.upload';
import * as transforms from './transforms';

/**
 * Namespace of every entities helper. Each one takes the editor as its first argument.
 */
export const EntitiesEditor = {
  // EntitiesEditor schema availability

  isEntitiesEnabled: checks.isEntitiesEnabled,
  getEntitiesSchema: checks.getEntitiesSchema,
  getEntityStore: checks.getEntityStore,

  getEntityAccept: checks.getEntityAccept,

  // Schema proxies

  isEntityNode: checks.isEntityNode,
  createEntityNode: checks.createEntityNode,

  // Checks & Getters

  getEntityId: checks.getEntityId,
  getEntityNodes: checks.getEntityNodes,
  getEntityIdsIn: checks.getEntityIdsIn,
  findEntityNode: checks.findEntityNode,
  getEntity: checks.getEntity,
  getOrphanEntityIds: checks.getOrphanEntityIds,
  getOrphanPayloads: checks.getOrphanPayloads,

  // Transformations

  insertEntityNode: transforms.insertEntityNode,
  remapDuplicateEntities: transforms.remapDuplicateEntities,
  restoreEntities: transforms.restoreEntities,

  // Uploads

  enqueueEntityUpload: upload.enqueueEntityUpload,
  abortEntityUpload: upload.abortEntityUpload,
  retryEntityUpload: upload.retryEntityUpload,
};
