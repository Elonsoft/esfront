import { SFSRowProps } from './SFSRow.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const SFSRow = (inProps: SFSRowProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESSFSRow',
  });

  return (
    <div className={clsx('es-sfs-row', className)} style={style}>
      {children}
    </div>
  );
};
