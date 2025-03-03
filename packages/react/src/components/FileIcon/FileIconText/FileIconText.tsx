import { FileIconTextProps } from './FileIconText.types';

import clsx from 'clsx';
import { getFileIconTextUtilityClass } from './FileIconText.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type FileIconTextOwnerState = {
  classes?: FileIconTextProps['classes'];
};

const useUtilityClasses = (ownerState: FileIconTextOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFileIconTextUtilityClass, classes);
};

const FileIconTextRoot = styled(Typography, {
  name: 'ESFileIconText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  position: 'relative',
  top: '-2px',
})) as typeof Typography;

export const FileIconText = (inProps: FileIconTextProps) => {
  const { className, children, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESFileIconText',
  });

  const ownerState = { ...props };
  const styles = useUtilityClasses(ownerState);

  return (
    <FileIconTextRoot className={clsx(styles.root, className)} component="div" variant="mini100">
      {children}
    </FileIconTextRoot>
  );
};
