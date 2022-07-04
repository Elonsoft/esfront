import { useState } from 'react';

import { SFSSortingValue } from './SFSSorting/SFSSorting.types';

import { Args, Story } from '@storybook/react';

import Divider from '@mui/material/Divider';

import { SFS, SFSRow, SFSSearch, SFSSorting } from '..';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySaledStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount' },
  { label: 'Square', value: 'bySquare' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySaledStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' }
];

export const Demo: Story<Args> = (args, { globals: { locale } }) => {
  const [search, setSearch] = useState('');

  const [value, setValue] = useState<SFSSortingValue | null>(null);
  const [values, setValues] = useState<SFSSortingValue[]>([]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.currentTarget.value);
  };

  const onClearSearch = () => {
    setSearch('');
  };

  return (
    <SFS>
      <SFSRow>
        <SFSSearch onChange={onSearchChange} onClear={search ? onClearSearch : undefined} value={search} />
        {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
        {args.SFSSortingMultiple ? (
          <SFSSorting
            key="1"
            multiple
            value={values}
            onChange={setValues}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        ) : (
          <SFSSorting
            key="2"
            value={value}
            onChange={setValue}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        )}
      </SFSRow>
    </SFS>
  );
};
