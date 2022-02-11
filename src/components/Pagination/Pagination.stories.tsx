import { useState } from 'react';

import { PaginationProps } from './Pagination.types';

import { Story } from '@storybook/react';

import { Pagination } from './Pagination';
import { PaginationPages } from './PaginationPages';
import { PaginationRange } from './PaginationRange';

export const Demo: Story<PaginationProps> = ({ count }) => {
  const [page, setPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const onItemsPerPageChange = (event: number) => {
    setItemsPerPage(event);
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Pagination
      count={count}
      itemsPerPage={itemsPerPage}
      page={page}
      onPageChange={onPageChange}
      onItemsPerPageChange={onItemsPerPageChange}
    >
      <PaginationRange />
      <PaginationPages />
    </Pagination>
  );
};
