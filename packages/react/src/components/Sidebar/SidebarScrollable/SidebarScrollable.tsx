import { useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import clsx from 'clsx';
import { getSidebarScrollableUtilityClass } from './SidebarScrollable.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useResizeObserver } from '../../../hooks';

type SidebarScrollableOwnerState = {
  classes?: SidebarScrollableProps['classes'];
  isScrollable?: boolean;
  isBeforeScroll?: boolean;
  isAfterScroll?: boolean;
};

const useUtilityClasses = (ownerState: SidebarScrollableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getSidebarScrollableUtilityClass, classes);
};

const SidebarScrollableRoot = styled('div', {
  name: 'ESSidebarScrollable',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: SidebarScrollableOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.isScrollable && {
    mask: `${ownerState.isBeforeScroll ? 'linear-gradient(to bottom, transparent 0, black 32px) top' : 'none'}, ${
      ownerState.isAfterScroll ? 'linear-gradient(to bottom, black calc(100% - 32px), transparent 100%) bottom' : 'none'
    }`,
    maskSize: `${ownerState.isBeforeScroll ? '100%' : 'auto'}${ownerState.isAfterScroll ? '51%' : 'auto'}`,
    maskRepeat: 'no-repeat',
  }),

  ...theme.scrollbars.overlayMonoA,
}));

export const SidebarScrollable = (inProps: SidebarScrollableProps) => {
  const { className, sx, beforeScroll, afterScroll, children, ...props } = useThemeProps({
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

  const ownerState = { isScrollable, isBeforeScroll, isAfterScroll, afterScroll, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      {isScrollable && beforeScroll}
      <SidebarScrollableRoot
        ref={ref}
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        sx={sx}
        tabIndex={-1}
        onScroll={onScroll}
      >
        {children}
      </SidebarScrollableRoot>
      {isScrollable && afterScroll}
    </>
  );
};
