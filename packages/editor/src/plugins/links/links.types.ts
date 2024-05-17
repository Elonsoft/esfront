import type { Element, Node } from 'slate';

interface LinkProps {
  url?: string;
}

export interface LinksSchema {
  isLinkNode(node: Node): boolean;
  createLinkNode(props?: Partial<Element & LinkProps>): Element & LinkProps;
}
