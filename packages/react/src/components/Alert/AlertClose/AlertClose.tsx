import { AlertCloseProps } from './AlertClose.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW500 } from '../../../icons';
import { Button } from '../../Button';

export const AlertClose = (inProps: AlertCloseProps) => {
  const {
    className,
    style,
    label,
    icon = <IconCloseLineW500 container containerSize="20px" />,
    onClick,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAlertClose',
  });

  const Icon = icon as any;

  return (
    <Button
      aria-label={label}
      className={clsx(className, 'es-alert-close')}
      color="tertiary"
      size="300"
      style={style}
      onClick={onClick}
    >
      {Icon}
    </Button>
  );
};
