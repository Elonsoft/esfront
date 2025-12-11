import { DividerProps } from './Divider.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * The Divider is a thin line that groups content in lists and layouts.
 */
export const Divider = (inProps: DividerProps) => {
  const {
    className,
    style,
    children,
    color = 'var(--es-mono-a-a100)',
    width = 1,
    orientation = 'horizontal',
    textAlign = 'center',
    flexItem,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDivider',
  });

  return (
    <div
      className={clsx(
        className,
        `es-divider--${orientation}`,
        `es-divider--text-align--${textAlign}`,
        'es-divider',
        !!children && `es-divider--with-children`,
        !!flexItem && `es-divider--flex-item`
      )}
      style={
        {
          '--es-divider-color': color,
          '--es-divider-width': `${width}px`,
          ...style,
        } as React.CSSProperties
      }
    >
      {children ? <span className="es-divider__wrapper caption">{children}</span> : null}
    </div>
  );
};

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
Divider.muiSkipListHighlight = true;
