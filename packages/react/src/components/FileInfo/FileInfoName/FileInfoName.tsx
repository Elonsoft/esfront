import { FileInfoNameProps } from './FileInfoName.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW350 } from '../../../icons';
import { Button } from '../../Button';

export const FileInfoName = (inProps: FileInfoNameProps) => {
  const {
    children,
    className,
    style,
    onDelete,
    labelDelete,
    iconDelete = <IconCloseLineW350 />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFileInfoName',
  });

  return (
    <div className={clsx(className, 'es-file-info-name')}>
      {children}
      {!!onDelete && (
        <Button
          aria-label={labelDelete}
          className="es-file-info-name__button"
          size="300"
          style={style}
          onClick={onDelete}
        >
          {iconDelete}
        </Button>
      )}
    </div>
  );
};
