import React from 'react';

import { RadioIconProps } from './RadioIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const RadioIcon = (inProps: RadioIconProps) => {
  const { className, style } = useDefaultProps({ props: inProps, name: 'ESRadioIcon' });

  return (
    <div className={clsx('es-radio-icon', className)} style={style}>
      <div className="es-radio-icon__circle" />
    </div>
  );
};
