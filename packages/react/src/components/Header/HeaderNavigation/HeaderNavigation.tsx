import { Children, isValidElement, useRef, useState } from 'react';

import { HeaderNavigationProps } from './HeaderNavigation.types';

import clsx from 'clsx';
import { getHeaderNavigationUtilityClass, headerNavigationClasses } from './HeaderNavigation.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Menu } from '@mui/material';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useMenu, useResizeObserver } from '../../../hooks';
import { IconChevronDownW200 } from '../../../icons';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';

type HeaderNavigationOwnerState = {
  classes?: HeaderNavigationProps['classes'];
};

const useUtilityClasses = (ownerState: HeaderNavigationOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
  };

  return composeClasses(slots, getHeaderNavigationUtilityClass, classes);
};

const HeaderNavigationRoot = styled('nav', {
  name: 'ESHeaderNavigation',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'flex',
  gap: '4px',
  position: 'relative',
  flexGrow: 1,

  [`.ESButton-root`]: {
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
});

const HeaderNavigationButton = styled(Button, {
  name: 'ESChips',
  slot: 'Button',
  overridesResolver: (_props, styles) => styles.button,
})({});

export const HeaderNavigation = (inProps: HeaderNavigationProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESHeaderNavigation' });

  const ref = useRef<HTMLDivElement | null>(null);
  const [anchorEl, onMenuClick, onMenuClose] = useMenu();

  const [lastIndex, setLastIndex] = useState(Children.count(children) - 1);

  const onResize = () => {
    if (typeof window !== 'undefined' && ref.current) {
      let width = 0;

      const nodes = ref.current.querySelectorAll(`& > *:not(.${headerNavigationClasses.button})`);
      const button = ref.current.querySelector(`.${headerNavigationClasses.button}`);

      const containerWidth = ref.current.getBoundingClientRect().width;
      const columnGap = parseInt(window.getComputedStyle(ref.current).columnGap);

      nodes.forEach((item) => {
        (item as HTMLElement).style.display = 'inline-flex';
        width += (item as HTMLElement).getBoundingClientRect().width + columnGap;
      });

      if (width > containerWidth) {
        width += (button as HTMLElement).getBoundingClientRect().width;
      }

      let i = nodes.length - 1;

      while (width > containerWidth && i > 0) {
        width -= (nodes[i] as HTMLElement).getBoundingClientRect().width;
        i--;
      }

      for (let j = i + 1; j < nodes.length; j++) {
        (nodes[j] as HTMLElement).style.display = 'none';
      }

      onMenuClose();
      setLastIndex(i);
    }
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  useResizeObserver(ref, onResize);

  useEnhancedEffect(() => {
    onResize();
  }, []);

  return (
    <>
      <HeaderNavigationRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
        {children}
        <HeaderNavigationButton
          className={classes.button}
          color="tertiary"
          endIcon={<IconChevronDownW200 />}
          size="300"
          style={{ display: lastIndex < Children.count(children) - 1 ? 'flex' : 'none' }}
          onClick={onMenuClick}
        >
          Еще
        </HeaderNavigationButton>
      </HeaderNavigationRoot>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onMenuClose}>
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }

          const { children, onClick, ...rest } = child.props;

          if (idx > lastIndex) {
            return (
              <MenuItem
                {...rest}
                size="100"
                onClick={(e: React.MouseEvent) => {
                  onClick?.(e);

                  if (!e.isPropagationStopped()) {
                    onMenuClose();
                  }
                }}
              >
                {children}
              </MenuItem>
            );
          }

          return null;
        })}
      </Menu>
    </>
  );
};
