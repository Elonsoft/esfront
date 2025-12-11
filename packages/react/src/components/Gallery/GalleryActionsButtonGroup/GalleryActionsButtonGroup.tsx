import { GalleryActionsButtonGroupProps } from './GalleryActionsButtonGroup.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

export const GalleryActionsButtonGroup = (inProps: GalleryActionsButtonGroupProps) => {
  const { children, className, style } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryActionsButtonGroup',
  });

  return (
    <div className={clsx('es-gallery-actions-button-group', className)} style={style}>
      {children}
    </div>
  );
};
