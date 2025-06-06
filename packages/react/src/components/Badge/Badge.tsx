import { BadgeProps, BadgeTypeMap } from './Badge.types';

import clsx from 'clsx';
import { badgeClasses, getBadgeUtilityClass } from './Badge.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { capitalize, styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import composeClasses from '@mui/utils/composeClasses';

import { ButtonBase } from '../ButtonBase';
import { touchRippleClasses } from '../TouchRipple';

type BadgeOwnerState = {
  classes?: BadgeProps['classes'];
  color: NonNullable<BadgeProps['color']>;
  size: NonNullable<BadgeProps['size']>;
  clickable: BadgeProps['clickable'];
};

const useUtilityClasses = (ownerState: BadgeOwnerState) => {
  const { classes, color, size, clickable = false } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color)}`, `size${size}`, clickable && 'clickable'],
  };

  return composeClasses(slots, getBadgeUtilityClass, classes);
};

const BadgeRoot = styled(ButtonBase, {
  name: 'ESBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, size, clickable },
    } = props;

    return [styles.root, styles[`colors${capitalize(color)}`], styles[`size${size}`], clickable && 'clickable'];
  },
})(({ theme }) => ({
  ...theme.typography.mini200,
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  pointerEvents: 'none',
  fontFamily: 'inherit',

  [`&.${badgeClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      display: 'none',
    },
  },

  [`&.${badgeClasses.clickable}`]: {
    cursor: 'pointer',
    pointerEvents: 'auto',
    [`&.${badgeClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        display: 'block',
      },
    },
  },

  [`&.${badgeClasses.colorMonoA}`]: {
    '--background': theme.vars.palette.monoA.A100,
    '--text': theme.vars.palette.monoA.A600,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorMonoB}`]: {
    '--background': theme.vars.palette.monoB.A300,
    '--text': theme.vars.palette.monoB.A900,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorMonoB500}`]: {
    '--background': theme.vars.palette.monoB[500],
    '--text': theme.vars.palette.monoA.A700,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorPrimary}`]: {
    '--background': theme.vars.palette.primary[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorSecondary}`]: {
    '--background': theme.vars.palette.secondary[300],
    '--text': theme.vars.palette.monoA.A800,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorSuccess}`]: {
    '--background': theme.vars.palette.success[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorWarning}`]: {
    '--background': theme.vars.palette.warning[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorError}`]: {
    '--background': theme.vars.palette.error[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },
  [`&.${badgeClasses.colorInfo}`]: {
    '--background': theme.vars.palette.info[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,
  },

  [`&.${badgeClasses.size100}`]: {
    height: '6px',
    minWidth: '6px',
    padding: '3px',
    borderRadius: '3px',
    fontSize: 0,
  },

  [`&.${badgeClasses.size200}`]: {
    height: '8px',
    minWidth: '8px',
    padding: '3px',
    borderRadius: '4px',
    fontSize: 0,
  },

  [`&.${badgeClasses.size300}`]: {
    height: '12px',
    minWidth: '12px',
    padding: '3px',
    borderRadius: '6px',
    fontSize: 0,
  },

  [`&.${badgeClasses.size400}`]: {
    height: '14px',
    minWidth: '14px',
    padding: '3px',
    borderRadius: '7px',
    ...theme.typography.mini100Bold,
  },

  [`&.${badgeClasses.size500}`]: {
    height: '16px',
    minWidth: '16px',
    padding: '4px',
    borderRadius: '8px',
  },

  [`&.${badgeClasses.size600}`]: {
    height: '20px',
    minWidth: '20px',
    padding: '4px',
    borderRadius: '10px',
  },

  [`&.${badgeClasses.size700}`]: {
    height: '24px',
    minWidth: '24px',
    padding: '4px',
    borderRadius: '12px',
  },
})) as typeof ButtonBase;

export const Badge: OverridableComponent<BadgeTypeMap> = (inProps: BadgeProps) => {
  const {
    className,
    classes: inClasses,
    color = 'monoA',
    size = '700',
    clickable = false,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESBadge',
  });

  const component = clickable ? ButtonBase : 'div';

  const ownerState = {
    classes: inClasses,
    color,
    size,
    clickable,
  };

  const classes = useUtilityClasses(ownerState);

  return <BadgeRoot className={clsx(classes.root, className)} component={component} {...props} />;
};
