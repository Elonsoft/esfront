import { FileInfoMetaSeparatorProps } from './FileInfoMetaSeparator.types';

import clsx from 'clsx';
import { getFileInfoMetaSeparatorUtilityClass } from './FileInfoMetaSeparator.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type FileInfoMetaSeparatorOwnerState = {
  classes?: FileInfoMetaSeparatorProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoMetaSeparatorOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFileInfoMetaSeparatorUtilityClass, classes);
};

const FileInfoMetaSeparatorRoot = styled('div', {
  name: 'ESFileInfoMetaSeparator',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A600,
  margin: '0 8px',
}));

export const FileInfoMetaSeparator = (inProps: FileInfoMetaSeparatorProps) => {
  const { className, sx, ...props } = useDefaultProps({ props: inProps, name: 'ESFileInfoMetaSeparator' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoMetaSeparatorRoot className={clsx(classes.root, className)} sx={sx}>
      •
    </FileInfoMetaSeparatorRoot>
  );
};
