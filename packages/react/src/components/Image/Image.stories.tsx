import { useRef } from 'react';

import { ImageImperativeActions } from './Image.types';

import { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

import { IconMinusW400, IconPlusW400 } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof Image> = {
  tags: ['autodocs'],
  component: Image,
  parameters: {
    references: ['Image'],
  },
  argTypes: {
    actions: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Image
        {...args}
        sx={(theme) => ({
          aspectRatio: '1',
          border: `1px solid ${theme.vars.palette.monoA[500]}`,
          maxWidth: '500px',
          width: '100%',
        })}
      >
        <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-61785-800.jpg" />
      </Image>
    );
  },
};

export const ImperativeActions: Story = {
  render: (args) => {
    const actions = useRef<ImageImperativeActions | null>(null);

    return (
      <div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <Button
            aria-label="Zoom In"
            variant="outlined"
            onClick={() => actions.current?.setScale(actions.current?.getScale() + 1, true)}
          >
            <IconPlusW400 />
          </Button>
          <Button
            aria-label="Zoom Out"
            variant="outlined"
            onClick={() => actions.current?.setScale(actions.current?.getScale() - 1, true)}
          >
            <IconMinusW400 />
          </Button>
        </div>
        <Image
          {...args}
          actions={actions}
          sx={(theme) => ({
            aspectRatio: '1',
            border: `1px solid ${theme.vars.palette.monoA[500]}`,
            maxWidth: '500px',
            width: '100%',
          })}
        >
          <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-61785-800.jpg" />
        </Image>
      </div>
    );
  },
};
