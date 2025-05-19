import { TagProps } from './Tag.types';

import clsx from 'clsx';
import { getTagUtilityClass, tagClasses } from './Tag.classes';

import { capitalize, styled, Typography, typographyClasses, useThemeProps } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

import { ButtonBase } from '../ButtonBase';
import { touchRippleClasses } from '../TouchRipple';

type TagOwnerState = {
  color: NonNullable<TagProps['color']>;
  classes?: TagProps['classes'];
  variant?: TagProps['variant'];
  clickable?: TagProps['clickable'];
};

const useUtilityClasses = (ownerState: TagOwnerState) => {
  const { classes, clickable, color } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color)}`, clickable && 'clickable'],
    startIcon: ['icon', 'startIcon'],
    endIcon: ['icon', 'endIcon'],
  };

  return composeClasses(slots, getTagUtilityClass, classes);
};

const TagRoot = styled(ButtonBase, {
  name: 'ESTag',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { clickable, color },
    } = props;

    return [styles.root, clickable && 'clickable', styles[`color${capitalize(color)}`]];
  },
})(({ theme }) => ({
  width: 'fit-content',
  padding: '3px 4px',
  borderRadius: '4px',
  cursor: 'auto',

  [`& .${touchRippleClasses.root}`]: {
    display: 'none',
  },

  [`&.${tagClasses.clickable}`]: {
    cursor: 'pointer',
    pointerEvents: 'auto',

    [`&.${tagClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        display: 'block',
      },
    },
  },

  [`& .${typographyClasses.root}`]: {
    padding: '0 2px',
  },

  [`&.${tagClasses.colorTertiary}`]: {
    '--background': theme.vars.palette.monoA.A100,
    '--text': theme.vars.palette.monoA.A800,
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
  },
  [`&.${tagClasses.colorPrimary}`]: {
    '--background': theme.vars.palette.primary[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorSecondary}`]: {
    '--background': theme.vars.palette.secondary[300],
    '--text': theme.vars.palette.black[500],
    '--hovered': theme.vars.palette.black.A50,
    '--pressed': theme.vars.palette.black.A150,
  },
  [`&.${tagClasses.colorInfo}`]: {
    '--background': theme.vars.palette.info[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorWarning}`]: {
    '--background': theme.vars.palette.warning[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorError}`]: {
    '--background': theme.vars.palette.error[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorSuccess}`]: {
    '--background': theme.vars.palette.success[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorMonoA}`]: {
    '--background': theme.vars.palette.monoA[500],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoB.A50,
    '--pressed': theme.vars.palette.monoB.A150,
  },
  [`&.${tagClasses.colorMonoB}`]: {
    '--background': theme.vars.palette.monoB[500],
    '--text': theme.vars.palette.monoA[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
  },
  [`&.${tagClasses.colorWhite}`]: {
    '--background': theme.vars.palette.white[500],
    '--text': theme.vars.palette.black[500],
    '--hovered': theme.vars.palette.black.A50,
    '--pressed': theme.vars.palette.black.A150,
  },
  [`&.${tagClasses.colorBlack}`]: {
    '--background': theme.vars.palette.black[500],
    '--text': theme.vars.palette.white[500],
    '--hovered': theme.vars.palette.white.A50,
    '--pressed': theme.vars.palette.white.A150,
  },
})) as typeof ButtonBase;

const TagStartIcon = styled('span', {
  name: 'ESTag',
  slot: 'StartIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.startIcon],
})(() => ({
  display: 'inherit',
  marginRight: '2px',
  color: 'var(--icon)',
}));

const TagEndIcon = styled('span', {
  name: 'ESTag',
  slot: 'EndIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.endIcon],
})(() => ({
  display: 'inherit',
  marginLeft: '2px',
  color: 'var(--icon)',
}));

/**
 * The Tag component is used to categorize content.
 */
export const Tag = (inProps: TagProps) => {
  const {
    children,
    classes: inClasses,
    className,
    sx,
    clickable = false,
    color = 'primary',
    startIcon,
    endIcon,
    variant = 'overline',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTag',
  });

  const ownerState = { inClasses, variant, color, clickable, ...props };
  const classes = useUtilityClasses(ownerState);

  const component = clickable ? ButtonBase : 'div';

  return (
    <TagRoot className={clsx(classes.root, className)} component={component} sx={sx} {...props}>
      {!!startIcon && <TagStartIcon className={classes.startIcon}>{startIcon}</TagStartIcon>}
      <Typography component="span" variant={variant}>
        {children}
      </Typography>
      {!!endIcon && <TagEndIcon className={classes.endIcon}>{endIcon}</TagEndIcon>}
    </TagRoot>
  );
};
