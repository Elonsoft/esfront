import React, { useEffect, useState } from 'react';

import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { Box, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { ClearButton } from '.';

import { IconCloseW350, IconMenuDownW400 } from '../../icons';
import { AutocompleteField } from '../AutocompleteField';
import { Button } from '../Button';

interface AGE {
  value: string;
  name: string;
}

const AGES: { en: AGE[]; ru: AGE[] } = {
  en: [
    { value: 'twenty', name: 'Twenty' },
    { value: 'thirty', name: 'Thirty' },
  ],
  ru: [
    { value: 'twenty', name: 'Двадцать' },
    { value: 'thirty', name: 'Тридцать' },
  ],
};

const meta: Meta<typeof ClearButton> = {
  tags: ['autodocs'],
  component: ClearButton,
  parameters: {
    references: ['ClearButton'],
  },
  argTypes: {
    ariaLabel: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'select' },
    },
  },
  args: {
    size: '300',
  },
};

export default meta;
type Story = StoryObj<typeof ClearButton>;

const DemoWrapper = (args: Args, context: StoryContext<unknown>) => {
  const [search, setSearch] = useState('');

  const [age, setAge] = useState<AGE | null>(null);

  const [options, setOptions] = useState<AGE[]>([]);

  const locale = (context.globals?.locale || 'en') as 'en' | 'ru';

  const icon =
    args.size === '100' ? (
      <IconCloseW350 size="12px" />
    ) : args.size === '200' ? (
      <IconCloseW350 size="16px" />
    ) : args.size === '300' ? (
      <IconCloseW350 size="20px" />
    ) : (
      <IconCloseW350 />
    );

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    setOptions(AGES[locale as 'en' | 'ru']);
  }, [locale]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '360px' }}>
      <TextField
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {search && <ClearButton {...args} icon={icon} size={args.size} onClick={() => setSearch('')} />}
            </InputAdornment>
          ),
        }}
        label={locale === 'en' ? 'First name' : 'Имя'}
        value={search}
        onChange={onSearchChange}
      />
      <AutocompleteField
        closeAfterSelect
        fullWidth
        InputLabelProps={age ? { shrink: true } : undefined}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                '.MuiTypography-root': {
                  color: 'monoA.A500',
                },
              }}
            >
              {age && <ClearButton {...args} icon={icon} size={args.size} onClick={() => setAge(null)} />}
              <Button
                aria-label="Открыть"
                color="monoA"
                sx={{
                  '& .ESSvgIcon-svg': {
                    color: 'monoA.A500',
                  },
                }}
                variant="text"
              >
                <IconMenuDownW400 />
              </Button>
            </InputAdornment>
          ),
        }}
        label={locale === 'en' ? 'Age ' : 'Возраст'}
        multiple={false}
        options={options}
        sx={age ? { '& legend': { maxWidth: '100%' } } : undefined}
        value={age}
        onChange={(value) => setAge(value)}
        {...{
          getDisplayValue: (value: AGE | null) => value?.name,
          getOptionLabel: (value: AGE | null) => value?.name,
          getOptionValue: (value: AGE) => value.value,
        }}
      />
    </Box>
  );
};

export const Demo: Story = {
  render: (args) => {
    return <DemoWrapper {...args} />;
  },
};
