import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { TimelineItem } from './TimelineItem/TimelineItem';
import { Timeline } from './Timeline';

const TIMELINE = {
  en: [
    { name: 'Home', oppositeContent: '112:00' },
    { name: 'Catalog', oppositeContent: '12:00' },
    { name: 'Electronics', oppositeContent: '12:00' },
    { name: 'Tablets', oppositeContent: '12:00' },
    { name: 'Apple', oppositeContent: '12:00' }
  ],
  ru: [
    { name: 'Главная страница', oppositeContent: '12:00' },
    { name: 'Каталог', oppositeContent: '12:00' },
    { name: 'Электроника', oppositeContent: '12:00' },
    { name: 'Планшеты', oppositeContent: '12:00' },
    { name: 'Apple', oppositeContent: '12:00' }
  ]
};

const meta: Meta<typeof Timeline> = {
  tags: ['autodocs'],
  component: Timeline,
  parameters: {
    references: ['Timeline', 'TimelineItem']
  }
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const DemoBase: Story = {
  tags: ['test-only'],
  render: (_args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Timeline>
        {TIMELINE[locale].map((item) => (
          <TimelineItem
            key={item.name}
            oppositeContent={item.oppositeContent}
            //weight="sm"
            onClick={() => console.log(item.name)}
          >
            {item.name}
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
