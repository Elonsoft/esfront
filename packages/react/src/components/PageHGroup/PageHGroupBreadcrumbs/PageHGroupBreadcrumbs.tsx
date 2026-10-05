'use client';

import { RefAttributes } from 'react';

import { PageHGroupBreadcrumbsProps } from './PageHGroupBreadcrumbs.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';

/**
 * @see `PageHGroup`
 */
export const PageHGroupBreadcrumbs = ({
  ref,
  ...inProps
}: PageHGroupBreadcrumbsProps & RefAttributes<HTMLDivElement>) => {
  const { className, children, style } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupBreadcrumbs',
  });

  return (
    <div ref={ref} className={clsx(className, 'es-page-h-group-breadcrumbs')} style={style}>
      {children}
    </div>
  );
};
