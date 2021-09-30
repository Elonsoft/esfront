import { FC } from 'react';

import { TableActionsProps } from './TableActions.types';

import clsx from 'clsx';
import { getTableActionsUtilityClass } from './TableActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/core';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type TableActionsOwnerState = {
  classes?: TableActionsProps['classes'];
};

const useUtilityClasses = (ownerState: TableActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    text: ['text'],
    children: ['children']
  };

  return composeClasses(slots, getTableActionsUtilityClass, classes);
};

const TableActionsRoot = styled('div', {
  name: 'ESTableActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.A100,
  display: 'flex',
  padding: 8,
  paddingLeft: 24
}));

const TableActionsText = styled(Typography, {
  name: 'ESTableActions',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({ theme }) => ({
  color: theme.palette.monoA.A900,
  fontWeight: 500,
  marginRight: 'auto'
}));

const TableActionsChildren = styled('div', {
  name: 'ESTableActions',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.children
})(({ theme }) => ({
  alignItems: 'center',
  alignSelf: 'stretch',
  display: 'grid',
  gap: 2,
  gridAutoFlow: 'column',

  '& .MuiIconButton-root': {
    color: theme.palette.monoA.A700
  },
  '& .MuiDivider-root': {
    backgroundColor: theme.palette.monoA.A200,
    margin: '0 6px'
  }
}));

export const TableActions: FC<TableActionsProps> = (inProps) => {
  const { className, label, count, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableActions'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableActionsRoot className={clsx(classes.root, className)}>
      <TableActionsText className={classes.text} variant="body200">
        {label} {count}
      </TableActionsText>
      <TableActionsChildren className={classes.children}>{children}</TableActionsChildren>
    </TableActionsRoot>
  );
};
