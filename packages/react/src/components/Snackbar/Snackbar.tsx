import { forwardRef, useEffect, useRef } from 'react';

import { SnackbarProps, SnackbarPropsColor, SnackbarPropsSeverity } from './Snackbar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useForkRef } from '../../hooks';
import { IconAlertFillW500, IconCheckCircleFillW500, IconErrorFillW500, IconInformation2FillW500 } from '../../icons';

const defaultColorMapping: Record<SnackbarPropsSeverity, SnackbarPropsColor> = {
  default: 'mono-a',
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

const defaultIconMapping = {
  default: <IconCheckCircleFillW500 />,
  success: <IconCheckCircleFillW500 />,
  warning: <IconAlertFillW500 />,
  error: <IconErrorFillW500 />,
  info: <IconInformation2FillW500 />,
};

/** Snackbar is used for brief notifications of processes that have been or will be performed. */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(inProps, ref) {
  const {
    className,
    style,

    heading,
    message,
    icon,

    autoHideDuration,
    persist,

    progress,

    severity = 'default',
    color,
    size = 'm',

    colorMapping = defaultColorMapping,
    iconMapping = defaultIconMapping,

    action,

    onClose,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSnackbar',
  });

  const rootRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(rootRef, ref);

  useEffect(() => {
    if (!persist && autoHideDuration) {
      setTimeout(() => {
        if (rootRef.current) {
          rootRef.current.style.setProperty('--es-snackbar-transition', `${autoHideDuration}ms linear`);
          rootRef.current.style.setProperty('--es-snackbar-progress', `0%`);
        }
      }, 1);

      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, autoHideDuration);

      return () => {
        if (rootRef.current) {
          rootRef.current.style.setProperty('--es-snackbar-transition', 'none');
          rootRef.current.style.setProperty('--es-snackbar-progress', '100%');
        }

        clearTimeout(timer);
      };
    }
  }, [persist, autoHideDuration]);

  return (
    <div
      ref={handleRef}
      className={clsx(
        className,
        'es-snackbar',
        `es-snackbar--severity--${severity}`,
        `es-snackbar--color--${color || colorMapping[severity]}`,
        `es-snackbar--size--${size}`
      )}
      style={style}
    >
      {progress && <div className="es-snackbar__progress" />}
      <div className="es-snackbar__content">
        {size !== 's' && icon !== false && <div className="es-snackbar__icon">{icon || iconMapping[severity]}</div>}
        <div className="es-snackbar__message caption">
          {!!heading && <div className="es-snackbar__heading body100Medium">{heading}</div>}
          {!!message && <div>{message}</div>}
        </div>
        <div className="es-snackbar__actions">{!!action && action}</div>
      </div>
    </div>
  );
});
