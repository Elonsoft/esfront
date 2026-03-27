import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { usePermission } from './usePermission';

import { AutocompleteField } from '../../components/AutocompleteField';

const PERMISSIONS = [
  'camera',
  'geolocation',
  'microphone',
  'midi',
  'notifications',
  'persistent-storage',
  'push',
  'screen-wake-lock',
  'speaker',
  'xr-spatial-tracking',
];

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/usePermission',
  parameters: {
    references: ['usePermission'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [permission, setPermission] = useState<any>('camera');
    const state = usePermission({ name: permission });

    return (
      <>
        <div style={{ maxWidth: '320px' }}>
          <AutocompleteField
            fullWidth
            getOptionLabel={(option: string) => option}
            getOptionValue={(option: string) => option}
            label="Permission"
            options={PERMISSIONS}
            size="500"
            value={permission}
            onChange={(value) => setPermission(value)}
          />
        </div>
        <div className="body200 mt-8">Permission status: {JSON.stringify(state, null, 2)}</div>
      </>
    );
  },
};
