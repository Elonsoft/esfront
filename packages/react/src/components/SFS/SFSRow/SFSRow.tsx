'use client';

import { RefAttributes } from 'react';

import { SFSRowProps } from './SFSRow.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `SFS`
 */
export const SFSRow = ({ ref, ...inProps }: SFSRowProps & RefAttributes<HTMLDivElement>) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESSFSRow',
  });

  return (
    <div ref={ref} className={clsx('es-sfs-row', className)} style={style}>
      {children}
    </div>
  );
};
