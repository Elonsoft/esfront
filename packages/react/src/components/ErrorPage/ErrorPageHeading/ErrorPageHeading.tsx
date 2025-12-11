import { ErrorPageHeadingProps } from './ErrorPageHeading.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPageHeading = (inProps: ErrorPageHeadingProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageHeading',
  });

  return (
    <h1 className={clsx('es-error-page-heading', 'h2', className)} style={style}>
      {children}
    </h1>
  );
};
