import { FileInfoProps } from './FileInfo.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component displays file information.
 */
export const FileInfo = (inProps: FileInfoProps) => {
  const { children, className, style } = useDefaultProps({ props: inProps, name: 'ESFileInfo' });

  return (
    <div className={clsx(className, 'es-file-info')} style={style}>
      {children}
    </div>
  );
};
