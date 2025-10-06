import { Meta, StoryObj } from '@storybook/react-vite';

import Box from '@mui/material/Box';

import { Breadcrumb } from './Breadcrumb/Breadcrumb';
import { Breadcrumbs } from './Breadcrumbs';

const BREADCRUMBS = {
  en: [{ name: 'Home' }, { name: 'Catalog' }, { name: 'Electronics' }, { name: 'Tablets' }, { name: 'Apple' }],
  ru: [
    { name: 'Главная страница' },
    { name: 'Каталог' },
    { name: 'Электроника' },
    { name: 'Планшеты' },
    { name: 'Apple' },
  ],
};

const meta: Meta<typeof Breadcrumbs> = {
  tags: ['autodocs'],
  component: Breadcrumbs,
  parameters: {
    references: ['Breadcrumbs', 'Breadcrumb'],
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const DemoBase: Story = {
  tags: ['test-only'],
  render: (_args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    return (
      <Breadcrumbs>
        {BREADCRUMBS[locale].map((item, index) => (
          <Breadcrumb
            key={item.name}
            component="button"
            itemContent={index === 0 ? '🏁' : undefined}
            onClick={() => console.info(item.name)}
          >
            {item.name}
          </Breadcrumb>
        ))}

        <Breadcrumb disabled>iPad Pro</Breadcrumb>
      </Breadcrumbs>
    );
  },
};

export const Demo: Story = {
  render: (args, context) => {
    return <Box sx={{ padding: '30px 0' }}>{DemoBase.render?.(args, context)} </Box>;
  },
};
