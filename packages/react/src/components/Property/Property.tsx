import { PropertyProps } from './Property.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * Display attributes are characteristics that describe a entity.
 */
export const Property = (inProps: PropertyProps) => {
  const { name, value, className, style, size = 'm' } = useDefaultProps({ props: inProps, name: 'ESProperty' });

  return (
    <div
      className={clsx(className, 'es-property', `es-property--size--${size}`, size === 's' ? 'body100' : 'body200')}
      style={style}
    >
      <div className="es-property__name">{name}</div>
      <div className="es-property__divider" />
      <div className="es-property__value">{value}</div>
    </div>
  );
};
