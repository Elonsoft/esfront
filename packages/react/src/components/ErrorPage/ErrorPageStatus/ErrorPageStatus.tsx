import { ErrorPageStatusProps } from './ErrorPageStatus.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPageStatus = (inProps: ErrorPageStatusProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageStatus',
  });

  return (
    <div className={clsx('es-error-page-status', className)} style={style}>
      {children}
    </div>
  );
};
