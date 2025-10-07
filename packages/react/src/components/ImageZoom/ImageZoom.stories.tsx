import { useRef } from 'react';

import { ImageZoomImperativeActions } from './ImageZoom.types';

import { Meta, StoryObj } from '@storybook/react';

import { ImageZoom } from '.';

import { IconMinusLineW400, IconPlusLineW400 } from '../../icons';
import { Button } from '../Button';

const meta: Meta<typeof ImageZoom> = {
  tags: ['autodocs'],
  component: ImageZoom,
  parameters: {
    references: ['ImageZoom'],
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

type Story = StoryObj<typeof ImageZoom>;

export const Demo: Story = {
  render: (args) => {
    return (
      <ImageZoom
        {...args}
        sx={(theme) => ({
          boxShadow: `0 0 0 1px ${theme.vars.palette.monoA[500]}`,
          maxWidth: '400px',
          width: '100%',
        })}
      >
        <img src="./image-zoom/1.jpg" />
      </ImageZoom>
    );
  },
};

export const ImperativeActions: Story = {
  render: (args, context) => {
    const actions = useRef<ImageZoomImperativeActions | null>(null);

    return (
      <div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <Button
            aria-label={context.globals.locale === 'ru' ? 'Приблизить' : 'Zoom In'}
            variant="outlined"
            onClick={() => actions.current?.setScale(actions.current?.getScale() + 1, true)}
          >
            <IconPlusLineW400 />
          </Button>
          <Button
            aria-label={context.globals.locale === 'ru' ? 'Отдалить' : 'Zoom Out'}
            variant="outlined"
            onClick={() => actions.current?.setScale(actions.current?.getScale() - 1, true)}
          >
            <IconMinusLineW400 />
          </Button>
        </div>
        <ImageZoom
          {...args}
          actions={actions}
          sx={(theme) => ({
            boxShadow: `0 0 0 1px ${theme.vars.palette.monoA[500]}`,
            maxWidth: '400px',
            width: '100%',
          })}
        >
          <img src="./image-zoom/1.jpg" />
        </ImageZoom>
      </div>
    );
  },
};
