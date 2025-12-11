import { Fragment, memo, useState } from 'react';

import { PaginationPagesProps } from './PaginationPages.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import TextField from '@mui/material/TextField';

import { useDocumentEventListener, usePagination } from '../../../hooks';
import {
  IconArrowLeft2LineW300,
  IconArrowRight2LineW300,
  IconChevronLeftLineW400,
  IconChevronRightLineW400,
  IconDotsHorizontalLineW100,
} from '../../../icons';
import { Button } from '../../Button';
import { ButtonBase } from '../../ButtonBase';
import { Tooltip } from '../../Tooltip';
import { usePaginationContext } from '../Pagination.context';

const REGEX = /^[0-9]*$/;

export const PaginationPages = memo(function PaginationPages(inProps: PaginationPagesProps) {
  const {
    className,
    style,
    boundaryCount,
    siblingCount,
    labelPrevPage,
    labelNextPage,
    labelPage,
    iconPrevPage = <IconChevronLeftLineW400 />,
    iconNextPage = <IconChevronRightLineW400 />,
    iconEllipsis = <IconDotsHorizontalLineW100 />,
    iconTooltipPrevPage = <IconArrowLeft2LineW300 />,
    iconTooltipNextPage = <IconArrowRight2LineW300 />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESPaginationPages',
  });

  const { count, itemsPerPage, page, onPageChange } = usePaginationContext();

  const [state, setState] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (REGEX.test(event.target.value)) {
      setState(event.target.value);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    const inputValue = (event.target as HTMLInputElement).value;

    if (event.key === 'Enter' && inputValue) {
      onPageChange(Math.min(Math.ceil(count / itemsPerPage), Math.max(1, +state)));
      setState('');
    }
  };

  const onPaginationPageChange = (event: React.ChangeEvent<unknown>, page: number | null) => {
    if (page) {
      onPageChange(page);
    }
  };

  useDocumentEventListener('keydown', (event) => {
    if (event.ctrlKey) {
      if (event.key === 'ArrowLeft') {
        onPageChange(Math.max(1, page - 1));
      } else if (event.key === 'ArrowRight') {
        onPageChange(Math.min(Math.ceil(count / itemsPerPage), page + 1));
      }
    }
  });

  const { items } = usePagination({
    boundaryCount,
    page,
    count: Math.ceil(count / itemsPerPage),
    ...props,
    componentName: 'Pagination',
    siblingCount,
    onChange: onPaginationPageChange,
  });

  return (
    <div className={clsx('es-pagination-pages', className)} style={style}>
      <ul className="es-pagination-pages__pagination">
        {items.map((item) => {
          return (
            <Fragment key={`${item.type}${item.page}`}>
              {item.type === 'previous' || item.type === 'next' ? (
                <Button
                  aria-label={`${item.type === 'next' ? labelNextPage : labelPrevPage}`}
                  className="es-pagination-pages__button"
                  disabled={item.disabled}
                  size="400"
                  onClick={item.onClick}
                >
                  {item.type === 'previous' ? iconPrevPage : iconNextPage}
                </Button>
              ) : item.type === 'start-ellipsis' || item.type === 'end-ellipsis' ? (
                <div className="es-pagination-pages__ellipsis">{iconEllipsis}</div>
              ) : (
                <Tooltip
                  arrow
                  placement="top"
                  slotProps={{ popper: { className: 'es-pagination-pages__tooltip' } }}
                  title={
                    <>
                      {iconTooltipPrevPage} Ctrl {iconTooltipNextPage}
                    </>
                  }
                >
                  <ButtonBase
                    className={clsx(
                      'es-pagination-pages__pagination-item',
                      item.selected && 'es-pagination-pages__pagination-item--selected',
                      'caption'
                    )}
                    data-selected={item.selected}
                    disabled={item.disabled}
                    onClick={item.onClick}
                  >
                    {item.page}
                  </ButtonBase>
                </Tooltip>
              )}
            </Fragment>
          );
        })}
      </ul>
      <TextField
        className="es-pagination-pages__text-field"
        placeholder={`${page} ${labelPage}`}
        size="32"
        type="text"
        value={state}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
});
