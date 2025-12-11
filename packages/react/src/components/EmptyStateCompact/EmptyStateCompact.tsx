import { EmptyStateCompactProps } from './EmptyStateCompact.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyStateCompact = (inProps: EmptyStateCompactProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESEmptyStateCompact',
  });

  return (
    <div className={clsx(className, 'es-empty-state-compact', 'caption')} style={style}>
      {children}
    </div>
  );
};
