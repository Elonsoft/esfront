import { FileIconTextProps } from './FileIconText.types';

import clsx from 'clsx';
import { getFileIconTextUtilityClass } from './FileIconText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type FileIconTextOwnerState = {
  classes?: FileIconTextProps['classes'];
};

const useUtilityClasses = (ownerState: FileIconTextOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getFileIconTextUtilityClass, classes);
};

const FileIconTextRoot = styled(Typography, {
  name: 'ESFileIconText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  position: 'relative',
  top: '-2px'
})) as typeof Typography;

export const FileIconText: React.FC<FileIconTextProps> = (inProps) => {
  const { className, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESFileIconText'
  });

  const ownerState = { ...props };
  const styles = useUtilityClasses(ownerState);

  return (
    <FileIconTextRoot className={clsx(styles.root, className)} component="div" variant="mini2">
      {children}
    </FileIconTextRoot>
  );
};
