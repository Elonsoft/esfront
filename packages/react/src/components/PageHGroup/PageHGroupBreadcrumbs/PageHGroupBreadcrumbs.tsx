import { PageHGroupBreadcrumbsProps } from './PageHGroupBreadcrumbs.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const PageHGroupBreadcrumbs = (inProps: PageHGroupBreadcrumbsProps) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupBreadcrumbs',
  });

  return (
    <div className={clsx(className, 'es-page-h-group-breadcrumbs')} style={style}>
      {children}
    </div>
  );
};
