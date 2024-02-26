import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';

import * as EmptyStateIcons from './icons';
import { EmptyState } from '.';

const getIcon = (args: Args) => {
  const Component = EmptyStateIcons[args.icon as keyof typeof EmptyStateIcons] || EmptyStateIcons.EmptyStateIconBox;
  return <Component size={args.size === 'small' ? '40px' : '56px'} />;
};

const getHeading = (args: Args, context: StoryContext<unknown>) => {
  return args.heading || (context.globals.locale === 'en' ? 'There are no entities yet' : 'Здесь пока нет сущностей');
};

const getSubheading = (args: Args, context: StoryContext<unknown>) => {
  return (
    args.subheading ||
    (context.globals.locale === 'en'
      ? 'There are no entities yet. Do you want to create the first entity?'
      : 'Здесь пока нет сущностей. Хотите создать первую сущность?')
  );
};

const getAction = (_args: Args, context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Create entity' : 'Создать сущность';
};

const meta: Meta<typeof EmptyState> = {
  tags: ['autodocs'],
  component: EmptyState,
  parameters: {
    references: ['EmptyState']
  },
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: [
        'EmptyStateIconBarChart',
        'EmptyStateIconBell',
        'EmptyStateIconBox',
        'EmptyStateIconCamera',
        'EmptyStateIconCart',
        'EmptyStateIconChat',
        'EmptyStateIconFace',
        'EmptyStateIconFile',
        'EmptyStateIconFilter',
        'EmptyStateIconImage',
        'EmptyStateIconLock',
        'EmptyStateIconPieChart',
        'EmptyStateIconSearch',
        'EmptyStateIconSmile',
        'EmptyStateIconWiFi',
        'EmptyStateIconWiFiOff'
      ]
    },
    heading: {
      control: {
        type: 'text'
      }
    },
    subheading: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    icon: 'EmptyStateIconBox'
  }
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <EmptyState
        {...args}
        heading={getHeading(args, context)}
        icon={getIcon(args)}
        subheading={getSubheading(args, context)}
      />
    );
  }
};

/** We can use `children` prop to add action button. */
export const Action: Story = {
  render: (args, context) => {
    return (
      <EmptyState
        {...args}
        heading={getHeading(args, context)}
        icon={getIcon(args)}
        subheading={getSubheading(args, context)}
      >
        <Button color="primary" size={args.size === 'small' ? '32' : '40'} variant="outlined">
          {getAction(args, context)}
        </Button>
      </EmptyState>
    );
  }
};
