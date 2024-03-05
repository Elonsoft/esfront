import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { useVibration } from './useVibration';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useVibration',
  parameters: {
    references: ['useVibration']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const vibrate = useVibration();

    const onVibrate = () => {
      vibrate(200);
    };

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
        <Button color="primary" size="32" variant="contained" onClick={onVibrate}>
          Vibrate
        </Button>
      </Box>
    );
  }
};
