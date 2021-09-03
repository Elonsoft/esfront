import React from 'react';

import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material';
import { unstable_composeClasses as composeClasses } from '@mui/core';
import { getFileInfoMetaSeparatorUtilityClass } from './FileInfoMetaSeparator.classes';

import { FileInfoMetaSeparatorProps } from './FileInfoMetaSeparator.types';

type FileInfoMetaSeparatorOwnerState = {
  classes?: FileInfoMetaSeparatorProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoMetaSeparatorOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getFileInfoMetaSeparatorUtilityClass, classes);
};

const FileInfoMetaSeparatorRoot = styled('div', {
  name: 'ESFileInfoMetaSeparator',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.palette.monoA.A600,
  margin: '0 8px'
}));

export const FileInfoMetaSeparator = (inProps: FileInfoMetaSeparatorProps) => {
  const { className, ...props } = useThemeProps({ props: inProps, name: 'ESFileInfoMetaSeparator' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <FileInfoMetaSeparatorRoot className={clsx(classes.root, className)}>•</FileInfoMetaSeparatorRoot>;
};
