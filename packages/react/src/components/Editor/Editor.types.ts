import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

export enum ElementType {
  PARAGRAPH = 'paragraph',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  ORDERED_LIST = 'ol',
  UNORDERED_LIST = 'ul',
  LIST_ITEM = 'list-item',
  LIST_ITEM_TEXT = 'list-item-text',
  LINK = 'link'
}

export type ParagraphElement = { type: ElementType.PARAGRAPH; children: Descendant[] };

export type H1Element = { type: ElementType.H1; children: Descendant[] };

export type H2Element = { type: ElementType.H2; children: Descendant[] };

export type H3Element = { type: ElementType.H3; children: Descendant[] };

export type OrderedListElement = {
  type: ElementType.ORDERED_LIST;
  children: Descendant[];
};

export type UnorderedListElement = {
  type: ElementType.UNORDERED_LIST;
  children: Descendant[];
};

export type ListItemElement = { type: ElementType.LIST_ITEM; children: Descendant[] };

export type ListItemTextElement = { type: ElementType.LIST_ITEM_TEXT; children: Descendant[] };

export type LinkElement = {
  type: ElementType.LINK;
  url?: string;
  children: Descendant[];
};

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
};

export type CustomElement =
  | ParagraphElement
  | H1Element
  | H2Element
  | H3Element
  | OrderedListElement
  | UnorderedListElement
  | ListItemElement
  | ListItemTextElement
  | LinkElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
