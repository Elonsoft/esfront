import { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useMenu } from './useMenu';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useMenu',
  parameters: {
    references: ['useMenu']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [anchorEl, onOpen, onClose] = useMenu();

    return (
      <>
        <Button variant="contained" onClick={onOpen}>
          Menu
        </Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>
    );
  }
};
