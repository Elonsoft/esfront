import { useEffect, useRef, useState } from 'react';

import { FileIconProps } from './FileIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { FileIconIcon } from './icons';

/**
 * This component is for displaying file extensions.
 */
export const FileIcon = (inProps: FileIconProps) => {
  const {
    className,
    style,
    icon = FileIconIcon,
    width = 36,
    height = 48,
    children,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFileIcon',
  });

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
    <div ref={rootIconRef} className={clsx('es-file-icon', className)} style={style}>
      <Icon ref={iconRef} className="es-file-icon__icon" height={`${height}px`} width={`${width}px`} />
      {!!children && (
        <div className="es-file-icon__children" style={{ paddingTop: `${Math.round(paddingTop)}px` }}>
          {children}
        </div>
      )}
    </div>
  );
};
