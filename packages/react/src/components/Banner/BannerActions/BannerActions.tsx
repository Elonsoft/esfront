import { BannerActionsProps } from './BannerActions.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const BannerActions = (inProps: BannerActionsProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESBannerActions',
  });

  return (
    <div className={clsx('es-banner-actions', className)} style={style}>
      {children}
    </div>
  );
};
