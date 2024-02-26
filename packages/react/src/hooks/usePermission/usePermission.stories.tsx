/* eslint-disable storybook/default-exports */

import { useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { usePermission } from './usePermission';

export const Demo: Story = () => {
  const [permission, setPermission] = useState<any>('camera');
  const state = usePermission({ name: permission });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPermission(e.target.value);
  };

  return (
    <>
      <Box sx={{ maxWidth: '320px' }}>
        <TextField fullWidth select label="Permission" size="40" value={permission} onChange={onChange}>
          <MenuItem value="camera">camera</MenuItem>
          <MenuItem value="geolocation">geolocation</MenuItem>
          <MenuItem value="microphone">microphone</MenuItem>
          <MenuItem value="midi">midi</MenuItem>
          <MenuItem value="notifications">notifications</MenuItem>
          <MenuItem value="persistent-storage">persistent-storage</MenuItem>
          <MenuItem value="push">push</MenuItem>
          <MenuItem value="screen-wake-lock">screen-wake-lock</MenuItem>
          <MenuItem value="speaker">speaker</MenuItem>
          <MenuItem value="xr-spatial-tracking">xr-spatial-tracking</MenuItem>
        </TextField>
      </Box>
      <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
        Permission status: {JSON.stringify(state, null, 2)}
      </Typography>
    </>
  );
};
