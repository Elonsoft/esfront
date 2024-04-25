/* eslint-disable storybook/default-exports */

import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box, TextField, Typography } from '@mui/material';

import { useFocusBox } from './useFocusBox';

import { Highligh } from '../../components';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useFocusBox',
  parameters: {
    references: ['useFocusBox']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [searchText, setSearchText] = useState('');
    const text =
      'React Change Highlight is a react component to highlight changes in the wrapped component to enhance the UX and grab the focus of the user into the changed value of some parts like the cart in an e-commerce application for example.';

    const highlightedText = useFocusBox(text, searchText);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <TextField placeholder="Enter search text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <Typography component="span" sx={{ display: 'inline' }}>
          {highlightedText.map(({ text, highlighted }, index) => (
            <React.Fragment key={index}>{highlighted ? <Highligh>{text}</Highligh> : text}</React.Fragment>
          ))}
        </Typography>
      </Box>
    );
  }
};
