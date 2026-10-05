'use client';

import { RefAttributes } from 'react';

import { SFSChipsProps } from './SFSChips.types';

import clsx from 'clsx';

import { IconCloseLineW400 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';

/**
 * @see `SFS`
 */
export const SFSChips = ({ ref, ...inProps }: SFSChipsProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    children,
    style,
    labelDelete,
    iconDelete = <IconCloseLineW400 container containerSize="20px" />,
    onDelete,
    TooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSFSChips',
  });

  return (
    <div ref={ref} className={clsx('es-sfs-chips', className)} style={style}>
      {children}
      {!!onDelete && (
        <Tooltip distance={2} placement="left" title={labelDelete} {...TooltipProps}>
          <Button
            rounded
            aria-label={labelDelete}
            className="es-sfs-chips__button"
            color="tertiary"
            size="300"
            variant="text"
            onClick={onDelete}
          >
            {iconDelete}
          </Button>
        </Tooltip>
      )}
    </div>
  );
};
