import { memo, useMemo } from 'react';

import { PaginationProps } from './Pagination.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { PaginationContext } from './Pagination.context';

/**
 * The Pagination component enables the user to select a specific page from a range of pages.
 */
export const Pagination = memo(function Pagination(inProps: PaginationProps) {
  const { className, style, children, count, itemsPerPage, page, onPageChange, onItemsPerPageChange } = useDefaultProps(
    {
      props: inProps,
      name: 'ESPagination',
    }
  );

  const value = useMemo(() => {
    return {
      count,
      itemsPerPage,
      page,
      onPageChange,
      onItemsPerPageChange,
    };
  }, [count, itemsPerPage, page, onPageChange, onItemsPerPageChange]);

  return (
    <PaginationContext.Provider value={value}>
      <div className={clsx('es-pagination', className)} style={style}>
        {children}
      </div>
    </PaginationContext.Provider>
  );
});
