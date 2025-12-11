import { useRef, useState } from 'react';

import { AppBarProps } from './AppBar.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useIntersectionObserver, useResizeObserver, useStuckSentinel } from '../../hooks';

/**
 * The AppBar displays information and actions relating to the current screen.
 */
export const AppBar = (inProps: AppBarProps) => {
  const { className, style, children, startAdornment, endAdornment, prominent } = useDefaultProps({
    props: inProps,
    name: 'ESAppBar',
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const prominentRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);
  const [prominentHeight, setProminentHeight] = useState(0);

  const [isTitleVisible, setTitleVisible] = useState(false);

  const { stuck, sentinel } = useStuckSentinel();

  useResizeObserver(ref, (entries) => {
    setHeight(entries[0].target.clientHeight);
  });

  useResizeObserver(prominentRef, (entries) => {
    const target = entries[0].target;
    setProminentHeight(target.clientHeight - (parseFloat(window.getComputedStyle(target).paddingBottom) || 0));
  });

  useIntersectionObserver(
    prominentRef,
    (entries) => {
      setTitleVisible(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `${prominentHeight - height}px 0px 0px` }
  );

  return (
    <>
      {sentinel}
      <div ref={ref} className={clsx(className, 'es-app-bar', stuck && 'es-app-bar--stuck', 'h6')} style={style}>
        {startAdornment && <div className="es-app-bar__adornment">{startAdornment}</div>}
        <div className="es-app-bar__title">{!prominent || isTitleVisible ? children : '\u00A0'}</div>
        {endAdornment && <div className="es-app-bar__adornment">{endAdornment}</div>}
      </div>
      {!!prominent && (
        <div ref={prominentRef} aria-hidden className="es-app-bar__title-prominent h3">
          {children}
        </div>
      )}
    </>
  );
};
