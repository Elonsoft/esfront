import type { Element, Node } from 'slate';

export interface EntitiesSchema<TPayload = unknown> {
  /**
   * Checks whether the node carries an entity, i.e. whether it is one of the void blocks whose
   * payload is loaded separately from the document.
   */
  isEntityNode(node: Node): boolean;
  /**
   * Creates the node that will carry the entity, given the id its state is keyed by.
   *
   * The node needs nothing else: the file and the progress of its upload live in the store, so that
   * neither reaches the document.
   */
  createEntityNode(entityId: string): Element;
  /**
   * Returns the properties that record a finished upload on the node.
   *
   * What the upload resolved to belongs in the document, unlike everything else about the entity: it
   * is the part that has to survive being saved and loaded again.
   */
  createUploadedProps(payload: TPayload): Partial<Element>;
}

export interface EntityUploadContext {
  /** Aborts when the node is removed, or when the upload is abandoned explicitly. */
  signal: AbortSignal;
  /** Reports how far the upload has got, from 0 to 1. */
  onProgress: (progress: number) => void;
}

/** Performs the upload of one file. */
export type EntityUploader<TPayload> = (file: File, context: EntityUploadContext) => Promise<TPayload>;

/** Where an entity has got to. */
export type EntityStatus = 'pending' | 'uploading' | 'done' | 'error';

/**
 * The state held beside the document for one entity.
 *
 * Owned by the package rather than the application, because the package owns the upload: it is what
 * moves an entity from `pending` through `uploading` to `done` or `error`.
 */
export interface EntityState<TPayload = unknown> {
  /** The file the entity was created from, kept out of the document because it cannot be serialized. */
  file: File | null;
  status: EntityStatus;
  /** How far the upload has got, from 0 to 1, or `null` when it is not running. */
  progress: number | null;
  /** Why the last attempt failed. */
  error: unknown;
  /** What the upload resolved to, once it has. */
  payload: TPayload | null;
}

/**
 * A keyed observable map of the state that belongs beside the document rather than in it.
 *
 * A snapshot is replaced rather than mutated on every change, so its identity changes exactly when
 * its contents do. That is what lets `useSyncExternalStore` compare snapshots by reference without
 * either missing an update or looping forever.
 */
export interface EntityStore<T = unknown> {
  /** Returns the state of one entity. The reference is stable until that entity changes. */
  get(id: string): T | undefined;
  /** Replaces the state of one entity. */
  set(id: string, value: T): void;
  /** Derives the next state of one entity from its current state. */
  update(id: string, updater: (previous: T | undefined) => T): void;
  /** Forgets one entity. */
  delete(id: string): void;
  /** Returns every entity. The reference is stable until any entity changes. */
  getSnapshot(): ReadonlyMap<string, T>;
  /** Registers a listener for any change, and returns the function that removes it. */
  subscribe(listener: () => void): () => void;
}

export interface EntitiesOptions<TPayload = unknown> {
  /** Tells the plugin which nodes carry an entity, and how to make one. */
  schema: EntitiesSchema<TPayload>;
  /** Holds the state of those entities. */
  store: EntityStore<EntityState<TPayload>>;
  /**
   * Decides whether a dropped or pasted file becomes an entity.
   *
   * A paste carrying files none of which are accepted falls through to whatever would have handled it
   * otherwise, so that declining a file is not the same as swallowing the paste.
   *
   * @default every file is accepted
   */
  accept?: (file: File) => boolean;
  /**
   * Uploads the file an entity was created from.
   *
   * Given one, the plugin runs it: an inserted entity is queued, its progress and outcome land in the
   * store, and what it resolved to is written onto the node. Left out, entities stay `pending` and
   * uploading them is the application's own business.
   */
  upload?: EntityUploader<TPayload>;
  /**
   * How many uploads may run at once.
   *
   * @default 3
   */
  concurrency?: number;
}
