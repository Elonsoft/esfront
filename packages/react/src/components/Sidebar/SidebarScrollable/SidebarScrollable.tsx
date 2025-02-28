import { useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import clsx from 'clsx';
import { getSidebarScrollableUtilityClass } from './SidebarScrollable.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';

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
})<{ ownerState: SidebarScrollableOwnerState }>(({ theme }) => ({
  variants: [
    {
      props: {
        isScrollable: true,
      },
      style: {
        mask: 'none',
        maskSize: 'auto',
        maskRepeat: 'no-repeat',
      },
    },
    {
      props: {
        isScrollable: true,
        isBeforeScroll: true,
        isAfterScroll: true,
      },
      style: {
        mask: `linear-gradient(to bottom, transparent 0, black 32px) top, 
              linear-gradient(to bottom, black calc(100% - 32px), transparent 100%) bottom`,
        maskSize: '100%, 51%',
      },
    },
    {
      props: {
        isScrollable: true,
        isBeforeScroll: true,
        isAfterScroll: false,
      },
      style: {
        mask: 'linear-gradient(to bottom, transparent 0, black 32px) top, none',
        maskSize: '100%, auto',
      },
    },
    {
      props: {
        isScrollable: true,
        isBeforeScroll: false,
        isAfterScroll: true,
      },
      style: {
        mask: 'none, linear-gradient(to bottom, black calc(100% - 32px), transparent 100%) bottom',
        maskSize: 'auto, 100%',
      },
    },
  ],

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
