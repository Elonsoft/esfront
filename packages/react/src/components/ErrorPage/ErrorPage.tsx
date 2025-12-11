import { ErrorPageProps } from './ErrorPage.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPage = (inProps: ErrorPageProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPage',
  });

  return (
    <div className={clsx('es-error-page', className)} style={style}>
      {children}
    </div>
  );
};
