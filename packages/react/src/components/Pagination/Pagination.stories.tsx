import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Pagination } from './Pagination';
import { PaginationPages } from './PaginationPages';
import { PaginationRange } from './PaginationRange';

const meta: Meta<typeof Pagination> = {
  tags: ['autodocs'],
  component: Pagination,
  parameters: {
    references: ['Pagination', 'PaginationPages', 'PaginationRange'],
  },
  argTypes: {
    itemsPerPage: {
      table: {
        disable: true,
      },
    },
    page: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    count: 100,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Demo: Story = {
  render: function Render({ count }) {
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
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationRange />
        <PaginationPages />
      </Pagination>
    );
  },
};

/**
 * Use `slots.page`, `slots.previous` and `slots.next` to change the component rendered for the
 * numbered page items and for the previous and next buttons, and the matching `slotProps` callbacks to
 * give them page aware props.
 */
export const Links: Story = {
  render: function Render({ count }) {
    const [page, setPage] = useState(1);

    const [itemsPerPage, setItemsPerPage] = useState(10);

    const onItemsPerPageChange = (event: number) => {
      setItemsPerPage(event);
    };

    const onPageChange = (page: number) => {
      setPage(page);
    };

    const onClick = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    return (
      <Pagination
        count={count}
        itemsPerPage={itemsPerPage}
        page={page}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationRange />
        <PaginationPages
          slotProps={{
            page: (item) => ({ href: `#page=${item.page}`, onClick }),
            previous: (item) => ({ href: item.disabled ? undefined : `#page=${item.page}`, onClick }),
            next: (item) => ({ href: item.disabled ? undefined : `#page=${item.page}`, onClick }),
          }}
          slots={{ page: 'a', previous: 'a', next: 'a' }}
        />
      </Pagination>
    );
  },
};
