import { CheckboxIconProps } from './CheckboxIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const CheckboxIcon = (inProps: CheckboxIconProps) => {
  const { className, ...props } = useDefaultProps({ props: inProps, name: 'ESCheckboxIcon' });

  return <div className={clsx(className, 'es-checkbox-icon')} {...props} />;
};
