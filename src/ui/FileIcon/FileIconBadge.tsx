import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import Typography from '@material-ui/core/Typography';
import { styled, useThemeProps } from '@material-ui/core/styles';

import { FileIconBadgeProps } from './FileIconBadge.types';
import { getFileIconBadgeUtilityClass } from './FileIconBadge.classes';

type FileIconBadgeStyleProps = {
  classes?: FileIconBadgeProps['classes'];
  size: 'md' | 'sm';
};

const useUtilityClasses = (styleProps: FileIconBadgeStyleProps) => {
  const { classes, size } = styleProps;

  const slots = {
    root: ['root', size]
  };

  return composeClasses(slots, getFileIconBadgeUtilityClass, classes);
};

const FileIconBadgeRoot = styled(Typography, {
  name: 'ESFileIconBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      styleProps: { size }
    } = props;
    return [styles.root, styles[size]];
  }
})<{ styleProps: FileIconBadgeStyleProps }>(({ theme, styleProps }) => ({
  alignSelf: 'flex-start',
  borderRadius: '3px',
  display: 'block',
  color: theme.palette.monoB[500],
  left: '-5px',
  position: 'relative',
  textAlign: 'center',

  ...(styleProps.size === 'md' && {
    minWidth: '32px',
    padding: '1px 2px',
    top: '-3px'
  }),

  ...(styleProps.size === 'sm' && {
    minWidth: '30px',
    padding: '0 2px',
    top: '-2px'
  })
}));

export const FileIconBadge: React.FC<FileIconBadgeProps> = (inProps) => {
  const {
    className,
    children,
    color,
    size = 'md',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIconBadge'
  });

  const styleProps = { ...props, size };
  const classes = useUtilityClasses(styleProps);

  return (
    <FileIconBadgeRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      style={{ backgroundColor: color }}
      variant="mini2"
    >
      {children}
    </FileIconBadgeRoot>
  );
};
