import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';

import * as EmptyStateIcons from './icons';
import { EmptyState } from '.';

const getIcon = (args: Args) => {
  const Component = EmptyStateIcons[args.icon as keyof typeof EmptyStateIcons] || EmptyStateIcons.EmptyStateIconBox;
  return <Component />;
};

const getHeading = (args: Args, context: StoryContext<ReactFramework>) => {
  return args.heading || (context.globals.locale === 'en' ? 'There are no entities yet' : 'Здесь пока нет сущностей');
};

const getSubheading = (args: Args, context: StoryContext<ReactFramework>) => {
  return (
    args.subheading ||
    (context.globals.locale === 'en'
      ? 'There are no entities yet. Do you want to create the first entity?'
      : 'Здесь пока нет сущностей. Хотите создать первую сущность?')
  );
};

const getAction = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Create entity' : 'Создать сущность';
};

export const Demo: Story = (args, context) => {
  return (
    <EmptyState
      {...args}
      heading={getHeading(args, context)}
      icon={getIcon(args)}
      subheading={getSubheading(args, context)}
    />
  );
};

export const Action: Story = (args, context) => {
  return (
    <EmptyState
      {...args}
      heading={getHeading(args, context)}
      icon={getIcon(args)}
      subheading={getSubheading(args, context)}
    >
      <Button color="primary" variant="outlined">
        {getAction(args, context)}
      </Button>
    </EmptyState>
  );
};
