import { EmptyStateProps } from './EmptyState.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyState = (inProps: EmptyStateProps) => {
  const {
    children,
    className,
    style,
    size = 'medium',
    icon,
    heading,
    subheading,
  } = useDefaultProps({
    props: inProps,
    name: 'ESEmptyState',
  });

  return (
    <div className={clsx(`es-empty-state es-empty-state--${size}`, className)} style={style}>
      {!!icon && <div className="es-empty-state__icon">{icon}</div>}
      <div className="es-empty-state__text">
        {!!heading && (
          <div className={clsx('es-empty-state__heading', size === 'medium' ? 'body200' : 'body100')}>{heading}</div>
        )}
        {!!subheading && <div className="es-empty-state__subheading caption">{subheading}</div>}
      </div>
      {!!children && <div className="es-empty-state__children">{children}</div>}
    </div>
  );
};
