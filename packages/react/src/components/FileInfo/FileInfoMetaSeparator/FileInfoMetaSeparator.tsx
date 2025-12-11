import { FileInfoMetaSeparatorProps } from './FileInfoMetaSeparator.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const FileInfoMetaSeparator = (inProps: FileInfoMetaSeparatorProps) => {
  const { className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfoMetaSeparator' });

  return (
    <div className={clsx(className, 'es-file-info-meta-separator')} style={style}>
      •
    </div>
  );
};
