import { FileInfoProps } from './FileInfo.types';

import clsx from 'clsx';
import { getFileInfoUtilityClass } from './FileInfo.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type FileInfoOwnerState = {
  classes?: FileInfoProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFileInfoUtilityClass, classes);
};

const FileInfoRoot = styled('div', {
  name: 'ESFileInfo',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  alignItems: 'center',
}));

/**
 * This component displays file information.
 */
export const FileInfo = (inProps: FileInfoProps) => {
  const { children, className, sx, ...props } = useDefaultProps({ props: inProps, name: 'ESFileInfo' });
  const ownerState = { ...props };

  const classes = useUtilityClasses(ownerState);

  return (
    <FileInfoRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </FileInfoRoot>
  );
};
