import { FC } from 'react';

import { FileInfoNameProps } from './FileInfoName.types';

import clsx from 'clsx';
import { getFileInfoNameUtilityClass } from './FileInfoName.classes';

import { unstable_composeClasses as composeClasses } from '@mui/core';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { CloseSmIcon } from '../../icons';

type FileInfoNameOwnerState = {
  classes?: FileInfoNameProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoNameOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button']
  };

  return composeClasses(slots, getFileInfoNameUtilityClass, classes);
};

const FileInfoNameRoot = styled('div', {
  name: 'ESFileInfoName',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const FileInfoNameButton = styled(IconButton, {
  name: 'ESFileInfoName',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(() => ({
  marginLeft: 4
}));

export const FileInfoName: FC<FileInfoNameProps> = (inProps) => {
  const { children, className, deleteLabel, onDelete, ...props } = useThemeProps({
    props: inProps,
    name: 'ESFileInfoName'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoNameRoot className={clsx(classes.root, className)}>
      {children}
      {!!onDelete && (
        <FileInfoNameButton className={classes.button} size="xs" onClick={onDelete} aria-label={deleteLabel}>
          <CloseSmIcon />
        </FileInfoNameButton>
      )}
    </FileInfoNameRoot>
  );
};
