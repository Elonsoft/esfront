import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { capitalize } from '@mui/material/utils';

import { PhoneField } from '.';

import { IconGlobalLineW500 } from '../../icons';
import * as Flags from '../Flags/icons';

import { CountryCode, getCountries } from 'libphonenumber-js';

const meta: Meta<typeof PhoneField> = {
  tags: ['autodocs'],
  component: PhoneField,
  parameters: {
    references: ['PhoneField'],
  },
  argTypes: {
    focused: {
      table: {
        disable: true,
      },
    },
    hiddenLabel: {
      table: {
        disable: true,
      },
    },
    margin: {
      table: {
        disable: true,
      },
    },
    countries: {
      control: { type: 'select' },
    },
  },
  args: {
    countries: ['RU', 'KZ', 'US', 'GB', 'GE', 'VU'],
    label: 'Телефон',
  },
};

export default meta;
type Story = StoryObj<typeof PhoneField>;

const getCountryFlag = (country: CountryCode | null) => {
  const FlagComponent = country ? Flags[`Flag${capitalize(country.toLowerCase())}` as keyof typeof Flags] : null;
  return FlagComponent ? <FlagComponent /> : <IconGlobalLineW500 />;
};

export const Demo: Story = {
  render: (args) => {
    return <PhoneField {...args} getCountryFlag={getCountryFlag} sx={{ width: '250px', marginTop: '30px' }} />;
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('+7950');

    return (
      <div>
        <div>
          <PhoneField
            {...args}
            getCountryFlag={getCountryFlag}
            sx={{ width: '250px', marginTop: '30px' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button onClick={() => setValue('+79509999999')}>Set example phone</button>
      </div>
    );
  },
};

export const DefaultCountry: Story = {
  render: (args) => {
    return (
      <PhoneField
        {...args}
        defaultCountry="RU"
        getCountryFlag={getCountryFlag}
        sx={{ width: '250px', marginTop: '30px' }}
      />
    );
  },
};

export const AllCountries: Story = {
  render: (args) => {
    return (
      <PhoneField
        {...args}
        countries={getCountries()}
        getCountryFlag={getCountryFlag}
        sx={{ width: '250px', marginTop: '30px' }}
      />
    );
  },
};

export const SingleCountry: Story = {
  render: (args) => {
    return <PhoneField {...args} countries={['RU']} getCountryFlag={getCountryFlag} />;
  },
};

export const WithoutButton: Story = {
  render: (args) => {
    return <PhoneField {...args} InputProps={{ startAdornment: null }} countries={['RU']} />;
  },
};
