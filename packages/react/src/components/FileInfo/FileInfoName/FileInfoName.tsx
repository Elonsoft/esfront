'use client';

import { RefAttributes } from 'react';

import { FileInfoNameProps } from './FileInfoName.types';

import clsx from 'clsx';

import { IconCloseLineW350 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * @see `FileInfo`
 */
export const FileInfoName = ({ ref, ...inProps }: FileInfoNameProps & RefAttributes<HTMLDivElement>) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESFileInfoName',
  });

  const {
    children,
    className,
    style,
    onDelete,
    labelDelete,
    iconDelete = <IconCloseLineW350 />,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESFileInfoName',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-file-info-name')}>
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
