import { useState } from 'react';

import { Story } from '@storybook/react';

import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
