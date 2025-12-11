import { useEffect, useMemo, useRef, useState } from 'react';

import { GalleryPanelProps } from './GalleryPanel.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { GalleryPanelContext } from './GalleryPanel.context';
import { useGalleryPanelsContext } from './GalleryPanels.context';

import { useResizeObserver } from '../../../hooks';
import { useGalleryContext } from '../Gallery.context';

export const GalleryPanel = (inProps: GalleryPanelProps) => {
  const { children, className, style, position, direction } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryPanel',
  });

  const { items, item } = useGalleryContext();
  const { isVisible, setVisible, setRectTop, setRectBottom } = useGalleryPanelsContext();

  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setFocused(false);
    }
  };

  useEffect(() => {
    return () => {
      if (position === 'top') {
        setRectTop(null);
      } else {
        setRectBottom(null);
      }
    };
  }, []);

  useEffect(() => {
    setVisible(isHovered || isFocused);
  }, [isHovered, isFocused, setVisible]);

  const onResize = () => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();

      if (position === 'top') {
        setRectTop(rect);
      } else {
        setRectBottom(rect);
      }
    }
  };

  useResizeObserver(rootRef, () => {
    onResize();
  });

  const value = useMemo(() => {
    return { position, expanded, setExpanded };
  }, [expanded, setExpanded, position]);

  return (
    <GalleryPanelContext.Provider value={value}>
      <div
        ref={rootRef}
        className={clsx('es-gallery-panel', `es-gallery-panel--position--${position}`, className)}
        style={{ [position]: 0, ...style }}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={clsx(
            'es-gallery-panel__content',
            isVisible && 'es-gallery-panel__content--visible',
            expanded && 'es-gallery-panel__content--expanded'
          )}
          style={{ flexDirection: direction }}
        >
          {children(items[item], item)}
        </div>
      </div>
    </GalleryPanelContext.Provider>
  );
};
