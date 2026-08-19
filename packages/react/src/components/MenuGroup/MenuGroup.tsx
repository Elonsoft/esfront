import { MenuGroupProps } from './MenuGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * A heading that labels a group of items inside a dropdown menu. It can stick to the top of the menu while the list
 * scrolls.
 */
export const MenuGroup = (inProps: MenuGroupProps) => {
  const {
    children,

    className,
    paddingBottom = 'l',
    sticky,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenuGroup',
  });

  return (
    <div
      className={clsx(
        className,
        'es-menu-group',
        `es-menu-group--padding-bottom--${paddingBottom}`,
        sticky && 'es-menu-group--sticky',
        'caption'
      )}
      {...props}
    >
      {children}
    </div>
  );
};
