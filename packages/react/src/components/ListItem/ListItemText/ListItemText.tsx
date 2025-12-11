import { ListItemTextProps } from './ListItemText.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const ListItemText = (inProps: ListItemTextProps) => {
  const {
    children,
    className,
    style,
    disableTypography,
    inset,
    primary: inPrimary = null,
    primaryTypographyClassName,
    secondary: inSecondary = null,
    secondaryTypographyClassName = 'caption',
  } = useDefaultProps({
    props: inProps,
    name: 'ESListItemText',
  });
  let primary = inPrimary === null ? children : inPrimary;
  let secondary = inSecondary;

  if (primary !== null && !disableTypography) {
    primary = <span className={clsx('es-list-item-text__primary', primaryTypographyClassName)}>{primary}</span>;
  }

  if (secondary !== null && !disableTypography) {
    secondary = <span className={clsx('es-list-item-text__secondary', secondaryTypographyClassName)}>{secondary}</span>;
  }

  return (
    <div
      className={clsx(
        className,
        'es-list-item-text',
        inset && 'es-list-item-text--inset',
        primary && secondary && 'es-list-item-text--multiline'
      )}
      style={style}
    >
      {primary}
      {secondary}
    </div>
  );
};
