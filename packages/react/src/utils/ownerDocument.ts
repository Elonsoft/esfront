/** Returns the document the node belongs to, which may differ from the global one inside an iframe. */
export const ownerDocument = (node: Node | null | undefined): Document => {
  return node?.ownerDocument || document;
};
