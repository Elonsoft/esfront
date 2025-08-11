import { MenuGroupProps } from './MenuGroup.types';

import clsx from 'clsx';
import { getMenuGroupUtilityClass } from './MenuGroup.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

type MenuGroupOwnerState = {
  classes?: MenuGroupProps['classes'];
  paddingBottom: NonNullable<MenuGroupProps['paddingBottom']>;
  sticky?: MenuGroupProps['sticky'];
};

const useUtilityClasses = (ownerState: MenuGroupOwnerState) => {
  const { classes, paddingBottom, sticky } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', `paddingBottom${capitalize(paddingBottom)}`],
  };

  return composeClasses(slots, getMenuGroupUtilityClass, classes);
};

const MenuGroupRoot = styled('div', {
  name: 'ESMenuGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { paddingBottom, sticky },
    } = props;

    return [styles.root, sticky && styles.sticky, styles[`paddingBottom${capitalize(paddingBottom)}`]];
  },
})<{ ownerState: MenuGroupOwnerState }>(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A600,
  display: 'flex',
  gap: '12px',
  justifyContent: 'space-between',

  variants: [
    {
      props: {
        paddingBottom: 's',
      },
      style: {
        padding: '8px 16px 0',
      },
    },
    {
      props: {
        paddingBottom: 'm',
      },
      style: {
        padding: '8px 16px 4px',
      },
    },
    {
      props: {
        paddingBottom: 'l',
      },
      style: {
        padding: '8px 16px',
      },
    },
    {
      props: {
        sticky: true,
      },
      style: {
        background: theme.vars.palette.surface[400],
        position: 'sticky',
        top: '-8px',
        zIndex: 2,
      },
    },
  ],
}));

export const MenuGroup = (inProps: MenuGroupProps) => {
  const {
    className,
    sx,
    paddingBottom = 'l',
    children,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenuGroup',
  });

  const ownerState = { paddingBottom, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <MenuGroupRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {children}
    </MenuGroupRoot>
  );
};
