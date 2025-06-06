import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FormHelperText } from '@mui/material';
import Box from '@mui/material-pigment-css/Box';
import FormControl from '@mui/material/FormControl';

import { FormControlLabel } from '.';

import { Checkbox } from '../Checkbox';
import { Radio as ESRadio } from '../Radio';
import { RadioGroup } from '../RadioGroup';

type Args = ComponentProps<typeof FormControlLabel> & {
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
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
      control: {
        type: 'text',
      },
    },
    labelPlacement: {
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          variant: args.size === 'small' ? ('body100' as const) : ('subtitle1' as const),
        },
      },
    };

    return (
      <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
        <FormControlLabel control={<Checkbox disabled={args.disabled} size={args.size} />} {...props} />
      </Box>
    );
  },
};

export const Radio: Story = {
  render: (args) => {
    const props = {
      label: args.label || 'Control',
      labelPlacement: args.labelPlacement,
      slotProps: {
        typography: {
          variant: args.size === 'small' ? ('body100' as const) : ('subtitle1' as const),
        },
      },
    };

    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{
            gap: '16px',
          }}
        >
          <FormControlLabel
            control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="1" />}
            {...props}
          />
          <FormControlLabel
            control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="2" />}
            {...props}
          />
          <FormControlLabel
            control={<ESRadio disabled={args.disabled} name="radio" size={args.size} value="3" />}
            {...props}
          />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const HelperText: Story = {
  render: (args) => {
    return (
      <Box alignItems="flex-start" display="flex" flexDirection="column" gap="16px">
        <div>
          <FormControlLabel control={<Checkbox size="large" />} label={args.label || 'Control'} />
          <FormHelperText sx={{ margin: '2px 0 0 32px' }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel control={<Checkbox size="medium" />} label={args.label || 'Control'} />
          <FormHelperText sx={{ margin: '2px 0 0 28px' }}>Helper text</FormHelperText>
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={args.label || 'Control'}
            slotProps={{ typography: { variant: 'body100' } }}
          />
          <FormHelperText sx={{ margin: '4px 0 0 24px' }}>Helper text</FormHelperText>
        </div>
      </Box>
    );
  },
};
