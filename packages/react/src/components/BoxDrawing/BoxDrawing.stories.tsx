import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';

import { BoxDrawing } from './BoxDrawing';
import { BoxDrawingItem } from './BoxDrawingItem';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../icons';

type Args = ComponentProps<typeof BoxDrawing> & { header?: string };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: BoxDrawing,
  parameters: {
    references: ['BoxDrawing']
  },
  argTypes: {
    header: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    header: 'Header'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render() {
    const [isCollapsed, setCollapsed] = useState(false);

    return (
      <BoxDrawing
        collapsed={isCollapsed}
        header={
          <ListItemButton onClick={() => setCollapsed(!isCollapsed)}>
            <ListItemText primary="Header" />
            {isCollapsed ? <IconChevronLeftW400 /> : <IconChevronRightW400 />}
          </ListItemButton>
        }
      >
        <BoxDrawingItem>
          <ListItemButton>
            <ListItemText primary="BoxDrawing 1" />
          </ListItemButton>
        </BoxDrawingItem>
        <BoxDrawingItem>
          <ListItemButton>
            <ListItemText primary="BoxDrawing 2" />
          </ListItemButton>
        </BoxDrawingItem>
        <BoxDrawingItem>
          <ListItemButton>
            <ListItemText primary="BoxDrawing 3" />
          </ListItemButton>
        </BoxDrawingItem>
      </BoxDrawing>
    );
  }
};
