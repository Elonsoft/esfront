import { ErrorPageLogoProps } from './ErrorPageLogo.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPageLogo = (inProps: ErrorPageLogoProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageLogo',
  });

  return (
    <div className={clsx('es-error-page-logo', className)} style={style}>
      {children}
    </div>
  );
};
