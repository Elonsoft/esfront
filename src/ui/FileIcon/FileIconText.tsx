import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { styled, useThemeProps } from '@material-ui/core/styles';

import { getFileIconTextUtilityClass } from './FileIconText.classes';
import { FileIconTextProps } from './FileIconText.types';

type FileIconTextStyleProps = {
  classes?: FileIconTextProps['classes'];
};

const useUtilityClasses = (styleProps: FileIconTextStyleProps) => {
  const { classes } = styleProps;

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

  const styleProps = { ...props };
  const styles = useUtilityClasses(styleProps);

  return (
    <FileIconTextRoot className={clsx(styles.root, className)} component="div" variant="mini2">
      {children}
    </FileIconTextRoot>
  );
};
