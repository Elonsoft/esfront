'use client';

import { RefAttributes } from 'react';

import { MenuGroupProps } from './MenuGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * A heading that labels a group of items inside a dropdown menu. It can stick to the top of the menu while the list
 * scrolls.
 */
export const MenuGroup = ({ ref, ...inProps }: MenuGroupProps & RefAttributes<HTMLLIElement>) => {
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
    <li
      ref={ref}
      className={clsx(
        className,
        'es-menu-group',
        `es-menu-group--padding-bottom--${paddingBottom}`,
        sticky && 'es-menu-group--sticky',
        'caption'
      )}
      role="presentation"
      {...props}
    >
      {children}
    </li>
  );
};

/**
 * The group is a heading, not an item, so `MenuList` must not make it focusable.
 */
MenuGroup.esSkipListHighlight = true;
