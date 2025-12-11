import { FileIconBadgeProps } from './FileIconBadge.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const FileIconBadge = (inProps: FileIconBadgeProps) => {
  const {
    className,
    style,
    children,
    color,
    size = 'md',
  } = useDefaultProps({
    props: inProps,
    name: 'ESFileIconBadge',
  });

  return (
    <div
      className={clsx('es-file-icon-badge', `es-file-icon-badge--size--${size}`, 'mini100', className)}
      style={{ backgroundColor: color, ...style }}
    >
      {children}
    </div>
  );
};
