import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Descendant } from 'slate';

import { Editor } from './Editor';
import { DEFAULT_LABELS, LABELS_RU } from './Editor.labels';

import { ElementType } from '../testing';

import './Editor.stories.scss';

const meta: Meta<typeof Editor> = {
  title: 'Editor/Editor',
  component: Editor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'A demonstration of the plugins `@esfront/editor` ships.',
          '',
          'The toolbar, the element renderers and the node schemas are deliberately part of the story rather than',
          'the package: they are where an application decides what its documents look like.',
        ].join('\n'),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Editor>;

const INITIAL_VALUE: Descendant[] = [
  {
    type: ElementType.H2,
    children: [{ text: 'A heading' }],
  },
  {
    type: ElementType.PARAGRAPH,
    children: [
      { text: 'Text with ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ' and ' },
      { text: 'struck through', lineThrough: true },
      { text: ' marks, plus a ' },
      { type: ElementType.LINK, url: 'https://example.com', children: [{ text: 'link' }] },
      { text: '.' },
    ],
  },
  {
    type: ElementType.UNORDERED_LIST,
    children: [
      {
        type: ElementType.LIST_ITEM,
        children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A list item' }] }],
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          { type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A list item with a nested list' }] },
          {
            type: ElementType.UNORDERED_LIST,
            children: [
              {
                type: ElementType.LIST_ITEM,
                children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A nested list item' }] }],
              },
              {
                type: ElementType.LIST_ITEM,
                children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Another nested list item' }] }],
              },
            ],
          },
        ],
      },
      {
        type: ElementType.LIST_ITEM,
        children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A last list item' }] }],
      },
    ],
  },
];

// Every string the demo renders comes from the `labels` prop, so a locale is a different set of
// labels rather than a different component.
const getLabels = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru' ? LABELS_RU : DEFAULT_LABELS;
};

export const Demo: Story = {
  args: {
    defaultValue: INITIAL_VALUE,
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};

/**
 * `onChange` fires for document changes only. Moving the caret around leaves the value untouched.
 */
export const Value: Story = {
  args: {
    defaultValue: INITIAL_VALUE,
  },
  render: (args, context) => {
    const [value, setValue] = useState<Descendant[]>(args.defaultValue ?? []);

    return (
      <div>
        <Editor {...args} labels={getLabels(context)} onChange={setValue} />
        <pre className="mt-16">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  },
};

/**
 * The lists plugin keeps nesting under keyboard control: `Tab` and `Shift+Tab` change the depth of
 * the current list item, `Enter` splits it, and `Enter` on an empty item lifts it out of the list.
 */
export const Nesting: Story = {
  args: {
    defaultValue: [
      {
        type: ElementType.ORDERED_LIST,
        children: [
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Press Tab on the item below' }] }],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'This one' }] }],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Then Shift+Tab to move it back' }] }],
          },
        ],
      },
    ],
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};

/**
 * A list may nest one of the other type. Changing a type is scoped to the lists the selection sits
 * in, so switching the sublist below leaves the list around it alone, and vice versa.
 */
export const MixedNesting: Story = {
  args: {
    defaultValue: [
      {
        type: ElementType.UNORDERED_LIST,
        children: [
          {
            type: ElementType.LIST_ITEM,
            children: [
              { type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A bulleted item' }] },
              {
                type: ElementType.ORDERED_LIST,
                children: [
                  {
                    type: ElementType.LIST_ITEM,
                    children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A numbered sub item' }] }],
                  },
                  {
                    type: ElementType.LIST_ITEM,
                    children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Another numbered sub item' }] }],
                  },
                ],
              },
            ],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A last bulleted item' }] }],
          },
        ],
      },
    ],
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};
