import { AutocompleteMenuHeaderProps } from './AutocompleteMenuHeader.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const AutocompleteMenuHeader = (inProps: AutocompleteMenuHeaderProps) => {
  const {
    className,
    style,

    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteMenuHeader',
  });

  return (
    <div className={clsx(className, 'es-autocomplete-menu-header', 'caption')} style={style}>
      {children}
    </div>
  );
};
