/** Returns the window the node belongs to, which may differ from the global one inside an iframe. */
export const ownerWindow = (node: Node | null | undefined): Window => {
  const doc = node?.ownerDocument || document;
  return doc.defaultView || window;
};
