import { useMemo } from 'react';

import { FormatDateProps } from './FormatDate.types';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useDateAdapterContext } from '../DateAdapter';

/**
 * This component formats the date with the format string.
 */
export const FormatDate = (inProps: FormatDateProps) => {
  const { children, format, formatString } = useDefaultProps({
    props: inProps,
    name: 'ESFormatDate',
  });

  const { adapter } = useDateAdapterContext();

  const value = useMemo(() => {
    if (!adapter) {
      return children;
    }

    const date = adapter.date(children);

    if (date) {
      if (formatString) {
        return adapter.formatByString(date, formatString);
      }

      if (format) {
        return adapter.format(date, format);
      }
    }

    return children;
  }, [children, adapter, format, formatString]);

  return <>{value}</>;
};
