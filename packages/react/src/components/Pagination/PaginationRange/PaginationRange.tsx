import { memo, useState } from 'react';

import { PaginationRangeProps } from './PaginationRange.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Menu from '@mui/material/Menu';

import { IconMenuDownFillW300 } from '../../../icons';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';
import { usePaginationContext } from '../Pagination.context';

const OPTIONS = [10, 25, 100];

export const PaginationRange = memo(function PaginationRange(inProps: PaginationRangeProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const {
    className,
    style,
    options = OPTIONS,
    labelItemsPerPage,
    labelOf,
    iconItemsPerPage = <IconMenuDownFillW300 container containerSize="16px" />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESPaginationRange',
  });

  const { count, itemsPerPage, page, onItemsPerPageChange, onPageChange } = usePaginationContext();

  const onClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuItemClick = (_event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(null);

    onItemsPerPageChange(options[index]);
    onPageChange(1);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={clsx('es-pagination-range', className)} style={style}>
      <div className="es-pagination-range__label caption">{labelItemsPerPage}</div>

      <Button
        aria-expanded={open ? 'true' : undefined}
        className={clsx('es-pagination-range__button', className)}
        color="tertiary"
        endIcon={iconItemsPerPage}
        size="400"
        onClick={onClickListItem}
      >
        <span className="caption">{itemsPerPage}</span>
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        {options.map((option, index) => (
          <MenuItem key={option} selected={index === itemsPerPage} onClick={(event) => onMenuItemClick(event, index)}>
            <span className="caption">{option}</span>
          </MenuItem>
        ))}
      </Menu>

      <div className="es-pagination-range__value caption">
        {(page - 1) * itemsPerPage + (count ? 1 : 0)}–{Math.min(page * itemsPerPage, count)} {labelOf} {count}
      </div>
    </div>
  );
});
