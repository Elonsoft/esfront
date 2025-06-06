import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useDragOver } from './useDragOver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useDragOver',
  parameters: {
    references: ['useDragOver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const { isDragOver, ...props } = useDragOver();

    return (
      <Typography
        component="div"
        sx={[
          (theme) => ({
            padding: '16px',
            border: `1px dashed ${theme.vars.palette.monoA.A500}`,
            borderRadius: '2px',
          }),
          isDragOver
            ? (theme) => ({
                backgroundColor: theme.vars.palette.monoA.A50,
              })
            : {
                backgroundColor: 'transparent',
              },
        ]}
        variant="body100"
        {...props}
      >
        Drag&apos;n&apos;Drop
      </Typography>
    );
  },
};
