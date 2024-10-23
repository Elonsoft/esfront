import { AlertContentProps } from './AlertContent.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const AlertContent = (inProps: AlertContentProps) => {
  const { className, style, children, actions, breakpoint } = useDefaultProps({
    props: inProps,
    name: 'ESAlertContent',
  });

  return (
    <div
      className={clsx('es-alert-content', breakpoint && `es-alert-content--breakpoint--${breakpoint}`, className)}
      style={style}
    >
      <div className="es-alert-content__message body100">{children}</div>
      {actions}
    </div>
  );
};
