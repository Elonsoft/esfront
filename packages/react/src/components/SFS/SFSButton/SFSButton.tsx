'use client';

import { SFSButtonProps, SFSButtonTypeMap } from './SFSButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../../theming';
import { Button, ExtendButton } from '../../Button';

/**
 * @see `SFS`
 */
export const SFSButton = (({ ref, ...inProps }: SFSButtonProps) => {
  const { active, ...props } = useDefaultProps({ props: inProps, name: 'ESSFSButton' });

  return (
    <Button
      ref={ref}
      color="tertiary"
      size="400"
      {...props}
      className={clsx('es-sfs-button', active && 'es-sfs-button--active', props.className)}
    />
  );
}) as ExtendButton<SFSButtonTypeMap>;
