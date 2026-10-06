import type { Element, Node } from 'slate';

export interface LinkProps {
  url?: string;
}

export interface LinksSchema {
  /** Checks whether the node is a link node. */
  isLinkNode(node: Node): boolean;
  /** Creates a new link node. */
  createLinkNode(props?: Partial<Element & LinkProps>): Element & LinkProps;
}
