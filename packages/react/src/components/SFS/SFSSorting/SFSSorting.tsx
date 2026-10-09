'use client';

import React, { memo, RefAttributes, useState } from 'react';

import { SFSSortingProps } from './SFSSorting.types';

import clsx from 'clsx';

import { IconSortAscending2LineW100, IconSortDescending2LineW100, IconSortOffLineW200 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { SortingMenu } from '../../SortingMenu';
import { SFSButton } from '../SFSButton';

/**
 * @see `SFS`
 */
export const SFSSorting = memo(function SFSSorting({
  ref,
  ...inProps
}: SFSSortingProps & RefAttributes<HTMLDivElement>) {
  const {
    className,
    style,

    options,

    labelButton,
    iconSort = <IconSortOffLineW200 />,
    iconAsc = <IconSortAscending2LineW100 container containerSize="16px" />,
    iconDesc = <IconSortDescending2LineW100 container containerSize="16px" />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSSorting',
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  return (
    <div ref={ref} className={clsx('es-sfs-sorting', className)} style={style}>
      <SFSButton active={!!values[0]} className="es-sfs-sorting__button" onClick={onMenuOpen}>
        <span className="body100">
          {values.length === 1 ? options.find((o) => o.value === values[0].value)?.label : labelButton}
        </span>
        {iconSort}
        {values.length === 1 && (
          <span className="es-sfs-button-badge es-sfs-sorting__button-badge">
            {values[0].direction === 'asc' ? iconAsc : iconDesc}
          </span>
        )}
        {values.length > 1 && (
          <span className="es-sfs-button-badge  es-sfs-sorting__button-badge mini200">{values.length}</span>
        )}
      </SFSButton>
      <SortingMenu
        PopoverProps={{
          anchorEl: menuAnchor,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          open: !!menuAnchor,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          onClose: onMenuClose,
        }}
        options={options}
        {...props}
      />
    </div>
  );
});
