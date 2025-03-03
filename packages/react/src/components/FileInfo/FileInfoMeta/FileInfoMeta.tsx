import { FileInfoMetaProps } from './FileInfoMeta.types';

import clsx from 'clsx';
import { getFileInfoMetaUtilityClass } from './FileInfoMeta.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type FileInfoMetaOwnerState = {
  classes?: FileInfoMetaProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoMetaOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFileInfoMetaUtilityClass, classes);
};

const FileInfoMetaRoot = styled(Typography, {
  name: 'ESFileInfoMeta',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
  display: 'flex',
  alignItems: 'center',
}));

export const FileInfoMeta = (inProps: FileInfoMetaProps) => {
  const { children, className, ...props } = useDefaultProps({ props: inProps, name: 'ESFileInfoMeta' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoMetaRoot className={clsx(classes.root, className)} variant="caption">
      {children}
    </FileInfoMetaRoot>
  );
};
