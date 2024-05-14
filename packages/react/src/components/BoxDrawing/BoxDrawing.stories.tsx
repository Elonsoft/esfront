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
          <div style={{ padding: '16px' }}>BoxDrawing 1</div>
        </BoxDrawingItem>
        <BoxDrawingItem>
          <div style={{ padding: '16px' }}>BoxDrawing 2</div>
        </BoxDrawingItem>
        <BoxDrawingItem>
          <div style={{ padding: '16px' }}>BoxDrawing 3</div>
        </BoxDrawingItem>
      </BoxDrawing>
    );
  }
};
