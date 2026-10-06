import { Element } from 'slate';

import { EditorElement, ElementType } from './types';

import { BaseSchema } from '../plugins/base';
import { LinkProps, LinksSchema } from '../plugins/links';
import { ListsSchema } from '../plugins/lists';

const CONVERTIBLE_TO_LIST_TEXT: ElementType[] = [
  ElementType.PARAGRAPH,
  ElementType.H1,
  ElementType.H2,
  ElementType.H3,
  ElementType.H4,
  ElementType.H5,
  ElementType.H6,
];

const createNode = <T extends ElementType>(type: T, props: Partial<EditorElement & LinkProps> = {}) => {
  return { children: [{ text: '' }], ...props, type };
};

export const BASE_SCHEMA: BaseSchema = {
  isDefaultTextNode(node) {
    return Element.isElementType(node, ElementType.PARAGRAPH);
  },
  getDefaultTextNodeType() {
    return ElementType.PARAGRAPH;
  },
  createDefaultTextNode(props) {
    return createNode(ElementType.PARAGRAPH, props);
  },
};

export const LINKS_SCHEMA: LinksSchema = {
  isLinkNode(node) {
    return Element.isElementType(node, ElementType.LINK);
  },
  createLinkNode(props) {
    return createNode(ElementType.LINK, props);
  },
};

export const LISTS_SCHEMA: ListsSchema = {
  isConvertibleToListTextNode(node) {
    return CONVERTIBLE_TO_LIST_TEXT.some((type) => Element.isElementType(node, type));
  },
  isOrderedListNode(node) {
    return Element.isElementType(node, ElementType.ORDERED_LIST);
  },
  isUnorderedListNode(node) {
    return Element.isElementType(node, ElementType.UNORDERED_LIST);
  },
  isListItemNode(node) {
    return Element.isElementType(node, ElementType.LIST_ITEM);
  },
  isListItemTextNode(node) {
    return Element.isElementType(node, ElementType.LIST_ITEM_TEXT);
  },
  getOrderedListNodeType() {
    return ElementType.ORDERED_LIST;
  },
  getUnorderedListNodeType() {
    return ElementType.UNORDERED_LIST;
  },
  getListItemNodeType() {
    return ElementType.LIST_ITEM;
  },
  getListItemTextNodeType() {
    return ElementType.LIST_ITEM_TEXT;
  },
  createListNode(type, props) {
    return type === ElementType.ORDERED_LIST
      ? createNode(ElementType.ORDERED_LIST, props)
      : createNode(ElementType.UNORDERED_LIST, props);
  },
  createOrderedListNode(props) {
    return createNode(ElementType.ORDERED_LIST, props);
  },
  createUnorderedListNode(props) {
    return createNode(ElementType.UNORDERED_LIST, props);
  },
  createListItemNode(props) {
    return createNode(ElementType.LIST_ITEM, props);
  },
  createListItemTextNode(props) {
    return createNode(ElementType.LIST_ITEM_TEXT, props);
  },
};
