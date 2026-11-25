'use client';

import { useMemo } from 'react';

import { FormatSizeProps } from './FormatSize.types';

import { useDefaultProps } from '../../theming';

import { useLocaleDefaultProps } from '@esfront/react/locale';

/**
 * This component formats the size based on the metric or binary unit prefix.
 */
export const FormatSize = (inProps: FormatSizeProps) => {
  const resolvedProps = useDefaultProps({
    props: inProps,
    name: 'ESFormatSize',
  });

  const {
    children,
    prefix = 'metric',
    metricUnits,
    binaryUnits,
  } = useLocaleDefaultProps({
    props: resolvedProps,
    name: 'ESFormatSize',
  });

  const multiplier = prefix === 'metric' ? 1000 : 1024;
  const units = prefix === 'metric' ? metricUnits : binaryUnits;

  const value = useMemo(() => {
    if (!units) {
      return children;
    }

    let x = +children;
    let i = 0;

    while (x >= multiplier && i < units.length - 1) {
      i++;
      x = x / multiplier;
    }

    return `${+x.toFixed(2)} ${units[i]}`;
  }, [children, multiplier, units]);

  return <>{value}</>;
};
