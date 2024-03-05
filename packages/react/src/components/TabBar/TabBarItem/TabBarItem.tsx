import { TabBarItemProps, TabBarItemTypeMap } from './TabBarItem.types';

import clsx from 'clsx';
import { getTabBarItemUtilityClass, tabBarItemClasses } from './TabBarItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { Button, buttonClasses } from '../../Button';
import { buttonBaseClasses } from '../../ButtonBase';

type TabBarItemOwnerState = {
  classes?: TabBarItemProps['classes'];
  selected?: TabBarItemProps['selected'];
};

const useUtilityClasses = (ownerState: TabBarItemOwnerState) => {
  const { classes, selected } = ownerState;

  const slots = {
    root: ['root', selected && 'selected'],
    icon: ['icon'],
    label: ['label']
  };

  return composeClasses(slots, getTabBarItemUtilityClass, classes);
};

const TabBarItemRoot = styled(Button, {
  name: 'ESTabBarItem',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(({ theme }) => ({
  '--icon': theme.vars.palette.monoA.A500,

  [`&.${buttonClasses.root}`]: {
    borderRadius: 0,
    flex: 1,
    height: '100%'
  },

  [`& .${buttonBaseClasses.wrapper}`]: {
    flexDirection: 'column'
  },

  [`&.${tabBarItemClasses.selected}`]: {
    '--icon': theme.vars.palette.monoA.A900,

    [`& .${tabBarItemClasses.label}`]: {
      color: theme.vars.palette.monoA.A800
    }
  }
}));

const TabBarItemIcon = styled('span', {
  name: 'ESTabBarItem',
  slot: 'Icon',
  overridesResolver: (_props, styles) => styles.icon
})(() => ({
  display: 'flex'
}));

const TabBarItemLabel = styled('span', {
  name: 'ESTabBarItem',
  slot: 'Label',
  overridesResolver: (_props, styles) => styles.label
})(({ theme }) => ({
  ...theme.typography.micro,
  textTransform: 'none',
  color: theme.vars.palette.monoA.A700
}));

export const TabBarItem: OverridableComponent<TabBarItemTypeMap> = (inProps: TabBarItemProps) => {
  const {
    className,
    classes: inClasses,
    sx,
    icon,
    label,
    selected,
    // eslint-disable-next-line
    color,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTabBarItem'
  });

  const ownerState = { classes: inClasses, selected };
  const classes = useUtilityClasses(ownerState);

  return (
    <TabBarItemRoot className={clsx(classes.root, className)} color="tertiary" sx={sx} {...props}>
      {!!icon && <TabBarItemIcon className={classes.icon}>{icon}</TabBarItemIcon>}
      {!!label && <TabBarItemLabel className={classes.label}>{label}</TabBarItemLabel>}
    </TabBarItemRoot>
  );
};
