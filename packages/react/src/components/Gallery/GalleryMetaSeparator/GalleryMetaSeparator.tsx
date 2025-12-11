import { GalleryMetaSeparatorProps } from './GalleryMetaSeparator.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const GalleryMetaSeparator = (inProps: GalleryMetaSeparatorProps) => {
  const { className, style } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryMetaSeparator',
  });

  return <div className={clsx('es-gallery-meta-separator', className)} style={style} />;
};
