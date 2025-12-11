import { SFSProps } from './SFS.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * The set of components for searching, filtering and sorting.
 */
export const SFS = (inProps: SFSProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESSFS',
  });

  return (
    <div className={clsx('es-sfs', className)} style={style}>
      {children}
    </div>
  );
};
