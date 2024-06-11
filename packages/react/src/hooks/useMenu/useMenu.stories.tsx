import { Meta, StoryObj } from '@storybook/react';

import Menu from '@mui/material/Menu';

import { useMenu } from './useMenu';

import { Button } from '../../components/Button';
import { MenuItem } from '../../components/MenuItem';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useMenu',
  parameters: {
    references: ['useMenu'],
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [anchorEl, onOpen, onClose] = useMenu();

    return (
      <>
        <Button color="primary" variant="contained" onClick={onOpen}>
          Menu
        </Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>
    );
  },
};
