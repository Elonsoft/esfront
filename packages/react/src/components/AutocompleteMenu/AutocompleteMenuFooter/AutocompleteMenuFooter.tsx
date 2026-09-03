'use client';

import { AutocompleteMenuFooterProps } from './AutocompleteMenuFooter.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

export const AutocompleteMenuFooter = (inProps: AutocompleteMenuFooterProps) => {
  const {
    className,
    style,

    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteMenuFooter',
  });

  return (
    <div className={clsx(className, 'es-autocomplete-menu-footer', 'caption')} style={style}>
      {children}
    </div>
  );
};
