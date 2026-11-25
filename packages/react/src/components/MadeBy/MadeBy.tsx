'use client';

import { MadeByProps, MadeByTypeMap } from './MadeBy.types';

import clsx from 'clsx';

import { IconElonsoft } from '../../icons';
import { useDefaultProps } from '../../theming';
import { OverridableComponent } from '../../types';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/** The MadeBy component displays name of the developer. */
export const MadeBy: OverridableComponent<MadeByTypeMap> = ({ ref, ...inProps }: MadeByProps) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESMadeBy',
  });

  const {
    className,
    clickable: inClickable,
    onClick,
    text,
    icon = <IconElonsoft height="19" width="96px" />,
    ...props
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESMadeBy',
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events -- the root is overridable, so the consumer renders the semantic element
    <div
      ref={ref}
      className={clsx(className, 'es-made-by', 'caption', clickable && 'es-made-by--clickable')}
      onClick={onClick}
      {...props}
    >
      {text}
      {icon}
    </div>
  );
};
