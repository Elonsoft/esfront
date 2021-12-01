import { useState } from 'react';

import { Story } from '@storybook/react';

import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { Table } from './Table';
import { TableActions } from './TableActions';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableScrollable } from './TableScrollable';
import { TableScrollbar } from './TableScrollbar';
import { TableText } from './TableText';

import { IconClose, IconDotsVerticalLarge, IconPencilOutline } from '../../icons';
import { Pagination, PaginationPages, PaginationRange } from '../Pagination';

const DATA: Array<{
  en: {
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  };
  ru: {
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  };
}> = [];

const NAMES = {
  en: {
    id: 'ID',
    name: 'Name',
    age: 'Age',
    status: 'Status',
    city: 'City'
  },
  ru: {
    id: 'ID',
    name: 'ФИО',
    age: 'Возраст',
    status: 'Статус',
    city: 'Город'
  }
};

for (let i = 0; i < 50; i++) {
  DATA.push({
    en: {
      id: i + 1,
      name: 'John Doe',
      age: 25,
      status: 'Active',
      city: 'New York City'
    },
    ru: {
      id: i + 1,
      name: 'Иванов Иван Иванович',
      age: 25,
      status: 'Активен',
      city: 'Иваново'
    }
  });
}

export const Demo: Story = (args, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  const [fields] = useState<Array<keyof typeof DATA[0]['en']>>(['id', 'name', 'age', 'status', 'city']);
  const [columns] = useState([
    '56px',
    'minmax(100px, 1fr)',
    'minmax(200px, 2fr)',
    '150px',
    'minmax(400px, 1fr)',
    'minmax(200px, 1fr)',
    '64px'
  ]);

  const [selected, setSelected] = useState<number[]>([]);

  const onSelectAll = () => {
    if (selected.length === DATA.length) {
      setSelected([]);
    } else {
      setSelected(DATA.map((row) => row[locale].id));
    }
  };

  const onSelect = (id: number) => () => {
    const index = selected.indexOf(id);
    if (index === -1) {
      setSelected(selected.concat(id));
    } else {
      const newSelected = selected.slice();
      newSelected.splice(index, 1);
      setSelected(newSelected);
    }
  };

  const onClose = () => {
    setSelected([]);
  };

  return (
    <Table columns={columns}>
      <TableScrollable>
        <TableHead sticky={0}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selected.length > 0 && selected.length < DATA.length}
                checked={selected.length > 0 && selected.length === DATA.length}
                onChange={onSelectAll}
                inputProps={{ 'aria-label': selected.length === DATA.length ? 'Unselect all' : 'Select all' }}
                color="secondary"
              />
            </TableCell>
            <TableCell colSpan={3}>{locale === 'en' ? 'Group 1' : 'Группа 1'}</TableCell>
            <TableCell colSpan={2}>{locale === 'en' ? 'Group 2' : 'Группа 2'}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell padding="checkbox" />
            {fields.map((field) => (
              <TableCell key={field}>{NAMES[locale][field]}</TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA.map((row) => {
            const isSelected = selected.indexOf(row[locale].id) !== -1;
            const labelId = `story-usage-checkbox-${row[locale].id}`;

            return (
              <TableRow key={row[locale].id} hover selected={isSelected} component="button">
                <TableCell padding="checkbox" overlap>
                  <Checkbox
                    checked={isSelected}
                    onChange={onSelect(row[locale].id)}
                    inputProps={{ 'aria-labelledby': labelId }}
                    color="secondary"
                  />
                </TableCell>
                {fields.map((field) => (
                  <TableCell key={field} id={field === 'name' ? labelId : undefined}>
                    <TableText>{row[locale][field]}</TableText>
                  </TableCell>
                ))}
                <TableCell overlap>
                  <IconButton aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                    <IconDotsVerticalLarge />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableScrollable>
      <TableFoot sticky={0}>
        {!!selected.length && (
          <TableActions
            sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.monoA.A100}` })}
            label={locale === 'en' ? 'Selected' : 'Выбрано'}
            count={selected.length}
          >
            <IconButton aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
              <IconPencilOutline />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={onClose} aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'}>
              <IconClose />
            </IconButton>
          </TableActions>
        )}
        <TableScrollbar />
        <Pagination
          sx={{ padding: '12px', paddingLeft: '16px' }}
          count={100}
          page={1}
          onPageChange={() => {
            /* */
          }}
          itemsPerPage={10}
          onItemsPerPageChange={() => {
            /* */
          }}
        >
          <PaginationRange />
          <PaginationPages />
        </Pagination>
      </TableFoot>
    </Table>
  );
};
