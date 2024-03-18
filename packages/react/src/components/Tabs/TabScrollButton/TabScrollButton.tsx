import { forwardRef } from 'react';

import { TabScrollButtonProps } from './TabScrollButton.types';

import clsx from 'clsx';
import { getTabScrollButtonUtilityClass, tabScrollButtonClasses } from './TabScrollButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';
import { ButtonBase } from '../../ButtonBase';
import { Divider, dividerClasses } from '../../Divider';

type TabScrollButtonOwnerState = {
  classes?: TabScrollButtonProps['classes'];
  disabled?: TabScrollButtonProps['disabled'];
  direction: TabScrollButtonProps['direction'];
  tabListHeight?: TabScrollButtonProps['tabListHeight'];
  isRtl?: boolean;
};

const useUtilityClasses = (ownerState: TabScrollButtonOwnerState) => {
  const { classes, disabled, direction } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', `direction${capitalize(direction)}`],
    icon: ['icon'],
    gradient: ['gradient'],
    divider: ['divider'],
  };

  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};

const TabScrollButtonRoot = styled(ButtonBase, {
  name: 'ESTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.disabled && styles.disabled,
      styles[`direction${capitalize(ownerState.direction)}`],
    ];
  },
})<{ ownerState: TabScrollButtonOwnerState }>(({ theme }) => ({
  position: 'absolute',
  width: 40,
  height: 'var(--tab-list-height)',
  flexShrink: 0,
  zIndex: 2,
  overflow: 'visible',

  '--background': theme.vars.palette.monoB.main,
  '--hovered': theme.vars.palette.monoA.A50,
  '--pressed': theme.vars.palette.monoA.A150,
  '--focused': theme.vars.palette.monoA.A200,

  [`&.${tabScrollButtonClasses.disabled}`]: {
    opacity: 0,
  },

  [`&.${tabScrollButtonClasses.directionLeft}`]: {
    left: '-1px',

    [`& .${tabScrollButtonClasses.divider}.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
      left: '11.5px',
    },

    [`& .${tabScrollButtonClasses.gradient}`]: {
      background: `linear-gradient(90deg, ${theme.vars.palette.monoB.main} 0%, rgba(255, 255, 255, 0) 100%)`,
      left: '11px',
    },

    [`& .${tabScrollButtonClasses.icon}`]: {
      left: '5px',
    },
  },

  [`&.${tabScrollButtonClasses.directionRight}`]: {
    right: '0px',

    [`& .${tabScrollButtonClasses.divider}.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
      right: '11.5px',
    },

    [`& .${tabScrollButtonClasses.gradient}`]: {
      background: `linear-gradient(270deg, ${theme.vars.palette.monoB.main} 0%, rgba(255, 255, 255, 0) 100%)`,
      right: '11px',
    },

    [`& .${tabScrollButtonClasses.icon}`]: {
      right: '5px',
    },
  },
}));

const TabScrollButtonDivider = styled(Divider, {
  name: 'ESTabScrollButton',
  slot: 'Divider',
  overridesResolver: (props, styles) => [styles.divider],
})(() => ({
  [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
    position: 'relative',
    alignSelf: 'center',
    height: '75%',
  },
}));

const TabScrollButtonGradient = styled('div', {
  name: 'ESTabScrollButton',
  slot: 'Gradient',
  overridesResolver: (props, styles) => [styles.gradient],
})(() => ({
  position: 'relative',
  width: 8,
  height: '100%',
}));

const TabScrollButtonIcon = styled('span', {
  name: 'ESTabScrollButton',
  slot: 'Icon',
  overridesResolver: (props, styles) => [styles.icon],
})(() => ({
  display: 'inline-flex',
  position: 'relative',
}));

export const TabScrollButton = forwardRef<HTMLButtonElement, TabScrollButtonProps>(function TabScrollButton(
  inProps: TabScrollButtonProps,
  ref
) {
  const {
    className,
    direction,
    slots = {},
    tabListHeight,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTabScrollButton' });

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const ownerState = { isRtl, direction, tabListHeight, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TabScrollButtonRoot
      ref={ref}
      className={clsx(classes.root, className)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component="div"
      ownerState={ownerState}
      style={{ '--tab-list-height': `${tabListHeight}px` } as React.CSSProperties}
      {...props}
    >
      {direction === 'left' ? (
        <>
          <TabScrollButtonIcon className={classes.icon}>
            {slots.StartScrollButtonIcon ? (
              slots.StartScrollButtonIcon
            ) : (
              <IconChevronLeftW400 sx={{ color: theme.vars.palette.monoA.A600 }} />
            )}
          </TabScrollButtonIcon>
          <TabScrollButtonDivider flexItem className={classes.divider} orientation="vertical" />
          <TabScrollButtonGradient className={classes.gradient} />
        </>
      ) : (
        <>
          <TabScrollButtonGradient className={classes.gradient} />
          <TabScrollButtonDivider flexItem className={classes.divider} orientation="vertical" />
          <TabScrollButtonIcon className={classes.icon}>
            {slots.EndScrollButtonIcon ? (
              slots.EndScrollButtonIcon
            ) : (
              <IconChevronRightW400 sx={{ color: theme.vars.palette.monoA.A600 }} />
            )}
          </TabScrollButtonIcon>
        </>
      )}
    </TabScrollButtonRoot>
  );
});
