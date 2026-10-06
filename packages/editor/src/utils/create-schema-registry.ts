import { Editor } from 'slate';

const VOWELS = ['A', 'E', 'I', 'O', 'U'];

export interface SchemaRegistryOptions {
  /**
   * The name the plugin is built around, e.g. `Lists`. Everything the error wording needs follows from
   * it by the package's own naming: `ListsSchema`, `withLists`, `ListsEditor`.
   */
  schema: string;
}

export interface SchemaRegistry<TSchema> {
  register: (editor: Editor, schema: TSchema) => void;
  unregister: (editor: Editor) => void;
  has: (editor: Editor) => boolean;
  get: (editor: Editor) => TSchema;
}

/**
 * Builds the registry a plugin keeps its schema in, one entry per editor.
 *
 * The schema is held beside the editor rather than on it, so that a plugin needs no property of its own
 * on a type every application would then have to declare.
 *
 * The name is only ever used to word the error a helper throws when its plugin was never installed,
 * which is the one case where the editor cannot say what it is missing by itself.
 */
export const createSchemaRegistry = <TSchema>({ schema }: SchemaRegistryOptions): SchemaRegistry<TSchema> => {
  const schemas = new WeakMap<Editor, TSchema>();
  const article = VOWELS.includes(schema.charAt(0)) ? 'an' : 'a';

  return {
    register: (editor, value) => {
      schemas.set(editor, value);
    },
    unregister: (editor) => {
      schemas.delete(editor);
    },
    has: (editor) => {
      return schemas.has(editor);
    },
    get: (editor) => {
      const value = schemas.get(editor);

      if (!value) {
        throw new Error(
          `This editor instance does not have ${article} ${schema}Schema associated. Make sure you initialize it with with${schema}() before using ${schema}Editor functionality.`
        );
      }

      return value;
    },
  };
};
