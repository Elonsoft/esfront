import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Timeline } from './Timeline';
import { TimelineItem } from './TimelineItem';

import { IconCheckW500 } from '../../icons';

const TIMELINE = {
  en: [
    {
      name: 'Home',
      oppositeContent: '112:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Catalog',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Electronics',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Tablets',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Apple',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet'
    }
  ],
  ru: [
    {
      name: 'Главная страница',
      oppositeContent: '112:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Каталог',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Электроника',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Планшеты',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Apple',
      oppositeContent: '12:00',
      text: 'Lorem ipsum dolor sit amet'
    }
  ]
};

type Args = ComponentProps<typeof Timeline> & ComponentProps<typeof TimelineItem>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Timeline,
  parameters: {
    references: ['Timeline', 'TimelineItem']
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        category: 'TimelineItem'
      }
    },
    icon: {
      table: {
        category: 'TimelineItem'
      }
    },
    header: {
      control: { type: 'text' },
      table: {
        category: 'TimelineItem'
      }
    },
    oppositeContent: {
      control: { type: 'text' },
      table: {
        category: 'TimelineItem'
      }
    },
    isFirst: {
      control: 'boolean',
      table: {
        category: 'TimelineItem'
      }
    },
    isLast: {
      control: 'boolean',
      table: {
        category: 'TimelineItem'
      }
    },
    weight: {
      options: ['xs', 'sm'],
      control: { type: 'select' },
      table: {
        category: 'TimelineItem'
      }
    }
  },
  args: {
    weight: 'xs'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const DemoBase: Story = {
  tags: ['test-only'],
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Timeline>
        {TIMELINE[locale].map((item) => (
          <TimelineItem
            key={item.name}
            // isFirst={index === 0}
            // isLast={index === 4}
            // weight="sm"
            header={item.name}
            icon={
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  borderRadius: '50%',
                  padding: '8px',
                  background: theme.palette.blue[300],
                  color: theme.palette.monoB[500]
                })}
              >
                <IconCheckW500 />
              </Box>
            }
            oppositeContent={item.oppositeContent}
            onClick={() => console.log(item.name)}
            {...args}
          >
            {item.text}
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
};

export const Demo: Story = {
  render: (args, context) => {
    return <Box sx={{ padding: '25px 0' }}>{DemoBase.render?.(args, context)} </Box>;
  }
};
