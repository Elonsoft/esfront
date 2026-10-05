'use client';

import { RefAttributes } from 'react';

import { AutocompleteMenuFooterProps } from './AutocompleteMenuFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `AutocompleteMenu`
 */
export const AutocompleteMenuFooter = ({
  ref,
  ...inProps
}: AutocompleteMenuFooterProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,

    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteMenuFooter',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-autocomplete-menu-footer', 'caption')} style={style}>
      {children}
    </div>
  );
};
