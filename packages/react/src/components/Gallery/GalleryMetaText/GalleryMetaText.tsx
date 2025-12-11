import { GalleryMetaTextProps } from './GalleryMetaText.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const GalleryMetaText = (inProps: GalleryMetaTextProps) => {
  const { children, className, style, primary } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryMetaText',
  });

  return (
    <div
      className={clsx(
        'es-gallery-meta-text',
        primary ? 'es-gallery-meta-text--primary body200 sm:body100' : 'caption',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
