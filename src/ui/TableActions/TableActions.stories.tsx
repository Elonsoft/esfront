import { useState } from 'react';

import { Story } from '@storybook/react';

import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TableActions } from './TableActions';

export const Demo: Story = (args) => {
  return (
    <TableActions {...args}>
      <IconButton aria-label="Edit">
        <Icon>edit</Icon>
      </IconButton>
      <IconButton aria-label="Archve">
        <Icon>archive</Icon>
      </IconButton>
      <IconButton aria-label="Delete">
        <Icon>delete</Icon>
      </IconButton>
      <Divider orientation="vertical" flexItem />
      <IconButton aria-label="Unselect all">
        <Icon>close</Icon>
      </IconButton>
    </TableActions>
  );
};

const ROWS = [
  {
    id: 1,
    name: 'Name 1'
  },
  {
    id: 2,
    name: 'Name 2'
  },
  {
    id: 3,
    name: 'Name 3'
  }
];

export const Usage: Story = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const onSelectAll = () => {
    if (selected.length === ROWS.length) {
      setSelected([]);
    } else {
      setSelected(ROWS.map((row) => row.id));
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
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < ROWS.length}
                  checked={selected.length > 0 && selected.length === ROWS.length}
                  onChange={onSelectAll}
                  inputProps={{ 'aria-label': selected.length === ROWS.length ? 'Unselect all' : 'Select all' }}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => {
              const isSelected = selected.indexOf(row.id) !== -1;
              const labelId = `story-usage-checkbox-${row.id}`;

              return (
                <TableRow key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={onSelect(row.id)}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell id={labelId}>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!!selected.length && (
        <TableActions count={selected.length}>
          <IconButton aria-label="Edit">
            <Icon>edit</Icon>
          </IconButton>
          <IconButton aria-label="Edit">
            <Icon>archive</Icon>
          </IconButton>
          <IconButton aria-label="Edit">
            <Icon>delete</Icon>
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton onClick={onClose} aria-label="Unselect all">
            <Icon>close</Icon>
          </IconButton>
        </TableActions>
      )}
    </div>
  );
};
