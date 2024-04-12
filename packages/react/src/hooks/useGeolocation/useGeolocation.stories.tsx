import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useGeolocation } from './useGeolocation';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useGeolocation',
  parameters: {
    references: ['useGeolocation']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const { position, error, loading } = useGeolocation();

    return (
      <Typography component="div" variant="body100">
        {!!loading && <div>Loading...</div>}
        {!!position && (
          <>
            <div>Latitude: {position.coords.latitude}</div>
            <div>Longitude: {position.coords.longitude}</div>
          </>
        )}
        {!!error && <div>Error: {error.message}</div>}
      </Typography>
    );
  }
};
