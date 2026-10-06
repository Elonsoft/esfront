import { Editor, Element, Node } from 'slate';

import * as Registry from '../links.registry';
import type { LinkProps, LinksSchema } from '../links.types';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

/**
 * Checks whether the editor was initialized with `withLinks`.
 */
export const isLinksEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

/**
 * Returns the links schema the editor was initialized with, or `undefined` when it has none.
 */
export const getLinksSchema = (editor: Editor): LinksSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor) : undefined;
};

// Schema proxies

/**
 * Checks whether the node is a link, as the schema defines one.
 */
export const isLinkNode = (editor: Editor, node: Node) => {
  return schema(editor).isLinkNode(node);
};

/**
 * Builds a link node.
 */
export const createLinkNode = (editor: Editor, props?: Partial<Element & LinkProps>) => {
  return schema(editor).createLinkNode(props);
};
