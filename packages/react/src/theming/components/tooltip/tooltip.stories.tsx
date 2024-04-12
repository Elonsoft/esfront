import { Meta, StoryObj } from '@storybook/react';

import { Button, Tooltip } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/ban-types
type Args = {};

const meta: Meta<Args> = {
  title: 'Overrides/Tooltip',
  parameters: {
    viewMode: 'canvas'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, { globals: { locale } }) => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '12px'
        }}
      >
        <Tooltip arrow placement="right" title={locale === 'en' ? 'Tooltip' : 'Подсказка'} {...args}>
          <Button variant="contained">{locale === 'en' ? 'Button' : 'Кнопка'}</Button>
        </Tooltip>
        <Button variant="contained">{locale === 'en' ? 'Button' : 'Кнопка'}</Button>
      </div>
    );
  }
};
