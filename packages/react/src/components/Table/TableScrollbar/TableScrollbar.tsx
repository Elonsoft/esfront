import { memo } from 'react';

import { TableScrollbarProps } from './TableScrollbar.types';

import clsx from 'clsx';
import { getTableScrollbarUtilityClass } from './TableScrollbar.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { useTableScrollbarContext } from './TableScrollbar.context';

type TableOwnerState = {
  classes?: TableScrollbarProps['classes'];
};

const useUtilityClasses = (ownerState: TableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getTableScrollbarUtilityClass, classes);
};

const TableScrollbarRoot = styled('div', {
  name: 'ESTableScrollbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  ...theme.scrollbars.thinMonoA,
  overflowX: 'auto',
}));

export const TableScrollbar = memo(function TableScrollbar(inProps: TableScrollbarProps) {
  const { className, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESTableScrollbar',
  });

  const { width, setRef } = useTableScrollbarContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableScrollbarRoot ref={setRef} className={clsx(className, classes.root)}>
      <div style={{ width: `${width}px`, height: '1px' }} />
    </TableScrollbarRoot>
  );
});
