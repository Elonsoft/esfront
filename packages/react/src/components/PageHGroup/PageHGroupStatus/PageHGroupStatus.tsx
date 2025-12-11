import { PageHGroupStatusProps } from './PageHGroupStatus.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const PageHGroupStatus = (inProps: PageHGroupStatusProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupStatus',
  });

  return (
    <div className={clsx(className, 'es-page-h-group-status', 'body100')} style={style}>
      {children}
    </div>
  );
};
