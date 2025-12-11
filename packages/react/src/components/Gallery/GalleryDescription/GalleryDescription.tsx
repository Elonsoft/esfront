import { useEffect, useRef, useState } from 'react';

import { GalleryDescriptionProps } from './GalleryDescription.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useWindowEventListener } from '../../../hooks';
import { IconCloseLineW350 } from '../../../icons';
import { Button } from '../../Button';
import { SvgIcon, SvgIconProps } from '../../SvgIcon';
import { useGalleryPanelContext, useGalleryPanelsContext } from '../GalleryPanel';

const IconDoubleChevronUp = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} size="16" viewBox="0 0 16 16">
      <path
        clipRule="evenodd"
        d="M8.53039 3.46978L8.00006 2.93945L7.46973 3.46978L3.46973 7.46978L4.53039 8.53044L8.00006 5.06077L11.4697 8.53044L12.5304 7.46978L8.53039 3.46978ZM8.53131 8.46967L8.00098 7.93934L7.47065 8.46967L3.47065 12.4697L4.53131 13.5303L8.00098 10.0607L11.4706 13.5303L12.5313 12.4697L8.53131 8.46967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};

export const GalleryDescription = (inProps: GalleryDescriptionProps) => {
  const galleryPanelContext = useGalleryPanelContext();

  const {
    children,
    className,
    style,
    position = galleryPanelContext?.position || 'bottom',
    labelCollapse,
    labelExpand,
    iconCollapse = <IconCloseLineW350 />,
    iconExpand = <IconDoubleChevronUp />,
  } = useDefaultProps({
    props: inProps,
    name: 'ESGalleryDescription',
  });

  const { rectTop, rectBottom } = useGalleryPanelsContext();

  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setExpanded] = useState(false);
  const [isTruncated, setTruncated] = useState(false);
  const [maxHeight, setMaxHeight] = useState(32);

  const onClick = () => {
    if (isTruncated) {
      setExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    if (galleryPanelContext) {
      galleryPanelContext.setExpanded(isExpanded);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();

      if (position === 'bottom') {
        if (rectTop) {
          setMaxHeight(rect.bottom - rectTop.bottom);
        } else {
          //
        }
      } else if (rectBottom) {
        setMaxHeight(rectBottom.top - rect.top);
      } else {
        //
      }
    }
  }, [position, rectTop, rectBottom]);

  const onResize = () => {
    if (textRef.current) {
      const isTruncated = textRef.current.scrollWidth > textRef.current.clientWidth;
      setTruncated(isTruncated);

      if (isExpanded && !isTruncated) {
        setExpanded(false);
      }
    }
  };

  useWindowEventListener('resize', () => {
    onResize();
  });

  useEffect(() => {
    onResize();
  }, [textRef.current, children]);

  return (
    <div
      ref={rootRef}
      className={clsx('es-gallery-description', `es-gallery-description--position--${position}`, 'caption', className)}
      style={style}
      onClick={onClick}
    >
      <div
        className={clsx(
          'es-gallery-description__content',
          `es-gallery-description__content--position--${position}`,
          isExpanded && 'es-gallery-description__content--expanded'
        )}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <div
          ref={textRef}
          className={clsx('es-gallery-description__text', isExpanded && 'es-gallery-description__text--expanded')}
        >
          {children}
        </div>
        <Button
          aria-label={isExpanded ? labelCollapse : labelExpand}
          className="es-gallery-description__button"
          color="white"
          size="300"
          style={!isExpanded && !isTruncated ? { display: 'none' } : {}}
        >
          {isExpanded ? iconCollapse : iconExpand}
        </Button>
      </div>
    </div>
  );
};
