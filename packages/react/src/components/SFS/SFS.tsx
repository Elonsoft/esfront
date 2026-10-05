'use client';

import { RefAttributes } from 'react';

import { SFSProps } from './SFS.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * The set of components for searching, filtering and sorting.
 */
export const SFS = ({ ref, ...inProps }: SFSProps & RefAttributes<HTMLDivElement>) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESSFS',
  });

  return (
    <div ref={ref} className={clsx('es-sfs', className)} style={style}>
      {children}
    </div>
  );
};
