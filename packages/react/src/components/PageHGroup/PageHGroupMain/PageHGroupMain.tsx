import { PageHGroupMainProps } from './PageHGroupMain.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const PageHGroupMain = (inProps: PageHGroupMainProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupMain',
  });

  return (
    <div className={clsx(className, 'es-page-h-group-main')} style={style}>
      {children}
    </div>
  );
};
