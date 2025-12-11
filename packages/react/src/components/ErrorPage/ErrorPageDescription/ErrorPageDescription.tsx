import { ErrorPageDescriptionProps } from './ErrorPageDescription.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPageDescription = (inProps: ErrorPageDescriptionProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageDescription',
  });

  return (
    <div className={clsx('es-error-page-description', 'body200', className)} style={style}>
      {children}
    </div>
  );
};
