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
  const [values, setValues] = useState<SFSSortingValue | null>(null);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.currentTarget.value);
  };

  const onClearSearch = () => {
    setSearch('');
  };

  console.log(args);

  return (
    <SFS>
      <SFSRow>
        <SFSSearch onChange={onSearchChange} onClear={search ? onClearSearch : undefined} value={search} />
        {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
        <SFSSorting
          multiple={args.multiple}
          values={values}
          onChange={setValues}
          options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
        />
      </SFSRow>
    </SFS>
  );
};
