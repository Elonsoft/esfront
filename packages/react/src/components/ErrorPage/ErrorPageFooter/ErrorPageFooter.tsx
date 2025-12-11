import { ErrorPageFooterProps } from './ErrorPageFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ErrorPageFooter = (inProps: ErrorPageFooterProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESErrorPageFooter',
  });

  return (
    <div className={clsx('es-error-page-footer', 'body100', className)} style={style}>
      {children}
    </div>
  );
};
