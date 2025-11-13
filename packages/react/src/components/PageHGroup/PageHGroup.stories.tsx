import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  PageHGroup,
  PageHGroupActions,
  PageHGroupBreadcrumbs,
  PageHGroupHeading,
  PageHGroupMain,
  PageHGroupStatus,
} from '.';

import { IconDotsHorizontalLineW500, IconInformation2FillW400, IconPlusLineW400 } from '../../icons';
import { DemoBase as BreadcrumbsDemo } from '../Breadcrumbs/Breadcrumbs.stories';
import { Button } from '../Button';

type Args = ComponentProps<typeof PageHGroup> & ComponentProps<typeof PageHGroupHeading>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: PageHGroup,
  parameters: {
    references: [
      'PageHGroup',
      'PageHGroupActions',
      'PageHGroupBreadcrumbs',
      'PageHGroupHeading',
      'PageHGroupMain',
      'PageHGroupStatus',
    ],
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        category: 'PageHGroupHeading',
      },
    },
    maxLines: {
      control: { type: 'number' },
      table: {
        category: 'PageHGroupHeading',
      },
    },
    endAdornment: {
      table: {
        category: 'PageHGroupHeading',
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <PageHGroup>
        <PageHGroupBreadcrumbs>{BreadcrumbsDemo.render?.({}, context)}</PageHGroupBreadcrumbs>
        <PageHGroupMain>
          <PageHGroupHeading
            endAdornment={<IconInformation2FillW400 sx={{ color: 'monoA.A400' }} />}
            maxLines={args.maxLines}
          >
            {args.children || (locale === 'en' ? 'Schedule' : 'Расписание')}
          </PageHGroupHeading>
          <PageHGroupActions>
            <Button color="primary" startIcon={<IconPlusLineW400 />} variant="contained">
              {locale === 'en' ? 'Create' : 'Создать'}
            </Button>
            <Button color="tertiary" variant="outlined">
              <IconDotsHorizontalLineW500 />
            </Button>
          </PageHGroupActions>
        </PageHGroupMain>
        <PageHGroupStatus>{locale === 'en' ? 'Link access enabled' : 'Доступ по ссылке включен'}</PageHGroupStatus>
      </PageHGroup>
    );
  },
};
