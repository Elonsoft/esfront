import { useRef, useState } from 'react';

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
import { TableScrollbar } from './TableScrollbar';
import { TableText } from './TableText';
import { useTableResize } from './useTableResize';
import { useTableSelection } from './useTableSelection';

import { IconCloseW600, IconDotsVerticalW500, IconPencilW500 } from '../../icons';
import { Pagination, PaginationPages, PaginationRange } from '../Pagination';

const DATA: {
  en: Array<{
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  }>;
  ru: Array<{
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  }>;
} = { en: [], ru: [] };

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
  DATA.en.push({
    id: i + 1,
    name: 'John Doe',
    age: 25,
    status: 'Active',
    city: 'New York City'
  });

  DATA.ru.push({
    id: i + 1,
    name: 'Иванов Иван Иванович',
    age: 25,
    status: 'Активен',
    city: 'Иваново'
  });
}

export const Demo: Story = (args, context) => {
  const locale = (context.globals.locale || 'en') as 'en' | 'ru';

  const ref = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);

  const [fields] = useState<Array<keyof typeof DATA['en'][0]>>(['id', 'name', 'age', 'status', 'city']);
  const [columns, setColumns] = useState([
    '56px',
    'minmax(50px, 1fr)',
    'minmax(150px, 2fr)',
    '150px',
    'minmax(100px, 2fr)',
    'minmax(100px, 1fr)',
    'minmax(64px, auto)'
  ]);

  const { onResize, onResizeCommit } = useTableResize(ref, rowRef, columns, setColumns);

  const { selected, setSelected, isAllSelected, isSomeSelected, toggle, toggleAll } = useTableSelection(DATA[locale], {
    key: 'id'
  });

  const onClose = () => {
    setSelected([]);
  };

  return (
    <>
      <Table ref={ref} columns={columns}>
        <TableHead sticky={0}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={isAllSelected}
                color="secondary"
                indeterminate={isSomeSelected}
                inputProps={{ 'aria-label': isAllSelected ? 'Unselect all' : 'Select all' }}
                onChange={() => toggleAll()}
              />
            </TableCell>
            <TableCell colSpan={3} onResize={onResize(1, 3)} onResizeCommit={onResizeCommit(1, 3)}>
              {locale === 'en' ? 'Group 1' : 'Группа 1'}
            </TableCell>
            <TableCell colSpan={2} onResize={onResize(4, 2)} onResizeCommit={onResizeCommit(4, 2)}>
              {locale === 'en' ? 'Group 2' : 'Группа 2'}
            </TableCell>
            <TableCell />
          </TableRow>
          <TableRow ref={rowRef}>
            <TableCell padding="checkbox" />
            {fields.map((field, index) => (
              <TableCell
                key={field}
                minWidth={100}
                onResize={onResize(index + 1)}
                onResizeCommit={onResizeCommit(index + 1)}
              >
                <TableText>{NAMES[locale][field]}</TableText>
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA[locale].map((row) => {
            const isSelected = selected.indexOf(row.id) !== -1;
            const labelId = `story-usage-checkbox-${row.id}`;

            return (
              <TableRow key={row.id} hover component="button" selected={isSelected}>
                <TableCell overlap padding="checkbox">
                  <Checkbox
                    checked={isSelected}
                    color="secondary"
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={() => toggle(row.id)}
                  />
                </TableCell>
                {fields.map((field) => (
                  <TableCell key={field} id={field === 'name' ? labelId : undefined}>
                    <TableText>{row[field]}</TableText>
                  </TableCell>
                ))}
                <TableCell overlap align="flex-end">
                  <IconButton aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                    <IconDotsVerticalW500 />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFoot sticky={0}>
          {!!selected.length && (
            <TableActions
              count={selected.length}
              label={locale === 'en' ? 'Selected' : 'Выбрано'}
              sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.monoA.A100}` })}
            >
              <IconButton aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                <IconPencilW500 />
              </IconButton>
              <Divider flexItem orientation="vertical" />
              <IconButton aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                <IconCloseW600 />
              </IconButton>
            </TableActions>
          )}
          <TableScrollbar />
          <Pagination
            count={100}
            itemsPerPage={10}
            page={1}
            sx={{ padding: '12px', paddingLeft: '16px' }}
            onItemsPerPageChange={() => {
              /* */
            }}
            onPageChange={() => {
              /* */
            }}
          >
            <PaginationRange />
            <PaginationPages boundaryCount={0} siblingCount={0} />
          </Pagination>
        </TableFoot>
      </Table>
    </>
  );
};
