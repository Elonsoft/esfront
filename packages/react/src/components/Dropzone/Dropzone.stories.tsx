import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { Dropzone } from '.';

import { IconUpload } from '../../icons';

const getHeading = (args: Args, context: StoryContext<unknown>) => {
  return args.heading || (context.globals.locale === 'en' ? 'Choose files' : 'Выберите файлы');
};

const getSubheading = (args: Args, context: StoryContext<unknown>) => {
  return (
    args.subheading ||
    (context.globals.locale === 'en'
      ? 'or drag files in this area (max size: 50 MB)'
      : 'или перетащите файлы в эту область (не более 50 мб)')
  );
};

const getDragHeading = (args: Args, context: StoryContext<unknown>) => {
  return args.dragHeading || (context.globals.locale === 'en' ? 'Drag files here' : 'Перетащите файлы сюда');
};

const getDragSubheading = (args: Args, context: StoryContext<unknown>) => {
  return (
    args.dragSubheading ||
    (context.globals.locale === 'en'
      ? 'release files in this area (max size: 50 MB)'
      : 'отпустите файл в этой области (не более 50 мб)')
  );
};

const getHelperText = (args: Args, context: StoryContext<unknown>) => {
  return args.helperText || (context.globals.locale === 'en' ? 'Some important text' : 'Какой-то важный текст');
};

const meta: Meta<typeof Dropzone> = {
  tags: ['autodocs'],
  component: Dropzone,
  parameters: {
    references: ['Dropzone'],
  },
  argTypes: {
    heading: {
      table: {
        category: 'General',
      },
    },
    subheading: {
      table: {
        category: 'General',
      },
    },
    dragHeading: {
      table: {
        category: 'General',
      },
    },
    dragSubheading: {
      table: {
        category: 'General',
      },
    },
    helperText: {
      table: {
        category: 'General',
      },
    },
    error: {
      table: {
        category: 'General',
      },
    },
    accept: {
      table: {
        category: 'General',
      },
    },
    maxSize: {
      table: {
        category: 'General',
      },
    },
    multiple: {
      table: {
        category: 'General',
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    accept: '*',
  },
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <Dropzone
        {...args}
        dragHeading={getDragHeading(args, context)}
        dragSubheading={getDragSubheading(args, context)}
        heading={getHeading(args, context)}
        helperText={getHelperText(args, context)}
        icon={<IconUpload />}
        subheading={getSubheading(args, context)}
      />
    );
  },
};
