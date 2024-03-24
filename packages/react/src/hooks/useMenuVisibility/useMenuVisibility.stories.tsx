import { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useMenuVisibility } from './useMenuVisibility';

import { useMenu } from '../useMenu';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useMenuVisibility',
  parameters: {
    references: ['useMenu', 'useMenuVisibility']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [anchorEl, onOpen, onClose] = useMenu();
    const [visible, onEnter, onExited] = useMenuVisibility();

    return (
      <>
        <Button variant="contained" onClick={onOpen}>
          Menu {!visible && 'not'} visible
        </Button>
        <Menu TransitionProps={{ onEnter, onExited }} anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </>
    );
  }
};