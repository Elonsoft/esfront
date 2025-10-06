import { Meta, StoryObj } from '@storybook/react-vite';

// eslint-disable-next-line no-restricted-imports
import Tooltip from '@mui/material/Tooltip';

import { Button } from '../../../components/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Args = {};

const meta: Meta<Args> = {
  title: 'Overrides/Tooltip',
  parameters: {
    viewMode: 'canvas',
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, { globals: { locale } }) => {
    return (
      <div
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        <Tooltip arrow placement="right" title={locale === 'en' ? 'Tooltip' : 'Подсказка'} {...args}>
          <Button variant="contained">{locale === 'en' ? 'Button' : 'Кнопка'}</Button>
        </Tooltip>
        <Button variant="contained">{locale === 'en' ? 'Button' : 'Кнопка'}</Button>
      </div>
    );
  },
};
