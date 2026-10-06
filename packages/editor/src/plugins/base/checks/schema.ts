import { Editor, Element, Node } from 'slate';

import * as Registry from '../base.registry';
import type { BaseSchema } from '../base.types';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

/**
 * Checks whether the editor was initialized with `withBase`.
 */
export const isBaseEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

/**
 * Returns the base schema the editor was initialized with, or `undefined` when it has none.
 */
export const getBaseSchema = (editor: Editor): BaseSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor) : undefined;
};

// Schema proxies

/**
 * Checks whether the node is a default text node, as the schema defines one.
 */
export const isDefaultTextNode = (editor: Editor, node: Node) => {
  return schema(editor).isDefaultTextNode(node);
};

/**
 * Returns the type the schema uses for default text nodes, i.e. what a block falls back to.
 */
export const getDefaultTextNodeType = (editor: Editor) => {
  return schema(editor).getDefaultTextNodeType();
};

/**
 * Builds a default text node.
 */
export const createDefaultTextNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createDefaultTextNode(props);
};
