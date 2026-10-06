import { Descendant, Path, Point, Range } from 'slate';

import {
  ElementType,
  ListItemElement,
  ListItemTextElement,
  OrderedListElement,
  ParagraphElement,
  UnorderedListElement,
} from './types';

/** Builds a paragraph, i.e. the default text node of the test schema. */
export const p = (text = ''): ParagraphElement => {
  return { type: ElementType.PARAGRAPH, children: [{ text }] };
};

/** Builds a heading, which the test schema reports as convertible to a list item text. */
export const h2 = (text = ''): Descendant => {
  return { type: ElementType.H2, children: [{ text }] };
};

/** Builds the text node of a list item. */
export const lic = (text = ''): ListItemTextElement => {
  return { type: ElementType.LIST_ITEM_TEXT, children: [{ text }] };
};

/** Builds a list item, optionally with a nested list. */
export const li = (text = '', nested?: OrderedListElement | UnorderedListElement): ListItemElement => {
  return {
    type: ElementType.LIST_ITEM,
    children: nested ? [lic(text), nested] : [lic(text)],
  };
};

/** Builds an unordered list. */
export const ul = (...children: Descendant[]): UnorderedListElement => {
  return { type: ElementType.UNORDERED_LIST, children };
};

/** Builds an ordered list. */
export const ol = (...children: Descendant[]): OrderedListElement => {
  return { type: ElementType.ORDERED_LIST, children };
};

/** Builds a point. */
export const point = (path: Path, offset = 0): Point => {
  return { path, offset };
};

/** Builds a collapsed range at the given point. */
export const cursor = (path: Path, offset = 0): Range => {
  return { anchor: point(path, offset), focus: point(path, offset) };
};

/** Builds an expanded range between the two points. */
export const range = (anchor: Point, focus: Point): Range => {
  return { anchor, focus };
};
