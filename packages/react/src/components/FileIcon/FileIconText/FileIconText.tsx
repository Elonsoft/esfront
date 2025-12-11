import { FileIconTextProps } from './FileIconText.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const FileIconText = (inProps: FileIconTextProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESFileIconText',
  });

  return (
    <div className={clsx('es-file-icon-text', 'mini100', className)} style={style}>
      {children}
    </div>
  );
};
