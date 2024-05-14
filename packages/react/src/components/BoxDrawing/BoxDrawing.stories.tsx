import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { BoxDrawing } from './BoxDrawing';
import { BoxDrawingItem } from './BoxDrawingItem';

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
  render: (args) => {
    return (
      <BoxDrawing collapsed={args.collapsed} header={args.header || 'Header'}>
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
