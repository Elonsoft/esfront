import { forwardRef } from 'react';

import clsx from 'clsx';

import { Button, ButtonTypeMap } from '../../Button';
import { ExtendButtonBase } from '../../ButtonBase';

export const GalleryActionsButton = forwardRef(function GalleryActionsButton({ className, ...props }, ref) {
  return <Button ref={ref} className={clsx('es-gallery-actions-button', className)} {...props} />;
}) as ExtendButtonBase<ButtonTypeMap>;
