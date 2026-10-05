'use client';

import { RefAttributes } from 'react';

import { AutocompleteMenuHeaderProps } from './AutocompleteMenuHeader.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `AutocompleteMenu`
 */
export const AutocompleteMenuHeader = ({
  ref,
  ...inProps
}: AutocompleteMenuHeaderProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,

    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteMenuHeader',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-autocomplete-menu-header', 'caption')} style={style}>
      {children}
    </div>
  );
};
