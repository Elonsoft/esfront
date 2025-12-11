import { SFSChipsProps } from './SFSChips.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW400 } from '../../../icons';
import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';

export const SFSChips = (inProps: SFSChipsProps) => {
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
    <div className={clsx('es-sfs-chips', className)} style={style}>
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
