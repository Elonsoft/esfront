import { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from '@mui/material';

import { Property } from '.';

import { InformationIcon } from '../InformationIcon';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Property> = {
  tags: ['autodocs'],
  component: Property,
  parameters: {
    references: ['Property'],
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Property>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = context.globals.locale;

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Property {...args} name={locale === 'ru' ? 'Цвет' : 'Color'} value={locale === 'ru' ? 'Черный' : 'Black'} />
        <Property
          {...args}
          name={
            <>
              <span>{locale === 'ru' ? 'Размер' : 'Size'}</span>
              <Tooltip title={locale === 'ru' ? 'Ширина / Высота / Длина' : 'Width / Height / Length'}>
                <InformationIcon variant="question" />
              </Tooltip>
            </>
          }
          value={locale === 'ru' ? '10см / 10см / 30см' : '10cm / 10cm / 30cm'}
        />
      </Box>
    );
  },
};
