import { BannerTitleProps } from './BannerTitle.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const BannerTitle = (inProps: BannerTitleProps) => {
  const { className, style, children } = useDefaultProps({
    props: inProps,
    name: 'ESBannerTitle',
  });

  return (
    <div className={clsx('es-banner-title', 'body100-w50', className)} style={style}>
      {children}
    </div>
  );
};
