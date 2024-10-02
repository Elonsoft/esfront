import { ClearButtonProps } from './ClearButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconCloseLineW350 } from '../../icons';
import { ButtonBase } from '../ButtonBase';

export const ClearButton = (inProps: ClearButtonProps) => {
  const {
    className,
    style,

    label,
    icon = <IconCloseLineW350 container containerSize="16px" />,

    onClick: onClickProp,
  } = useDefaultProps({
    props: inProps,
    name: 'ESClearButton',
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    onClickProp?.(e);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <ButtonBase
      disableTouchRipple
      aria-label={label}
      className={clsx('es-clear-button', className)}
      style={style}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {icon}
    </ButtonBase>
  );
};
