'use client';

import { MadeByProps, MadeByTypeMap } from './MadeBy.types';

import clsx from 'clsx';

import { IconElonsoft } from '../../icons';
import { useDefaultProps } from '../../theming';
import { OverridableComponent } from '../../types';

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
