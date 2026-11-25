'use client';

import type { Localization } from './index';
import { useLocale } from './useLocale.client';

import type { ComponentsPropsList } from '../../theming';
import { resolveProps } from '../../utils/resolveProps';

type LocalizedComponentName = keyof Localization['components'] & keyof ComponentsPropsList;

export const useLocaleDefaultProps = <Props extends object>({
  props,
  name,
}: {
  props: Props;
  name: LocalizedComponentName;
}): Props => {
  const localeDefaults = useLocale().components[name]?.defaultProps as Partial<Props> | undefined;

  return localeDefaults ? resolveProps(localeDefaults, props) : props;
};
