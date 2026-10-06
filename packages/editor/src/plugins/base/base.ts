import { Editor } from 'slate';

import * as Registry from './base.registry';
import type { BaseSchema } from './base.types';

/**
 * Associates a {@link BaseSchema} with the editor, which tells the rest of the plugins what the
 * default text node of the document looks like.
 */
export const withBase =
  (schema: BaseSchema) =>
  <T extends Editor>(editor: T) => {
    Registry.register(editor, schema);

    return editor;
  };
