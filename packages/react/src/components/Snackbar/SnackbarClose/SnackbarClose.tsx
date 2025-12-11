import { SnackbarCloseProps } from './SnackbarClose.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW350 } from '../../../icons';
import { Button } from '../../Button';

export const SnackbarClose = (inProps: SnackbarCloseProps) => {
  const {
    className,
    style,
    label,
    icon = <IconCloseLineW350 />,
    size = '400',
    progress,
    onClick,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSnackbarClose',
  });

  return (
    <div className={clsx(className, 'es-snackbar-close')}>
      <Button
        aria-label={label}
        className="es-snackbar-close__button"
        color="mono-b"
        size={size}
        style={style}
        onClick={onClick}
      >
        {icon}
      </Button>
      {progress && <div className="es-snackbar-close__progress" />}
    </div>
  );
};
