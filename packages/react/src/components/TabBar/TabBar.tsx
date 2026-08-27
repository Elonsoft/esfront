import { TabBarProps } from './TabBar.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';

/**
 * TabBar allows movement between primary destinations in an app.
 */
export const TabBar = (inProps: TabBarProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESTabBar',
  });

  return (
    <div className={clsx(className, 'es-tab-bar')} style={style}>
      {children}
    </div>
  );
};
