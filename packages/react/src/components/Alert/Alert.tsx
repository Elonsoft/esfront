import { AlertProps } from './Alert.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconAlertFillW500, IconCheckCircleFillW500, IconErrorFillW500, IconInformation2FillW500 } from '../../icons';

const defaultIconMapping = {
  success: <IconCheckCircleFillW500 />,
  warning: <IconAlertFillW500 />,
  error: <IconErrorFillW500 />,
  info: <IconInformation2FillW500 />,
};

/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
export const Alert = (inProps: AlertProps) => {
  const {
    className,
    children,
    style,
    icon,
    variant = 'standard',
    severity = 'success',
    action,
    color,
    breakpoint,
    iconMapping = defaultIconMapping,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAlert',
  });

  return (
    <div
      className={clsx(
        className,
        'es-alert',
        `es-alert--${variant}--${color || severity}`,
        breakpoint && `es-alert--breakpoint--${breakpoint}`
      )}
      style={style}
    >
      {icon !== false && <div className="es-alert__icon">{icon || iconMapping[severity]}</div>}
      {children}
      {!!action && <div className="es-alert__action">{action}</div>}
    </div>
  );
};
