import { useCallback, useState } from 'react';

import { ElementType } from './Editor.types';

import { Meta, StoryObj } from '@storybook/react';

import { createEditor, Descendant, Element, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';

import {
  BaseSchema,
  isValidHttpUrl,
  LinksEditor,
  LinksSchema,
  ListsSchema,
  onBaseKeyDown,
  onListsKeyDown,
  withBase,
  withLinks,
  withLists,
  withNodeId
} from '@elonkit/editor';

// eslint-disable-next-line @typescript-eslint/ban-types
type Args = {};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  title: 'Editor',
  argTypes: {},
  args: {}
};

export default meta;
type Story = StoryObj<Args>;

const BASE_SCHEMA: BaseSchema = {
  isDefaultTextNode(node: Node) {
    return Element.isElementType(node, ElementType.PARAGRAPH);
  },
  getDefaultTextNodeType: () => ElementType.PARAGRAPH,
  createDefaultTextNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.PARAGRAPH };
  }
};

const LISTS_SCHEMA: ListsSchema = {
  isOrderedListNode(node: Node) {
    return Element.isElementType(node, ElementType.ORDERED_LIST);
  },
  isUnorderedListNode(node: Node) {
    return Element.isElementType(node, ElementType.UNORDERED_LIST);
  },
  isListItemNode(node: Node) {
    return Element.isElementType(node, ElementType.LIST_ITEM);
  },
  isListItemTextNode(node: Node) {
    return Element.isElementType(node, ElementType.LIST_ITEM_TEXT);
  },
  getOrderedListNodeType: () => ElementType.ORDERED_LIST,
  getUnorderedListNodeType: () => ElementType.UNORDERED_LIST,
  getListItemNodeType: () => ElementType.LIST_ITEM,
  getListItemTextNodeType: () => ElementType.LIST_ITEM_TEXT,
  createOrderedListNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.ORDERED_LIST };
  },
  createUnorderedListNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.UNORDERED_LIST };
  },
  createListItemNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.LIST_ITEM };
  },
  createListItemTextNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.LIST_ITEM_TEXT };
  }
};

const LINKS_SCHEMA: LinksSchema = {
  isLinkNode(node: Node) {
    return Element.isElementType(node, ElementType.LINK);
  },
  createLinkNode(props = {}) {
    return { children: [{ text: '' }], ...props, type: ElementType.LINK };
  }
};

const initialValue: Descendant[] = [
  {
    type: ElementType.H1,
    children: [{ text: 'A line of text in a paragraph.' }]
  },
  {
    type: ElementType.PARAGRAPH,
    children: [{ text: 'A line of text in a paragraph.' }]
  },
  {
    type: ElementType.H2,
    children: [{ text: 'A line of text in a paragraph.' }]
  },
  {
    type: ElementType.ORDERED_LIST,
    children: [
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: ElementType.PARAGRAPH,
    children: [{ text: 'A line of text in a paragraph.' }]
  },
  {
    type: ElementType.UNORDERED_LIST,
    children: [
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          {
            type: ElementType.LIST_ITEM_TEXT,
            children: [
              {
                type: ElementType.PARAGRAPH,
                children: [{ text: 'A line of text in a paragraph.' }]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const Demo: Story = {
  render: function Render() {
    const [editor] = useState(() =>
      withLinks(LINKS_SCHEMA)(
        withLists(LISTS_SCHEMA)(withBase(BASE_SCHEMA)(withNodeId(withReact(withHistory(createEditor())))))
      )
    );

    const renderElement = useCallback(
      ({ attributes, children, element }: RenderElementProps) => {
        switch (element.type) {
          case ElementType.H1:
            return (
              <h1 style={{ border: '1px solid red' }} {...attributes}>
                {children}
              </h1>
            );
          case ElementType.H2:
            return <h2 {...attributes}>{children}</h2>;
          case ElementType.H3:
            return <h3 {...attributes}>{children}</h3>;
          case ElementType.ORDERED_LIST:
            return <ol {...attributes}>{children}</ol>;
          case ElementType.UNORDERED_LIST:
            return <ul {...attributes}>{children}</ul>;
          case ElementType.LIST_ITEM:
            return <li {...attributes}>{children}</li>;
          case ElementType.LIST_ITEM_TEXT:
            return <div {...attributes}>{children}</div>;
          case ElementType.LINK:
            return (
              <a {...attributes} href={element.url}>
                {children}
              </a>
            );
          default:
            return (
              <p style={{ border: '1px solid black' }} {...attributes}>
                {children}
              </p>
            );
        }
      },
      [editor]
    );

    const renderLeaf = useCallback(
      ({ attributes, children }: RenderLeafProps) => {
        return <span {...attributes}>{children}</span>;
      },
      [editor]
    );

    const onChange = (value: Descendant[]) => {
      console.log(value);
    };

    const onKeyDown = useCallback(
      onListsKeyDown(
        editor,
        onBaseKeyDown(editor, () => {})
      ),
      [editor]
    );

    return (
      <Slate
        editor={editor}
        initialValue={initialValue || []}
        onChange={(value) => {
          const isAstChange = editor.operations.some((op) => 'set_selection' !== op.type);

          if (isAstChange && onChange) {
            onChange(value);
          }
        }}
      >
        <div>
          <button type="button">paragraph</button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              // eslint-disable-next-line no-alert
              const url = window.prompt();

              if (url && isValidHttpUrl(url)) {
                LinksEditor.wrapLink(editor, url);
              }
            }}
          >
            link
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              LinksEditor.unwrapLink(editor);
            }}
          >
            unlink
          </button>
        </div>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} onKeyDown={onKeyDown} />
      </Slate>
    );
  }
};
