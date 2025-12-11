import { FileInfoMetaProps } from './FileInfoMeta.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const FileInfoMeta = (inProps: FileInfoMetaProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoMeta' });

  return (
    <div className={clsx(className, 'es-file-info-meta', 'caption')} style={style}>
      {children}
    </div>
  );
};
