import { Editor } from 'slate';

import * as Registry from './entities.registry';

// Kept out of `checks` on purpose: everything exported from there reaches `EntitiesEditor`, and these
// two are for the upload queue rather than for an application.

/**
 * Returns everything the editor was initialized with, which the upload queue needs in full rather than
 * one piece at a time.
 */
export const getEntitiesOptions = <TPayload>(editor: Editor) => {
  return Registry.get<TPayload>(editor);
};

/**
 * Returns the props the schema wants written onto a node whose upload resolved.
 */
export const createUploadedProps = <TPayload>(editor: Editor, payload: TPayload) => {
  return Registry.get<TPayload>(editor).schema.createUploadedProps(payload);
};
