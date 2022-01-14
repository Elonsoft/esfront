import { FC, useMemo } from 'react';

import { PaginationProps } from './Pagination.types';

import clsx from 'clsx';
import { getPaginationUtilityClass } from './Pagination.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { PaginationContext } from './Pagination.context';

type PaginationOwnerState = {
  classes?: PaginationProps['classes'];
};

const useUtilityClasses = (ownerState: PaginationOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getPaginationUtilityClass, classes);
};

const PaginationRoot = styled('div', {
  name: 'ESPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 12
}));

export const Pagination: FC<PaginationProps> = (inProps) => {
  const { className, sx, children, count, itemsPerPage, page, onPageChange, onItemsPerPageChange, ...props } =
    useThemeProps({
      props: inProps,
      name: 'ESPagination'
    });

  const value = useMemo(() => {
    return {
      count,
      itemsPerPage,
      page,
      onPageChange,
      onItemsPerPageChange
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
};
