import { PageHGroupProps } from './PageHGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * This component represents a heading and related content.
 */
export const PageHGroup = (inProps: PageHGroupProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroup',
  });

  return (
    <div className={clsx(className, 'es-page-h-group')} style={style}>
      {children}
    </div>
  );
};
