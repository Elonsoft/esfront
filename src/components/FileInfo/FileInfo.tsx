import { FC } from 'react';

import { FileInfoProps } from './FileInfo.types';

import clsx from 'clsx';
import { getFileInfoUtilityClass } from './FileInfo.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type FileInfoOwnerState = {
  classes?: FileInfoProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getFileInfoUtilityClass, classes);
};

const FileInfoRoot = styled('div', {
  name: 'ESFileInfo',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center'
}));

/**
 * This component displays file information.
 */
export const FileInfo: FC<FileInfoProps> = (inProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESFileInfo' });
  const ownerState = { ...props };

  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </FileInfoRoot>
  );
};
