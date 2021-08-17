import { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { styled, useThemeProps } from '@material-ui/core/styles';

import { IconFile } from '../icons';

import { FileIconProps } from './FileIcon.types';
import { getFileIconUtilityClass } from './FileIcon.classes';

type FileIconStyleProps = {
  classes?: FileIconProps['classes'];
};

const useUtilityClasses = (styleProps: FileIconStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    children: ['children'],
    icon: ['icon']
  };

  return composeClasses(slots, getFileIconUtilityClass, classes);
};

const FileIconRoot = styled('div', {
  name: 'ESFileIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.palette.monoA.A500,
  display: 'flex',
  fontWeight: 700,
  height: 'auto',
  justifyContent: 'center',
  position: 'relative'
}));

const FileIconChildren = styled('div', {
  name: 'ESFileIcon',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  inset: 0,
  justifyContent: 'center',
  position: 'absolute'
}));

export const FileIcon: React.FC<FileIconProps> = (inProps) => {
  const {
    className,
    icon = IconFile,
    width = 36,
    height = 48,
    children,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIcon'
  });

  const styleProps = { ...props };
  const classes = useUtilityClasses(styleProps);

  const iconRef = useRef<SVGPathElement>(null);
  const rootIconRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const Icon = icon;

  useEffect(() => {
    if (iconRef.current && rootIconRef.current) {
      const iconHeight = iconRef.current.getBoundingClientRect().height;
      const iconTop = iconRef.current.getBoundingClientRect().top;
      const rootIconTop = rootIconRef.current.getBoundingClientRect().top;
      setPaddingTop(iconHeight + (iconTop - rootIconTop));
    }
  }, [iconRef.current, rootIconRef.current, width, height]);

  return (
    <FileIconRoot ref={rootIconRef} className={clsx(classes.root, className)}>
      <Icon ref={iconRef} className={classes.icon} width={width} height={height} />
      {!!children && (
        <FileIconChildren style={{ paddingTop: `${Math.round(paddingTop)}px` }} className={classes.children}>
          {children}
        </FileIconChildren>
      )}
    </FileIconRoot>
  );
};
