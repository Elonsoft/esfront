/* eslint-disable storybook/default-exports */

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useGeolocation } from './useGeolocation';

export const Demo: Story = () => {
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
};
