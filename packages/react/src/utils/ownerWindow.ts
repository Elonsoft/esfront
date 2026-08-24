import { ownerDocument } from './ownerDocument';

/** Returns the window the node belongs to, which may differ from the global one inside an iframe. */
export const ownerWindow = (node: Node | null | undefined): Window => {
  return ownerDocument(node).defaultView || window;
};
