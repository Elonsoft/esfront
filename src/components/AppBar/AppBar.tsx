import { useRef, useState } from 'react';

import { AppBarProps } from './AppBar.types';

import clsx from 'clsx';
import { appBarClasses, getAppBarUtilityClass } from './AppBar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { unstable_useId as useId } from '@mui/utils';

import { useIntersectionObserver, useResizeObserver } from '../../hooks';

type AppBarOwnerState = {
  classes?: AppBarProps['classes'];
  isStuck?: boolean;
};

const useUtilityClasses = (ownerState: AppBarOwnerState) => {
  const { classes, isStuck } = ownerState;

  const slots = {
    root: ['root', isStuck && 'stuck'],
    title: ['title'],
    titleProminent: ['titleProminent'],
    adornment: ['adornment']
  };

  return composeClasses(slots, getAppBarUtilityClass, classes);
};

const AppBarRoot = styled('div', {
  name: 'ESAppBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isStuck }
    } = props;

    return [styles.root, isStuck && styles.stuck];
  }
})(({ theme }) => ({
  ...theme.typography.h6,
  position: 'sticky',
  top: -1,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '8px',
  backgroundColor: theme.palette.surface[50],
  color: theme.palette.monoA.A900,

  [`&.${appBarClasses.stuck}`]: {
    borderBottom: `1px solid ${theme.palette.monoA.A100}`
  }
}));

const AppBarTitle = styled('div', {
  name: 'ESAppBar',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  padding: '8px'
});

const AppBarTitleProminent = styled(Typography, {
  name: 'ESAppBar',
  slot: 'TitleProminent',
  overridesResolver: (props, styles) => styles.titleProminent
})(() => ({
  padding: '8px 16px',
  wordBreak: 'break-word'
})) as typeof Typography;

const AppBarAdornment = styled('div', {
  name: 'ESAppBar',
  slot: 'Adornment',
  overridesResolver: (props, styles) => styles.adornment
})({
  display: 'flex',
  gap: '4px',

  '&:last-of-type': {
    marginLeft: 'auto'
  }
});

/**
 * The AppBar displays information and actions relating to the current screen.
 */
export const AppBar = (inProps: AppBarProps) => {
  const { className, children, sx, startAdornment, endAdornment, prominent, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAppBar'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const prominentRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);
  const [prominentHeight, setProminentHeight] = useState(0);

  const [isStuck, setStuck] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);

  useResizeObserver(ref, (entries) => {
    setHeight(entries[0].target.clientHeight);
  });

  useResizeObserver(prominentRef, (entries) => {
    const target = entries[0].target;
    setProminentHeight(target.clientHeight - (parseFloat(window.getComputedStyle(target).paddingBottom) || 0));
  });

  useIntersectionObserver(
    ref,
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1] }
  );

  useIntersectionObserver(
    prominentRef,
    (entries) => {
      setTitleVisible(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `${prominentHeight - height}px 0px 0px` }
  );

  const ownerState = { ...props, isStuck };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <AppBarRoot ref={ref} className={clsx(className, classes.root)} sx={sx}>
        {startAdornment && <AppBarAdornment className={classes.adornment}>{startAdornment}</AppBarAdornment>}
        <AppBarTitle className={classes.title}>{!prominent || isTitleVisible ? children : '\u00A0'}</AppBarTitle>
        {endAdornment && <AppBarAdornment className={classes.adornment}>{endAdornment}</AppBarAdornment>}
      </AppBarRoot>
      {!!prominent && (
        <AppBarTitleProminent
          ref={prominentRef}
          aria-hidden
          className={classes.titleProminent}
          component="div"
          variant="h3"
        >
          {children}
        </AppBarTitleProminent>
      )}
    </>
  );
};
