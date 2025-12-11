import { BannerProps } from './Banner.types';

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
 * An banner displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
export const Banner = (inProps: BannerProps) => {
  const {
    children,
    className,
    style,
    icon,
    variant = 'colored',
    severity = 'success',
    breakpoint,
    action,
    actions,
    color,
    iconMapping = defaultIconMapping,
  } = useDefaultProps({
    props: inProps,
    name: 'ESBanner',
  });

  return (
    <div
      className={clsx(
        'es-banner',
        `es-banner--color--${color || severity}`,
        `es-banner--variant--${variant}`,
        className
      )}
      style={style}
    >
      <div className="es-banner__wrapper">
        {icon !== false && <div className="es-banner__icon">{icon || iconMapping[severity]}</div>}
        <div className={clsx('es-banner__content', breakpoint && `es-banner__content--breakpoint--${breakpoint}`)}>
          <div className="es-banner__message body100" color="inherit">
            {children}
          </div>
          {actions}
        </div>
        {!!action && <div className="es-banner__action">{action}</div>}
      </div>
    </div>
  );
};
