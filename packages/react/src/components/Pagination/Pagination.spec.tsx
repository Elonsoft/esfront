import { fireEvent, render, screen } from '../../testing';

import { Pagination, PaginationPages, PaginationRange } from '.';

describe('Pagination', () => {
  it('Should change page when user clicks the button', () => {
    const onPageChange = jest.fn();
    const onItemsPerPageChange = jest.fn();
    render(
      <Pagination
        count={100}
        itemsPerPage={10}
        page={1}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationPages />
      </Pagination>
    );
    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('Should change page when user enters page in the input', () => {
    const onPageChange = jest.fn();
    const onItemsPerPageChange = jest.fn();
    render(
      <Pagination
        count={100}
        itemsPerPage={10}
        page={1}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationPages />
      </Pagination>
    );

    const paginationPagesTextField = screen.getByPlaceholderText('1 page');
    fireEvent.change(paginationPagesTextField, { target: { value: '2' } });
    fireEvent.keyPress(paginationPagesTextField, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onPageChange).toHaveBeenCalledWith(2);

    fireEvent.change(paginationPagesTextField, { target: { value: '0' } });
    fireEvent.keyPress(paginationPagesTextField, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.change(paginationPagesTextField, { target: { value: '900' } });
    fireEvent.keyPress(paginationPagesTextField, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onPageChange).toHaveBeenCalledWith(10);
  });

  it('Should prevent entering words in the page input', () => {
    const onPageChange = jest.fn();
    const onItemsPerPageChange = jest.fn();
    render(
      <Pagination
        count={100}
        itemsPerPage={10}
        page={1}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationPages />
      </Pagination>
    );

    const paginationPagesTextField = screen.getByPlaceholderText('1 page');
    fireEvent.change(paginationPagesTextField, { target: { value: 2 } });
    expect(paginationPagesTextField).toHaveValue('2');

    fireEvent.change(paginationPagesTextField, { target: { value: 'A' } });
    expect(paginationPagesTextField).toHaveValue('2');
  });

  it('Should change items per page when user selects new value in menu', () => {
    const onPageChange = jest.fn();
    const onItemsPerPageChange = jest.fn();
    render(
      <Pagination
        count={100}
        itemsPerPage={10}
        page={1}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
      >
        <PaginationRange />
      </Pagination>
    );
    fireEvent.click(screen.getByText('10'));
    fireEvent.click(screen.getByText('25'));
    expect(onItemsPerPageChange).toHaveBeenCalledWith(25);
  });
});
