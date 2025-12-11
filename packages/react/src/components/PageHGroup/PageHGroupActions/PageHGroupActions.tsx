import { PageHGroupActionsProps } from './PageHGroupActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const PageHGroupActions = (inProps: PageHGroupActionsProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupActions',
  });

  return (
    <div className={clsx(className, 'es-page-h-group-actions')} style={style}>
      {children}
    </div>
  );
};
