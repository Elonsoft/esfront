'use client';

import clsx from 'clsx';

import { DefaultComponentProps } from '../../../types';
import { Button, ButtonTypeMap } from '../../Button';
import { ExtendButtonBase } from '../../ButtonBase';

/**
 * @see `Gallery`
 */
export const GalleryActionsButton = (({ ref, className, ...props }: DefaultComponentProps<ButtonTypeMap>) => {
  return <Button ref={ref} className={clsx('es-gallery-actions-button', className)} {...props} />;
}) as ExtendButtonBase<ButtonTypeMap>;
