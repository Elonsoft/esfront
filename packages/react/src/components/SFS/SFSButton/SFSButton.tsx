import { forwardRef } from 'react';

import { SFSButtonTypeMap } from './SFSButton.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { Button, ExtendButton } from '../../Button';

export const SFSButton = forwardRef(function SFSButton(inProps, ref) {
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
