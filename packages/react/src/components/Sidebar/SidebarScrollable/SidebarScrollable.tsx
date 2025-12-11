import { useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useResizeObserver } from '../../../hooks';

export const SidebarScrollable = (inProps: SidebarScrollableProps) => {
  const { className, style, beforeScroll, afterScroll, children } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarScrollable',
  });

  const [isScrollable, setScrollable] = useState(false);
  const [isBeforeScroll, setBeforeScroll] = useState(false);
  const [isAfterScroll, setAfterScroll] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setScrollable(ref.current?.scrollHeight > ref.current?.clientHeight);
    }
  });

  const onScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      setBeforeScroll(scrollTop > 0);
      setAfterScroll(!(scrollTop >= scrollHeight - clientHeight));
    }
  };

  return (
    <>
      {isScrollable && beforeScroll}
      <div
        ref={ref}
        className={clsx(
          'es-sidebar-scrollable',
          isScrollable && 'es-sidebar-scrollable--scrollable',
          isBeforeScroll && 'es-sidebar-scrollable--scroll-before',
          isAfterScroll && 'es-sidebar-scrollable--scroll-after',
          'scrollbar-overlay-mono-a',
          className
        )}
        style={style}
        tabIndex={-1}
        onScroll={onScroll}
      >
        {children}
      </div>
      {isScrollable && afterScroll}
    </>
  );
};
