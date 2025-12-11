import { DialogCloseProps } from './DialogClose.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW600 } from '../../../icons';
import { Button } from '../../Button';

export const DialogClose = (inProps: DialogCloseProps) => {
  const {
    className,
    style,
    onClick,
    label,
    labelEscapeKey,
    icon = <IconCloseLineW600 />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDialogClose',
  });

  return (
    <div className={clsx('es-dialog-close', className)} style={style}>
      <Button aria-label={label} className="es-dialog-close__button" color="white" onClick={onClick}>
        {icon}
        <div className="es-dialog-close__escape-key caption">{labelEscapeKey}</div>
      </Button>
    </div>
  );
};
