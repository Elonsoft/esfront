import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { FormControlLabel } from '.';

import { Checkbox } from '../Checkbox';
import { Radio as ESRadio } from '../Radio';

type Args = ComponentProps<typeof FormControlLabel> & {
  size?: 'large' | 'medium' | 'small';
  placement?: 'bottom' | 'end' | 'start' | 'top';
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: FormControlLabel,
  parameters: {
    references: ['FormControlLabel'],
  },
  argTypes: {
    control: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    placement: {
      control: {
        type: 'select',
      },
      options: ['bottom', 'end', 'start', 'top'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['large', 'medium', 'small'],
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <FormControlLabel control={<Checkbox size={args.size} />} label="Control" labelPlacement={args.placement} />
        <FormControlLabel control={<Checkbox size={args.size} />} label="Control" labelPlacement={args.placement} />
        <FormControlLabel control={<Checkbox size={args.size} />} label="Control" labelPlacement={args.placement} />
      </Box>
    );
  },
};

export const Radio: Story = {
  render: (args) => {
    return (
      <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <FormControlLabel
          control={<ESRadio name="radio" size={args.size} value="1" />}
          label="Control"
          labelPlacement={args.placement}
        />
        <FormControlLabel
          control={<ESRadio name="radio" size={args.size} value="2" />}
          label="Control"
          labelPlacement={args.placement}
        />
        <FormControlLabel
          control={<ESRadio name="radio" size={args.size} value="3" />}
          label="Control"
          labelPlacement={args.placement}
        />
      </Box>
    );
  },
};
