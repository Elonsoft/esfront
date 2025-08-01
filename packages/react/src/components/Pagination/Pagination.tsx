import { memo, useMemo } from 'react';

import { PaginationProps } from './Pagination.types';

import clsx from 'clsx';
import { getPaginationUtilityClass } from './Pagination.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

import { PaginationContext } from './Pagination.context';

type PaginationOwnerState = {
  classes?: PaginationProps['classes'];
};

const useUtilityClasses = (ownerState: PaginationOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPaginationUtilityClass, classes);
};

const PaginationRoot = styled('div', {
  name: 'ESPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12,
  '& > *:first-of-type': {
    flexGrow: 0.5,
    marginLeft: 'auto',
  },
  '& > *:last-of-type': {
    flexGrow: 0.5,
    justifyContent: 'flex-end',
  },
});

/**
 * The Pagination component enables the user to select a specific page from a range of pages.
 */
export const Pagination = memo(function Pagination(inProps: PaginationProps) {
  const { className, sx, children, count, itemsPerPage, page, onPageChange, onItemsPerPageChange, ...props } =
    useDefaultProps({
      props: inProps,
      name: 'ESPagination',
    });

  const value = useMemo(() => {
    return {
      count,
      itemsPerPage,
      page,
      onPageChange,
      onItemsPerPageChange,
    };
  }, [count, itemsPerPage, page, onPageChange, onItemsPerPageChange]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PaginationContext.Provider value={value}>
      <PaginationRoot className={clsx(classes.root, className)} sx={sx}>
        {children}
      </PaginationRoot>
    </PaginationContext.Provider>
  );
});
