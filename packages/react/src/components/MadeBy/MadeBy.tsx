import { MadeByProps, MadeByTypeMap } from './MadeBy.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { IconElonsoft } from '../../icons';

/** The MadeBy component displays name of the developer. */
export const MadeBy: OverridableComponent<MadeByTypeMap> = (inProps: MadeByProps) => {
  const {
    className,
    clickable: inClickable,
    onClick,
    text,
    icon = <IconElonsoft height="19" width="96px" />,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMadeBy',
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;

  return (
    <div
      className={clsx(className, 'es-made-by', 'caption', clickable && 'es-made-by--clickable')}
      onClick={onClick}
      {...props}
    >
      {text}
      {icon}
    </div>
  );
};
