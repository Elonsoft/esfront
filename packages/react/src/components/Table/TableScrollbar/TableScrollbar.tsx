import { forwardRef, memo } from 'react';

import { TableScrollbarProps } from './TableScrollbar.types';

import clsx from 'clsx';
import { getTableScrollbarUtilityClass } from './TableScrollbar.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';
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

export const TableScrollbar = memo(
  forwardRef<HTMLDivElement, TableScrollbarProps>(function TableScrollbar(inProps, inRef) {
    const { className, sx, ...props } = useDefaultProps({
      props: inProps,
      name: 'ESTableScrollbar',
    });

    const { width, setRef } = useTableScrollbarContext();

    const rootRef = useForkRef(setRef, inRef);

    const ownerState = { ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableScrollbarRoot ref={rootRef} className={clsx(className, classes.root)} sx={sx}>
        <div style={{ width: `${width}px`, height: '1px' }} />
      </TableScrollbarRoot>
    );
  })
);
