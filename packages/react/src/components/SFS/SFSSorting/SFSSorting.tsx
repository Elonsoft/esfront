import React, { memo, useState } from 'react';

import { SFSSortingProps } from './SFSSorting.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconSortAscending2LineW100, IconSortDescending2LineW100, IconSortOffLineW200 } from '../../../icons';
import { SortingMenu } from '../../SortingMenu';
import { SFSButton } from '../SFSButton';

export const SFSSorting = memo(function SFSSorting(inProps: SFSSortingProps) {
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
    <div className={clsx('es-sfs-sorting', className)} style={style}>
      <SFSButton active={!!values[0]} className="es-sfs-sorting__button" onClick={onMenuOpen}>
        <div className="body100">
          {values.length === 1 ? options.find((o) => o.value === values[0].value)?.label : labelButton}
        </div>
        {iconSort}
        {values.length === 1 && (
          <div className="es-sfs-button-badge es-sfs-sorting__button-badge">
            {values[0].direction === 'asc' ? iconAsc : iconDesc}
          </div>
        )}
        {values.length > 1 && (
          <div className="es-sfs-button-badge  es-sfs-sorting__button-badge mini200">{values.length}</div>
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
